import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Download, Calendar, User, ArrowLeft, BookOpen } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { magazinesAPI } from '../services/api';
import { staticMagazines } from '../data/staticMagazines';
import PDFViewerModal from '../components/PDFViewerModal';

const ArtigoIndividual: React.FC = () => {
  const { slugId } = useParams<{ slugId: string }>();
  
  // Extrai o ID do final do slug (ex: /artigo/titulo-do-artigo-69ccd30e0cb94f1ce2a0e1a3)
  const id = slugId ? slugId.split('-').pop() : '';

  // Iniciar com dados estáticos se existirem, para não haver loading demorado
  const initialData = staticMagazines.find(m => m.id === id || m._id === id);
  const [artigo, setArtigo] = useState<any>(initialData || null);
  const [loading, setLoading] = useState(!initialData);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    try {
      setIsDownloading(true);
      const res = await fetch(artigo.pdfUrl);
      if (!res.ok) throw new Error("Falha no download");
      const blob = await res.blob();
      const pdfBlob = new Blob([blob], { type: 'application/pdf' });
      const url = URL.createObjectURL(pdfBlob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${artigo.title}.pdf`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (err) {
      window.open(artigo.pdfUrl, '_blank');
    } finally {
      setIsDownloading(false);
    }
  };

  useEffect(() => {
    const fetchArtigo = async () => {
      try {
        if (!id) return;
        const data = await magazinesAPI.getById(id);
        setArtigo(data);
      } catch (error) {
        console.error("Erro ao carregar os detalhes do artigo:", error);
      } finally {
        setLoading(false);
      }
    };
    
    // Sempre tentar buscar do servidor para ter dados frescos,
    // mas já mostrando os estáticos enquanto isso
    fetchArtigo();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-brand-700"></div>
          <p className="mt-4 text-gray-500">Carregando artigo...</p>
        </div>
      </div>
    );
  }

  if (!artigo) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center border border-gray-300 p-10 bg-white shadow-sm">
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">Artigo não encontrado</h2>
          <p className="text-gray-600 mb-6">O artigo que tentou acessar não existe ou foi removido.</p>
          <Link 
            to="/artigos" 
            className="px-6 py-2 bg-brand-800 text-white hover:bg-brand-900 inline-block font-semibold border border-brand-900 transition-colors"
          >
            Voltar para a biblioteca
          </Link>
        </div>
      </div>
    );
  }

  const articleUrl = window.location.href;
  const yearDisplay = artigo.year ? artigo.year : 'Não especificado';
  const authorDisplay = artigo.author || 'Autor não especificado';
  const descriptionDisplay = artigo.longDescription || artigo.description || 'Descrição não disponível';
  const categoryDisplay = artigo.category || 'Geral';

  return (
    <>
      <Helmet>
        <title>{artigo.title} | Revista África</title>
        <meta name="description" content={artigo.description} />
        <link rel="canonical" href={articleUrl} />
      </Helmet>

      {/* JSON-LD Structured Data para SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ScholarlyArticle",
          "headline": artigo.title,
          "image": artigo.coverUrl ? [artigo.coverUrl] : [],
          "author": [
            {
              "@type": "Person",
              "name": authorDisplay
            }
          ],
          "datePublished": yearDisplay !== 'Não especificado' ? `${yearDisplay}-01-01` : undefined,
          "description": descriptionDisplay,
          "url": articleUrl,
          "publisher": {
            "@type": "Organization",
            "name": "Revista África",
            "logo": {
              "@type": "ImageObject",
              "url": "https://revistafrica.com/logo.svg"
            }
          }
        })}
      </script>

      <article className="min-h-screen bg-gray-50 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Botão Voltar */}
          <Link 
            to="/artigos"
            className="flex items-center gap-2 text-brand-800 hover:text-brand-600 mb-6 font-medium transition-colors w-fit"
          >
            <ArrowLeft size={20} />
            Voltar para biblioteca
          </Link>

          {/* Cabeçalho do Artigo */}
          <header className="bg-white border border-gray-300 shadow-sm p-8 mb-8">
            <div className="flex flex-col md:flex-row gap-8">
              {artigo.coverUrl && (
                <div className="flex-shrink-0">
                  <img 
                    src={artigo.coverUrl} 
                    alt={artigo.title}
                    className="w-full md:w-64 h-auto object-cover border border-gray-300 shadow-sm"
                  />
                </div>
              )}
              
              <div className="flex-grow">
                <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
                  {artigo.title}
                </h1>

                <div className="space-y-4 text-gray-600 mb-6">
                  <div className="flex items-center gap-2">
                    <User size={20} className="text-yellow-600" />
                    <span className="font-medium">Autor:</span>
                    <span>{authorDisplay}</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Calendar size={20} className="text-yellow-600" />
                    <span className="font-medium">Ano:</span>
                    <span>{yearDisplay}</span>
                  </div>

                  {artigo.edition && (
                    <div className="flex items-center gap-2">
                      <BookOpen size={20} className="text-yellow-600" />
                      <span className="font-medium">Edição:</span>
                      <span>{artigo.edition}</span>
                    </div>
                  )}

                  <div className="flex items-center gap-2 mt-4">
                    <span className="px-3 py-1 bg-brand-50 text-brand-800 text-sm font-semibold border border-brand-200">
                      {categoryDisplay}
                    </span>
                  </div>
                </div>

                {/* Botões de Ação */}
                <div className="flex flex-wrap gap-3 mt-8 pt-6 border-t border-gray-200">
                  {artigo.pdfUrl && (
                    <>
                      <button
                        onClick={handleDownload}
                        disabled={isDownloading}
                        className="px-6 py-3 bg-brand-800 text-white hover:bg-brand-900 transition-colors font-semibold shadow-sm flex items-center gap-2 border border-brand-900 disabled:opacity-70"
                      >
                        {isDownloading ? (
                           <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        ) : (
                           <Download size={20} />
                        )}
                        {isDownloading ? 'Baixando...' : 'Baixar PDF'}
                      </button>
                      <button
                        onClick={() => setIsViewerOpen(true)}
                        className="px-6 py-3 bg-white text-brand-900 hover:bg-gray-50 transition-colors font-semibold shadow-sm flex items-center gap-2 border border-brand-300"
                      >
                        <BookOpen size={20} />
                        Ler Online
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </header>

          {/* Descrição Detalhada */}
          <section className="bg-white border border-gray-300 shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-serif font-bold text-brand-900 mb-4 border-b-2 border-brand-800 pb-2 inline-block">Resumo / Descrição</h2>
            <div className="prose max-w-none mt-4">
              <p className="text-gray-700 leading-relaxed text-lg font-sans">
                {descriptionDisplay}
              </p>
            </div>
          </section>

          {/* Informações Técnicas */}
          <section className="bg-white border border-gray-300 shadow-sm p-8">
            <h2 className="text-2xl font-serif font-bold text-brand-900 mb-4 border-b-2 border-brand-800 pb-2 inline-block">Informações Técnicas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="space-y-3">
                <div className="flex justify-between border-b border-gray-100 pb-2">
                  <span className="text-gray-600 font-medium">Título:</span>
                  <span className="text-right ml-4 text-gray-900">{artigo.title}</span>
                </div>
                <div className="flex justify-between border-b border-gray-100 pb-2">
                  <span className="text-gray-600 font-medium">Autor:</span>
                  <span className="text-right ml-4 text-gray-900">{authorDisplay}</span>
                </div>
                <div className="flex justify-between border-b border-gray-100 pb-2">
                  <span className="text-gray-600 font-medium">Ano:</span>
                  <span className="text-right ml-4 text-gray-900">{yearDisplay}</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between border-b border-gray-100 pb-2">
                  <span className="text-gray-600 font-medium">Categoria:</span>
                  <span className="text-right ml-4 text-gray-900">{categoryDisplay}</span>
                </div>
                <div className="flex justify-between border-b border-gray-100 pb-2">
                  <span className="text-gray-600 font-medium">Formato:</span>
                  <span className="text-right ml-4 text-gray-900">PDF</span>
                </div>
                <div className="flex justify-between border-b border-gray-100 pb-2">
                  <span className="text-gray-600 font-medium">Idioma:</span>
                  <span className="text-right ml-4 text-gray-900">Português</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </article>

      <PDFViewerModal 
        magazine={artigo} 
        isOpen={isViewerOpen} 
        onClose={() => setIsViewerOpen(false)} 
      />
    </>
  );
};

export default ArtigoIndividual;