export default async function handler(req, res) {
  try {
    let magazines = [];
    
    // Tentar buscar artigos da API com múltiplas tentativas
    const apiUrls = [
      'https://api.revistafrica.onrender.com/api/magazines',
      'http://api.revistafrica.onrender.com/api/magazines'
    ];
    
    for (const apiUrl of apiUrls) {
      try {
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 5000); // 5 segundos timeout
        
        const response = await fetch(apiUrl, {
          signal: controller.signal,
          headers: {
            'Accept': 'application/json'
          }
        });
        
        clearTimeout(timeout);
        
        if (response.ok) {
          magazines = await response.json();
          console.log(`✅ Artigos carregados de ${apiUrl}: ${magazines.length} artigos`);
          break; // Sucesso, sair do loop
        }
      } catch (fetchError) {
        console.warn(`⚠️ Falha ao buscar de ${apiUrl}:`, fetchError.message);
        // Continuar para próxima URL
      }
    }
    
    const baseUrl = 'https://revistafrica.com';
    const today = new Date().toISOString().split('T')[0];
    
    // Construir sitemap com páginas estáticas + artigos
    let sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Página Principal -->
  <url>
    <loc>${baseUrl}/</loc>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
    <lastmod>${today}</lastmod>
  </url>
  
  <!-- Páginas Estáticas -->
  <url>
    <loc>${baseUrl}/submissoes</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
    <lastmod>${today}</lastmod>
  </url>
  <url>
    <loc>${baseUrl}/conselho-editorial</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
    <lastmod>${today}</lastmod>
  </url>
  <url>
    <loc>${baseUrl}/dados-revista</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
    <lastmod>${today}</lastmod>
  </url>
  <url>
    <loc>${baseUrl}/contacto</loc>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
    <lastmod>${today}</lastmod>
  </url>`;
    
    // Adicionar artigos se disponíveis
    if (magazines && magazines.length > 0) {
      console.log(`📄 Adicionando ${magazines.length} artigos ao sitemap`);
      const articlesXml = magazines.map(mag => {
        const lastmod = mag.uploadDate ? new Date(mag.uploadDate).toISOString().split('T')[0] : today;
        return `  <url>
    <loc>${baseUrl}/artigo/${mag._id}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
    <lastmod>${lastmod}</lastmod>
  </url>`;
      }).join('\n');
      
      sitemapContent += '\n  <!-- Artigos Individuais -->\n' + articlesXml;
    } else {
      console.warn('⚠️ Nenhum artigo encontrado na API');
    }
    
    sitemapContent += '\n</urlset>';
    
    res.setHeader('Content-Type', 'application/xml; charset=utf-8');
    res.setHeader('Cache-Control', 'public, max-age=3600');
    res.status(200).send(sitemapContent);
  } catch (error) {
    console.error('❌ Erro ao gerar sitemap:', error);
    
    // Retornar sitemap com apenas páginas estáticas em caso de erro
    const baseUrl = 'https://revistafrica.com';
    const today = new Date().toISOString().split('T')[0];
    
    const fallbackSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>${today}</lastmod>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${baseUrl}/submissoes</loc>
    <lastmod>${today}</lastmod>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${baseUrl}/conselho-editorial</loc>
    <lastmod>${today}</lastmod>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>${baseUrl}/dados-revista</loc>
    <lastmod>${today}</lastmod>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>${baseUrl}/contacto</loc>
    <lastmod>${today}</lastmod>
    <priority>0.6</priority>
  </url>
</urlset>`;
    
    res.setHeader('Content-Type', 'application/xml; charset=utf-8');
    res.setHeader('Cache-Control', 'public, max-age=3600');
    res.status(200).send(fallbackSitemap);
  }
}
