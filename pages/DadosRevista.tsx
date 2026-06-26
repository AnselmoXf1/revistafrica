import React from 'react';
import { BookOpen, Info } from 'lucide-react';

const DadosRevista: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-16 px-4">
      <div className="max-w-4xl w-full bg-white border border-gray-300 shadow-sm">
        {/* Header Institucional */}
        <div className="bg-brand-900 text-white p-8 border-b-4 border-yellow-600 flex flex-col items-center text-center">
          <Info size={48} className="text-yellow-500 mb-4" />
          <h1 className="text-4xl font-serif font-bold tracking-tight">Dados da Revista</h1>
          <p className="text-xl text-brand-100 font-serif mt-2">
            Informações sobre a Revista África
          </p>
        </div>

        <div className="p-8 md:p-12 text-gray-800 leading-relaxed space-y-10 font-sans">
          <div className="space-y-10">
            {/* Informações Básicas */}
            <div className="bg-brand-50 border-l-4 border-brand-800 p-6 shadow-sm">
              <h2 className="text-2xl font-serif font-bold text-brand-900 mb-4">Informações Básicas</h2>
              <div className="space-y-2">
                <p><strong>Nome:</strong> Revista África</p>
                <p><strong>Responsável:</strong> PhD. Carolina Mendes Figueiredo</p>
                <p><strong>Editora 1:</strong> Dra. Paciência Veremos</p>
                <p><strong>Editora 2:</strong> Cármen Inês</p>
                <p><strong>Contacto:</strong> revistaafricaa@gmail.com</p>
              </div>
            </div>

            {/* Sobre a RevistaAfrica */}
            <div>
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4 border-b-2 border-brand-800 pb-2">Sobre a Revista África</h2>
              <div className="text-justify space-y-4">
                <p>
                  A <strong>Revista África</strong> é uma revista acadêmica dedicada à valorização do conhecimento, da pesquisa e da reflexão crítica sobre temas contemporâneos que impactam África e a sociedade global. O seu objectivo é avaliar e divulgar trabalhos científicos, artigos de opinião e estudos interdisciplinares de forma rigorosa e acessível, promovendo a troca de ideias entre pesquisadores, estudantes e profissionais.
                </p>
                <p>
                  A revista foi criada na sequência de um fórum que reuniu diversos acadêmicos de várias partes do mundo, no qual se reconheceu a necessidade de expandir e democratizar o conhecimento junto de toda a comunidade africana. A partir desse encontro, foram selecionados editores de diferentes países, responsáveis por garantir o contacto permanente com acadêmicos, instituições de ensino e centros de investigação, fortalecendo assim a dimensão internacional e colaborativa da revista.
                </p>
                <p>
                  A Revista África tem como sua base representativa em Moçambique, onde é dirigida por Professores Doutores de diversas categorias e áreas do saber, comprometidos com a excelência científica, a ética acadêmica e a promoção do pensamento crítico. Por meio dessa estrutura editorial plural e qualificada, a revista busca estimular a produção acadêmica de qualidade, contribuir para o debate científico e fortalecer a cultura de investigação e inovação no continente africano.
                </p>
              </div>
              <div className="bg-brand-900 text-brand-100 p-6 mt-6 text-center border-l-4 border-yellow-500 shadow-sm">
                <p className="text-xl font-serif font-bold italic">
                  Revista África – "Conhecimento africano que inspira o mundo".
                </p>
              </div>
            </div>

            {/* Missão */}
            <div className="bg-brand-50 border-l-4 border-brand-800 p-6 shadow-sm">
              <h2 className="text-2xl font-serif font-bold text-brand-900 mb-3">Missão</h2>
              <p className="text-justify text-brand-800 font-medium">
                Promover a produção, avaliação e divulgação de conhecimento científico e acadêmico de qualidade, incentivando a pesquisa, a reflexão crítica e a inovação, contribuindo para o desenvolvimento intelectual e social de África e da comunidade global.
              </p>
            </div>

            {/* Visão */}
            <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 shadow-sm">
              <h2 className="text-2xl font-serif font-bold text-yellow-900 mb-3">Visão</h2>
              <p className="text-justify text-yellow-800 font-medium">
                Ser reconhecida como uma revista de referência no continente africano e internacionalmente, estimulando a investigação interdisciplinar, fortalecendo a cultura científica e tornando o conhecimento acessível a pesquisadores, estudantes e profissionais.
              </p>
            </div>

            {/* Valores */}
            <div className="bg-gray-50 border border-gray-300 p-8">
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">Valores</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-brand-700 font-bold mt-1">■</span>
                  <div>
                    <strong className="text-brand-900 font-serif text-lg">Rigor científico:</strong> compromisso com a qualidade e precisão dos conteúdos publicados.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-700 font-bold mt-1">■</span>
                  <div>
                    <strong className="text-brand-900 font-serif text-lg">Ética e transparência:</strong> práticas justas e claras na seleção e publicação de trabalhos.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-700 font-bold mt-1">■</span>
                  <div>
                    <strong className="text-brand-900 font-serif text-lg">Inovação e criatividade:</strong> incentivo à originalidade e novas abordagens de estudo.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-700 font-bold mt-1">■</span>
                  <div>
                    <strong className="text-brand-900 font-serif text-lg">Inclusão e diversidade:</strong> espaço aberto a autores de diferentes origens e áreas do conhecimento.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-700 font-bold mt-1">■</span>
                  <div>
                    <strong className="text-brand-900 font-serif text-lg">Colaboração:</strong> estímulo à troca de ideias e ao diálogo acadêmico.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DadosRevista;
