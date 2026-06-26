export default async function handler(req, res) {
  try {
    // Lista de artigos (pode ser substituída por API quando funcionar)
    const articles = [
      // Adicione seus artigos aqui manualmente
      // Exemplo:
      // { id: "123", title: "Título do Artigo", date: "2026-03-08" }
    ];
    
    // Tentar buscar artigos da API
    let apiArticles = [];
    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 5000);
      
      // Tentar HTTP primeiro (menos problemas com SSL)
      const response = await fetch('http://api.revistafrica.onrender.com/api/magazines', {
        signal: controller.signal,
        headers: { 'Accept': 'application/json' }
      });
      
      clearTimeout(timeout);
      
      if (response.ok) {
        apiArticles = await response.json();
        console.log(`✅ ${apiArticles.length} artigos carregados da API`);
      }
    } catch (apiError) {
      console.warn('⚠️ API não disponível, usando lista estática:', apiError.message);
    }
    
    // Usar artigos da API ou lista estática
    const magazines = apiArticles.length > 0 ? apiArticles : articles;
    
    const baseUrl = 'https://revistafrica.com';
    const today = new Date().toISOString().split('T')[0];
    
    // Construir sitemap
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
        const articleId = mag._id || mag.id || mag.slug;
        const lastmod = mag.uploadDate || mag.date || today;
        const formattedDate = new Date(lastmod).toISOString().split('T')[0];
        
        return `  <url>
    <loc>${baseUrl}/artigo/${articleId}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
    <lastmod>${formattedDate}</lastmod>
  </url>`;
      }).join('\n');
      
      sitemapContent += '\n  <!-- Artigos Individuais -->\n' + articlesXml;
    } else {
      console.log('ℹ️ Nenhum artigo disponível para adicionar ao sitemap');
    }
    
    sitemapContent += '\n</urlset>';
    
    res.setHeader('Content-Type', 'application/xml; charset=utf-8');
    res.setHeader('Cache-Control', 'public, max-age=3600');
    res.status(200).send(sitemapContent);
    
  } catch (error) {
    console.error('❌ Erro ao gerar sitemap:', error);
    
    // Fallback: sitemap com apenas páginas estáticas
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