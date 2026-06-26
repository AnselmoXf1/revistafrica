import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Search, Filter, Download } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { staticMagazines } from '../data/staticMagazines';
import { createSlug } from '../utils/seo';

const Artigos: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todas');
  const [filteredArtigos, setFilteredArtigos] = useState(staticMagazines);

  // Extrair categorias únicas
  const categories = ['Todas', ...Array.from(new Set(staticMagazines.map(artigo => artigo.category)))];

  // Filtrar artigos
  useEffect(() => {
    let result = staticMagazines;

    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(artigo => 
        artigo.title.toLowerCase().includes(term) ||
        (artigo.description && artigo.description.toLowerCase().includes(term)) ||
        (artigo.category && artigo.category.toLowerCase().includes(term))
      );
    }

    if (selectedCategory !== 'Todas') {
      result = result.filter(artigo => artigo.category === selectedCategory);
    }

    setFilteredArtigos(result);
  }, [searchTerm, selectedCategory]);

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
            "itemListElement": staticMagazines.map((artigo, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "item": {
                "@type": "Book",
                "name": artigo.title,
                "author": artigo.author || "Autor não especificado",
                "datePublished": artigo.year ? `${artigo.year}` : undefined,
                "description": artigo.description,
                "url": `https://revistafrica.com/artigo/${createSlug(artigo.title)}-${artigo.id}`
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
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8 border border-gray-200">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Barra de busca */}
              <div className="flex-grow">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder="Buscar artigos por título ou assunto..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 focus:ring-0 focus:border-brand-600 transition-colors"
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
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 focus:ring-0 focus:border-brand-600 transition-colors appearance-none"
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>
                         {category || 'Sem Categoria'}
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
              Mostrando <span className="font-semibold text-brand-700">{filteredArtigos.length}</span> de {staticMagazines.length} artigos
            </p>
          </div>

          {/* Lista de Artigos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArtigos.map((artigo) => (
              <div 
                key={artigo.id} 
                className="bg-white border border-gray-200 shadow-sm overflow-hidden hover:border-brand-500 hover:shadow-md transition-all duration-300"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h2 className="text-xl font-serif font-bold text-gray-900 mb-2 line-clamp-2">
                        <Link 
                          to={`/artigo/${createSlug(artigo.title)}-${artigo.id}`} 
                          className="hover:text-brand-700 transition-colors"
                        >
                          {artigo.title}
                        </Link>
                      </h2>
                      <p className="text-gray-600 text-sm mb-2">
                        <span className="font-medium">Autor:</span> {artigo.author || 'Autor não especificado'}
                      </p>
                      <p className="text-gray-600 text-sm mb-3">
                        <span className="font-medium">Ano:</span> {artigo.year || 'Não especificado'}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-4 line-clamp-3">
                    {artigo.description}
                  </p>

                  <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                    <Link 
                      to={`/artigo/${createSlug(artigo.title)}-${artigo.id}`}
                      className="text-brand-700 hover:text-brand-900 font-medium flex items-center gap-2"
                    >
                      <BookOpen size={18} />
                      Ver detalhes
                    </Link>
                    {artigo.category && (
                      <span className="px-3 py-1 bg-gray-100 text-brand-800 text-xs font-semibold border border-gray-200">
                        {artigo.category}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mensagem se não houver resultados */}
          {filteredArtigos.length === 0 && (
            <div className="text-center py-12 bg-white border border-gray-300 mt-4">
              <BookOpen size={48} className="mx-auto text-gray-400 mb-4" />
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2">Nenhum artigo encontrado</h3>
              <p className="text-gray-600">
                Tente ajustar sua busca ou filtro para encontrar o que procura.
              </p>
            </div>
          )}

          {/* Informação sobre indexação */}
          <div className="mt-12 bg-brand-50 border border-brand-200 p-6">
            <h3 className="text-lg font-serif font-semibold text-gray-900 mb-2">Otimizado para Buscas no Google</h3>
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