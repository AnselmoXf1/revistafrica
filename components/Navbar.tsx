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
    <nav className="bg-gradient-to-r from-green-800 to-green-700 border-b border-green-900 sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-3">
              <img 
                src="/logo.svg" 
                alt="RevistaAfrica Logo" 
                className="h-16 w-16 rounded-full object-cover border-2 border-yellow-400 shadow-lg"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1">
            <Link
              to="/"
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/') 
                  ? 'bg-green-900 text-white' 
                  : 'text-green-50 hover:text-white hover:bg-green-900/50'
              }`}
            >
              Início
            </Link>
            <Link
              to="/submissoes"
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/submissoes') 
                  ? 'bg-green-900 text-white' 
                  : 'text-green-50 hover:text-white hover:bg-green-900/50'
              }`}
            >
              Submissões
            </Link>
            <Link
              to="/conselho-editorial"
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/conselho-editorial') 
                  ? 'bg-green-900 text-white' 
                  : 'text-green-50 hover:text-white hover:bg-green-900/50'
              }`}
            >
              Conselho Editorial
            </Link>
            <Link
              to="/dados-revista"
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/dados-revista') 
                  ? 'bg-green-900 text-white' 
                  : 'text-green-50 hover:text-white hover:bg-green-900/50'
              }`}
            >
              Dados da Revista
            </Link>
            <Link
              to="/contacto"
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/contacto') 
                  ? 'bg-green-900 text-white' 
                  : 'text-green-50 hover:text-white hover:bg-green-900/50'
              }`}
            >
              Contacto
            </Link>

            <div className="h-6 w-px bg-green-600 mx-2"></div>

            {isAuthenticated ? (
              <>
                <Link
                  to="/admin"
                  className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive('/admin') 
                      ? 'bg-green-900 text-white' 
                      : 'text-green-50 hover:text-white hover:bg-green-900/50'
                  }`}
                >
                  <LayoutDashboard size={18} />
                  Painel
                </Link>
                <Link
                  to="/admin/upload"
                  className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive('/admin/upload') 
                      ? 'bg-green-900 text-white' 
                      : 'text-green-50 hover:text-white hover:bg-green-900/50'
                  }`}
                >
                  <Upload size={18} />
                  Publicar
                </Link>
                <button
                  onClick={handleLogout}
                  className="p-2 text-green-50 hover:text-red-300 transition-colors rounded-full hover:bg-red-900/30 ml-2"
                  title="Sair"
                >
                  <LogOut size={20} />
                </button>
              </>
            ) : (
              <button
                onClick={handleSubmitArticle}
                className="flex items-center gap-2 px-4 py-2 bg-yellow-500 text-green-900 rounded-lg hover:bg-yellow-400 transition-colors shadow-md font-semibold text-sm ml-2"
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
              className="p-2 rounded-md text-green-50 hover:text-white hover:bg-green-900/50"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-4 space-y-1">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-4 py-2 rounded-md text-sm font-medium ${
                isActive('/') 
                  ? 'bg-green-900 text-white' 
                  : 'text-green-50 hover:bg-green-900/50'
              }`}
            >
              Início
            </Link>
            <Link
              to="/submissoes"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-4 py-2 rounded-md text-sm font-medium ${
                isActive('/submissoes') 
                  ? 'bg-green-900 text-white' 
                  : 'text-green-50 hover:bg-green-900/50'
              }`}
            >
              Submissões
            </Link>
            <Link
              to="/conselho-editorial"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-4 py-2 rounded-md text-sm font-medium ${
                isActive('/conselho-editorial') 
                  ? 'bg-green-900 text-white' 
                  : 'text-green-50 hover:bg-green-900/50'
              }`}
            >
              Conselho Editorial
            </Link>
            <Link
              to="/dados-revista"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-4 py-2 rounded-md text-sm font-medium ${
                isActive('/dados-revista') 
                  ? 'bg-green-900 text-white' 
                  : 'text-green-50 hover:bg-green-900/50'
              }`}
            >
              Dados da Revista
            </Link>
            <Link
              to="/contacto"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-4 py-2 rounded-md text-sm font-medium ${
                isActive('/contacto') 
                  ? 'bg-green-900 text-white' 
                  : 'text-green-50 hover:bg-green-900/50'
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
                className="w-full text-left px-4 py-2 bg-yellow-500 text-green-900 rounded-lg hover:bg-yellow-400 font-semibold text-sm mt-2"
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