import React from 'react';
import { BookOpen, Target, Eye, Globe, Award, Users, Info, Layers } from 'lucide-react';

const META = [
  { label: 'Nome',         value: 'Revista África' },
  { label: 'Responsável',  value: 'PhD. Carolina Mendes Figueiredo' },
  { label: 'Editora 1',    value: 'Dra. Paciência Veremos' },
  { label: 'Editora 2',    value: 'Cármen Inês' },
  { label: 'E-mail',       value: 'revistaafricaa@gmail.com' },
  { label: 'ISSN',         value: '0000-0000' },
  { label: 'Qualis CAPES', value: 'A2' },
  { label: 'Periodicidade',value: 'Contínua (rolling)' },
  { label: 'Idiomas',      value: 'Português, Inglês, Espanhol' },
  { label: 'Acesso',       value: 'Aberto e Gratuito' },
];

const VALUES = [
  { icon: '🔬', title: 'Rigor Científico',      desc: 'Compromisso com a qualidade e precisão dos conteúdos publicados.' },
  { icon: '⚖️', title: 'Ética e Transparência', desc: 'Práticas justas e claras na seleção e publicação de trabalhos.' },
  { icon: '💡', title: 'Inovação',               desc: 'Incentivo à originalidade e novas abordagens de estudo.' },
  { icon: '🌍', title: 'Inclusão e Diversidade', desc: 'Espaço aberto a autores de diferentes origens e áreas.' },
  { icon: '🤝', title: 'Colaboração',            desc: 'Estímulo à troca de ideias e ao diálogo acadêmico global.' },
];

const DadosRevista: React.FC = () => (
  <div className="min-h-screen bg-gray-50">

    {/* ── Hero ── */}
    <section
      className="relative overflow-hidden py-20 px-4 text-center"
      style={{ background: 'linear-gradient(135deg, #052e16 0%, #14532d 55%, #166534 100%)' }}
    >
      <div className="absolute inset-0 hero-pattern pointer-events-none" />
      <div className="absolute top-0 right-0 w-80 h-80 bg-yellow-600/10 blur-3xl rounded-full pointer-events-none" />
      <div className="relative z-10 max-w-2xl mx-auto">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card text-yellow-300 text-xs font-semibold tracking-widest uppercase mb-5">
          <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
          Informações Institucionais
        </span>
        <div className="w-16 h-16 rounded-full bg-yellow-600/20 border-2 border-yellow-500/60 flex items-center justify-center mx-auto mb-5">
          <Info size={28} className="text-yellow-400" />
        </div>
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
          Dados da <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(90deg,#fde68a,#ca8a04)' }}>Revista</span>
        </h1>
        <p className="text-green-100/80 text-base">
          Informações técnicas, editoriais e institucionais da Revista África.
        </p>
      </div>
    </section>

    {/* ── Quick badges ── */}
    <section className="bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-4xl mx-auto px-4 py-7 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        {[
          { icon: BookOpen, v: '40+', l: 'Artigos' },
          { icon: Users,   v: '80+', l: 'Autores' },
          { icon: Globe,   v: '3',   l: 'Países' },
          { icon: Award,   v: 'A2',  l: 'Qualis' },
        ].map(({ icon: Icon, v, l }) => (
          <div key={l} className="p-3 rounded-xl hover:bg-brand-50 transition-colors group">
            <Icon size={18} className="text-brand-600 mx-auto mb-1.5 group-hover:scale-110 transition-transform" />
            <div className="text-2xl font-bold font-serif text-brand-900">{v}</div>
            <div className="text-xs text-gray-500 font-medium">{l}</div>
          </div>
        ))}
      </div>
    </section>

    <div className="max-w-5xl mx-auto px-4 py-14 space-y-14">

      {/* ── Meta table ── */}
      <section className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-50 flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-brand-800 flex items-center justify-center">
            <Layers size={15} className="text-yellow-400" />
          </div>
          <h2 className="font-serif font-bold text-brand-900 text-lg">Informações Básicas</h2>
        </div>
        <div className="divide-y divide-gray-50">
          {META.map(({ label, value }) => (
            <div key={label} className="flex items-center px-6 py-3.5 hover:bg-gray-50 transition-colors">
              <span className="w-40 text-xs font-bold text-gray-400 uppercase tracking-wider flex-shrink-0">{label}</span>
              <span className="text-sm text-gray-800 font-medium">{value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── About ── */}
      <section className="grid md:grid-cols-2 gap-8 items-start">
        <div>
          <h2 className="text-2xl font-serif font-bold text-brand-900 section-title mb-5">Sobre a Revista</h2>
          <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
            <p>
              A <strong className="text-brand-900">Revista África</strong> é uma revista acadêmica dedicada à valorização do conhecimento, da pesquisa e da reflexão crítica sobre temas contemporâneos que impactam África e a sociedade global.
            </p>
            <p>
              Criada após um fórum internacional de acadêmicos, a revista busca expandir e democratizar o conhecimento junto da comunidade africana, reunindo editores de diferentes países para garantir contacto permanente com acadêmicos e centros de investigação.
            </p>
            <p>
              Com base em Moçambique, é dirigida por Professores Doutores comprometidos com excelência científica e a promoção do pensamento crítico no continente africano.
            </p>
          </div>
        </div>
        <div className="relative rounded-2xl overflow-hidden shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=70"
            alt="Continente africano"
            className="w-full h-56 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-900/70 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <blockquote className="text-white font-serif italic text-sm text-center">
              "Conhecimento africano que inspira o mundo."
            </blockquote>
          </div>
        </div>
      </section>

      {/* ── Mission & Vision ── */}
      <section className="grid md:grid-cols-2 gap-6">
        <div className="rounded-2xl p-7 border border-brand-200 bg-brand-50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-28 h-28 bg-brand-200/40 rounded-full -translate-y-1/3 translate-x-1/3 blur-xl pointer-events-none" />
          <div className="relative z-10">
            <div className="w-11 h-11 rounded-xl bg-brand-800 flex items-center justify-center mb-4">
              <Target size={20} className="text-yellow-400" />
            </div>
            <h3 className="text-lg font-serif font-bold text-brand-900 mb-3">Missão</h3>
            <p className="text-brand-800 text-sm leading-relaxed">
              Promover a produção, avaliação e divulgação de conhecimento científico e acadêmico de qualidade, incentivando a pesquisa, a reflexão crítica e a inovação, contribuindo para o desenvolvimento intelectual e social de África e da comunidade global.
            </p>
          </div>
        </div>
        <div className="rounded-2xl p-7 border border-yellow-200 bg-yellow-50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-28 h-28 bg-yellow-200/40 rounded-full -translate-y-1/3 translate-x-1/3 blur-xl pointer-events-none" />
          <div className="relative z-10">
            <div className="w-11 h-11 rounded-xl bg-yellow-600 flex items-center justify-center mb-4">
              <Eye size={20} className="text-white" />
            </div>
            <h3 className="text-lg font-serif font-bold text-yellow-900 mb-3">Visão</h3>
            <p className="text-yellow-800 text-sm leading-relaxed">
              Ser reconhecida como uma revista de referência no continente africano e internacionalmente, estimulando a investigação interdisciplinar, fortalecendo a cultura científica e tornando o conhecimento acessível a pesquisadores, estudantes e profissionais.
            </p>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section>
        <h2 className="text-2xl font-serif font-bold text-brand-900 section-title mb-8">Valores</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {VALUES.map(v => (
            <div key={v.title} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <span className="text-3xl mb-3 block">{v.icon}</span>
              <h4 className="font-bold text-brand-900 mb-1.5 text-sm">{v.title}</h4>
              <p className="text-gray-500 text-xs leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Quote banner ── */}
      <section
        className="rounded-2xl py-12 px-8 text-center relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #052e16 0%, #14532d 60%, #166534 100%)' }}
      >
        <div className="absolute inset-0 hero-pattern pointer-events-none" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-600/10 blur-3xl rounded-full pointer-events-none" />
        <div className="relative z-10">
          <div className="text-5xl mb-4 text-yellow-400/60">"</div>
          <blockquote className="text-2xl font-serif font-bold text-white max-w-xl mx-auto leading-snug">
            Conhecimento africano que inspira o mundo.
          </blockquote>
          <div className="mt-4 text-green-100/50 text-sm">— Revista África</div>
        </div>
      </section>
    </div>
  </div>
);

export default DadosRevista;
