import React, { useState, useEffect, useMemo } from 'react';
import { Search, Filter, BookOpen } from 'lucide-react';
import { Magazine } from '../types';
import { magazinesAPI } from '../services/api';
import MagazineCard from '../components/MagazineCard';
import PDFViewerModal from '../components/PDFViewerModal';

const Home: React.FC = () => {
  const [magazines, setMagazines] = useState<Magazine[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todas');
  const [selectedMagazine, setSelectedMagazine] = useState<Magazine | null>(null);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [loading, setLoading] = useState(true);

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
      <section className="bg-gradient-to-r from-green-800 to-green-700 text-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <img 
                src="/logo.svg" 
                alt="RevistaAfrica Logo" 
                className="h-32 w-32 rounded-full object-cover border-4 border-yellow-400 shadow-2xl"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
              Revista África
            </h1>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 text-left">
              <h2 className="text-2xl font-bold mb-4 text-yellow-300">Sobre a RevistaAfrica</h2>
              <div className="text-lg text-green-50 leading-relaxed space-y-4">
                <p>
                  A <strong>RevistaAfrica</strong> é uma publicação acadêmica dedicada à valorização do conhecimento, da pesquisa e da reflexão crítica sobre temas contemporâneos que impactam África e a sociedade global. Nosso objectivo é avaliar e divulgar trabalhos científicos, artigos de opinião e estudos interdisciplinares de forma rigorosa e acessível, promovendo a troca de ideias entre pesquisadores, estudantes e profissionais.
                </p>
                <p>
                  A revista busca estimular a produção acadêmica de qualidade, contribuir para o debate científico e fortalecer a cultura de investigação e inovação no continente africano.
                </p>
                <div className="bg-green-900/30 p-4 rounded-lg mt-4">
                  <p className="font-semibold text-yellow-300 mb-2">Missão:</p>
                  <p className="text-base">
                    Promover a produção, avaliação e divulgação de conhecimento científico e acadêmico de qualidade, incentivando a pesquisa, a reflexão crítica e a inovação, contribuindo para o desenvolvimento intelectual e social de África e da comunidade global.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400 group-focus-within:text-green-600 transition-colors" />
            </div>
            <input
              type="text"
              className="block w-full pl-11 pr-4 py-4 rounded-full text-gray-900 bg-white border-0 shadow-xl focus:ring-4 focus:ring-yellow-500/30 focus:outline-none transition-shadow"
              placeholder="Buscar artigos por título ou assunto..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-grow w-full">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Artigos Publicados</h2>
        
        {/* Filters */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-10 gap-4">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 max-w-full no-scrollbar">
             {categories.map(cat => (
               <button
                 key={cat}
                 onClick={() => setSelectedCategory(cat)}
                 className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                   selectedCategory === cat 
                     ? 'bg-green-700 text-white shadow-md' 
                     : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
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
        {loading ? (
          <div className="text-center py-20">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-green-700"></div>
            <p className="mt-4 text-gray-500">Carregando revistas...</p>
          </div>
        ) : filteredMagazines.length > 0 ? (
          <div className="space-y-6 max-w-5xl mx-auto">
            {filteredMagazines.map(mag => (
              <div 
                key={mag.id}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden border border-gray-100"
              >
                <div className="flex flex-col sm:flex-row gap-6 p-6">
                  {/* Capa */}
                  <div className="flex-shrink-0">
                    <img 
                      src={mag.coverUrl} 
                      alt={mag.title}
                      className="w-full sm:w-48 h-64 object-cover rounded-lg shadow-md"
                    />
                  </div>
                  
                  {/* Conteúdo */}
                  <div className="flex-grow flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <h3 className="text-2xl font-bold text-gray-900 hover:text-green-700 transition-colors">
                          {mag.title}
                        </h3>
                        <span className="flex-shrink-0 px-3 py-1 bg-green-100 text-green-800 text-sm font-semibold rounded-full">
                          {mag.category}
                        </span>
                      </div>
                      
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {mag.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                        <span className="flex items-center gap-1">
                          <BookOpen size={16} className="text-green-600" />
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
                        onClick={() => handleOpenViewer(mag)}
                        className="px-6 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800 transition-colors font-semibold shadow-md"
                      >
                        Ler Artigo
                      </button>
                      <a
                        href={mag.pdfUrl}
                        download
                        className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-semibold"
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
          <div className="text-center py-20 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4 text-gray-400">
              <BookOpen size={32} />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-1">Nenhum artigo encontrado</h3>
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