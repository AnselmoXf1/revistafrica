import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, BookOpen, Users, Globe, Award, ArrowRight, ChevronDown, Filter, FileText, Download } from 'lucide-react';
import { Magazine } from '../types';
import { magazinesAPI } from '../services/api';
import { staticMagazines } from '../data/staticMagazines';
import { createSlug } from '../utils/seo';
import PDFViewerModal from '../components/PDFViewerModal';

/* ─── Stats ──────────────────────────────────────────────────── */
const STATS = [
  { icon: FileText,  value: '40+',  label: 'Artigos Publicados' },
  { icon: Users,     value: '80+',  label: 'Autores Colaboradores' },
  { icon: Globe,     value: '3',    label: 'Países Alcançados' },
  { icon: Award,     value: 'A2',   label: 'Qualis CAPES' },
];

/* ─── Features ───────────────────────────────────────────────── */
const FEATURES = [
  {
    icon: '📖',
    title: 'Acesso Aberto',
    desc: 'Todos os artigos são de acesso livre e gratuito, disponíveis para download imediato.',
  },
  {
    icon: '🔬',
    title: 'Revisão por Pares',
    desc: 'Processo rigoroso de avaliação cega por especialistas para garantir excelência científica.',
  },
  {
    icon: '🌍',
    title: 'Foco Africano',
    desc: 'Valoriza o conhecimento, a cultura e a ciência produzida no e sobre o continente africano.',
  },
  {
    icon: '📑',
    title: 'Interdisciplinar',
    desc: 'Publica pesquisas em Economia, Educação, Política, Cultura e demais áreas do saber.',
  },
];

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [magazines, setMagazines]           = useState<Magazine[]>(staticMagazines as any);
  const [searchTerm, setSearchTerm]         = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todas');
  const [selectedMagazine, setSelectedMagazine] = useState<Magazine | null>(null);
  const [isViewerOpen, setIsViewerOpen]     = useState(false);
  const [loading, setLoading]               = useState(false);
  const [showAll, setShowAll]               = useState(false);

  useEffect(() => {
    const fetchMagazines = async () => {
      try {
        const data = await magazinesAPI.getAll();
        setMagazines(data);
      } catch {
        /* keep static fallback */
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
      const matchesSearch =
        mag.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        mag.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'Todas' || mag.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [magazines, searchTerm, selectedCategory]);

  const visibleMagazines = showAll ? filteredMagazines : filteredMagazines.slice(0, 8);

  const handleOpenViewer = (mag: Magazine) => {
    setSelectedMagazine(mag);
    setIsViewerOpen(true);
  };

  const scrollToArticles = () => {
    document.getElementById('articles-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col">

      {/* ════════════════════════════════════════════════
          HERO
      ════════════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #052e16 0%, #14532d 45%, #166534 70%, #0f3d22 100%)',
          minHeight: '92vh',
        }}
      >
        {/* background: africa landscape image overlay */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?auto=format&fit=crop&w=1920&q=60')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center 40%',
          }}
        />

        {/* decorative shapes */}
        <div className="absolute top-0 left-0 w-full h-full hero-pattern pointer-events-none" />
        <div className="absolute top-12 right-12 w-72 h-72 rounded-full bg-yellow-600/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-green-700/20 blur-3xl pointer-events-none" />

        {/* floating accent circles */}
        <div className="absolute top-20 left-8 w-3 h-3 rounded-full bg-yellow-500/60 float-badge" />
        <div className="absolute top-40 right-20 w-2 h-2 rounded-full bg-green-400/60 float-badge" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-32 left-24 w-4 h-4 rounded-full bg-yellow-400/40 float-badge" style={{ animationDelay: '2s' }} />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-28 flex flex-col items-center text-center">

          {/* logo */}
          <div className="mb-8 fade-in-up">
            <div className="relative inline-block">
              <div className="absolute inset-0 rounded-full bg-yellow-600/30 blur-xl scale-150" />
              <img
                src="/logo.svg"
                alt="Revista África"
                className="relative h-28 w-28 object-cover rounded-full border-4 border-yellow-500 shadow-2xl"
              />
            </div>
          </div>

          {/* badge */}
          <div className="mb-5 fade-in-up">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card text-yellow-300 text-xs font-semibold tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
              Periódico Científico de Acesso Aberto
            </span>
          </div>

          {/* title */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight mb-6 fade-in-up-delay max-w-4xl">
            Revista{' '}
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(90deg, #fde68a, #ca8a04)' }}>
              África
            </span>
          </h1>

          <p className="text-lg md:text-xl text-green-100/90 mb-10 max-w-2xl leading-relaxed fade-in-up-delay-2">
            Promovendo a produção, avaliação e divulgação de conhecimento científico e acadêmico de excelência sobre e pelo continente africano.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 fade-in-up-delay-2">
            <button
              onClick={() => navigate('/sobre')}
              className="group px-8 py-4 bg-yellow-600 hover:bg-yellow-500 text-white font-bold text-base transition-all duration-300 rounded-lg shadow-lg hover:shadow-yellow-500/30 flex items-center gap-2"
            >
              Conheça a Revista
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => navigate('/submissoes')}
              className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold text-base transition-all duration-300 rounded-lg border border-white/30 hover:border-white/60"
            >
              Submeter Artigo
            </button>
          </div>

          {/* search bar */}
          <div className="w-full max-w-2xl fade-in-up-delay-2">
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400 group-focus-within:text-brand-600 transition-colors" />
              </div>
              <input
                type="text"
                className="block w-full pl-13 pr-4 py-4 text-gray-900 bg-white rounded-xl shadow-2xl focus:outline-none focus:ring-2 focus:ring-yellow-500 text-base placeholder-gray-400"
                placeholder="Buscar artigos por título, autor ou assunto..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
              />
              {searchTerm && (
                <button
                  onClick={scrollToArticles}
                  className="absolute right-3 top-1/2 -translate-y-1/2 px-4 py-2 bg-brand-800 text-white rounded-lg text-sm font-medium hover:bg-brand-700 transition-colors"
                >
                  Buscar
                </button>
              )}
            </div>
          </div>

          {/* scroll cue */}
          <button
            onClick={scrollToArticles}
            className="mt-14 text-white/50 hover:text-white/80 transition-colors flex flex-col items-center gap-1 text-xs"
          >
            <span>Ver artigos</span>
            <ChevronDown size={20} className="animate-bounce" />
          </button>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          STATS BAR
      ════════════════════════════════════════════════ */}
      <section className="bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {STATS.map(({ icon: Icon, value, label }) => (
            <div key={label} className="stat-card flex flex-col items-center text-center p-4 rounded-xl hover:bg-brand-50 transition-colors group">
              <div className="w-11 h-11 rounded-full bg-brand-100 flex items-center justify-center mb-3 group-hover:bg-brand-200 transition-colors">
                <Icon size={20} className="text-brand-700" />
              </div>
              <span className="text-3xl font-bold text-brand-900 font-serif">{value}</span>
              <span className="text-xs text-gray-500 font-medium mt-1">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          FEATURES STRIP
      ════════════════════════════════════════════════ */}
      <section className="py-16 px-4" style={{ background: 'linear-gradient(180deg, #f8fafc 0%, #f0fdf4 100%)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-brand-900 section-title inline-block">
              Por que publicar na Revista África?
            </h2>
            <p className="mt-4 text-gray-600 max-w-xl mx-auto">
              Uma plataforma séria, comprometida com a ciência e a cultura do continente africano.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURES.map(f => (
              <div
                key={f.title}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <span className="text-3xl mb-4 block">{f.icon}</span>
                <h3 className="font-bold text-brand-900 text-base mb-2">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          ARTICLES SECTION
      ════════════════════════════════════════════════ */}
      <section id="articles-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex-grow w-full">

        {/* header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <h2 className="text-3xl font-serif font-bold text-brand-900 section-title inline-block">
              Artigos Publicados
            </h2>
            <p className="mt-3 text-gray-500 text-sm">Explore o acervo completo da Revista África</p>
          </div>
          <button
            onClick={() => navigate('/artigos')}
            className="self-start md:self-auto flex items-center gap-2 text-brand-700 hover:text-brand-900 font-semibold text-sm transition-colors"
          >
            Ver biblioteca completa <ArrowRight size={16} />
          </button>
        </div>

        {/* category filters */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div className="flex items-center gap-2 flex-wrap">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`cat-pill px-4 py-2 rounded-full text-sm font-medium transition-all border ${
                  selectedCategory === cat
                    ? 'active bg-brand-800 text-white border-brand-900 shadow-sm'
                    : 'bg-white text-gray-600 border-gray-200 hover:border-brand-400 hover:text-brand-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2 text-gray-400 text-sm font-medium whitespace-nowrap">
            <Filter size={14} />
            {filteredMagazines.length} artigos
          </div>
        </div>

        {/* articles list */}
        {loading && magazines.length === 0 ? (
          <div className="space-y-4">
            {[1, 2, 3].map(i => (
              <div key={i} className="h-40 rounded-2xl shimmer" />
            ))}
          </div>
        ) : filteredMagazines.length > 0 ? (
          <>
            <div className="space-y-5">
              {visibleMagazines.map(mag => (
                <ArticleRow
                  key={mag._id || mag.id}
                  mag={mag}
                  onView={handleOpenViewer}
                  onNavigate={() => navigate(`/artigo/${createSlug(mag.title)}-${mag._id || mag.id}`)}
                />
              ))}
            </div>

            {filteredMagazines.length > 8 && (
              <div className="text-center mt-10">
                <button
                  onClick={() => setShowAll(v => !v)}
                  className="px-8 py-3 bg-white border-2 border-brand-700 text-brand-800 font-bold rounded-xl hover:bg-brand-800 hover:text-white transition-all duration-300 shadow-sm"
                >
                  {showAll ? 'Mostrar menos' : `Ver todos os ${filteredMagazines.length} artigos`}
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-24 bg-white rounded-2xl border border-gray-100 shadow-sm">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-50 mb-4 text-gray-300 border border-gray-200">
              <BookOpen size={30} />
            </div>
            <h3 className="text-lg font-serif font-semibold text-gray-700 mb-2">Nenhum artigo encontrado</h3>
            <p className="text-gray-400 text-sm">Tente outros termos ou mude de categoria.</p>
          </div>
        )}
      </section>

      {/* ════════════════════════════════════════════════
          CTA BANNER
      ════════════════════════════════════════════════ */}
      <section
        className="py-16 px-4 text-center"
        style={{ background: 'linear-gradient(135deg, #14532d 0%, #166534 50%, #14532d 100%)' }}
      >
        <div className="max-w-2xl mx-auto">
          <div className="text-4xl mb-4">✍️</div>
          <h2 className="text-3xl font-serif font-bold text-white mb-4">Publique sua pesquisa</h2>
          <p className="text-green-100 mb-8 leading-relaxed">
            Submeta seu artigo científico à Revista África e contribua para a produção de conhecimento sobre o continente africano.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/submissoes')}
              className="px-8 py-4 bg-yellow-600 hover:bg-yellow-500 text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-yellow-500/30"
            >
              Ver Diretrizes de Submissão
            </button>
            <a
              href="mailto:revistaafricaa@gmail.com?subject=Submissão de Artigo"
              className="px-8 py-4 bg-white/15 hover:bg-white/25 backdrop-blur-sm text-white font-bold rounded-xl border border-white/30 transition-all duration-300"
            >
              Enviar por E-mail
            </a>
          </div>
        </div>
      </section>

      {/* PDF Viewer */}
      <PDFViewerModal
        magazine={selectedMagazine}
        isOpen={isViewerOpen}
        onClose={() => setIsViewerOpen(false)}
      />
    </div>
  );
};

/* ─── Article Row Sub-component ─────────────────────────────── */
interface ArticleRowProps {
  mag: Magazine;
  onView: (m: Magazine) => void;
  onNavigate: () => void;
}
const ArticleRow: React.FC<ArticleRowProps> = ({ mag, onView, onNavigate }) => {
  const CATEGORY_COLORS: Record<string, string> = {
    Economia:  'bg-blue-100 text-blue-800',
    Educação:  'bg-purple-100 text-purple-800',
    Política:  'bg-red-100 text-red-800',
    Cultura:   'bg-orange-100 text-orange-800',
    Outro:     'bg-gray-100 text-gray-700',
  };
  const colorClass = CATEGORY_COLORS[mag.category] ?? 'bg-gray-100 text-gray-700';

  return (
    <div className="article-card bg-white rounded-2xl border border-gray-100 shadow-sm hover:border-brand-200 overflow-hidden">
      <div className="flex flex-col sm:flex-row">
        {/* cover thumbnail */}
        <div
          className="sm:w-40 flex-shrink-0 cursor-pointer overflow-hidden bg-gray-100"
          onClick={onNavigate}
        >
          <img
            src={mag.coverUrl}
            alt={mag.title}
            className="w-full h-48 sm:h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* body */}
        <div className="flex-1 p-6 flex flex-col justify-between">
          <div>
            {/* meta top */}
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${colorClass}`}>
                {mag.category}
              </span>
              <span className="text-xs text-gray-400">Edição {mag.edition} · {mag.year}</span>
            </div>

            {/* title */}
            <h3
              className="text-xl font-serif font-bold text-brand-900 hover:text-brand-600 transition-colors cursor-pointer mb-2 line-clamp-2"
              onClick={onNavigate}
            >
              {mag.title}
            </h3>

            {/* description */}
            <p className="text-gray-500 text-sm line-clamp-2 mb-4">
              {mag.description}
            </p>
          </div>

          {/* actions */}
          <div className="flex flex-wrap gap-2 pt-3 border-t border-gray-50">
            <button
              onClick={onNavigate}
              className="flex items-center gap-1.5 px-4 py-2 bg-brand-800 text-white rounded-lg text-sm font-semibold hover:bg-brand-700 transition-colors"
            >
              <BookOpen size={14} />
              Ver Detalhes
            </button>
            <button
              onClick={() => onView(mag)}
              className="flex items-center gap-1.5 px-4 py-2 bg-brand-50 text-brand-800 rounded-lg text-sm font-semibold hover:bg-brand-100 transition-colors border border-brand-200"
            >
              Ler Online
            </button>
            <a
              href={mag.pdfUrl}
              download
              className="flex items-center gap-1.5 px-4 py-2 bg-gray-50 text-gray-600 rounded-lg text-sm font-semibold hover:bg-gray-100 transition-colors border border-gray-200"
            >
              <Download size={14} />
              PDF
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
