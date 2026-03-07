import express from 'express';
import Magazine from '../models/Magazine.js';

const router = express.Router();

// GET /api/sitemap.xml - Gerar sitemap dinâmico
router.get('/sitemap.xml', async (req, res) => {
  try {
    const magazines = await Magazine.find().sort({ uploadDate: -1 });
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
    <loc>${baseUrl}/#/submissoes</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${baseUrl}/#/conselho-editorial</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>${baseUrl}/#/dados-revista</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>${baseUrl}/#/contacto</loc>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  
  <!-- Artigos Individuais -->
${magazines.map(mag => `  <url>
    <loc>${baseUrl}/#/artigo/${mag._id}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
    <lastmod>${new Date(mag.uploadDate).toISOString().split('T')[0]}</lastmod>
  </url>`).join('\n')}
</urlset>`;

    res.header('Content-Type', 'application/xml');
    res.send(sitemap);
  } catch (error) {
    console.error('Erro ao gerar sitemap:', error);
    res.status(500).send('Erro ao gerar sitemap');
  }
});

// GET /api/robots.txt - Gerar robots.txt
router.get('/robots.txt', (req, res) => {
  const baseUrl = 'https://revistafrica.com';
  const robotsTxt = `User-agent: *
Allow: /
Allow: /#/artigo/
Allow: /#/submissoes
Allow: /#/conselho-editorial
Allow: /#/dados-revista
Allow: /#/contacto
Disallow: /#/admin
Disallow: /#/login

Sitemap: ${baseUrl}/api/sitemap.xml
`;

  res.header('Content-Type', 'text/plain');
  res.send(robotsTxt);
});

export default router;
