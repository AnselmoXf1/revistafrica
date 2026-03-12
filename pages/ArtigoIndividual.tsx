import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Download, Calendar, User, ArrowLeft, BookOpen } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

// Dados dos artigos (35 artigos fornecidos)
const ARTIGOS_DADOS = [
  // Educação (12 artigos)
  {
    id: 'impacto-digitalizacao-pagamento-contribuicoes-inss-mocambique',
    title: 'O impacto da digitalização do pagamento de contribuições na modernização administrativa do INSS em Moçambique',
    author: 'Diana Samissone Aço',
    year: 2026,
    description: 'Análise do impacto da digitalização no pagamento de contribuições para a modernização administrativa do INSS em Moçambique.',
    category: 'Educação',
    pdfUrl: '#',
    longDescription: 'Este estudo analisa o impacto da digitalização do pagamento de contribuições na modernização administrativa do Instituto Nacional de Segurança Social (INSS) de Moçambique. A pesquisa aborda os desafios e oportunidades da transformação digital no setor público, com foco na eficiência operacional, transparência e qualidade dos serviços prestados aos contribuintes.'
  },
  {
    id: 'morfologia-vegetal-fruto',
    title: 'Morfologia vegetal do fruto',
    author: 'Ana Paula',
    year: 2026,
    description: 'Estudo sobre a morfologia vegetal dos frutos e suas características estruturais.',
    category: 'Educação',
    pdfUrl: '#',
    longDescription: 'Estudo detalhado sobre a morfologia vegetal dos frutos, abordando suas características estruturais, classificação botânica e funções biológicas. O trabalho inclui análises comparativas entre diferentes espécies frutíferas e suas adaptações evolutivas.'
  },
  {
    id: 'delineamento-experimental-dbcc',
    title: 'Delineamento experimental DBCC',
    author: 'Lourenço Manuel',
    year: 2026,
    description: 'Metodologia de delineamento experimental DBCC para pesquisas científicas.',
    category: 'Educação',
    pdfUrl: '#',
    longDescription: 'Guia metodológico completo sobre delineamento experimental DBCC (Delineamento em Blocos Casualizados Completos), abordando princípios estatísticos, aplicações práticas e análise de resultados em pesquisas científicas.'
  },
  {
    id: 'delineamento-experimental-dcc',
    title: 'Delineamento experimental DCC',
    author: 'Lourenço Manuel',
    year: 2026,
    description: 'Metodologia de delineamento experimental DCC aplicada em pesquisas.',
    category: 'Educação',
    pdfUrl: '#',
    longDescription: 'Manual sobre delineamento experimental DCC (Delineamento Casualizado Completo), com ênfase em aplicações práticas, vantagens metodológicas e análise estatística de dados experimentais.'
  },
  {
    id: 'funcionamento-conselhos-escola-ensino-primario-barue',
    title: 'Funcionamento dos Conselhos de Escola nas Instituições Públicas do ensino primário no distrito de Báruè (2024–2025)',
    author: 'Harménia Jussa Bacar Suangua',
    year: 2026,
    description: 'Análise do funcionamento dos conselhos de escola no ensino primário público no distrito de Báruè.',
    category: 'Educação',
    pdfUrl: '#',
    longDescription: 'Pesquisa qualitativa sobre o funcionamento dos conselhos de escola nas instituições públicas de ensino primário no distrito de Báruè, Moçambique. O estudo analisa a participação comunitária, tomada de decisões e impacto na qualidade educativa durante o período 2024-2025.'
  },
  {
    id: 'historia-geral-da-africa',
    title: 'História Geral da África',
    author: 'Comitê Científico Internacional da UNESCO',
    year: 2010,
    description: 'A obra História Geral da África apresenta uma análise detalhada da história do continente africano desde as civilizações antigas até os períodos modernos.',
    category: 'Educação',
    pdfUrl: '#',
    longDescription: 'Publicada pela UNESCO, esta obra monumental em oito volumes representa o esforço mais completo já realizado para documentar a história do continente africano. Escrita por especialistas africanos e internacionais, a coleção abrange desde as origens da humanidade na África até os desafios contemporâneos, oferecendo uma perspectiva africana sobre a história do continente.'
  },
  {
    id: 'o-poder-do-habito',
    title: 'O Poder do Hábito',
    author: 'Charles Duhigg',
    year: 2026,
    description: 'Livro que explica como os hábitos funcionam e como podem ser transformados para melhorar a vida pessoal e profissional.',
    category: 'Educação',
    pdfUrl: '#',
    longDescription: 'Best-seller internacional que explora a ciência por trás da formação de hábitos e como podemos transformá-los. Baseado em pesquisas científicas e estudos de caso, o livro mostra como entender o ciclo do hábito pode levar a mudanças significativas na vida pessoal e profissional.'
  },
  {
    id: 'pensa-e-enriquece-dominando-mentalidade-riqueza-sucesso',
    title: 'Pensa e Enriqueça – Dominando a Mentalidade para a Riqueza e o Sucesso',
    author: 'Napoleon Hill',
    year: 2026,
    description: 'Clássico sobre desenvolvimento pessoal e mentalidade para alcançar riqueza e sucesso.',
    category: 'Educação',
    pdfUrl: '#',
    longDescription: 'Um dos livros mais influentes sobre desenvolvimento pessoal e sucesso financeiro. Baseado em mais de 20 anos de pesquisa entrevistando pessoas bem-sucedidas, Napoleon Hill apresenta os princípios fundamentais para alcançar o sucesso em qualquer área da vida.'
  },
  {
    id: 'introducao-a-fruticultura',
    title: 'Introdução à Fruticultura',
    author: 'Paok Saint Lubel',
    year: 2009,
    description: 'Guia introdutório sobre cultivo de frutas e técnicas de fruticultura.',
    category: 'Educação',
    pdfUrl: '#',
    longDescription: 'Guia prático para iniciantes na fruticultura, abordando desde a seleção de espécies adequadas ao clima local até técnicas de plantio, manejo e colheita. Inclui informações sobre frutíferas tropicais e temperadas.'
  },
  {
    id: 'microbiologia-geral-manual',
    title: 'Manual de Microbiologia Geral - Guia Completo para Estudantes',
    author: 'Jean Berg',
    year: 2026,
    description: '📘 Manual completo de microbiologia para estudantes de ciências biológicas. Baixe grátis o PDF com técnicas laboratoriais, estrutura bacteriana e virologia.',
    category: 'Educação',
    pdfUrl: '#',
    longDescription: 'Manual abrangente que cobre os fundamentos da microbiologia, incluindo estrutura bacteriana, virologia, micologia e técnicas laboratoriais. Ideal para estudantes de biologia, medicina e áreas afins que necessitam de uma referência prática e atualizada. Este manual oferece explicações detalhadas, ilustrações e protocolos experimentais para laboratório.'
  },
  {
    id: 'caracterizacao-farmacognostica-raiz-euclea-natalensis-mulala',
    title: 'Caracterização farmacognóstica da raiz de Euclea natalensis (Mulala)',
    author: 'Filipe M., Gomes E.T., Serrano R.',
    year: 2008,
    description: 'Estudo farmacognóstico da raiz de Euclea natalensis, conhecida como Mulala.',
    category: 'Educação',
    pdfUrl: '#',
    longDescription: 'Estudo farmacognóstico detalhado da raiz de Euclea natalensis (Mulala), planta medicinal tradicionalmente utilizada em Moçambique. A pesquisa inclui análise morfológica, histológica, fitoquímica e propriedades farmacológicas.'
  },
  {
    id: 'papel-cooperacao-internacional-reducao-desigualdades-acesso-educacao-mocambique',
    title: 'O papel da cooperação internacional na redução das desigualdades no acesso à educação em Moçambique (2020–2025)',
    author: 'Lara Isabel Amoda',
    year: 2026,
    description: 'Análise do papel da cooperação internacional na redução das desigualdades no acesso à educação em Moçambique.',
    category: 'Educação',
    pdfUrl: '#',
    longDescription: 'Análise crítica do papel da cooperação internacional na redução das desigualdades no acesso à educação em Moçambique durante o período 2020-2025. O estudo avalia programas, políticas e impactos das intervenções internacionais no sistema educativo moçambicano.'
  },
  {
    id: 'maneio-integrado-producao-suinos',
    title: 'Maneio integrado de produção de suínos',
    author: 'Valmir Sartor, Cecília de F. Souza, Ilda Tinoco',
    year: 2012,
    description: 'Guia completo sobre produção integrada de suínos com técnicas modernas de maneio.',
    category: 'Educação',
    pdfUrl: '#',
    longDescription: 'Guia abrangente sobre sistemas integrados de produção suína, abordando melhoramento genético, nutrição, biossegurança, manejo reprodutivo e gestão ambiental para uma suinocultura sustentável e rentável.'
  },

  // Economia (9 artigos)
  {
    id: 'contribuicao-sector-informal-desenvolvimento-economico-regional-mocambique',
    title: 'A Contribuição do Sector Informal para o Desenvolvimento Econômico Regional em Moçambique',
    author: 'Ricardo Miguel Danger',
    year: 2026,
    description: 'Análise da contribuição do setor informal para o desenvolvimento econômico regional em Moçambique.',
    category: 'Economia',
    pdfUrl: '#',
    longDescription: 'Estudo sobre a contribuição do setor informal para o desenvolvimento econômico regional em Moçambique, analisando seu impacto no PIB, geração de emprego e inclusão socioeconômica.'
  },
  {
    id: 'analise-impacto-microfinancas-desenvolvimento-economico-comunidades-rurais-mocambique',
    title: 'Análise do Impacto das Microfinanças no Desenvolvimento Econômico das Comunidades Rurais em Moçambique',
    author: 'Paciência António Lazaro Veremo',
    year: 2026,
    description: 'Estudo sobre o impacto das microfinanças no desenvolvimento econômico das comunidades rurais em Moçambique.',
    category: 'Economia',
    pdfUrl: '#',
    longDescription: 'Pesquisa sobre o impacto das microfinanças no desenvolvimento econômico das comunidades rurais em Moçambique, avaliando acesso ao crédito, empreendedorismo e redução da pobreza.'
  },
  {
    id: 'in-validacao-piramide-responsabilidade-social-carroll',
    title: 'A in(validação) da pirâmide da responsabilidade social de Carroll',
    author: 'Claire Messias Casquinha',
    year: 2026,
    description: 'Análise crítica da pirâmide da responsabilidade social proposta por Carroll.',
    category: 'Economia',
    pdfUrl: '#',
    longDescription: 'Análise crítica da pirâmide da responsabilidade social de Carroll, discutindo suas limitações teóricas e aplicabilidade prática no contexto empresarial contemporâneo.'
  },
  {
    id: 'impacto-capacitacao-comunitaria-empreendimento-local-tete',
    title: 'Impacto da capacitação comunitária no empreendimento local na província de Tete',
    author: 'Eva Iracil Ferrão Castilho',
    year: 2026,
    description: 'Estudo sobre o impacto da capacitação comunitária no desenvolvimento de empreendimentos locais em Tete.',
    category: 'Economia',
    pdfUrl: '#',
    longDescription: 'Estudo sobre o impacto da capacitação comunitária no desenvolvimento de empreendimentos locais na província de Tete, Moçambique, analisando casos de sucesso e desafios enfrentados.'
  },
  {
    id: 'accountability-vector-promocao-transparencia-boa-governacao-sector-publico-mocambicano',
    title: 'Accountability como vector da promoção da transparência e boa governação no sector público moçambicano',
    author: 'Piedade Maria Dias Nogueira',
    year: 2023,
    description: 'Análise do papel da accountability na promoção da transparência e boa governação no setor público moçambicano.',
    category: 'Economia',
    pdfUrl: '#',
    longDescription: 'Análise do papel da accountability (prestação de contas) como vetor para promoção da transparência e boa governação no setor público moçambicano, com estudo de casos e recomendações políticas.'
  },
  {
    id: 'planeamento-estudo-matematica-financeira',
    title: 'Planeamento e estudo da Matemática Financeira',
    author: 'Luis Bertolo',
    year: 2012,
    description: 'Guia de planeamento e estudo da matemática financeira para estudantes e profissionais.',
    category: 'Economia',
    pdfUrl: '#',
    longDescription: 'Guia completo de planeamento e estudo da matemática financeira, abordando conceitos fundamentais, fórmulas e aplicações práticas para estudantes e profissionais da área financeira.'
  },
  {
    id: 'entradas-empresas-mercado-internacional',
    title: 'Entradas das empresas em um mercado internacional',
    author: 'Lurdes Zinai Miguel, Paulo Manin Doran, Livingston Sten Sein',
    year: 2023,
    description: 'Estratégias e metodologias para entrada de empresas em mercados internacionais.',
    category: 'Economia',
    pdfUrl: '#',
    longDescription: 'Estudo sobre estratégias e metodologias para entrada de empresas em mercados internacionais, analisando casos de sucesso, barreiras e fatores críticos para internacionalização empresarial.'
  },
  {
    id: 'papel-empresas-financiamento-projectos-agropecuarios-desenvolvimento-rural',
    title: 'O papel das empresas de financiamento de projectos agropecuários no desenvolvimento rural',
    author: 'Claire Messias Casquinha',
    year: 2023,
    description: 'Análise do papel das empresas de financiamento no desenvolvimento de projetos agropecuários e desenvolvimento rural.',
    category: 'Economia',
    pdfUrl: '#',
    longDescription: 'Análise do papel das empresas de financiamento no desenvolvimento de projetos agropecuários e promoção do desenvolvimento rural, com foco em sustentabilidade e impacto socioeconômico.'
  },
  {
    id: 'papel-pequenas-medias-empresas-geracao-emprego-tete',
    title: 'O Papel das Pequenas e Médias Empresas na geração de emprego na cidade de Tete',
    author: 'Luís Miguel Mateus Nicolau Zalimba',
    year: 2026,
    description: 'Estudo sobre o papel das PMEs na geração de emprego na cidade de Tete, Moçambique.',
    category: 'Economia',
    pdfUrl: '#',
    longDescription: 'Estudo sobre o papel das Pequenas e Médias Empresas (PMEs) na geração de emprego na cidade de Tete, Moçambique, analisando contribuições econômicas e desafios enfrentados pelo setor.'
  },

  // Política / Governação (3 artigos)
  {
    id: 'conflitos-ocupacao-informal-solo-lei-terras-mocambique',
    title: 'Conflitos entre Ocupação Informal do Solo e a Lei de Terras em Moçambique',
    author: 'Raquel Joaquim Pinto Bastos',
    year: 2026,
    description: 'Análise dos conflitos entre ocupação informal do solo e a legislação de terras em Moçambique.',
    category: 'Política / Governação',
    pdfUrl: '#',
    longDescription: 'Análise dos conflitos entre ocupação informal do solo e a legislação de terras em Moçambique, discutindo questões de regularização fundiária, direitos de propriedade e desenvolvimento urbano sustentável.'
  },
  {
    id: 'barreiras-negocios-internacionais',
    title: 'Barreiras aos negócios internacionais',
    author: 'Augusto Susto e colaboradores',
    year: 2018,
    description: 'Identificação e análise das principais barreiras enfrentadas por empresas em negócios internacionais.',
    category: 'Política / Governação',
    pdfUrl: '#',
    longDescription: 'Identificação e análise das principais barreiras enfrentadas por empresas em negócios internacionais, incluindo aspectos regulatórios, culturais, logísticos e financeiros.'
  },
  {
    id: 'administracao-publica-comparada-mocambique-africa-sul',
    title: 'Administração Pública comparada entre Moçambique e África do Sul',
    author: 'Maria Luísa Vinte Martins',
    year: 2026,
    description: 'Estudo comparativo da administração pública entre Moçambique e África do Sul.',
    category: 'Política / Governação',
    pdfUrl: '#',
    longDescription: 'Estudo comparativo da administração pública entre Moçambique e África do Sul, analisando estruturas organizacionais, processos decisórios e reformas administrativas em ambos os países.'
  },

  // Cultura / História / Ciências Sociais (3 artigos)
  {
    id: 'educar-homem-vencer-guerra-criar-sociedade-nova',
    title: 'Educar o homem para vencer a guerra e criar uma sociedade nova',
    author: 'Samora Moisés Machel',
    year: 1970,
    description: 'Discurso de Samora Machel sobre a importância da educação para transformação social.',
    category: 'Cultura / História / Ciências Sociais',
    pdfUrl: '#',
    longDescription: 'Discurso histórico de Samora Moisés Machel sobre a importância da educação como instrumento para vencer a guerra colonial e construir uma sociedade nova em Moçambique.'
  },
  {
    id: 'apologia-de-socrates',
    title: 'Apologia de Sócrates',
    author: 'Platão',
    year: 2003,
    description: 'Defesa de Sócrates durante seu julgamento em Atenas, obra fundamental da filosofia ocidental.',
    category: 'Cultura / História / Ciências Sociais',
    pdfUrl: '#',
    longDescription: 'Diálogo platônico que registra a defesa de Sócrates perante o tribunal ateniense que o acusava de corromper a juventude e não acreditar nos deuses da cidade. Considerada uma das obras fundamentais da filosofia ocidental, apresenta os princípios socráticos da busca pela verdade e da vida examinada.'
  },
  {
    id: 'a-arte-da-guerra',
    title: 'A Arte da Guerra',
    author: 'Sun Tzu',
    year: 2010,
    description: 'Tratado militar clássico sobre estratégia e táticas, aplicável em diversos campos além do militar.',
    category: 'Cultura / História / Ciências Sociais',
    pdfUrl: '#',
    longDescription: 'Tratado militar chinês escrito há mais de 2.500 anos que continua relevante para estratégia, liderança e gestão de conflitos. Suas lições sobre planejamento, conhecimento do inimigo e adaptação às circunstâncias são aplicadas em diversos campos além do militar.'
  },

  // Outros / Técnicos (8 artigos)
  {
    id: 'quase-1000-problemas-resolvidos-fisica-classica',
    title: 'Quase 1000 problemas resolvidos de Física Clássica',
    author: 'Ahmad A. Kamal',
    year: 2011,
    description: 'Coleção de problemas resolvidos de física clássica para estudantes universitários.',
    category: 'Outros / Técnicos',
    pdfUrl: '#',
    longDescription: 'Esta obra reúne quase mil problemas de física clássica com soluções completas e explicadas passo a passo. Ideal para estudantes de graduação em física, engenharia e ciências exatas que desejam aprofundar seus conhecimentos e preparar-se para exames. O livro cobre todos os tópicos fundamentais da física clássica, desde as leis de Newton até a termodinâmica avançada.'
  },
  {
    id: 'calculos-estequiometricos-estudo-aprendizagem-quimica',
    title: 'Cálculos Estequiométricos – Estudo e aprendizagem química',
    author: 'Nelson Domingos, Márcio Mavie, Claire Casquinha',
    year: 2018,
    description: 'Guia completo para cálculos estequiométricos em química com exemplos práticos.',
    category: 'Outros / Técnicos',
    pdfUrl: '#',
    longDescription: 'Manual abrangente sobre cálculos estequiométricos, essencial para estudantes de química. Inclui exemplos práticos, exercícios resolvidos e dicas para resolver problemas complexos de balanceamento de equações químicas.'
  },
  {
    id: 'moringa-miracle-plant-agro-forestry',
    title: 'Moringa: A Miracle Plant of Agro Forestry',
    author: 'M. Ashfaq e colaboradores',
    year: 2011,
    description: 'Estudo sobre as propriedades e benefícios da planta Moringa na agrofloresta.',
    category: 'Outros / Técnicos',
    pdfUrl: '#',
    longDescription: 'Estudo científico detalhado sobre a Moringa oleifera, conhecida como "árvore da vida" por suas múltiplas propriedades nutricionais e medicinais. Aborda seu cultivo, processamento e aplicações na segurança alimentar e saúde.'
  },
  {
    id: 'impacto-marketing-interno-motivacao-retencao-colaboradores',
    title: 'Impacto do marketing interno na motivação e retenção de colaboradores',
    author: 'Diana Samissone Aço',
    year: 2026,
    description: 'Análise do impacto do marketing interno na motivação e retenção de colaboradores nas organizações.',
    category: 'Outros / Técnicos',
    pdfUrl: '#',
    longDescription: 'Análise do impacto do marketing interno na motivação e retenção de colaboradores nas organizações, estudando estratégias de comunicação interna, engajamento e desenvolvimento organizacional.'
  },
  {
    id: 'impactos-socioambientais-ocupacao-desordenada-espaco-urbano',
    title: 'Impactos socioambientais da ocupação desordenada do espaço urbano',
    author: 'António Manuel Cossa e colaboradores',
    year: 2026,
    description: 'Estudo sobre os impactos socioambientais da ocupação desordenada do espaço urbano.',
    category: 'Outros / Técnicos',
    pdfUrl: '#',
    longDescription: 'Estudo sobre os impactos socioambientais da ocupação desordenada do espaço urbano, analisando questões de planeamento territorial, qualidade de vida e sustentabilidade ambiental.'
  },
  {
    id: 'estrutura-organizacional-desempenho-funcionarios-vodacom-chimoio',
    title: 'Estrutura organizacional e desempenho dos funcionários da Vodacom de Chimoio',
    author: 'Lurdes Zinai Miguel e colaboradores',
    year: 2020,
    description: 'Análise da relação entre estrutura organizacional e desempenho dos funcionários na Vodacom de Chimoio.',
    category: 'Outros / Técnicos',
    pdfUrl: '#',
    longDescription: 'Análise da relação entre estrutura organizacional e desempenho dos funcionários na Vodacom de Chimoio, estudando fatores de motivação, comunicação interna e eficiência operacional.'
  },
  {
    id: 'fluxo-caixa-instrumento-tomada-decisao-empresa-mega-fresh',
    title: 'Fluxo de caixa como instrumento para tomada de decisão na empresa Mega Fresh',
    author: 'Nelson Domingos e colaboradores',
    year: 2022,
    description: 'Estudo sobre a utilização do fluxo de caixa como instrumento para tomada de decisão empresarial.',
    category: 'Outros / Técnicos',
    pdfUrl: '#',
    longDescription: 'Estudo sobre a utilização do fluxo de caixa como instrumento para tomada de decisão empresarial na empresa Mega Fresh, analisando práticas de gestão financeira e planeamento estratégico.'
  },
  {
    id: 'analise-produtividade-empresas-custos-producao',
    title: 'Análise da produtividade das empresas e custos de produção',
    author: 'Largons Athur Paok e colaboradores',
    year: 2022,
    description: 'Análise da relação entre produtividade empresarial e custos de produção.',
    category: 'Outros / Técnicos',
    pdfUrl: '#',
    longDescription: 'Análise da relação entre produtividade empresarial e custos de produção, estudando indicadores de eficiência, otimização de processos e competitividade empresarial.'
  },
  {
    id: 'criacao-maneio-aves-poedeiras',
    title: 'Manual de Criação e Maneio de Aves Poedeiras - Técnicas Modernas',
    author: 'Glenda Alves Ferreira Prado',
    year: 2015,
    description: '🐔 Manual técnico completo sobre criação de aves poedeiras. PDF grátis com técnicas de manejo, nutrição e gestão da produção de ovos.',
    category: 'Outros / Técnicos',
    pdfUrl: '#',
    longDescription: 'Manual técnico completo sobre a criação comercial de aves poedeiras, abordando genética, nutrição, manejo sanitário, instalações e gestão da produção para maximizar a produtividade e qualidade dos ovos. Inclui protocolos de vacinação, controle de doenças e técnicas de manejo sustentável.'
  },
  {
    id: 'manual-cultivo-pimenta-maneio',
    title: 'Manual de Cultivo de Pimenta - Guia Prático Completo',
    author: 'Fabio Lutel',
    year: 2017,
    description: '🌶️ Manual completo de cultivo de pimenta. Baixe o PDF grátis com técnicas de plantio, controle de pragas e colheita.',
    category: 'Outros / Técnicos',
    pdfUrl: '#',
    longDescription: 'Manual prático que ensina técnicas de cultivo de pimenta para pequenos e médios produtores. Inclui informações sobre variedades, preparo do solo, controle de pragas e doenças, colheita e pós-colheita. Com ilustrações e passo a passo para cultivo orgânico e convencional.'
  },
  {
    id: 'maneio-suinocultura-elementos-principais-criacao',
    title: 'Manual de Suinocultura - Maneio e Técnicas de Criação',
    author: 'Emater Livraria',
    year: 2019,
    description: '🐷 Manual completo de suinocultura. PDF grátis com técnicas de maneio, nutrição e gestão da produção de suínos.',
    category: 'Outros / Técnicos',
    pdfUrl: '#',
    longDescription: 'Compilação das técnicas mais modernas de maneio na suinocultura, com foco em bem-estar animal, eficiência produtiva e sustentabilidade ambiental. Ideal para produtores que desejam atualizar suas práticas. Inclui protocolos de biossegurança, manejo reprodutivo e gestão ambiental.'
  }
];
const ArtigoIndividual: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  
  // Encontrar o artigo pelo ID
  const artigo = ARTIGOS_DADOS.find(a => a.id === id);
  
  if (!artigo) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Artigo não encontrado</h2>
          <Link 
            to="/artigos" 
            className="px-6 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800 inline-block"
          >
            Voltar para biblioteca
          </Link>
        </div>
      </div>
    );
  }

  const articleUrl = `https://revistafrica.com/artigo/${artigo.id}`;
  const yearDisplay = artigo.year > 0 ? artigo.year : `${Math.abs(artigo.year)} a.C.`;

  return (
    <>
      <Helmet>
        {/* Meta tags básicas */}
        <title>{artigo.title} PDF | Revista África</title>
        <meta name="description" content={artigo.description} />
        <link rel="canonical" href={articleUrl} />
        
        {/* Google Scholar Meta Tags */}
        <meta name="citation_title" content={artigo.title} />
        <meta name="citation_author" content={artigo.author} />
        <meta name="citation_publication_date" content={artigo.year > 0 ? `${artigo.year}/01/01` : `-${Math.abs(artigo.year)}/01/01`} />
        <meta name="citation_journal_title" content="Revista África" />
        <meta name="citation_pdf_url" content={artigo.pdfUrl} />
        <meta name="citation_abstract" content={artigo.description} />
        <meta name="citation_language" content="pt" />
        <meta name="citation_publisher" content="Revista África" />
        
        {/* Dublin Core Meta Tags */}
        <meta name="DC.title" content={artigo.title} />
        <meta name="DC.creator" content={artigo.author} />
        <meta name="DC.subject" content={artigo.category} />
        <meta name="DC.description" content={artigo.description} />
        <meta name="DC.publisher" content="Revista África" />
        <meta name="DC.date" content={artigo.year > 0 ? `${artigo.year}` : `-${Math.abs(artigo.year)}`} />
        <meta name="DC.type" content="Text" />
        <meta name="DC.format" content="application/pdf" />
        <meta name="DC.language" content="pt" />
        
        {/* Open Graph */}
        <meta property="og:title" content={`${artigo.title} PDF | Revista África`} />
        <meta property="og:description" content={artigo.description} />
        <meta property="og:url" content={articleUrl} />
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content={artigo.year > 0 ? `${artigo.year}-01-01` : `-${Math.abs(artigo.year)}-01-01`} />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={`${artigo.title} PDF | Revista África`} />
        <meta name="twitter:description" content={artigo.description} />
      </Helmet>

      {/* Dados Estruturados JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Book",
          "name": artigo.title,
          "author": {
            "@type": "Person",
            "name": artigo.author
          },
          "datePublished": artigo.year > 0 ? `${artigo.year}` : `-${Math.abs(artigo.year)}`,
          "description": artigo.description,
          "publisher": {
            "@type": "Organization",
            "name": "Revista África"
          },
          "inLanguage": "pt",
          "bookFormat": "https://schema.org/EBook",
          "genre": artigo.category,
          "isbn": "",
          "url": articleUrl,
          "sameAs": artigo.pdfUrl
        })}
      </script>

      <article className="min-h-screen bg-gray-50 py-12 px-4" itemScope itemType="https://schema.org/Book">
        <div className="max-w-4xl mx-auto">
          {/* Botão Voltar */}
          <Link 
            to="/artigos"
            className="flex items-center gap-2 text-green-700 hover:text-green-800 mb-6 font-medium"
          >
            <ArrowLeft size={20} />
            Voltar para biblioteca
          </Link>

          {/* Cabeçalho do Artigo */}
          <header className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6" itemProp="name">
              {artigo.title}
            </h1>

            <div className="space-y-4 text-gray-600 mb-6">
              <div className="flex items-center gap-2">
                <User size={20} className="text-green-600" />
                <span className="font-medium">Autor:</span>
                <span itemProp="author">{artigo.author}</span>
              </div>
              
              <div className="flex items-center gap-2">
                <Calendar size={20} className="text-green-600" />
                <span className="font-medium">Ano:</span>
                <span itemProp="datePublished">{yearDisplay}</span>
              </div>

              <div className="flex items-center gap-2">
                <BookOpen size={20} className="text-green-600" />
                <span className="font-medium">Categoria:</span>
                <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-semibold rounded-full" itemProp="genre">
                  {artigo.category}
                </span>
              </div>
            </div>

            {/* Botões de Ação */}
            <div className="flex flex-wrap gap-3">
              <a
                href={artigo.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-green-700 text-white rounded-lg hover:bg-green-800 transition-colors font-semibold shadow-md flex items-center gap-2"
                itemProp="url"
              >
                <Download size={20} />
                Baixar PDF
              </a>
              <button
                onClick={() => window.open(artigo.pdfUrl, '_blank')}
                className="px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition-colors font-semibold shadow-md flex items-center gap-2"
              >
                <BookOpen size={20} />
                Ler Online
              </button>
            </div>
          </header>

          {/* Descrição Detalhada */}
          <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Descrição</h2>
            <div className="prose max-w-none">
              <p className="text-gray-700 leading-relaxed text-lg" itemProp="description">
                {artigo.longDescription}
              </p>
            </div>
          </section>

          {/* Informações Técnicas */}
          <section className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Informações Técnicas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Título:</span>
                  <span className="font-medium" itemProp="name">{artigo.title}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Autor:</span>
                  <span className="font-medium" itemProp="author">{artigo.author}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Ano de Publicação:</span>
                  <span className="font-medium" itemProp="datePublished">{yearDisplay}</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Categoria:</span>
                  <span className="font-medium" itemProp="genre">{artigo.category}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Formato:</span>
                  <span className="font-medium">PDF</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Idioma:</span>
                  <span className="font-medium" itemProp="inLanguage">Português</span>
                </div>
              </div>
            </div>
          </section>

          {/* Link para página de artigos */}
          <div className="mt-8 text-center">
            <Link 
              to="/artigos"
              className="inline-flex items-center gap-2 text-green-700 hover:text-green-800 font-semibold"
            >
              <BookOpen size={20} />
              Explorar mais artigos na biblioteca
            </Link>
          </div>

          {/* Metadados estruturados adicionais */}
          <meta itemProp="inLanguage" content="pt" />
          <link itemProp="sameAs" href={articleUrl} />
        </div>
      </article>
    </>
  );
};

export default ArtigoIndividual;