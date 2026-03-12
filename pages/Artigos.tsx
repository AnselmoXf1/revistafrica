import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Search, Filter, Download } from 'lucide-react';
import { Magazine } from '../types';
import { magazinesAPI } from '../services/api';
import { Helmet } from 'react-helmet-async';
import { getPdfUrl, hasValidPdfUrl } from '../config/pdf-urls';

// Dados dos artigos/livros (35 artigos fornecidos)
const ARTIGOS_DADOS = [
  // Educação (12 artigos)
  {
    id: 'impacto-digitalizacao-pagamento-contribuicoes-inss-mocambique',
    title: 'O impacto da digitalização do pagamento de contribuições na modernização administrativa do INSS em Moçambique',
    author: 'Diana Samissone Aço',
    year: 2026,
    description: 'Análise do impacto da digitalização no pagamento de contribuições para a modernização administrativa do INSS em Moçambique.',
    category: 'Educação',
    pdfUrl: '#'
  },
  {
    id: 'morfologia-vegetal-fruto',
    title: 'Morfologia vegetal do fruto',
    author: 'Ana Paula',
    year: 2026,
    description: 'Estudo sobre a morfologia vegetal dos frutos e suas características estruturais.',
    category: 'Educação',
    pdfUrl: '#'
  },
  {
    id: 'delineamento-experimental-dbcc',
    title: 'Delineamento experimental DBCC',
    author: 'Lourenço Manuel',
    year: 2026,
    description: 'Metodologia de delineamento experimental DBCC para pesquisas científicas.',
    category: 'Educação',
    pdfUrl: '#'
  },
  {
    id: 'delineamento-experimental-dcc',
    title: 'Delineamento experimental DCC',
    author: 'Lourenço Manuel',
    year: 2026,
    description: 'Metodologia de delineamento experimental DCC aplicada em pesquisas.',
    category: 'Educação',
    pdfUrl: '#'
  },
  {
    id: 'funcionamento-conselhos-escola-ensino-primario-barue',
    title: 'Funcionamento dos Conselhos de Escola nas Instituições Públicas do ensino primário no distrito de Báruè (2024–2025)',
    author: 'Harménia Jussa Bacar Suangua',
    year: 2026,
    description: 'Análise do funcionamento dos conselhos de escola no ensino primário público no distrito de Báruè.',
    category: 'Educação',
    pdfUrl: '#'
  },
  {
    id: 'historia-geral-da-africa',
    title: 'História Geral da África',
    author: 'Comitê Científico Internacional da UNESCO',
    year: 2010,
    description: 'A obra História Geral da África apresenta uma análise detalhada da história do continente africano desde as civilizações antigas até os períodos modernos.',
    category: 'Educação',
    pdfUrl: '#'
  },
  {
    id: 'o-poder-do-habito',
    title: 'O Poder do Hábito',
    author: 'Charles Duhigg',
    year: 2026,
    description: 'Livro que explica como os hábitos funcionam e como podem ser transformados para melhorar a vida pessoal e profissional.',
    category: 'Educação',
    pdfUrl: '#'
  },
  {
    id: 'pensa-e-enriquece-dominando-mentalidade-riqueza-sucesso',
    title: 'Pensa e Enriqueça – Dominando a Mentalidade para a Riqueza e o Sucesso',
    author: 'Napoleon Hill',
    year: 2026,
    description: 'Clássico sobre desenvolvimento pessoal e mentalidade para alcançar riqueza e sucesso.',
    category: 'Educação',
    pdfUrl: '#'
  },
  {
    id: 'introducao-a-fruticultura',
    title: 'Introdução à Fruticultura',
    author: 'Paok Saint Lubel',
    year: 2009,
    description: 'Guia introdutório sobre cultivo de frutas e técnicas de fruticultura.',
    category: 'Educação',
    pdfUrl: '#'
  },
  {
    id: 'microbiologia-geral-manual',
    title: 'Manual de Microbiologia Geral - Guia Completo para Estudantes',
    author: 'Jean Berg',
    year: 2026,
    description: '📘 Manual completo de microbiologia para estudantes de ciências biológicas. Baixe grátis o PDF com técnicas laboratoriais, estrutura bacteriana e virologia.',
    category: 'Educação',
    pdfUrl: '#'
  },
  {
    id: 'caracterizacao-farmacognostica-raiz-euclea-natalensis-mulala',
    title: 'Caracterização farmacognóstica da raiz de Euclea natalensis (Mulala)',
    author: 'Filipe M., Gomes E.T., Serrano R.',
    year: 2008,
    description: 'Estudo farmacognóstico da raiz de Euclea natalensis, conhecida como Mulala.',
    category: 'Educação',
    pdfUrl: '#'
  },
  {
    id: 'papel-cooperacao-internacional-reducao-desigualdades-acesso-educacao-mocambique',
    title: 'O papel da cooperação internacional na redução das desigualdades no acesso à educação em Moçambique (2020–2025)',
    author: 'Lara Isabel Amoda',
    year: 2026,
    description: 'Análise do papel da cooperação internacional na redução das desigualdades no acesso à educação em Moçambique.',
    category: 'Educação',
    pdfUrl: '#'
  },
  {
    id: 'maneio-integrado-producao-suinos',
    title: 'Maneio integrado de produção de suínos',
    author: 'Valmir Sartor, Cecília de F. Souza, Ilda Tinoco',
    year: 2012,
    description: 'Guia completo sobre produção integrada de suínos com técnicas modernas de maneio.',
    category: 'Educação',
    pdfUrl: '#'
  },

  // Economia (9 artigos)
  {
    id: 'contribuicao-sector-informal-desenvolvimento-economico-regional-mocambique',
    title: 'A Contribuição do Sector Informal para o Desenvolvimento Econômico Regional em Moçambique',
    author: 'Ricardo Miguel Danger',
    year: 2026,
    description: 'Análise da contribuição do setor informal para o desenvolvimento econômico regional em Moçambique.',
    category: 'Economia',
    pdfUrl: '#'
  },
  {
    id: 'analise-impacto-microfinancas-desenvolvimento-economico-comunidades-rurais-mocambique',
    title: 'Análise do Impacto das Microfinanças no Desenvolvimento Econômico das Comunidades Rurais em Moçambique',
    author: 'Paciência António Lazaro Veremo',
    year: 2026,
    description: 'Estudo sobre o impacto das microfinanças no desenvolvimento econômico das comunidades rurais em Moçambique.',
    category: 'Economia',
    pdfUrl: '#'
  },
  {
    id: 'in-validacao-piramide-responsabilidade-social-carroll',
    title: 'A in(validação) da pirâmide da responsabilidade social de Carroll',
    author: 'Claire Messias Casquinha',
    year: 2026,
    description: 'Análise crítica da pirâmide da responsabilidade social proposta por Carroll.',
    category: 'Economia',
    pdfUrl: '#'
  },
  {
    id: 'impacto-capacitacao-comunitaria-empreendimento-local-tete',
    title: 'Impacto da capacitação comunitária no empreendimento local na província de Tete',
    author: 'Eva Iracil Ferrão Castilho',
    year: 2026,
    description: 'Estudo sobre o impacto da capacitação comunitária no desenvolvimento de empreendimentos locais em Tete.',
    category: 'Economia',
    pdfUrl: '#'
  },
  {
    id: 'accountability-vector-promocao-transparencia-boa-governacao-sector-publico-mocambicano',
    title: 'Accountability como vector da promoção da transparência e boa governação no sector público moçambicano',
    author: 'Piedade Maria Dias Nogueira',
    year: 2023,
    description: 'Análise do papel da accountability na promoção da transparência e boa governação no setor público moçambicano.',
    category: 'Economia',
    pdfUrl: '#'
  },
  {
    id: 'planeamento-estudo-matematica-financeira',
    title: 'Planeamento e estudo da Matemática Financeira',
    author: 'Luis Bertolo',
    year: 2012,
    description: 'Guia de planeamento e estudo da matemática financeira para estudantes e profissionais.',
    category: 'Economia',
    pdfUrl: '#'
  },
  {
    id: 'entradas-empresas-mercado-internacional',
    title: 'Entradas das empresas em um mercado internacional',
    author: 'Lurdes Zinai Miguel, Paulo Manin Doran, Livingston Sten Sein',
    year: 2023,
    description: 'Estratégias e metodologias para entrada de empresas em mercados internacionais.',
    category: 'Economia',
    pdfUrl: '#'
  },
  {
    id: 'papel-empresas-financiamento-projectos-agropecuarios-desenvolvimento-rural',
    title: 'O papel das empresas de financiamento de projectos agropecuários no desenvolvimento rural',
    author: 'Claire Messias Casquinha',
    year: 2023,
    description: 'Análise do papel das empresas de financiamento no desenvolvimento de projetos agropecuários e desenvolvimento rural.',
    category: 'Economia',
    pdfUrl: '#'
  },
  {
    id: 'papel-pequenas-medias-empresas-geracao-emprego-tete',
    title: 'O Papel das Pequenas e Médias Empresas na geração de emprego na cidade de Tete',
    author: 'Luís Miguel Mateus Nicolau Zalimba',
    year: 2026,
    description: 'Estudo sobre o papel das PMEs na geração de emprego na cidade de Tete, Moçambique.',
    category: 'Economia',
    pdfUrl: '#'
  },

  // Política / Governação (3 artigos)
  {
    id: 'conflitos-ocupacao-informal-solo-lei-terras-mocambique',
    title: 'Conflitos entre Ocupação Informal do Solo e a Lei de Terras em Moçambique',
    author: 'Raquel Joaquim Pinto Bastos',
    year: 2026,
    description: 'Análise dos conflitos entre ocupação informal do solo e a legislação de terras em Moçambique.',
    category: 'Política / Governação',
    pdfUrl: '#'
  },
  {
    id: 'barreiras-negocios-internacionais',
    title: 'Barreiras aos negócios internacionais',
    author: 'Augusto Susto e colaboradores',
    year: 2018,
    description: 'Identificação e análise das principais barreiras enfrentadas por empresas em negócios internacionais.',
    category: 'Política / Governação',
    pdfUrl: '#'
  },
  {
    id: 'administracao-publica-comparada-mocambique-africa-sul',
    title: 'Administração Pública comparada entre Moçambique e África do Sul',
    author: 'Maria Luísa Vinte Martins',
    year: 2026,
    description: 'Estudo comparativo da administração pública entre Moçambique e África do Sul.',
    category: 'Política / Governação',
    pdfUrl: '#'
  },

  // Cultura / História / Ciências Sociais (3 artigos)
  {
    id: 'educar-homem-vencer-guerra-criar-sociedade-nova',
    title: 'Educar o homem para vencer a guerra e criar uma sociedade nova',
    author: 'Samora Moisés Machel',
    year: 1970,
    description: 'Discurso de Samora Machel sobre a importância da educação para transformação social.',
    category: 'Cultura / História / Ciências Sociais',
    pdfUrl: '#'
  },
  {
    id: 'apologia-de-socrates',
    title: 'Apologia de Sócrates',
    author: 'Platão',
    year: 2003,
    description: 'Defesa de Sócrates durante seu julgamento em Atenas, obra fundamental da filosofia ocidental.',
    category: 'Cultura / História / Ciências Sociais',
    pdfUrl: '#'
  },
  {
    id: 'a-arte-da-guerra',
    title: 'A Arte da Guerra',
    author: 'Sun Tzu',
    year: 2010,
    description: 'Tratado militar clássico sobre estratégia e táticas, aplicável em diversos campos além do militar.',
    category: 'Cultura / História / Ciências Sociais',
    pdfUrl: '#'
  },

  // Outros / Técnicos (8 artigos)
  {
    id: 'quase-1000-problemas-resolvidos-fisica-classica',
    title: 'Quase 1000 problemas resolvidos de Física Clássica',
    author: 'Ahmad A. Kamal',
    year: 2011,
    description: 'Coleção de problemas resolvidos de física clássica para estudantes universitários.',
    category: 'Outros / Técnicos',
    pdfUrl: '#'
  },
  {
    id: 'calculos-estequiometricos-estudo-aprendizagem-quimica',
    title: 'Cálculos Estequiométricos – Estudo e aprendizagem química',
    author: 'Nelson Domingos, Márcio Mavie, Claire Casquinha',
    year: 2018,
    description: 'Guia completo para cálculos estequiométricos em química com exemplos práticos.',
    category: 'Outros / Técnicos',
    pdfUrl: '#'
  },
  {
    id: 'moringa-miracle-plant-agro-forestry',
    title: 'Moringa: A Miracle Plant of Agro Forestry',
    author: 'M. Ashfaq e colaboradores',
    year: 2011,
    description: 'Estudo sobre as propriedades e benefícios da planta Moringa na agrofloresta.',
    category: 'Outros / Técnicos',
    pdfUrl: '#'
  },
  {
    id: 'impacto-marketing-interno-motivacao-retencao-colaboradores',
    title: 'Impacto do marketing interno na motivação e retenção de colaboradores',
    author: 'Diana Samissone Aço',
    year: 2026,
    description: 'Análise do impacto do marketing interno na motivação e retenção de colaboradores nas organizações.',
    category: 'Outros / Técnicos',
    pdfUrl: '#'
  },
  {
    id: 'impactos-socioambientais-ocupacao-desordenada-espaco-urbano',
    title: 'Impactos socioambientais da ocupação desordenada do espaço urbano',
    author: 'António Manuel Cossa e colaboradores',
    year: 2026,
    description: 'Estudo sobre os impactos socioambientais da ocupação desordenada do espaço urbano.',
    category: 'Outros / Técnicos',
    pdfUrl: '#'
  },
  {
    id: 'estrutura-organizacional-desempenho-funcionarios-vodacom-chimoio',
    title: 'Estrutura organizacional e desempenho dos funcionários da Vodacom de Chimoio',
    author: 'Lurdes Zinai Miguel e colaboradores',
    year: 2020,
    description: 'Análise da relação entre estrutura organizacional e desempenho dos funcionários na Vodacom de Chimoio.',
    category: 'Outros / Técnicos',
    pdfUrl: '#'
  },
  {
    id: 'fluxo-caixa-instrumento-tomada-decisao-empresa-mega-fresh',
    title: 'Fluxo de caixa como instrumento para tomada de decisão na empresa Mega Fresh',
    author: 'Nelson Domingos e colaboradores',
    year: 2022,
    description: 'Estudo sobre a utilização do fluxo de caixa como instrumento para tomada de decisão empresarial.',
    category: 'Outros / Técnicos',
    pdfUrl: '#'
  },
  {
    id: 'analise-produtividade-empresas-custos-producao',
    title: 'Análise da produtividade das empresas e custos de produção',
    author: 'Largons Athur Paok e colaboradores',
    year: 2022,
    description: 'Análise da relação entre produtividade empresarial e custos de produção.',
    category: 'Outros / Técnicos',
    pdfUrl: '#'
  },
  {
    id: 'criacao-maneio-aves-poedeiras',
    title: 'Manual de Criação e Maneio de Aves Poedeiras - Técnicas Modernas',
    author: 'Glenda Alves Ferreira Prado',
    year: 2015,
    description: '🐔 Manual técnico completo sobre criação de aves poedeiras. PDF grátis com técnicas de manejo, nutrição e gestão da produção de ovos.',
    category: 'Outros / Técnicos',
    pdfUrl: '#'
  },
  {
    id: 'manual-cultivo-pimenta-maneio',
    title: 'Manual de Cultivo de Pimenta - Guia Prático Completo',
    author: 'Fabio Lutel',
    year: 2017,
    description: '🌶️ Manual completo de cultivo de pimenta. Baixe o PDF grátis com técnicas de plantio, controle de pragas e colheita.',
    category: 'Outros / Técnicos',
    pdfUrl: '#'
  },
  {
    id: 'maneio-suinocultura-elementos-principais-criacao',
    title: 'Manual de Suinocultura - Maneio e Técnicas de Criação',
    author: 'Emater Livraria',
    year: 2019,
    description: '🐷 Manual completo de suinocultura. PDF grátis com técnicas de maneio, nutrição e gestão da produção de suínos.',
    category: 'Outros / Técnicos',
    pdfUrl: '#'
  }
];

const Artigos: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todas');
  const [filteredArtigos, setFilteredArtigos] = useState(ARTIGOS_DADOS);

  // Extrair categorias únicas
  const categories = ['Todas', ...Array.from(new Set(ARTIGOS_DADOS.map(artigo => artigo.category)))];

  // Filtrar artigos
  useEffect(() => {
    let result = ARTIGOS_DADOS;

    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(artigo => 
        artigo.title.toLowerCase().includes(term) ||
        artigo.author.toLowerCase().includes(term) ||
        artigo.description.toLowerCase().includes(term) ||
        artigo.category.toLowerCase().includes(term)
      );
    }

    if (selectedCategory !== 'Todas') {
      result = result.filter(artigo => artigo.category === selectedCategory);
    }

    setFilteredArtigos(result);
  }, [searchTerm, selectedCategory]);

  // Função para obter URL do PDF com fallback
  const getArticlePdfUrl = (articleId: string) => {
    const pdfUrl = getPdfUrl(articleId);
    return pdfUrl !== '#' ? pdfUrl : '#';
  };

  return (
    <>
      <Helmet>
        <title>Biblioteca de Artigos e Livros - Revista África</title>
        <meta name="description" content="Explore nossa biblioteca completa de artigos acadêmicos e livros sobre diversos temas relacionados à África e ao conhecimento global." />
        <link rel="canonical" href="https://revistafrica.com/artigos" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Biblioteca de Artigos e Livros - Revista África" />
        <meta property="og:description" content="Explore nossa biblioteca completa de artigos acadêmicos e livros sobre diversos temas relacionados à África e ao conhecimento global." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://revistafrica.com/artigos" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Biblioteca de Artigos e Livros - Revista África" />
        <meta name="twitter:description" content="Explore nossa biblioteca completa de artigos acadêmicos e livros sobre diversos temas relacionados à África e ao conhecimento global." />
      </Helmet>

      {/* Dados Estruturados para a página de listagem */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "Biblioteca de Artigos e Livros - Revista África",
          "description": "Explore nossa biblioteca completa de artigos acadêmicos e livros sobre diversos temas relacionados à África e ao conhecimento global.",
          "url": "https://revistafrica.com/artigos",
          "mainEntity": {
            "@type": "ItemList",
            "itemListElement": ARTIGOS_DADOS.map((artigo, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "item": {
                "@type": "Book",
                "name": artigo.title,
                "author": artigo.author,
                "datePublished": artigo.year > 0 ? `${artigo.year}` : `-${Math.abs(artigo.year)}`,
                "description": artigo.description,
                "url": `https://revistafrica.com/artigo/${artigo.id}`
              }
            }))
          }
        })}
      </script>

      <div className="min-h-screen bg-gray-50 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Cabeçalho */}
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Biblioteca de Artigos e Livros - Revista África
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore nossa coleção completa de artigos acadêmicos, livros e recursos educacionais 
              sobre diversos temas relacionados à África e ao conhecimento global.
            </p>
          </header>

          {/* Filtros e Busca */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Barra de busca */}
              <div className="flex-grow">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder="Buscar artigos por título, autor ou assunto..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Filtro por categoria */}
              <div className="w-full md:w-64">
                <div className="relative">
                  <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent appearance-none"
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Contador de resultados */}
          <div className="mb-6">
            <p className="text-gray-600">
              Mostrando <span className="font-semibold text-green-700">{filteredArtigos.length}</span> de {ARTIGOS_DADOS.length} artigos
            </p>
          </div>

          {/* Lista de Artigos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArtigos.map((artigo) => (
              <div 
                key={artigo.id} 
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h2 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                        <Link 
                          to={`/artigo/${artigo.id}`} 
                          className="hover:text-green-700 transition-colors"
                        >
                          {artigo.title}
                        </Link>
                      </h2>
                      <p className="text-gray-600 text-sm mb-2">
                        <span className="font-medium">Autor:</span> {artigo.author}
                      </p>
                      <p className="text-gray-600 text-sm mb-3">
                        <span className="font-medium">Ano:</span> {artigo.year > 0 ? artigo.year : `${Math.abs(artigo.year)} a.C.`}
                      </p>
                    </div>
                    <div className="ml-4">
                      <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">
                        {artigo.category}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-4 line-clamp-3">
                    {artigo.description}
                  </p>

                  <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                    <Link 
                      to={`/artigo/${artigo.id}`}
                      className="text-green-700 hover:text-green-800 font-medium flex items-center gap-2"
                    >
                      <BookOpen size={18} />
                      Ver detalhes
                    </Link>
                    <a 
                      href={getArticlePdfUrl(artigo.id)}
                      className={`${hasValidPdfUrl(artigo.id) ? 'text-green-600 hover:text-green-800' : 'text-gray-400 cursor-not-allowed'} flex items-center gap-2`}
                      target={hasValidPdfUrl(artigo.id) ? "_blank" : undefined}
                      rel={hasValidPdfUrl(artigo.id) ? "noopener noreferrer" : undefined}
                      title={hasValidPdfUrl(artigo.id) ? "Baixar PDF do Cloudinary" : "PDF não disponível"}
                    >
                      <Download size={18} />
                      {hasValidPdfUrl(artigo.id) ? 'PDF' : 'PDF (em breve)'}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mensagem se não houver resultados */}
          {filteredArtigos.length === 0 && (
            <div className="text-center py-12">
              <BookOpen size={64} className="mx-auto text-gray-300 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Nenhum artigo encontrado</h3>
              <p className="text-gray-600">
                Tente ajustar sua busca ou filtro para encontrar o que procura.
              </p>
            </div>
          )}

          {/* Informação sobre indexação */}
          <div className="mt-12 bg-green-50 border border-green-200 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Otimizado para Buscas no Google</h3>
            <p className="text-gray-700">
              Esta página está otimizada para indexação no Google. Cada artigo possui sua própria página 
              com metadados estruturados, facilitando a descoberta por pesquisadores e estudantes.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Artigos;