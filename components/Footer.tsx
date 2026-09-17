import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Phone, Globe, BookOpen, ArrowRight } from 'lucide-react';

const QUICK_LINKS = [
  { path: '/',                   label: 'Início' },
  { path: '/artigos',            label: 'Artigos' },
  { path: '/sobre',              label: 'Sobre Nós' },
  { path: '/submissoes',         label: 'Submissões' },
  { path: '/conselho-editorial', label: 'Conselho Editorial' },
  { path: '/dados-revista',      label: 'Dados da Revista' },
  { path: '/contacto',           label: 'Contacto' },
];

const CONTACTS = [
  { icon: Mail,  label: 'E-mail',       value: 'revistaafricaa@gmail.com',   href: 'mailto:revistaafricaa@gmail.com' },
  { icon: Phone, label: 'Moçambique',   value: '+258 852 224 979',           href: 'https://wa.me/258852224979' },
  { icon: Phone, label: 'Brasil',       value: '+55 (11) 91234-5678',        href: 'tel:+5511912345678' },
  { icon: Globe, label: 'Website',      value: 'revistafrica.com',           href: 'https://revistafrica.com' },
];

const Footer: React.FC = () => {
  const navigate = useNavigate();

  return (
    <footer className="relative overflow-hidden" style={{ background: 'linear-gradient(160deg, #052e16 0%, #14532d 60%, #0f3d22 100%)' }}>

      {/* decorative top accent */}
      <div className="footer-accent" />

      {/* background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-yellow-600/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-green-500/5 blur-3xl pointer-events-none" />

      {/* ── Main grid ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* ── Brand col ── */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <img
                src="/logo.svg"
                alt="Revista África"
                className="h-14 w-14 rounded-full border-2 border-yellow-500/60 shadow-lg"
              />
              <div>
                <span className="block text-white font-serif font-bold text-xl leading-tight">Revista África</span>
                <span className="block text-yellow-400/60 text-xs font-medium tracking-widest uppercase mt-0.5">Periódico Científico</span>
              </div>
            </div>

            <p className="text-green-100/70 text-sm leading-relaxed max-w-sm mb-5">
              Publicação científica dedicada à divulgação de pesquisas sobre o continente africano, valorizando o conhecimento, a reflexão crítica e os estudos interdisciplinares.
            </p>

            {/* badges */}
            <div className="flex flex-wrap gap-2 mb-6">
              {[
                { icon: BookOpen, label: 'ISSN 0000-0000' },
                { icon: Globe,    label: 'Qualis A2' },
                { icon: BookOpen, label: 'Acesso Aberto' },
              ].map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-green-200 border border-white/10 bg-white/5"
                >
                  <Icon size={11} className="text-yellow-400" />
                  {label}
                </span>
              ))}
            </div>

            {/* submit CTA */}
            <a
              href="mailto:revistaafricaa@gmail.com?subject=Submissão de Artigo"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-yellow-600 hover:bg-yellow-500 text-white font-semibold text-sm rounded-xl transition-all duration-200 shadow-md hover:shadow-yellow-500/30 group"
            >
              <Mail size={15} />
              Submeter Artigo
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          {/* ── Quick links ── */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-5 flex items-center gap-2">
              <span className="w-6 h-0.5 bg-yellow-500 rounded-full" />
              Links Rápidos
            </h3>
            <ul className="space-y-2.5">
              {QUICK_LINKS.map(({ path, label }) => (
                <li key={path}>
                  <Link
                    to={path}
                    className="group flex items-center gap-2 text-sm text-green-200/70 hover:text-yellow-300 transition-colors duration-200"
                  >
                    <span className="w-1 h-1 rounded-full bg-yellow-500/60 group-hover:bg-yellow-400 transition-colors flex-shrink-0" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Contacts ── */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-5 flex items-center gap-2">
              <span className="w-6 h-0.5 bg-yellow-500 rounded-full" />
              Contacto
            </h3>
            <ul className="space-y-4">
              {CONTACTS.map(({ icon: Icon, label, value, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="group flex items-start gap-3 hover:text-yellow-300 transition-colors"
                  >
                    <span className="mt-0.5 w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-yellow-600/20 group-hover:border-yellow-500/40 transition-colors">
                      <Icon size={13} className="text-yellow-400/80 group-hover:text-yellow-300" />
                    </span>
                    <div>
                      <span className="block text-green-300/50 text-[10px] uppercase tracking-wider font-medium">{label}</span>
                      <span className="text-green-100/75 text-sm group-hover:text-yellow-300 transition-colors">{value}</span>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-green-300/50 text-xs text-center sm:text-left">
            ©{' '}
            <button
              onClick={() => navigate('/login')}
              className="hover:text-white transition-colors underline-offset-2 hover:underline"
            >
              {new Date().getFullYear()}
            </button>
            {' '}Revista África · Todos os direitos reservados · Periódico de acesso aberto
          </p>
          <a
            href="https://bluevisiontech.site"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-green-300/40 hover:text-yellow-400 transition-colors font-medium"
          >
            Desenvolvido por <span className="text-yellow-500">BlueVisionTech</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
