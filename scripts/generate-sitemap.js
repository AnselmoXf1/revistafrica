import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Este script pode ser executado manualmente ou como parte do build
// Para gerar um sitemap estático básico

const baseUrl = 'https://revistafrica.com';

const staticPages = [
  { url: '/', changefreq: 'daily', priority: '1.0' },
  { url: '/#/submissoes', changefreq: 'monthly', priority: '0.8' },
  { url: '/#/conselho-editorial', changefreq: 'monthly', priority: '0.7' },
  { url: '/#/dados-revista', changefreq: 'monthly', priority: '0.7' },
  { url: '/#/contacto', changefreq: 'monthly', priority: '0.6' },
];

const generateSitemap = () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticPages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
  </url>`).join('\n')}
  
  <!-- Artigos dinâmicos serão adicionados via /api/sitemap.xml -->
  <!-- Para indexação completa, use: https://revistafrica.com/api/sitemap.xml -->
</urlset>`;

  const publicDir = path.join(__dirname, '..', 'public');
  const sitemapPath = path.join(publicDir, 'sitemap-static.xml');
  
  fs.writeFileSync(sitemapPath, sitemap);
  console.log('✅ Sitemap estático gerado em:', sitemapPath);
};

generateSitemap();
