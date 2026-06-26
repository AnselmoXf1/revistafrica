import express from 'express';
import Magazine from '../models/Magazine.js';

const router = express.Router();

// GET /api/sitemap.xml - Gerar sitemap dinâmico
router.get('/sitemap.xml', async (req, res) => {
  try {
    // Buscar TODAS as revistas do banco de dados
    const magazines = await Magazine.find()
      .select('_id title uploadDate category')
      .sort({ uploadDate: -1 });
    
    const baseUrl = 'https://revistafrica.com';
    
    console.log(`📊 Sitemap gerado com ${magazines.length} revistas do banco de dados`);
    
    // Dados dos artigos/livros (35 artigos do ArtigoIndividual.tsx)
    const artigos = [
      // Educação (12 artigos)
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
      
      // Economia (9 artigos)
      'contribuicao-sector-informal-desenvolvimento-economico-regional-mocambique',
      'analise-impacto-microfinancas-desenvolvimento-economico-comunidades-rurais-mocambique',
      'in-validacao-piramide-responsabilidade-social-carroll',
      'impacto-capacitacao-comunitaria-empreendimento-local-tete',
      'accountability-vector-promocao-transparencia-boa-governacao-sector-publico-mocambicano',
      'planeamento-estudo-matematica-financeira',
      'entradas-empresas-mercado-internacional',
      'papel-empresas-financiamento-projectos-agropecuarios-desenvolvimento-rural',
      'papel-pequenas-medias-empresas-geracao-emprego-tete',
      
      // Política / Governação (3 artigos)
      'conflitos-ocupacao-informal-solo-lei-terras-mocambique',
      'barreiras-negocios-internacionais',
      'administracao-publica-comparada-mocambique-africa-sul',
      
      // Cultura / História / Ciências Sociais (3 artigos)
      'educar-homem-vencer-guerra-criar-sociedade-nova',
      'apologia-de-socrates',
      'a-arte-da-guerra',
      
      // Outros / Técnicos (8 artigos)
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
  
  <!-- Artigos/Livros Individuais -->
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
    res.header('Cache-Control', 'public, max-age=3600'); // Cache de 1 hora
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
Allow: /artigos
Allow: /artigo/
Allow: /submissoes
Allow: /conselho-editorial
Allow: /dados-revista
Allow: /contacto
Disallow: /admin
Disallow: /login

Sitemap: ${baseUrl}/api/sitemap.xml
`;

  res.header('Content-Type', 'text/plain');
  res.send(robotsTxt);
});

export default router;
