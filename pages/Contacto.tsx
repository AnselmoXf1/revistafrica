import React from 'react';
import { Mail, Send } from 'lucide-react';

const Contacto: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
              <Mail className="text-green-700" size={32} />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Contacto</h1>
            <p className="text-lg text-gray-600">
              Entre em contato com a Revista África
            </p>
          </div>

          <div className="space-y-8">
            {/* Email Principal */}
            <div className="bg-gradient-to-r from-green-50 to-green-100 border-l-4 border-green-600 p-8 rounded-r-lg">
              <h2 className="text-2xl font-bold text-green-900 mb-4">Email da Revista</h2>
              <p className="text-gray-700 mb-4">
                Para questões gerais, submissões ou dúvidas sobre a revista:
              </p>
              <a 
                href="mailto:revistaafricaa@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-700 text-white rounded-lg hover:bg-green-800 transition-colors font-semibold shadow-md text-lg"
              >
                <Mail size={22} />
                revistaafricaa@gmail.com
              </a>
            </div>

            {/* Comissão Científica */}
            <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 border-l-4 border-yellow-600 p-8 rounded-r-lg">
              <h2 className="text-2xl font-bold text-yellow-900 mb-4">Comissão Científica</h2>
              <p className="text-gray-700 mb-4">
                Entre em contacto com a comissão científica para questões acadêmicas e de revisão:
              </p>
              <a 
                href="mailto:revistaafricaa@gmail.com?subject=Contato com Comissão Científica"
                className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors font-semibold shadow-md text-lg"
              >
                <Send size={22} />
                revistaafricaa@gmail.com
              </a>
            </div>

            {/* Editor */}
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 border-l-4 border-blue-600 p-8 rounded-r-lg">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">Editor</h2>
              <p className="text-gray-700 mb-4">
                Contacto direto com a editora Claire Messias:
              </p>
              <a 
                href="mailto:Clairemessias.hd@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold shadow-md text-lg"
              >
                <Mail size={22} />
                Clairemessias.hd@gmail.com
              </a>
            </div>

            {/* Contactos Telefónicos */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-gray-400">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Gestor 1</h3>
                <p className="text-2xl font-bold text-green-700">873574681</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-gray-400">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Gestor 2</h3>
                <p className="text-2xl font-bold text-green-700">873862501</p>
              </div>
            </div>

            {/* Informações Adicionais */}
            <div className="mt-8 p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Horário de Atendimento</h3>
              <p className="text-gray-700">
                Respondemos emails de segunda a sexta-feira, das 9h às 17h.
              </p>
              <p className="text-gray-600 text-sm mt-2">
                Prazo médio de resposta: 48 horas úteis
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
