import mongoose from 'mongoose';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Carregar variáveis de ambiente
dotenv.config({ path: path.join(__dirname, '../server/.env') });

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

    function createSlug(text) {
      if (!text) return '';
      return text.toString().normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim().replace(/[^a-z0-9 ]/g, '').replace(/\s+/g, '-');
    }

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
      const slug = createSlug(mag.title);
      sitemap += `  
  <!-- ${index + 1}. ${mag.title} -->
  <url>
    <loc>${baseUrl}/artigo/${slug}-${mag._id}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
    <lastmod>${lastmod}</lastmod>
  </url>
  <!-- PDF: ${mag.pdfUrl} -->
`;
    });

    sitemap += `</urlset>`;

    // Salvar o sitemap
    const sitemapPath = path.join(__dirname, '../public/sitemap.xml');
    fs.writeFileSync(sitemapPath, sitemap, 'utf8');
    
    console.log(`✅ Sitemap gerado com sucesso em: ${sitemapPath}`);
    console.log(`📊 Total de URLs: ${magazines.length + 6} (6 páginas estáticas + ${magazines.length} artigos)`);

    // Desconectar
    await mongoose.disconnect();
    console.log('👋 Desconectado do MongoDB');

  } catch (error) {
    console.error('❌ Erro ao gerar sitemap:', error);
    process.exit(1);
  }
}

generateSitemap();
