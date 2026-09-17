import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Search, Filter, Download, ArrowRight, Eye } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { staticMagazines } from '../data/staticMagazines';
import { createSlug } from '../utils/seo';

const CATEGORY_COLORS: Record<string, string> = {
  Economia:  'bg-blue-100 text-blue-800 border-blue-200',
  Educação:  'bg-purple-100 text-purple-800 border-purple-200',
  Política:  'bg-red-100 text-red-800 border-red-200',
  Cultura:   'bg-orange-100 text-orange-800 border-orange-200',
  Outro:     'bg-gray-100 text-gray-700 border-gray-200',
};

const Artigos: React.FC = () => {
  const [searchTerm, setSearchTerm]           = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todas');
  const [visibleCount, setVisibleCount]         = useState(12);

  const categories = useMemo(() =>
    ['Todas', ...Array.from(new Set(staticMagazines.map(a => a.category)))],
    []
  );

  const filtered = useMemo(() => {
    let result = staticMagazines as any[];
    if (searchTerm) {
      const t = searchTerm.toLowerCase();
      result = result.filter(a =>
        a.title.toLowerCase().includes(t) ||
        (a.description && a.description.toLowerCase().includes(t)) ||
        (a.category && a.category.toLowerCase().includes(t))
      );
    }
    if (selectedCategory !== 'Todas') result = result.filter(a => a.category === selectedCategory);
    return result;
  }, [searchTerm, selectedCategory]);

  const visible = filtered.slice(0, visibleCount);

  /* reset visible count when filter changes */
  useEffect(() => { setVisibleCount(12); }, [searchTerm, selectedCategory]);

  return (
    <>
      <Helmet>
        <title>Biblioteca de Artigos — Revista África</title>
        <meta name="description" content="Explore a biblioteca completa de artigos acadêmicos da Revista África." />
        <link rel="canonical" href="https://revistafrica.com/artigos" />
      </Helmet>

      <div className="min-h-screen bg-gray-50">

        {/* ── Hero ── */}
        <section
          className="relative overflow-hidden py-16 px-4 text-center"
          style={{ background: 'linear-gradient(135deg, #052e16 0%, #14532d 60%, #166534 100%)' }}
        >
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=50')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div className="absolute inset-0 hero-pattern pointer-events-none" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card text-yellow-300 text-xs font-semibold tracking-widest uppercase mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
              Acervo Científico
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
              Biblioteca de <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(90deg,#fde68a,#ca8a04)' }}>Artigos</span>
            </h1>
            <p className="text-green-100/80 text-base mb-8">
              {staticMagazines.length} artigos acadêmicos disponíveis gratuitamente para download e leitura online.
            </p>

            {/* search */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Buscar por título, autor ou assunto..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="w-full pl-11 pr-4 py-4 rounded-xl bg-white shadow-2xl text-gray-900 text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
          </div>
        </section>

        {/* ── Filters + results ── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

          {/* category pills */}
          <div className="flex flex-wrap items-center gap-2 mb-6">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`cat-pill px-4 py-2 rounded-full text-sm font-medium border transition-all ${
                  selectedCategory === cat
                    ? 'active bg-brand-800 text-white border-brand-900 shadow-sm'
                    : 'bg-white text-gray-600 border-gray-200 hover:border-brand-400 hover:text-brand-700'
                }`}
              >
                {cat}
              </button>
            ))}
            <span className="ml-auto text-sm text-gray-400 font-medium flex items-center gap-1.5">
              <Filter size={13} />
              {filtered.length} resultado{filtered.length !== 1 ? 's' : ''}
            </span>
          </div>

          {/* grid */}
          {visible.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {visible.map((artigo: any) => {
                  const colorClass = CATEGORY_COLORS[artigo.category] ?? CATEGORY_COLORS['Outro'];
                  return (
                    <article
                      key={artigo.id || artigo._id}
                      className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col"
                    >
                      {/* cover */}
                      <Link to={`/artigo/${createSlug(artigo.title)}-${artigo._id || artigo.id}`} className="block overflow-hidden">
                        <img
                          src={artigo.coverUrl}
                          alt={artigo.title}
                          className="w-full h-44 object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </Link>

                      <div className="p-5 flex flex-col flex-grow">
                        {/* category + year */}
                        <div className="flex items-center gap-2 mb-3">
                          <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold border ${colorClass}`}>
                            {artigo.category}
                          </span>
                          <span className="text-xs text-gray-400">{artigo.year} · Ed. {artigo.edition}</span>
                        </div>

                        {/* title */}
                        <h2 className="font-serif font-bold text-gray-900 text-base mb-2 line-clamp-2 hover:text-brand-700 transition-colors flex-grow">
                          <Link to={`/artigo/${createSlug(artigo.title)}-${artigo._id || artigo.id}`}>
                            {artigo.title}
                          </Link>
                        </h2>

                        {/* description */}
                        <p className="text-gray-500 text-sm line-clamp-2 mb-4 leading-relaxed">
                          {artigo.description}
                        </p>

                        {/* actions */}
                        <div className="pt-3 border-t border-gray-50 flex gap-2">
                          <Link
                            to={`/artigo/${createSlug(artigo.title)}-${artigo._id || artigo.id}`}
                            className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-brand-800 text-white rounded-xl text-xs font-semibold hover:bg-brand-700 transition-colors"
                          >
                            <Eye size={13} />
                            Ver Detalhes
                          </Link>
                          <a
                            href={artigo.pdfUrl}
                            download
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center w-9 h-9 rounded-xl bg-gray-50 hover:bg-brand-50 border border-gray-200 hover:border-brand-300 text-gray-500 hover:text-brand-700 transition-colors flex-shrink-0"
                            title="Baixar PDF"
                          >
                            <Download size={14} />
                          </a>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>

              {/* load more */}
              {visibleCount < filtered.length && (
                <div className="text-center mt-10">
                  <button
                    onClick={() => setVisibleCount(v => v + 12)}
                    className="px-8 py-3 bg-white border-2 border-brand-700 text-brand-800 font-bold rounded-xl hover:bg-brand-800 hover:text-white transition-all duration-300 shadow-sm flex items-center gap-2 mx-auto"
                  >
                    Carregar mais artigos
                    <ArrowRight size={16} />
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-24 bg-white rounded-2xl border border-gray-100 shadow-sm">
              <BookOpen size={40} className="mx-auto text-gray-300 mb-4" />
              <h3 className="text-lg font-serif font-semibold text-gray-700 mb-2">Nenhum artigo encontrado</h3>
              <p className="text-gray-400 text-sm">Tente outros termos ou mude de categoria.</p>
            </div>
          )}

          {/* SEO note */}
          <div className="mt-14 rounded-2xl p-6 bg-brand-50 border border-brand-100 flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-brand-800 flex items-center justify-center flex-shrink-0 mt-0.5">
              <BookOpen size={18} className="text-yellow-400" />
            </div>
            <div>
              <h3 className="font-semibold text-brand-900 mb-1">Indexado no Google Scholar</h3>
              <p className="text-sm text-brand-700">
                Cada artigo possui página própria com metadados estruturados, facilitando a descoberta por pesquisadores e estudantes em todo o mundo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Artigos;
