import React from 'react';
import { Users, Mail, Star, Award } from 'lucide-react';

/* ── Membros ── */
const RESPONSAVEL = {
  name: 'PhD. Carolina Mendes Figueiredo',
  role: 'Responsável / Editora-Chefe',
  country: '🇧🇷 Brasil',
  initials: 'CF',
  color: 'from-brand-800 to-brand-900',
};

const EDITORES = [
  { name: 'Dra. Paciência Veremos',      role: 'Editora',   country: '🇲🇿 Moçambique', initials: 'PV', color: 'from-blue-600 to-blue-800' },
  { name: 'Cármen Inês',                 role: 'Editora',   country: '🇲🇿 Moçambique', initials: 'CI', color: 'from-purple-600 to-purple-800' },
  { name: 'Laurinda da Conceição',       role: 'Editora',   country: '🇲🇿 Moçambique', initials: 'LC', color: 'from-teal-600 to-teal-800' },
  { name: 'Leida Carlota',               role: 'Editora',   country: '🇲🇿 Moçambique', initials: 'LE', color: 'from-rose-600 to-rose-800' },
];

const COMISSAO = [
  { name: 'MSc. Maria de Lurdes Beira',  area: 'Ciências Sociais',  country: '🇲🇿 Moçambique', initials: 'MB', color: 'from-orange-500 to-orange-700' },
  { name: 'Dra. Cármen Inês',            area: 'Educação',           country: '🇲🇿 Moçambique', initials: 'CI', color: 'from-purple-500 to-purple-700' },
  { name: 'Dra. Leida Carlota',          area: 'Humanidades',        country: '🇲🇿 Moçambique', initials: 'LC', color: 'from-rose-500 to-rose-700' },
  { name: 'Dra. Laurinda da Conceição',  area: 'Linguística',        country: '🇲🇿 Moçambique', initials: 'LC', color: 'from-teal-500 to-teal-700' },
  { name: 'PhD. Paciência A. Veremos',   area: 'Políticas Públicas', country: '🇲🇿 Moçambique', initials: 'PV', color: 'from-blue-500 to-blue-700' },
];

/* ── Avatar Component ── */
const Avatar: React.FC<{ initials: string; gradient: string; size?: 'sm' | 'lg' }> = ({ initials, gradient, size = 'sm' }) => (
  <div
    className={`rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center text-white font-bold shadow-md flex-shrink-0 ${
      size === 'lg' ? 'w-20 h-20 text-2xl' : 'w-12 h-12 text-sm'
    }`}
  >
    {initials}
  </div>
);

const ConselhoEditorial: React.FC = () => (
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
          Nossa Equipa
        </span>
        <div className="w-16 h-16 rounded-full bg-yellow-600/20 border-2 border-yellow-500/60 flex items-center justify-center mx-auto mb-5">
          <Users size={28} className="text-yellow-400" />
        </div>
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
          Conselho <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(90deg,#fde68a,#ca8a04)' }}>Editorial</span>
        </h1>
        <p className="text-green-100/80 text-base">
          Profissionais comprometidos com a excelência científica e a promoção do conhecimento africano.
        </p>
      </div>
    </section>

    {/* ── Stats ── */}
    <section className="bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-4xl mx-auto px-4 py-7 grid grid-cols-3 gap-4 text-center">
        {[
          { icon: Star,  v: '1',  l: 'Editora-Chefe' },
          { icon: Users, v: '4',  l: 'Editores' },
          { icon: Award, v: '5',  l: 'Comissão Científica' },
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

      {/* ── Responsável ── */}
      <section>
        <h2 className="text-2xl font-serif font-bold text-brand-900 section-title mb-8">Editora-Chefe</h2>
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 flex flex-col sm:flex-row items-center sm:items-start gap-6">
          <Avatar initials={RESPONSAVEL.initials} gradient={RESPONSAVEL.color} size="lg" />
          <div className="text-center sm:text-left">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-2">
              <h3 className="font-serif font-bold text-xl text-brand-900">{RESPONSAVEL.name}</h3>
              <span className="px-2.5 py-0.5 rounded-full bg-yellow-100 text-yellow-800 text-xs font-bold border border-yellow-200">
                ★ Chefe
              </span>
            </div>
            <p className="text-brand-600 font-medium text-sm mb-1">{RESPONSAVEL.role}</p>
            <p className="text-gray-400 text-sm">{RESPONSAVEL.country}</p>
            <p className="text-gray-500 text-sm mt-3 max-w-md leading-relaxed">
              Lidera o conselho editorial com foco na qualidade científica e na expansão da revista como referência acadêmica africana.
            </p>
          </div>
        </div>
      </section>

      {/* ── Editores ── */}
      <section>
        <h2 className="text-2xl font-serif font-bold text-brand-900 section-title mb-8">Editores</h2>
        <div className="grid sm:grid-cols-2 gap-5">
          {EDITORES.map(e => (
            <div key={e.name} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex items-center gap-4 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
              <Avatar initials={e.initials} gradient={e.color} />
              <div>
                <h3 className="font-bold text-gray-900 text-sm leading-snug">{e.name}</h3>
                <p className="text-brand-600 text-xs font-medium mt-0.5">{e.role}</p>
                <p className="text-gray-400 text-xs mt-0.5">{e.country}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Comissão Científica ── */}
      <section>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-serif font-bold text-brand-900 section-title">Comissão Científica</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {COMISSAO.map(m => (
            <div key={m.name} className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <Avatar initials={m.initials} gradient={m.color} />
                <div>
                  <h3 className="font-bold text-gray-900 text-sm leading-snug">{m.name}</h3>
                  <p className="text-gray-400 text-xs mt-0.5">{m.country}</p>
                </div>
              </div>
              <span className="inline-block px-3 py-1 rounded-full bg-yellow-50 text-yellow-800 text-xs font-semibold border border-yellow-200">
                {m.area}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Contact CTA ── */}
      <section
        className="rounded-2xl p-10 text-center relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #14532d 0%, #166534 100%)' }}
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-600/10 blur-3xl rounded-full pointer-events-none" />
        <div className="relative z-10">
          <div className="w-12 h-12 rounded-full bg-yellow-600/20 border border-yellow-500/40 flex items-center justify-center mx-auto mb-4">
            <Mail size={22} className="text-yellow-400" />
          </div>
          <h3 className="text-xl font-serif font-bold text-white mb-2">Contactar o Conselho Científico</h3>
          <p className="text-green-100/70 text-sm mb-6 max-w-sm mx-auto">
            Para dúvidas sobre revisão de artigos, parecerias ou questões acadêmicas.
          </p>
          <a
            href="mailto:revistaafricaa@gmail.com?subject=Contacto com Comissão Científica"
            className="inline-flex items-center gap-2 px-7 py-3 bg-yellow-600 hover:bg-yellow-500 text-white font-bold rounded-xl transition-colors shadow-md"
          >
            <Mail size={16} />
            revistaafricaa@gmail.com
          </a>
        </div>
      </section>
    </div>
  </div>
);

export default ConselhoEditorial;
