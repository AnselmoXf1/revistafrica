// Este arquivo é um helper para gerar o sitemap
// Será usado pela API para criar o sitemap.xml

export async function generateSitemap() {
  try {
    const response = await fetch('https://api.revistafrica.onrender.com/api/magazines');
    const magazines = await response.json();
    
    const baseUrl = 'https://revistafrica.com';
    
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <!-- Página Principal -->
  <url>
    <loc>${baseUrl}/</loc>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
  </url>
  
  <!-- Páginas Estáticas -->
  <url>
    <loc>${baseUrl}/submissoes</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${baseUrl}/conselho-editorial</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>${baseUrl}/dados-revista</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>${baseUrl}/contacto</loc>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  
  <!-- Artigos Individuais -->
${magazines.map(mag => `  <url>
    <loc>${baseUrl}/artigo/${mag._id}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
    <lastmod>${new Date(mag.uploadDate).toISOString().split('T')[0]}</lastmod>
  </url>`).join('\n')}
</urlset>`;

    return sitemap;
  } catch (error) {
    console.error('Erro ao gerar sitemap:', error);
    return null;
  }
}
