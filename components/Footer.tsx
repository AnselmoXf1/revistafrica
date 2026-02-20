import React from 'react';
import { Heart, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-green-900 to-green-800 border-t border-green-950 mt-auto">
      <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Sobre */}
          <div>
            <h3 className="text-white font-bold text-lg mb-3">Revista África</h3>
            <p className="text-green-200 text-sm leading-relaxed">
              Publicação científica dedicada à divulgação de pesquisas sobre o continente africano.
            </p>
          </div>

          {/* Contato Comissão Científica */}
          <div>
            <h3 className="text-white font-bold text-lg mb-3">Comissão Científica</h3>
            <p className="text-green-200 text-sm mb-2">
              Entre em contacto com a comissão científica:
            </p>
            <a 
              href="mailto:revistaafricaa@gmail.com?subject=Contato com Comissão Científica"
              className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 font-medium text-sm transition-colors"
            >
              <Mail size={16} />
              revistaafricaa@gmail.com
            </a>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-white font-bold text-lg mb-3">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/#/submissoes" className="text-green-200 hover:text-white transition-colors">
                  Submissões
                </a>
              </li>
              <li>
                <a href="/#/conselho-editorial" className="text-green-200 hover:text-white transition-colors">
                  Conselho Editorial
                </a>
              </li>
              <li>
                <a href="/#/contacto" className="text-green-200 hover:text-white transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-green-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-green-300 text-sm">
              © <a href="/#/login" className="hover:text-white transition-colors cursor-pointer">{new Date().getFullYear()}</a> Revista África. Todos os direitos reservados.
            </div>
            <div className="flex items-center gap-1 text-sm text-green-200">
              Desenvolvido por  
              <a 
                href="https://bluevisiontech.site" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-semibold text-yellow-400 hover:text-yellow-300 hover:underline ml-1"
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