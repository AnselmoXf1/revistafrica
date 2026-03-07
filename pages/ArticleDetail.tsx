import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Download, Calendar, BookOpen, User, FileText, ArrowLeft } from 'lucide-react';
import { Magazine } from '../types';
import { magazinesAPI } from '../services/api';
import PDFViewerModal from '../components/PDFViewerModal';
import ArticleStructuredData from '../components/ArticleStructuredData';
import { Helmet } from 'react-helmet-async';

const ArticleDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [article, setArticle] = useState<Magazine | null>(null);
  const [loading, setLoading] = useState(true);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  useEffect(() => {
    const fetchArticle = async () => {
      if (!id) return;
      try {
        const data = await magazinesAPI.getById(id);
        setArticle(data);
      } catch (error) {
        console.error('Erro ao carregar artigo:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchArticle();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-green-700"></div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Artigo não encontrado</h2>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800"
          >
            Voltar para início
          </button>
        </div>
      </div>
    );
  }

  const articleUrl = `https://revistafrica.com/#/artigo/${article._id || article.id}`;
  const publishDate = new Date(article.uploadDate).toISOString().split('T')[0];

  return (
    <>
      <Helmet>
        {/* Meta tags básicas */}
        <title>{article.title} - RevistaAfrica</title>
        <meta name="description" content={article.description} />
        <link rel="canonical" href={articleUrl} />
        
        {/* Google Scholar Meta Tags */}
        <meta name="citation_title" content={article.title} />
        <meta name="citation_author" content="RevistaAfrica" />
        <meta name="citation_publication_date" content={`${article.year}/01/01`} />
        <meta name="citation_journal_title" content="RevistaAfrica" />
        <meta name="citation_volume" content={article.edition.toString()} />
        <meta name="citation_pdf_url" content={article.pdfUrl} />
        <meta name="citation_abstract" content={article.description} />
        <meta name="citation_language" content="pt" />
        <meta name="citation_publisher" content="RevistaAfrica" />
        
        {/* Dublin Core Meta Tags */}
        <meta name="DC.title" content={article.title} />
        <meta name="DC.creator" content="RevistaAfrica" />
        <meta name="DC.subject" content={article.category} />
        <meta name="DC.description" content={article.description} />
        <meta name="DC.publisher" content="RevistaAfrica" />
        <meta name="DC.date" content={publishDate} />
        <meta name="DC.type" content="Text" />
        <meta name="DC.format" content="application/pdf" />
        <meta name="DC.language" content="pt" />
        
        {/* Open Graph */}
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.description} />
        <meta property="og:image" content={article.coverUrl} />
        <meta property="og:url" content={articleUrl} />
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content={publishDate} />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={article.title} />
        <meta name="twitter:description" content={article.description} />
        <meta name="twitter:image" content={article.coverUrl} />
      </Helmet>

      {/* Dados Estruturados JSON-LD */}
      <ArticleStructuredData article={article} />

      <article className="min-h-screen bg-gray-50 py-12 px-4" itemScope itemType="https://schema.org/ScholarlyArticle">
        <div className="max-w-4xl mx-auto">
          {/* Botão Voltar */}
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-green-700 hover:text-green-800 mb-6 font-medium"
          >
            <ArrowLeft size={20} />
            Voltar para artigos
          </button>

          {/* Cabeçalho do Artigo */}
          <header className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Capa */}
              <div className="flex-shrink-0">
                <img 
                  src={article.coverUrl} 
                  alt={article.title}
                  itemProp="image"
                  className="w-full md:w-64 h-auto rounded-lg shadow-md"
                />
              </div>

              {/* Informações */}
              <div className="flex-grow">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" itemProp="headline name">
                  {article.title}
                </h1>

                <div className="space-y-3 text-gray-600 mb-6">
                  <div className="flex items-center gap-2">
                    <User size={18} className="text-green-600" />
                    <span itemProp="author" itemScope itemType="https://schema.org/Organization">
                      <span itemProp="name">RevistaAfrica</span>
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <BookOpen size={18} className="text-green-600" />
                    <span>
                      <span itemProp="isPartOf" itemScope itemType="https://schema.org/Periodical">
                        <span itemProp="name">RevistaAfrica</span>
                      </span>
                      {' - '}Edição <span itemProp="volumeNumber">{article.edition}</span>
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Calendar size={18} className="text-green-600" />
                    <time itemProp="datePublished" dateTime={publishDate}>
                      Ano {article.year}
                    </time>
                  </div>

                  <div className="flex items-center gap-2">
                    <FileText size={18} className="text-green-600" />
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-semibold rounded-full" itemProp="about">
                      {article.category}
                    </span>
                  </div>
                </div>

                {/* Botões de Ação */}
                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => setIsViewerOpen(true)}
                    className="px-6 py-3 bg-green-700 text-white rounded-lg hover:bg-green-800 transition-colors font-semibold shadow-md flex items-center gap-2"
                  >
                    <BookOpen size={20} />
                    Ler Artigo
                  </button>
                  <a
                    href={article.pdfUrl}
                    download
                    itemProp="url"
                    className="px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition-colors font-semibold shadow-md flex items-center gap-2"
                  >
                    <Download size={20} />
                    Baixar PDF
                  </a>
                </div>
              </div>
            </div>
          </header>

          {/* Resumo */}
          <section className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Resumo</h2>
            <div className="prose max-w-none">
              <p className="text-gray-700 leading-relaxed text-lg" itemProp="abstract description">
                {article.description}
              </p>
            </div>

            {/* Link direto para PDF */}
            <div className="mt-8 p-6 bg-green-50 rounded-lg border border-green-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Acesso ao Documento Completo</h3>
              <p className="text-gray-600 mb-4">
                O artigo completo está disponível em formato PDF para leitura e download.
              </p>
              <a
                href={article.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-green-700 hover:text-green-800 font-semibold"
              >
                <FileText size={20} />
                Abrir PDF no navegador
              </a>
            </div>
          </section>

          {/* Metadados estruturados adicionais */}
          <meta itemProp="inLanguage" content="pt" />
          <link itemProp="sameAs" href={articleUrl} />
        </div>
      </article>

      {/* PDF Viewer Modal */}
      <PDFViewerModal 
        magazine={article} 
        isOpen={isViewerOpen} 
        onClose={() => setIsViewerOpen(false)} 
      />
    </>
  );
};

export default ArticleDetail;
