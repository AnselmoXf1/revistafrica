/**
 * URLs dos PDFs no Cloudinary
 * 
 * IMPORTANTE: Atualize estes URLs com os links reais dos PDFs no Cloudinary
 * Formato: https://res.cloudinary.com/[cloud_name]/image/upload/v[version]/[public_id]
 */

export const PDF_URLS = {
  // Manual de Microbiologia Geral
  'microbiologia-geral-manual': 'https://res.cloudinary.com/revistafrica/image/upload/v1/artigos/manual-microbiologia-geral.pdf',
  
  // Manual de Criação e Maneio de Aves Poedeiras
  'criacao-maneio-aves-poedeiras': 'https://res.cloudinary.com/revistafrica/image/upload/v1/artigos/manual-criacao-aves-poedeiras.pdf',
  
  // Manual de Cultivo de Pimenta
  'manual-cultivo-pimenta-maneio': 'https://res.cloudinary.com/revistafrica/image/upload/v1/artigos/manual-cultivo-pimenta.pdf',
  
  // Manual de Suinocultura
  'maneio-suinocultura-elementos-principais-criacao': 'https://res.cloudinary.com/revistafrica/image/upload/v1/artigos/manual-suinocultura.pdf',
  
  // Outros artigos importantes (adicione mais conforme necessário)
  'historia-geral-da-africa': 'https://res.cloudinary.com/revistafrica/image/upload/v1/artigos/historia-geral-africa.pdf',
  'o-poder-do-habito': 'https://res.cloudinary.com/revistafrica/image/upload/v1/artigos/o-poder-do-habito.pdf',
  'pensa-e-enriquece-dominando-mentalidade-riqueza-sucesso': 'https://res.cloudinary.com/revistafrica/image/upload/v1/artigos/pensa-e-enriquece.pdf',
  'a-arte-da-guerra': 'https://res.cloudinary.com/revistafrica/image/upload/v1/artigos/a-arte-da-guerra.pdf',
  'apologia-de-socrates': 'https://res.cloudinary.com/revistafrica/image/upload/v1/artigos/apologia-de-socrates.pdf',
  
  // Placeholder para outros artigos (atualize com URLs reais)
  'impacto-digitalizacao-pagamento-contribuicoes-inss-mocambique': '#',
  'morfologia-vegetal-fruto': '#',
  'delineamento-experimental-dbcc': '#',
  'delineamento-experimental-dcc': '#',
  'funcionamento-conselhos-escola-ensino-primario-barue': '#',
  'introducao-a-fruticultura': '#',
  'caracterizacao-farmacognostica-raiz-euclea-natalensis-mulala': '#',
  'papel-cooperacao-internacional-reducao-desigualdades-acesso-educacao-mocambique': '#',
  'maneio-integrado-producao-suinos': '#',
  'contribuicao-sector-informal-desenvolvimento-economico-regional-mocambique': '#',
  'analise-impacto-microfinancas-desenvolvimento-economico-comunidades-rurais-mocambique': '#',
  'in-validacao-piramide-responsabilidade-social-carroll': '#',
  'impacto-capacitacao-comunitaria-empreendimento-local-tete': '#',
  'accountability-vector-promocao-transparencia-boa-governacao-sector-publico-mocambicano': '#',
  'planeamento-estudo-matematica-financeira': '#',
  'entradas-empresas-mercado-internacional': '#',
  'papel-empresas-financiamento-projectos-agropecuarios-desenvolvimento-rural': '#',
  'papel-pequenas-medias-empresas-geracao-emprego-tete': '#',
  'conflitos-ocupacao-informal-solo-lei-terras-mocambique': '#',
  'barreiras-negocios-internacionais': '#',
  'administracao-publica-comparada-mocambique-africa-sul': '#',
  'educar-homem-vencer-guerra-criar-sociedade-nova': '#',
  'quase-1000-problemas-resolvidos-fisica-classica': '#',
  'calculos-estequiometricos-estudo-aprendizagem-quimica': '#',
  'moringa-miracle-plant-agro-forestry': '#',
  'impacto-marketing-interno-motivacao-retencao-colaboradores': '#',
  'impactos-socioambientais-ocupacao-desordenada-espaco-urbano': '#',
  'estrutura-organizacional-desempenho-funcionarios-vodacom-chimoio': '#',
  'fluxo-caixa-instrumento-tomada-decisao-empresa-mega-fresh': '#',
  'analise-produtividade-empresas-custos-producao': '#'
};

/**
 * Função para obter URL do PDF pelo ID do artigo
 */
export function getPdfUrl(articleId: string): string {
  return PDF_URLS[articleId as keyof typeof PDF_URLS] || '#';
}

/**
 * Função para verificar se um artigo tem URL de PDF válido
 */
export function hasValidPdfUrl(articleId: string): boolean {
  const url = getPdfUrl(articleId);
  return url !== '#' && url.startsWith('https://');
}