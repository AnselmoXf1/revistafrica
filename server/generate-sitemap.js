import mongoose from 'mongoose';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Carregar variáveis de ambiente
dotenv.config({ path: path.join(__dirname, '.env') });

// Schema do Magazine
const magazineSchema = new mongoose.Schema({
  title: String,
  pdfUrl: String,
  uploadDate: Date,
  category: String
});

const Magazine = mongoose.model('Magazine', magazineSchema);

async function generateSitemap() {
  try {
    // Conectar ao MongoDB
    console.log('🔌 Conectando ao MongoDB...');
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Conectado ao MongoDB');

    // Buscar todas as revistas
    const magazines = await Magazine.find()
      .select('_id title pdfUrl uploadDate category')
      .sort({ uploadDate: -1 });

    console.log(`📚 Encontradas ${magazines.length} revistas`);

    const baseUrl = 'https://revistafrica.com';
    const today = new Date().toISOString().split('T')[0];

    // Gerar XML do sitemap
    let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <!-- Página Principal -->
  <url>
    <loc>${baseUrl}/</loc>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
    <lastmod>${today}</lastmod>
  </url>
  
  <!-- Página de Artigos -->
  <url>
    <loc>${baseUrl}/artigos</loc>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
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
  
  <!-- Artigos/Livros da Plataforma (${magazines.length} artigos) -->
`;

    // Adicionar cada revista
    magazines.forEach((mag, index) => {
      const lastmod = mag.uploadDate ? new Date(mag.uploadDate).toISOString().split('T')[0] : today;
      sitemap += `  
  <!-- ${index + 1}. ${mag.title} -->
  <url>
    <loc>${baseUrl}/artigo/${mag._id}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
    <lastmod>${lastmod}</lastmod>
  </url>
`;
    });

    sitemap += `</urlset>`;

    // Salvar o sitemap
    const sitemapPath = path.join(__dirname, '../public/sitemap.xml');
    fs.writeFileSync(sitemapPath, sitemap, 'utf8');
    
    console.log(`✅ Sitemap gerado com sucesso em: ${sitemapPath}`);
    console.log(`📊 Total de URLs: ${magazines.length + 6} (6 páginas estáticas + ${magazines.length} artigos)`);

    // Gerar lista HTML de artigos
    let htmlList = `<!DOCTYPE html>
<html lang="pt">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Lista de Artigos - RevistaAfrica</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px;
      background: #f5f5f5;
    }
    h1 {
      color: #166534;
      border-bottom: 3px solid #166534;
      padding-bottom: 10px;
    }
    .stats {
      background: white;
      padding: 15px;
      border-radius: 8px;
      margin-bottom: 20px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    .article {
      background: white;
      padding: 15px;
      margin-bottom: 10px;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      transition: transform 0.2s;
    }
    .article:hover {
      transform: translateX(5px);
      box-shadow: 0 4px 8px rgba(0,0,0,0.15);
    }
    .article-number {
      color: #166534;
      font-weight: bold;
      margin-right: 10px;
    }
    .article-title {
      color: #1f2937;
      font-size: 16px;
      margin-bottom: 8px;
    }
    .article-link {
      color: #2563eb;
      text-decoration: none;
      font-size: 14px;
      word-break: break-all;
    }
    .article-link:hover {
      text-decoration: underline;
    }
    .category {
      display: inline-block;
      background: #dcfce7;
      color: #166534;
      padding: 4px 12px;
      border-radius: 12px;
      font-size: 12px;
      margin-top: 8px;
    }
    .date {
      color: #6b7280;
      font-size: 13px;
      margin-top: 5px;
    }
  </style>
</head>
<body>
  <h1>📚 Lista de Artigos - RevistaAfrica</h1>
  
  <div class="stats">
    <strong>Total de artigos:</strong> ${magazines.length}<br>
    <strong>Última atualização:</strong> ${today}
  </div>
`;

    magazines.forEach((mag, index) => {
      const articleUrl = `${baseUrl}/artigo/${mag._id}`;
      const lastmod = mag.uploadDate ? new Date(mag.uploadDate).toLocaleDateString('pt-BR') : today;
      
      htmlList += `
  <div class="article">
    <div class="article-number">${index + 1}.</div>
    <div class="article-title">${mag.title}</div>
    <a href="${articleUrl}" class="article-link" target="_blank">${articleUrl}</a>
    <div class="date">📅 ${lastmod}</div>
    <span class="category">${mag.category}</span>
  </div>`;
    });

    htmlList += `
</body>
</html>`;

    // Salvar lista HTML
    const htmlPath = path.join(__dirname, '../public/artigos-lista.html');
    fs.writeFileSync(htmlPath, htmlList, 'utf8');
    console.log(`✅ Lista HTML gerada em: ${htmlPath}`);
    console.log(`🌐 Acesse em: ${baseUrl}/artigos-lista.html`);

    // Desconectar
    await mongoose.disconnect();
    console.log('👋 Desconectado do MongoDB');

  } catch (error) {
    console.error('❌ Erro ao gerar sitemap:', error);
    process.exit(1);
  }
}

generateSitemap();
