import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BookOpen, Target, Eye, Globe, Award, Users, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const VALUES = [
  { icon: '🔬', title: 'Rigor Científico',      desc: 'Compromisso com a qualidade e precisão dos conteúdos publicados.' },
  { icon: '⚖️', title: 'Ética e Transparência', desc: 'Práticas justas e claras na seleção e publicação de trabalhos.' },
  { icon: '💡', title: 'Inovação',               desc: 'Incentivo à originalidade e novas abordagens de estudo.' },
  { icon: '🌍', title: 'Inclusão e Diversidade', desc: 'Espaço aberto a autores de diferentes origens e áreas do saber.' },
  { icon: '🤝', title: 'Colaboração',            desc: 'Estímulo à troca de ideias e ao diálogo acadêmico global.' },
  { icon: '📖', title: 'Acesso Aberto',          desc: 'Todo o conhecimento publicado é livre e gratuito para todos.' },
];

const TIMELINE = [
  { year: '2020', event: 'Fundação da Revista África após fórum internacional de acadêmicos.' },
  { year: '2021', event: 'Primeiras publicações científicas com revisão por pares anônima.' },
  { year: '2022', event: 'Expansão da rede editorial para Brasil, Angola e Moçambique.' },
  { year: '2023', event: 'Classificação Qualis A2 pela CAPES.' },
  { year: '2024', event: 'Acervo supera 40 artigos publicados em múltiplas áreas do saber.' },
];

const Sobre: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Sobre Nós | Revista África</title>
        <meta name="description" content="Conheça a Revista África, periódico científico dedicado à divulgação de pesquisas sobre o continente africano." />
      </Helmet>

      {/* ── Hero ── */}
      <section
        className="relative overflow-hidden py-24 px-4 text-center"
        style={{ background: 'linear-gradient(135deg, #052e16 0%, #14532d 50%, #166534 100%)' }}
      >
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1920&q=60')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 hero-pattern pointer-events-none" />
        <div className="absolute top-0 right-0 w-80 h-80 bg-yellow-600/10 blur-3xl rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card text-yellow-300 text-xs font-semibold tracking-widest uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
            Quem Somos
          </span>
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-full bg-yellow-600/20 border-2 border-yellow-500/60 flex items-center justify-center">
              <BookOpen size={36} className="text-yellow-400" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            Sobre a Revista <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(90deg,#fde68a,#ca8a04)' }}>África</span>
          </h1>
          <p className="text-green-100/80 text-lg leading-relaxed">
            Uma publicação acadêmica dedicada à valorização do conhecimento científico africano, promovendo pesquisa, reflexão crítica e diálogo interdisciplinar.
          </p>
        </div>
      </section>

      {/* ── Quick stats ── */}
      <section className="bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            { icon: BookOpen, v: '40+',  l: 'Artigos' },
            { icon: Users,   v: '80+',  l: 'Autores' },
            { icon: Globe,   v: '3',    l: 'Países' },
            { icon: Award,   v: 'A2',   l: 'Qualis' },
          ].map(({ icon: Icon, v, l }) => (
            <div key={l} className="p-4 rounded-xl hover:bg-brand-50 transition-colors group">
              <Icon size={20} className="text-brand-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
              <div className="text-2xl font-bold font-serif text-brand-900">{v}</div>
              <div className="text-xs text-gray-500 font-medium">{l}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-16 space-y-16">

        {/* ── About text ── */}
        <section className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-serif font-bold text-brand-900 section-title mb-6">Nossa História</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                A <strong className="text-brand-900">Revista África</strong> é uma publicação acadêmica dedicada à valorização do conhecimento, da pesquisa e da reflexão crítica sobre temas contemporâneos que impactam África e a sociedade global.
              </p>
              <p>
                Criada na sequência de um fórum que reuniu acadêmicos de várias partes do mundo, a revista reconheceu a necessidade de expandir e democratizar o conhecimento junto a toda a comunidade africana.
              </p>
              <p>
                Com base representativa em Moçambique, é dirigida por Professores Doutores comprometidos com a excelência científica, a ética acadêmica e a promoção do pensamento crítico.
              </p>
            </div>
            <button
              onClick={() => navigate('/dados-revista')}
              className="mt-6 flex items-center gap-2 text-brand-700 font-semibold hover:text-brand-900 transition-colors group"
            >
              Ver dados completos <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&w=800&q=70"
              alt="Pesquisa científica"
              className="w-full h-72 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-900/60 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <blockquote className="text-white font-serif italic text-sm">
                "Conhecimento africano que inspira o mundo."
              </blockquote>
            </div>
          </div>
        </section>

        {/* ── Mission & Vision ── */}
        <section className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl p-8 border border-brand-200 bg-brand-50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-200/50 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl pointer-events-none" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-brand-800 flex items-center justify-center mb-4">
                <Target size={22} className="text-yellow-400" />
              </div>
              <h3 className="text-xl font-serif font-bold text-brand-900 mb-3">Missão</h3>
              <p className="text-brand-800 leading-relaxed text-sm">
                Promover a produção, avaliação e divulgação de conhecimento científico e acadêmico de qualidade, incentivando a pesquisa, a reflexão crítica e a inovação, contribuindo para o desenvolvimento intelectual e social de África e da comunidade global.
              </p>
            </div>
          </div>
          <div className="rounded-2xl p-8 border border-yellow-200 bg-yellow-50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-200/50 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl pointer-events-none" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-yellow-600 flex items-center justify-center mb-4">
                <Eye size={22} className="text-white" />
              </div>
              <h3 className="text-xl font-serif font-bold text-yellow-900 mb-3">Visão</h3>
              <p className="text-yellow-800 leading-relaxed text-sm">
                Ser reconhecida como uma revista de referência no continente africano e internacionalmente, estimulando a investigação interdisciplinar, fortalecendo a cultura científica e tornando o conhecimento acessível a pesquisadores, estudantes e profissionais.
              </p>
            </div>
          </div>
        </section>

        {/* ── Values ── */}
        <section>
          <h2 className="text-3xl font-serif font-bold text-brand-900 section-title mb-8">Nossos Valores</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {VALUES.map(v => (
              <div key={v.title} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                <span className="text-3xl mb-3 block">{v.icon}</span>
                <h4 className="font-bold text-brand-900 mb-2">{v.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Timeline ── */}
        <section>
          <h2 className="text-3xl font-serif font-bold text-brand-900 section-title mb-10">Nossa Trajetória</h2>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-brand-200" />
            <div className="space-y-8">
              {TIMELINE.map((item, i) => (
                <div key={item.year} className="flex gap-6 items-start">
                  <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-brand-800 border-4 border-brand-100 flex items-center justify-center shadow-md">
                    <span className="text-xs font-bold text-yellow-400">{item.year.slice(2)}</span>
                  </div>
                  <div className="bg-white rounded-xl p-5 flex-1 border border-gray-100 shadow-sm">
                    <span className="text-xs font-bold text-brand-600 uppercase tracking-widest">{item.year}</span>
                    <p className="text-gray-700 mt-1 text-sm leading-relaxed">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section
          className="rounded-2xl p-10 text-center relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #14532d 0%, #166534 100%)' }}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-600/10 blur-3xl rounded-full pointer-events-none" />
          <div className="relative z-10">
            <h3 className="text-2xl font-serif font-bold text-white mb-3">Faça parte desta história</h3>
            <p className="text-green-100/80 mb-6 max-w-md mx-auto text-sm">
              Submeta sua pesquisa e contribua para o crescimento do conhecimento científico africano.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => navigate('/submissoes')}
                className="px-6 py-3 bg-yellow-600 hover:bg-yellow-500 text-white font-bold rounded-xl transition-colors text-sm shadow-md"
              >
                Submeter Artigo
              </button>
              <button
                onClick={() => navigate('/conselho-editorial')}
                className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl border border-white/30 transition-colors text-sm"
              >
                Ver Conselho Editorial
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Sobre;
