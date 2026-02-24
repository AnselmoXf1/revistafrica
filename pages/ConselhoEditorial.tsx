import React from 'react';
import { Users, Mail } from 'lucide-react';

const ConselhoEditorial: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
              <Users className="text-green-700" size={32} />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Conselho Editorial</h1>
            <p className="text-lg text-gray-600">
              Membros do conselho editorial da Revista África
            </p>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700">
            <div className="space-y-8">
              {/* Responsável */}
              <div className="bg-gradient-to-r from-green-50 to-yellow-50 p-6 rounded-lg border-l-4 border-green-700">
                <h2 className="text-2xl font-bold text-green-900 mb-4">Responsável</h2>
                <div className="text-lg">
                  <p className="font-semibold text-gray-900">PhD. Carolina Mendes Figueiredo (Brasileira)</p>
                </div>
              </div>

              {/* Editores */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Editores</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-5 rounded-lg">
                    <p className="font-semibold text-gray-900">Dra. Paciência Veremos</p>
                  </div>
                  <div className="bg-gray-50 p-5 rounded-lg">
                    <p className="font-semibold text-gray-900">Cármen Inês</p>
                  </div>
                  <div className="bg-gray-50 p-5 rounded-lg">
                    <p className="font-semibold text-gray-900">Laurinda da Conceição</p>
                  </div>
                  <div className="bg-gray-50 p-5 rounded-lg">
                    <p className="font-semibold text-gray-900">Leida Carlota</p>
                  </div>
                </div>git push origin main
              </div>

              {/* Comissão Científica */}
              <div className="bg-gradient-to-r from-yellow-50 to-green-50 p-6 rounded-lg border-l-4 border-yellow-600">
                <h2 className="text-2xl font-bold text-yellow-900 mb-4">Comissão Científica</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <p className="font-semibold text-gray-900">MSc. Maria de Lurdes Beira</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <p className="font-semibold text-gray-900">Dra. Cármen Inês</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <p className="font-semibold text-gray-900">Dra. Leida Carlota</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <p className="font-semibold text-gray-900">Dra. Laurinda da Conceição</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <p className="font-semibold text-gray-900">PhD. Paciência António Veremos</p>
                  </div>
                </div>
              </div>

              {/* Informação de Contato */}
              <div className="bg-green-50 p-6 rounded-lg text-center">
                <p className="text-gray-700 mb-3">
                  Para entrar em contacto com a comissão científica:
                </p>
                <a 
                  href="mailto:revistaafricaa@gmail.com?subject=Contato com Comissão Científica"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-green-700 text-white rounded-lg hover:bg-green-800 transition-colors font-semibold shadow-md"
                >
                  <Mail size={20} />
                  revistaafricaa@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConselhoEditorial;
