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

            {/* Contactos Telefónicos */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-gray-400">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Gestor 1 (Moçambique)</h3>
                <p className="text-2xl font-bold text-green-700">873574681</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-gray-400">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Gestor 2 (Brasil)</h3>
                <p className="text-xl font-bold text-green-700">+55 (85) 9 7546-9213</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-gray-400">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Gestor 3 (Angola)</h3>
                <p className="text-xl font-bold text-green-700">+244 923 456 781</p>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="bg-gradient-to-r from-green-600 to-green-700 p-8 rounded-lg text-white text-center">
              <h2 className="text-2xl font-bold mb-4">WhatsApp</h2>
              <p className="text-lg mb-4">Para publicar mais rápido, entre em contato pelo WhatsApp:</p>
              <a 
                href="https://wa.me/258852224979"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-green-700 rounded-lg hover:bg-gray-100 transition-colors font-bold shadow-lg text-xl"
              >
                +258 852 224 979
              </a>
            </div>

            {/* Informações Adicionais */}
            <div className="mt-8 p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Horário de Atendimento</h3>
              <p className="text-gray-700">
                Respondemos emails de segunda a sexta-feira, das 8h às 18h.
              </p>
              <p className="text-gray-600 text-sm mt-2">
                Prazo médio de resposta: 48 horas úteis, e publicação do artigo em 5 dias
              </p>
            </div>

            {/* Valores de Publicação */}
            <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 border-l-4 border-yellow-600 p-8 rounded-r-lg">
              <h2 className="text-2xl font-bold text-yellow-900 mb-4">Valor para Publicação de Artigo</h2>
              <p className="text-gray-700 mb-4">Já incluso o certificado por autor:</p>
              <div className="space-y-2 text-lg">
                <p className="font-semibold text-gray-900">• R$ 380,00 (Brasil)</p>
                <p className="font-semibold text-gray-900">• 4.689,82 Metical (Moçambique)</p>
                <p className="font-semibold text-gray-900">• 73,40 USD</p>
              </div>
              <p className="text-sm text-gray-600 mt-4">
                *Prazo de publicação de 5 dias e 48h sob custos adicionais. Acima de 1 autor, peça a cotação que se torna mais acessível pelo email: revistaafricaa@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
