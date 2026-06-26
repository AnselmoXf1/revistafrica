import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { BookOpen, LogOut, Upload, LayoutDashboard, Mail, Menu, X } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Navbar: React.FC = () => {
  const { isAuthenticated, logout, user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const isActive = (path: string) => location.pathname === path;

  const handleSubmitArticle = () => {
    window.location.href = 'mailto:revistaafricaa@gmail.com?subject=Submissão de Artigo';
  };

  return (
    <nav className="bg-gradient-to-r from-brand-900 to-brand-800 border-b border-brand-950 sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-3">
              <img 
                src="/logo.svg" 
                alt="RevistaAfrica Logo" 
                className="h-16 w-16 object-cover border-2 border-yellow-600 shadow-sm"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1">
            <Link
              to="/"
              className={`px-4 py-2 text-sm font-medium transition-colors ${
                isActive('/') 
                  ? 'bg-brand-900 text-white border-b-2 border-yellow-600' 
                  : 'text-brand-50 hover:text-white hover:bg-brand-900/50'
              }`}
            >
              Início
            </Link>
            <Link
              to="/artigos"
              className={`px-4 py-2 text-sm font-medium transition-colors ${
                isActive('/artigos') 
                  ? 'bg-brand-900 text-white border-b-2 border-yellow-600' 
                  : 'text-brand-50 hover:text-white hover:bg-brand-900/50'
              }`}
            >
              Artigos
            </Link>
            <Link
              to="/sobre"
              className={`px-4 py-2 text-sm font-medium transition-colors ${
                isActive('/sobre') 
                  ? 'bg-brand-900 text-white border-b-2 border-yellow-600' 
                  : 'text-brand-50 hover:text-white hover:bg-brand-900/50'
              }`}
            >
              Sobre Nós
            </Link>
            <Link
              to="/submissoes"
              className={`px-4 py-2 text-sm font-medium transition-colors ${
                isActive('/submissoes') 
                  ? 'bg-brand-900 text-white border-b-2 border-yellow-600' 
                  : 'text-brand-50 hover:text-white hover:bg-brand-900/50'
              }`}
            >
              Submissões
            </Link>
            <Link
              to="/conselho-editorial"
              className={`px-4 py-2 text-sm font-medium transition-colors ${
                isActive('/conselho-editorial') 
                  ? 'bg-brand-900 text-white border-b-2 border-yellow-600' 
                  : 'text-brand-50 hover:text-white hover:bg-brand-900/50'
              }`}
            >
              Conselho Editorial
            </Link>
            <Link
              to="/dados-revista"
              className={`px-4 py-2 text-sm font-medium transition-colors ${
                isActive('/dados-revista') 
                  ? 'bg-brand-900 text-white border-b-2 border-yellow-600' 
                  : 'text-brand-50 hover:text-white hover:bg-brand-900/50'
              }`}
            >
              Dados da Revista
            </Link>
            <Link
              to="/contacto"
              className={`px-4 py-2 text-sm font-medium transition-colors ${
                isActive('/contacto') 
                  ? 'bg-brand-900 text-white border-b-2 border-yellow-600' 
                  : 'text-brand-50 hover:text-white hover:bg-brand-900/50'
              }`}
            >
              Contacto
            </Link>

            <div className="h-6 w-px bg-brand-600 mx-2"></div>

            {isAuthenticated ? (
              <>
                <Link
                  to="/admin"
                  className={`flex items-center gap-2 px-3 py-2 text-sm font-medium transition-colors ${
                    isActive('/admin') 
                      ? 'bg-brand-900 text-white' 
                      : 'text-brand-50 hover:text-white hover:bg-brand-900/50'
                  }`}
                >
                  <LayoutDashboard size={18} />
                  Painel
                </Link>
                <Link
                  to="/admin/upload"
                  className={`flex items-center gap-2 px-3 py-2 text-sm font-medium transition-colors ${
                    isActive('/admin/upload') 
                      ? 'bg-brand-900 text-white' 
                      : 'text-brand-50 hover:text-white hover:bg-brand-900/50'
                  }`}
                >
                  <Upload size={18} />
                  Publicar
                </Link>
                <button
                  onClick={handleLogout}
                  className="p-2 text-brand-50 hover:text-red-300 transition-colors hover:bg-red-900/30 ml-2"
                  title="Sair"
                >
                  <LogOut size={20} />
                </button>
              </>
            ) : (
              <button
                onClick={handleSubmitArticle}
                className="flex items-center gap-2 px-4 py-2 bg-yellow-600 text-white hover:bg-yellow-700 transition-colors shadow-sm font-semibold text-sm ml-2 rounded-none"
              >
                <Mail size={18} />
                Submeta seu Artigo Aqui
              </button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-brand-50 hover:text-white hover:bg-brand-900/50"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-4 space-y-1 border-t border-brand-800 pt-2">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-4 py-2 text-sm font-medium ${
                isActive('/') 
                  ? 'bg-brand-900 text-white border-l-4 border-yellow-600' 
                  : 'text-brand-50 hover:bg-brand-900/50'
              }`}
            >
              Início
            </Link>
            <Link
              to="/artigos"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-4 py-2 text-sm font-medium ${
                isActive('/artigos') 
                  ? 'bg-brand-900 text-white border-l-4 border-yellow-600' 
                  : 'text-brand-50 hover:bg-brand-900/50'
              }`}
            >
              Artigos
            </Link>
            <Link
              to="/sobre"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-4 py-2 text-sm font-medium ${
                isActive('/sobre') 
                  ? 'bg-brand-900 text-white border-l-4 border-yellow-600' 
                  : 'text-brand-50 hover:bg-brand-900/50'
              }`}
            >
              Sobre Nós
            </Link>
            <Link
              to="/submissoes"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-4 py-2 text-sm font-medium ${
                isActive('/submissoes') 
                  ? 'bg-brand-900 text-white border-l-4 border-yellow-600' 
                  : 'text-brand-50 hover:bg-brand-900/50'
              }`}
            >
              Submissões
            </Link>
            <Link
              to="/conselho-editorial"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-4 py-2 text-sm font-medium ${
                isActive('/conselho-editorial') 
                  ? 'bg-brand-900 text-white border-l-4 border-yellow-600' 
                  : 'text-brand-50 hover:bg-brand-900/50'
              }`}
            >
              Conselho Editorial
            </Link>
            <Link
              to="/dados-revista"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-4 py-2 text-sm font-medium ${
                isActive('/dados-revista') 
                  ? 'bg-brand-900 text-white border-l-4 border-yellow-600' 
                  : 'text-brand-50 hover:bg-brand-900/50'
              }`}
            >
              Dados da Revista
            </Link>
            <Link
              to="/contacto"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-4 py-2 text-sm font-medium ${
                isActive('/contacto') 
                  ? 'bg-brand-900 text-white border-l-4 border-yellow-600' 
                  : 'text-brand-50 hover:bg-brand-900/50'
              }`}
            >
              Contacto
            </Link>
            {!isAuthenticated && (
              <button
                onClick={() => {
                  handleSubmitArticle();
                  setMobileMenuOpen(false);
                }}
                className="w-full text-left px-4 py-2 bg-yellow-600 text-white hover:bg-yellow-700 font-semibold text-sm mt-2 rounded-none border-l-4 border-yellow-800"
              >
                Submeta seu Artigo Aqui
              </button>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;