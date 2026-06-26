import React from 'react';
import { Mail } from 'lucide-react';

const Contacto: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-16 px-4">
      <div className="max-w-4xl w-full bg-white border border-gray-300 shadow-sm">
        {/* Header Institucional */}
        <div className="bg-brand-900 text-white p-8 border-b-4 border-yellow-600 flex flex-col items-center text-center">
          <Mail size={48} className="text-yellow-500 mb-4" />
          <h1 className="text-4xl font-serif font-bold tracking-tight">Contacto</h1>
          <p className="text-xl text-brand-100 font-serif mt-2">
            Entre em contato com a Revista África
          </p>
        </div>

        <div className="p-8 md:p-12 text-gray-800 leading-relaxed space-y-10 font-sans">
          {/* Email Principal */}
          <div className="bg-brand-50 border-l-4 border-brand-800 p-8 shadow-sm">
            <h2 className="text-2xl font-serif font-bold text-brand-900 mb-4">Email da Revista</h2>
            <p className="text-gray-700 mb-4 text-lg">
              Para questões gerais, submissões ou dúvidas sobre a revista:
            </p>
            <a 
              href="mailto:revistaafricaa@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-3 bg-brand-800 text-white hover:bg-brand-900 transition-colors font-bold text-lg border border-brand-900"
            >
              <Mail size={22} />
              revistaafricaa@gmail.com
            </a>
          </div>

          {/* Contactos Telefónicos */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 border border-gray-300">
              <h3 className="text-xl font-serif font-semibold text-gray-900 mb-3">Gestor 1 (Moçambique)</h3>
              <p className="text-2xl font-bold text-brand-700">873574681</p>
            </div>
            <div className="bg-gray-50 p-6 border border-gray-300">
              <h3 className="text-xl font-serif font-semibold text-gray-900 mb-3">Gestor 2 (Brasil)</h3>
              <p className="text-xl font-bold text-brand-700">+55 (85) 9 7546-9213</p>
            </div>
            <div className="bg-gray-50 p-6 border border-gray-300">
              <h3 className="text-xl font-serif font-semibold text-gray-900 mb-3">Gestor 3 (Angola)</h3>
              <p className="text-xl font-bold text-brand-700">+244 923 456 781</p>
            </div>
          </div>

          {/* WhatsApp */}
          <div className="bg-brand-800 p-8 border-l-4 border-brand-900 text-white text-center">
            <h2 className="text-2xl font-serif font-bold mb-4">WhatsApp</h2>
            <p className="text-lg mb-6">Para publicar mais rápido, entre em contato pelo WhatsApp:</p>
            <a 
              href="https://wa.me/258852224979"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-brand-800 hover:bg-gray-100 transition-colors font-bold text-xl border border-white"
            >
              +258 852 224 979
            </a>
          </div>

          {/* Informações Adicionais */}
          <div className="p-6 bg-gray-50 border border-gray-300 text-center">
            <h3 className="text-xl font-serif font-semibold text-gray-900 mb-3">Horário de Atendimento</h3>
            <p className="text-gray-700 text-lg">
              Respondemos emails de segunda a sexta-feira, das 8h às 18h.
            </p>
            <p className="text-gray-600 text-sm mt-2">
              Prazo médio de resposta: 48 horas úteis, e publicação do artigo em 5 dias
            </p>
          </div>

          {/* Valores de Publicação */}
          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-8 shadow-sm">
            <h2 className="text-2xl font-serif font-bold text-yellow-900 mb-4">Valor para Publicação de Artigo</h2>
            <p className="text-gray-700 mb-4 text-lg">Já incluso o certificado por autor:</p>
            <div className="space-y-2 text-lg">
              <p className="font-semibold text-gray-900">■ R$ 380,00 (Brasil)</p>
              <p className="font-semibold text-gray-900">■ 4.689,82 Metical (Moçambique)</p>
              <p className="font-semibold text-gray-900">■ 73,40 USD</p>
            </div>
            <p className="text-sm text-gray-600 mt-6 border-t border-yellow-200 pt-4">
              *Prazo de publicação de 5 dias e 48h sob custos adicionais. Acima de 1 autor, peça a cotação que se torna mais acessível pelo email: revistaafricaa@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
