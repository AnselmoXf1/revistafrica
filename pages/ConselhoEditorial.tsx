import React from 'react';
import { Users, Mail } from 'lucide-react';

const ConselhoEditorial: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-16 px-4">
      <div className="max-w-4xl w-full bg-white border border-gray-300 shadow-sm">
        {/* Header Institucional */}
        <div className="bg-brand-900 text-white p-8 border-b-4 border-yellow-600 flex flex-col items-center text-center">
          <Users size={48} className="text-yellow-500 mb-4" />
          <h1 className="text-4xl font-serif font-bold tracking-tight">Conselho Editorial</h1>
          <p className="text-xl text-brand-100 font-serif mt-2">
            Membros do conselho editorial da Revista África
          </p>
        </div>

        <div className="p-8 md:p-12 text-gray-800 leading-relaxed space-y-10 font-sans">
          
          {/* Responsável */}
          <div className="bg-brand-50 border-l-4 border-brand-800 p-6 shadow-sm">
            <h2 className="text-2xl font-serif font-bold text-brand-900 mb-2">Responsável</h2>
            <div className="text-lg">
              <p className="font-semibold text-gray-900">PhD. Carolina Mendes Figueiredo (Brasileira)</p>
            </div>
          </div>

          {/* Editores */}
          <div>
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4 border-b-2 border-brand-800 pb-2">Editores</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-5 border border-gray-200">
                <p className="font-semibold text-gray-900">Dra. Paciência Veremos</p>
              </div>
              <div className="bg-gray-50 p-5 border border-gray-200">
                <p className="font-semibold text-gray-900">Cármen Inês</p>
              </div>
              <div className="bg-gray-50 p-5 border border-gray-200">
                <p className="font-semibold text-gray-900">Laurinda da Conceição</p>
              </div>
              <div className="bg-gray-50 p-5 border border-gray-200">
                <p className="font-semibold text-gray-900">Leida Carlota</p>
              </div>
            </div>
          </div>

          {/* Comissão Científica */}
          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 shadow-sm">
            <h2 className="text-2xl font-serif font-bold text-yellow-900 mb-4">Comissão Científica</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-4 border border-yellow-200">
                <p className="font-semibold text-gray-900">MSc. Maria de Lurdes Beira</p>
              </div>
              <div className="bg-white p-4 border border-yellow-200">
                <p className="font-semibold text-gray-900">Dra. Cármen Inês</p>
              </div>
              <div className="bg-white p-4 border border-yellow-200">
                <p className="font-semibold text-gray-900">Dra. Leida Carlota</p>
              </div>
              <div className="bg-white p-4 border border-yellow-200">
                <p className="font-semibold text-gray-900">Dra. Laurinda da Conceição</p>
              </div>
              <div className="bg-white p-4 border border-yellow-200">
                <p className="font-semibold text-gray-900">PhD. Paciência António Veremos</p>
              </div>
            </div>
          </div>

          {/* Informação de Contato */}
          <div className="bg-gray-50 border border-gray-300 p-6 text-center mt-8">
            <p className="text-gray-700 mb-4 text-lg">
              Para entrar em contacto com a comissão científica:
            </p>
            <a 
              href="mailto:revistaafricaa@gmail.com?subject=Contato com Comissão Científica"
              className="inline-flex items-center gap-2 px-8 py-3 bg-brand-800 text-white hover:bg-brand-900 transition-colors font-bold text-lg border border-brand-900"
            >
              <Mail size={20} />
              revistaafricaa@gmail.com
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ConselhoEditorial;
