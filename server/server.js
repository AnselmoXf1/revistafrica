import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import path from 'path';
import { fileURLToPath } from 'url';
import magazineRoutes from './routes/magazines.js';
import authRoutes from './routes/auth.js';
import sitemapRoutes from './routes/sitemap.js';
import { spaMiddleware } from './middleware/spa.js';
import Magazine from './models/Magazine.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
const corsOptions = {
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://revistafrica.vercel.app', 'https://www.revistafrica.vercel.app', 'https://revistafrica.com', 'https://www.revistafrica.com']
    : '*',
  credentials: true,
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('✅ MongoDB conectado com sucesso'))
  .catch((err) => console.error('❌ Erro ao conectar MongoDB:', err));

// Rotas especiais na raiz (ANTES das outras rotas)
// Sitemap na raiz: revistafrica.com/sitemap.xml
app.get('/sitemap.xml', async (req, res) => {
  try {
    const magazines = await Magazine.find()
      .select('_id title uploadDate category')
      .sort({ uploadDate: -1 });
    
    const baseUrl = 'https://revistafrica.com';
    
    console.log(`📊 Sitemap gerado com ${magazines.length} revistas do banco de dados`);
    
    // Dados dos artigos/livros (35 artigos do ArtigoIndividual.tsx)
    const artigos = [
      'impacto-digitalizacao-pagamento-contribuicoes-inss-mocambique',
      'morfologia-vegetal-fruto',
      'delineamento-experimental-dbcc',
      'delineamento-experimental-dcc',
      'funcionamento-conselhos-escola-ensino-primario-barue',
      'historia-geral-da-africa',
      'o-poder-do-habito',
      'pensa-e-enriquece-dominando-mentalidade-riqueza-sucesso',
      'introducao-a-fruticultura',
      'microbiologia-geral-manual',
      'caracterizacao-farmacognostica-raiz-euclea-natalensis-mulala',
      'papel-cooperacao-internacional-reducao-desigualdades-acesso-educacao-mocambique',
      'maneio-integrado-producao-suinos',
      'contribuicao-sector-informal-desenvolvimento-economico-regional-mocambique',
      'analise-impacto-microfinancas-desenvolvimento-economico-comunidades-rurais-mocambique',
      'in-validacao-piramide-responsabilidade-social-carroll',
      'impacto-capacitacao-comunitaria-empreendimento-local-tete',
      'accountability-vector-promocao-transparencia-boa-governacao-sector-publico-mocambicano',
      'planeamento-estudo-matematica-financeira',
      'entradas-empresas-mercado-internacional',
      'papel-empresas-financiamento-projectos-agropecuarios-desenvolvimento-rural',
      'papel-pequenas-medias-empresas-geracao-emprego-tete',
      'conflitos-ocupacao-informal-solo-lei-terras-mocambique',
      'barreiras-negocios-internacionais',
      'administracao-publica-comparada-mocambique-africa-sul',
      'educar-homem-vencer-guerra-criar-sociedade-nova',
      'apologia-de-socrates',
      'a-arte-da-guerra',
      'quase-1000-problemas-resolvidos-fisica-classica',
      'calculos-estequiometricos-estudo-aprendizagem-quimica',
      'moringa-miracle-plant-agro-forestry',
      'impacto-marketing-interno-motivacao-retencao-colaboradores',
      'impactos-socioambientais-ocupacao-desordenada-espaco-urbano',
      'estrutura-organizacional-desempenho-funcionarios-vodacom-chimoio',
      'fluxo-caixa-instrumento-tomada-decisao-empresa-mega-fresh',
      'analise-produtividade-empresas-custos-producao',
      'criacao-maneio-aves-poedeiras',
      'manual-cultivo-pimenta-maneio',
      'maneio-suinocultura-elementos-principais-criacao'
    ];
    
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
  
  <!-- Artigos/Livros Estáticos (${artigos.length} artigos) -->
${artigos.map(artigo => `  <url>
    <loc>${baseUrl}/artigo/${artigo}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
  </url>`).join('\n')}
  
  <!-- Revistas da Plataforma (${magazines.length} revistas) -->
${magazines.map(mag => `  <url>
    <loc>${baseUrl}/artigo/${mag._id}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.85</priority>
    <lastmod>${new Date(mag.uploadDate).toISOString().split('T')[0]}</lastmod>
  </url>`).join('\n')}
</urlset>`;

    res.header('Content-Type', 'application/xml');
    res.header('Cache-Control', 'public, max-age=3600');
    res.send(sitemap);
  } catch (error) {
    console.error('❌ Erro ao gerar sitemap:', error);
    res.status(500).send('Erro ao gerar sitemap');
  }
});

// Robots.txt na raiz: revistafrica.com/robots.txt
app.get('/robots.txt', (req, res) => {
  const baseUrl = 'https://revistafrica.com';
  const robotsTxt = `User-agent: *
Allow: /
Allow: /artigos
Allow: /artigo/
Allow: /submissoes
Allow: /conselho-editorial
Allow: /dados-revista
Allow: /contacto
Disallow: /admin
Disallow: /login

Sitemap: ${baseUrl}/sitemap.xml
`;

  res.header('Content-Type', 'text/plain');
  res.send(robotsTxt);
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/magazines', magazineRoutes);
app.use('/api', sitemapRoutes);

// Health check
app.get('/', (req, res) => {
  res.json({ 
    status: 'ok', 
    message: 'Revista África API',
    version: '1.0.0',
    endpoints: {
      auth: '/api/auth',
      magazines: '/api/magazines',
      health: '/api/health'
    }
  });
});

app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    message: 'Servidor rodando',
    mongodb: mongoose.connection.readyState === 1 ? 'conectado' : 'desconectado'
  });
});

// Servir arquivos estáticos em produção
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../dist')));
  // Middleware SPA para produção
  app.use(spaMiddleware);
}

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
  console.log(`📍 Ambiente: ${process.env.NODE_ENV || 'development'}`);
  console.log(`🌐 CORS configurado para: ${process.env.FRONTEND_URL || 'todos'}`);
  console.log(`📁 Diretório estático: ${process.env.NODE_ENV === 'production' ? path.join(__dirname, '../dist') : 'desenvolvimento'}`);
});
