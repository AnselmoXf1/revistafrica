/**
 * Configuração Global do Site
 * 
 * Centralize todas as URLs e configurações do site aqui
 * para facilitar mudanças futuras
 */

export const SITE_CONFIG = {
  // URLs principais
  PRODUCTION_URL: 'https://revistafrica.com',
  STAGING_URL: 'https://revistafrica.vercel.app',
  
  // Domínios alternativos (para CORS e redirects)
  ALLOWED_DOMAINS: [
    'https://revistafrica.com',
    'https://www.revistafrica.com',
    'https://revistafrica.vercel.app',
    'https://www.revistafrica.vercel.app'
  ],
  
  // Informações da revista
  SITE_NAME: 'RevistaAfrica',
  SITE_TITLE: 'RevistaAfrica - Conhecimento Africano que Inspira o Mundo',
  SITE_DESCRIPTION: 'RevistaAfrica é uma revista acadêmica dedicada à valorização do conhecimento, pesquisa e reflexão crítica sobre temas contemporâneos que impactam África e a sociedade global.',
  
  // Metadados acadêmicos
  JOURNAL_NAME: 'RevistaAfrica',
  PUBLISHER: 'Revista