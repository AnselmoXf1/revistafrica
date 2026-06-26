import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BookOpen } from 'lucide-react';

const Sobre: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-16 px-4">
      <Helmet>
        <title>Sobre Nós | Revista África</title>
      </Helmet>
      
      <div className="max-w-4xl w-full bg-white border border-gray-300 shadow-sm">
        {/* Header Institucional */}
        <div className="bg-brand-900 text-white p-8 border-b-4 border-yellow-600 flex flex-col items-center text-center">
          <BookOpen size={48} className="text-yellow-500 mb-4" />
          <h1 className="text-4xl font-serif font-bold tracking-tight">Sobre a Revista África</h1>
        </div>

        {/* Corpo de Texto */}
        <div className="p-8 md:p-12 text-gray-800 leading-relaxed space-y-6 text-lg text-justify font-sans">
          <p>
            A <strong>Revista África</strong> é uma publicação acadêmica dedicada à valorização do conhecimento, da pesquisa e da reflexão crítica sobre temas contemporâneos que impactam África e a sociedade global. Nosso objectivo é avaliar e divulgar trabalhos científicos, artigos de opinião e estudos interdisciplinares de forma rigorosa e acessível, promovendo a troca de ideias entre pesquisadores, estudantes e profissionais.
          </p>
          
          <p>
            A revista busca estimular a produção acadêmica de qualidade, contribuir para o debate científico e fortalecer a cultura de investigação e inovação no continente africano. Valorizamos a pluralidade de perspectivas e o rigor metodológico na busca por soluções para os desafios atuais.
          </p>
          
          {/* Caixa de Destaque da Missão */}
          <div className="mt-10 bg-brand-50 border-l-4 border-brand-800 p-6 shadow-sm">
            <h2 className="text-2xl font-serif font-bold text-brand-900 mb-4">Nossa Missão</h2>
            <p className="text-brand-800 text-lg">
              Promover a produção, avaliação e divulgação de conhecimento científico e acadêmico de qualidade, incentivando a pesquisa, a reflexão crítica e a inovação, contribuindo para o desenvolvimento intelectual e social de África e da comunidade global.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sobre;
