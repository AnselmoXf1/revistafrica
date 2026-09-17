import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { LogOut, Upload, LayoutDashboard, Mail, Menu, X } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const NAV_LINKS = [
  { path: '/',                   label: 'Início' },
  { path: '/artigos',            label: 'Artigos' },
  { path: '/sobre',              label: 'Sobre' },
  { path: '/submissoes',         label: 'Submissões' },
  { path: '/conselho-editorial', label: 'Conselho' },
  { path: '/dados-revista',      label: 'Dados' },
  { path: '/contacto',           label: 'Contacto' },
];

const Navbar: React.FC = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate   = useNavigate();
  const location   = useLocation();
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* shrink navbar on scroll */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* close mobile menu on route change */
  useEffect(() => { setOpen(false); }, [location.pathname]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-brand-950/95 backdrop-blur-md shadow-xl shadow-black/20 py-0'
            : 'bg-gradient-to-r from-brand-950 via-brand-900 to-brand-800 py-0'
        }`}
        style={{ borderBottom: '2px solid rgba(202,138,4,0.5)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex items-center justify-between transition-all duration-300 ${scrolled ? 'h-16' : 'h-20'}`}>

            {/* ── Logo ── */}
            <Link to="/" className="flex items-center gap-3 group flex-shrink-0">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-yellow-500/20 blur-md scale-125 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <img
                  src="/logo.svg"
                  alt="Revista África"
                  className={`relative object-cover rounded-full border-2 border-yellow-500/70 shadow-md group-hover:border-yellow-400 transition-all duration-300 ${scrolled ? 'h-10 w-10' : 'h-14 w-14'}`}
                />
              </div>
              <div className="hidden sm:block">
                <span className="block text-white font-serif font-bold text-base leading-tight">Revista África</span>
                <span className="block text-yellow-400/70 text-[10px] font-medium tracking-widest uppercase">Periódico Científico</span>
              </div>
            </Link>

            {/* ── Desktop links ── */}
            <div className="hidden lg:flex items-center gap-0.5">
              {NAV_LINKS.map(({ path, label }) => (
                <Link
                  key={path}
                  to={path}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-md group ${
                    isActive(path)
                      ? 'text-yellow-400'
                      : 'text-green-100/80 hover:text-white'
                  }`}
                >
                  {label}
                  {/* active underline */}
                  <span
                    className={`absolute bottom-0 left-2 right-2 h-0.5 bg-yellow-500 rounded-full transition-all duration-300 ${
                      isActive(path) ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0 group-hover:opacity-60 group-hover:scale-x-100'
                    }`}
                  />
                </Link>
              ))}

              <div className="w-px h-5 bg-white/20 mx-3" />

              {isAuthenticated ? (
                <div className="flex items-center gap-1">
                  <Link
                    to="/admin"
                    className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-green-100/80 hover:text-white rounded-md transition-colors"
                  >
                    <LayoutDashboard size={15} />
                    Painel
                  </Link>
                  <Link
                    to="/admin/upload"
                    className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-green-100/80 hover:text-white rounded-md transition-colors"
                  >
                    <Upload size={15} />
                    Publicar
                  </Link>
                  <button
                    onClick={() => { logout(); navigate('/'); }}
                    title="Sair"
                    className="p-2 text-green-100/60 hover:text-red-400 rounded-md transition-colors ml-1"
                  >
                    <LogOut size={18} />
                  </button>
                </div>
              ) : (
                <a
                  href="mailto:revistaafricaa@gmail.com?subject=Submissão de Artigo"
                  className="flex items-center gap-2 px-4 py-2 bg-yellow-600 hover:bg-yellow-500 text-white font-semibold text-sm rounded-lg transition-all duration-200 shadow-md hover:shadow-yellow-500/30 ml-1"
                >
                  <Mail size={15} />
                  Submeter Artigo
                </a>
              )}
            </div>

            {/* ── Mobile hamburger ── */}
            <button
              onClick={() => setOpen(v => !v)}
              className="lg:hidden p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Menu"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* ── Mobile drawer ── */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            open ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
          }`}
          style={{ borderTop: open ? '1px solid rgba(255,255,255,0.08)' : 'none' }}
        >
          <div className="px-4 py-4 space-y-1 bg-brand-950/98 backdrop-blur-md">
            {NAV_LINKS.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                  isActive(path)
                    ? 'bg-yellow-600/20 text-yellow-400 border-l-2 border-yellow-500'
                    : 'text-green-100/80 hover:bg-white/5 hover:text-white border-l-2 border-transparent'
                }`}
              >
                {label}
              </Link>
            ))}

            <div className="pt-3 border-t border-white/10 mt-3 space-y-2">
              {isAuthenticated ? (
                <>
                  <Link to="/admin" className="flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium text-green-100/80 hover:bg-white/5">
                    <LayoutDashboard size={16} /> Painel Admin
                  </Link>
                  <Link to="/admin/upload" className="flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium text-green-100/80 hover:bg-white/5">
                    <Upload size={16} /> Publicar Artigo
                  </Link>
                  <button
                    onClick={() => { logout(); navigate('/'); }}
                    className="w-full flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium text-red-400 hover:bg-red-900/20"
                  >
                    <LogOut size={16} /> Sair
                  </button>
                </>
              ) : (
                <a
                  href="mailto:revistaafricaa@gmail.com?subject=Submissão de Artigo"
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-yellow-600 hover:bg-yellow-500 text-white font-bold rounded-xl transition-colors"
                >
                  <Mail size={16} />
                  Submeter Artigo
                </a>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
