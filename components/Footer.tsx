import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const navigate = useNavigate();

  const handleYearClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/login');
  };

  return (
    <footer className="bg-brand-900 border-t-4 border-yellow-600 mt-auto">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Sobre */}
          <div className="md:col-span-2">
            <h3 className="text-white font-serif font-bold text-xl mb-4">Revista África</h3>
            <p className="text-brand-100 text-sm leading-relaxed max-w-md">
              Publicação científica dedicada à divulgação de pesquisas sobre o continente africano, valorizando o conhecimento, a reflexão crítica e estudos interdisciplinares.
            </p>
            <div className="mt-4 flex gap-4 text-brand-200 text-xs font-semibold">
              <span>ISSN: 0000-0000</span>
              <span>•</span>
              <span>Qualis: A2</span>
            </div>
          </div>

          {/* Contato Comissão Científica */}
          <div>
            <h3 className="text-white font-serif font-bold text-lg mb-4">Comissão Científica</h3>
            <p className="text-brand-200 text-sm mb-2">
              Entre em contacto com a comissão científica:
            </p>
            <a 
              href="mailto:revistaafricaa@gmail.com?subject=Contato com Comissão Científica"
              className="inline-flex items-center gap-2 text-yellow-500 hover:text-yellow-400 font-medium text-sm transition-colors"
            >
              <Mail size={16} />
              revistaafricaa@gmail.com
            </a>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-white font-serif font-bold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/#/submissoes" className="text-brand-200 hover:text-white transition-colors">
                  Submissões
                </a>
              </li>
              <li>
                <a href="/#/conselho-editorial" className="text-brand-200 hover:text-white transition-colors">
                  Conselho Editorial
                </a>
              </li>
              <li>
                <a href="/#/contacto" className="text-brand-200 hover:text-white transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-brand-800 pt-6 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-brand-300 text-xs">
              © <button 
                onClick={handleYearClick}
                className="hover:text-white transition-colors cursor-pointer bg-transparent border-0 p-0 font-inherit underline-offset-2 hover:underline"
              >
                {new Date().getFullYear()}
              </button> Revista África. Todos os direitos reservados. Este é um periódico de acesso aberto.
            </div>
            <div className="flex items-center gap-1 text-xs text-brand-300">
              Desenvolvido por  
              <a 
                href="https://bluevisiontech.site" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-semibold text-yellow-500 hover:text-yellow-400 hover:underline ml-1"
              >
                BlueVisionTech
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;