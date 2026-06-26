import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Filter, BookOpen } from 'lucide-react';
import { Magazine } from '../types';
import { magazinesAPI } from '../services/api';
import { staticMagazines } from '../data/staticMagazines';
import { createSlug } from '../utils/seo';
import MagazineCard from '../components/MagazineCard';
import PDFViewerModal from '../components/PDFViewerModal';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [magazines, setMagazines] = useState<Magazine[]>(staticMagazines as any);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todas');
  const [selectedMagazine, setSelectedMagazine] = useState<Magazine | null>(null);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMagazines = async () => {
      try {
        const data = await magazinesAPI.getAll();
        setMagazines(data);
      } catch (error) {
        console.error('Erro ao carregar revistas:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchMagazines();
  }, []);

  const categories = useMemo(() => {
    const cats = Array.from(new Set(magazines.map(m => m.category)));
    return ['Todas', ...cats];
  }, [magazines]);

  const filteredMagazines = useMemo(() => {
    return magazines.filter(mag => {
      const matchesSearch = mag.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            mag.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'Todas' || mag.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [magazines, searchTerm, selectedCategory]);

  const handleOpenViewer = (mag: Magazine) => {
    setSelectedMagazine(mag);
    setIsViewerOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="bg-brand-900 text-white py-16 px-4 border-b-4 border-yellow-600">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <img 
                src="/logo.svg" 
                alt="Revista África Logo" 
                className="h-32 w-32 object-cover border-4 border-yellow-600 shadow-md"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-tight mb-4">
              Bem-vindo à Revista África
            </h1>
            <p className="text-xl text-brand-100 font-serif mb-8 max-w-3xl mx-auto">
              Promovendo a produção, avaliação e divulgação de conhecimento científico e acadêmico de excelência.
            </p>
            <div className="flex justify-center gap-4 mb-10">
              <button 
                onClick={() => navigate('/sobre')}
                className="px-8 py-3 bg-yellow-600 text-white font-bold text-lg hover:bg-yellow-700 transition-colors border border-yellow-800"
              >
                Conheça a Revista
              </button>
              <button 
                onClick={() => navigate('/submissoes')}
                className="px-8 py-3 bg-transparent text-white font-bold text-lg hover:bg-brand-800 transition-colors border-2 border-white"
              >
                Submeter Artigo
              </button>
            </div>
          </div>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400 group-focus-within:text-brand-600 transition-colors" />
            </div>
            <input
              type="text"
              className="block w-full pl-11 pr-4 py-4 text-gray-900 bg-white border border-gray-300 shadow-sm focus:ring-0 focus:border-brand-600 transition-colors"
              placeholder="Buscar artigos por título ou assunto..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-grow w-full">
        <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8 border-b-2 border-brand-800 pb-2">Artigos Publicados</h2>
        
        {/* Filters */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-10 gap-4">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 max-w-full no-scrollbar">
             {categories.map(cat => (
               <button
                 key={cat}
                 onClick={() => setSelectedCategory(cat)}
                 className={`px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors border ${
                   selectedCategory === cat 
                     ? 'bg-brand-800 text-white border-brand-800' 
                     : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-50'
                 }`}
               >
                 {cat}
               </button>
             ))}
          </div>
          <div className="text-gray-500 text-sm font-medium flex items-center gap-2">
            <Filter size={16} />
            {filteredMagazines.length} artigos encontrados
          </div>
        </div>

        {/* Grid - Layout em Lista Vertical */}
        {loading && magazines.length === 0 ? (
          <div className="text-center py-20">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-brand-700"></div>
            <p className="mt-4 text-gray-500">Carregando revistas...</p>
          </div>
        ) : filteredMagazines.length > 0 ? (
          <div className="space-y-6 max-w-5xl mx-auto">
            {filteredMagazines.map(mag => (
              <div 
                key={mag.id}
                className="bg-white transition-shadow overflow-hidden border border-gray-200 hover:border-brand-500 shadow-sm"
              >
                <div className="flex flex-col sm:flex-row gap-6 p-6">
                  {/* Capa */}
                  <div className="flex-shrink-0">
                    <img 
                      src={mag.coverUrl} 
                      alt={mag.title}
                      className="w-full sm:w-48 h-64 object-cover border border-gray-300"
                    />
                  </div>
                  
                  {/* Conteúdo */}
                  <div className="flex-grow flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <h3 
                          className="text-2xl font-serif font-bold text-brand-900 hover:text-brand-600 transition-colors cursor-pointer"
                          onClick={() => navigate(`/artigo/${createSlug(mag.title)}-${mag._id || mag.id}`)}
                        >
                          {mag.title}
                        </h3>
                        <span className="flex-shrink-0 px-3 py-1 bg-gray-100 text-brand-800 text-sm font-semibold border border-gray-200">
                          {mag.category}
                        </span>
                      </div>
                      
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {mag.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4 border-t border-gray-100 pt-4">
                        <span className="flex items-center gap-1 font-medium">
                          <BookOpen size={16} className="text-brand-600" />
                          Edição {mag.edition}
                        </span>
                        <span>•</span>
                        <span>Ano {mag.year}</span>
                        <span>•</span>
                        <span>{new Date(mag.uploadDate).toLocaleDateString('pt-PT')}</span>
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      <button
                        onClick={() => navigate(`/artigo/${createSlug(mag.title)}-${mag._id || mag.id}`)}
                        className="px-6 py-2 bg-brand-800 text-white hover:bg-brand-900 transition-colors font-semibold text-sm border border-brand-900"
                      >
                        Ver Detalhes
                      </button>
                      <button
                        onClick={() => handleOpenViewer(mag)}
                        className="px-6 py-2 bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 transition-colors font-semibold text-sm"
                      >
                        Ler Artigo
                      </button>
                      <a
                        href={mag.pdfUrl}
                        download
                        className="px-6 py-2 bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 transition-colors font-semibold text-sm"
                      >
                        Baixar PDF
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white border border-gray-300">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-50 mb-4 text-gray-400 border border-gray-200">
              <BookOpen size={32} />
            </div>
            <h3 className="text-lg font-serif font-medium text-gray-900 mb-1">Nenhum artigo encontrado</h3>
            <p className="text-gray-500">Tente buscar por outros termos ou mudar a categoria.</p>
          </div>
        )}
      </section>

      {/* PDF Viewer Modal */}
      <PDFViewerModal 
        magazine={selectedMagazine} 
        isOpen={isViewerOpen} 
        onClose={() => setIsViewerOpen(false)} 
      />
    </div>
  );
};

export default Home;