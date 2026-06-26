/**
 * Script de Teste para Verificação de SEO e Meta Tags
 * 
 * Execute: node scripts/test-seo.js
 */

import fetch from 'node-fetch';

const BASE_URL = process.env.VITE_API_URL || 'http://localhost:5000/api';
const FRONTEND_URL = 'https://revistafrica.vercel.app';

console.log('🔍 Iniciando testes de SEO e indexação...\n');

// Teste 1: Verificar se o sitemap está acessível
async function testSitemap() {
  console.log('📄 Teste 1: Verificando sitemap...');
  try {
    const response = await fetch(`${BASE_URL}/sitemap.xml`);
    if (response.ok) {
      const text = await response.text();
      const urlCount = (text.match(/<url>/g) || []).length;
      console.log(`✅ Sitemap acessível com ${urlCount} URLs\n`);
      return true;
    } else {
      console.log(`❌ Sitemap retornou status ${response.status}\n`);
      return false;
    }
  } catch (error) {
    console.log(`❌ Erro ao acessar sitemap: ${error.message}\n`);
    return false;
  }
}

// Teste 2: Verificar se robots.txt está configurado
async function testRobotsTxt() {
  console.log('🤖 Teste 2: Verificando robots.txt...');
  try {
    const response = await fetch(`${BASE_URL}/robots.txt`);
    if (response.ok) {
      const text = await response.text();
      const hasAllow = text.includes('Allow:');
      const hasSitemap = text.includes('Sitemap:');
      
      if (hasAllow && hasSitemap) {
        console.log('✅ Robots.txt configurado corretamente\n');
        return true;
      } else {
        console.log('⚠️  Robots.txt encontrado mas pode estar incompleto\n');
        return false;
      }
    } else {
      console.log(`❌ Robots.txt retornou status ${response.status}\n`);
      return false;
    }
  } catch (error) {
    console.log(`❌ Erro ao acessar robots.txt: ${error.message}\n`);
    return false;
  }
}

// Teste 3: Verificar se as revistas estão acessíveis
async function testMagazinesAPI() {
  console.log('📚 Teste 3: Verificando API de revistas...');
  try {
    const response = await fetch(`${BASE_URL}/magazines`);
    if (response.ok) {
      const magazines = await response.json();
      console.log(`✅ API retornou ${magazines.length} revistas\n`);
      
      if (magazines.length > 0) {
        const firstMag = magazines[0];
        console.log('📖 Exemplo de revista:');
        console.log(`   Título: ${firstMag.title}`);
        console.log(`   ID: ${firstMag._id || firstMag.id}`);
        console.log(`   PDF: ${firstMag.pdfUrl}`);
        console.log(`   URL: ${FRONTEND_URL}/#/artigo/${firstMag._id || firstMag.id}\n`);
      }
      
      return magazines.length > 0;
    } else {
      console.log(`❌ API retornou status ${response.status}\n`);
      return false;
    }
  } catch (error) {
    console.log(`❌ Erro ao acessar API: ${error.message}\n`);
    return false;
  }
}

// Teste 4: Verificar se um PDF está acessível
async function testPDFAccess() {
  console.log('📄 Teste 4: Verificando acesso a PDFs...');
  try {
    const response = await fetch(`${BASE_URL}/magazines`);
    if (response.ok) {
      const magazines = await response.json();
      if (magazines.length > 0) {
        const pdfUrl = magazines[0].pdfUrl;
        const pdfResponse = await fetch(pdfUrl, { method: 'HEAD' });
        
        if (pdfResponse.ok) {
          console.log('✅ PDF acessível publicamente\n');
          return true;
        } else {
          console.log(`❌ PDF retornou status ${pdfResponse.status}\n`);
          return false;
        }
      } else {
        console.log('⚠️  Nenhuma revista disponível para testar PDF\n');
        return false;
      }
    }
  } catch (error) {
    console.log(`❌ Erro ao verificar PDF: ${error.message}\n`);
    return false;
  }
}

// Executar todos os testes
async function runAllTests() {
  const results = {
    sitemap: await testSitemap(),
    robots: await testRobotsTxt(),
    api: await testMagazinesAPI(),
    pdf: await testPDFAccess()
  };
  
  console.log('═══════════════════════════════════════');
  console.log('📊 RESUMO DOS TESTES');
  console.log('═══════════════════════════════════════');
  console.log(`Sitemap:        ${results.sitemap ? '✅ PASSOU' : '❌ FALHOU'}`);
  console.log(`Robots.txt:     ${results.robots ? '✅ PASSOU' : '❌ FALHOU'}`);
  console.log(`API Revistas:   ${results.api ? '✅ PASSOU' : '❌ FALHOU'}`);
  console.log(`Acesso PDF:     ${results.pdf ? '✅ PASSOU' : '❌ FALHOU'}`);
  console.log('═══════════════════════════════════════\n');
  
  const allPassed = Object.values(results).every(r => r);
  
  if (allPassed) {
    console.log('🎉 Todos os testes passaram! Site pronto para indexação.\n');
    console.log('📋 Próximos passos:');
    console.log('   1. Fazer deploy para produção');
    console.log('   2. Submeter sitemap no Google Search Console');
    console.log('   3. Aguardar 2-4 semanas para indexação no Google Scholar');
  } else {
    console.log('⚠️  Alguns testes falharam. Verifique os erros acima.\n');
  }
}

// Executar
runAllTests().catch(console.error);
