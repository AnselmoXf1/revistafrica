import React from 'react';
import { BookOpen, Info } from 'lucide-react';

const DadosRevista: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
              <Info className="text-green-700" size={32} />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Dados da Revista</h1>
            <p className="text-lg text-gray-600">
              Informações sobre a Revista África
            </p>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <div className="space-y-8">
              {/* Informações Básicas */}
              <div className="bg-green-50 p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-green-900 mb-4">Informações Básicas</h2>
                <div className="space-y-2">
                  <p><strong>Nome:</strong> RevistaAfrica</p>
                  <p><strong>Responsável:</strong> Eng. Claire Messias Colaço Sardinha Casquinha (MBA)</p>
                  <p><strong>Editora 1:</strong> Dra. Paciência Veremos</p>
                  <p><strong>Editora 2:</strong> Cármen Inês Colaço Sardinha Casquinha</p>
                </div>
              </div>

              {/* Descrição */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Descrição</h2>
                <p className="text-justify">
                  A RevistaAfrica é uma publicação acadêmica dedicada à valorização do conhecimento, da pesquisa e da reflexão crítica sobre temas contemporâneos que impactam África e a sociedade global. Nosso objectivo é avaliar e divulgar trabalhos científicos, artigos de opinião e estudos interdisciplinares de forma rigorosa e acessível, promovendo a troca de ideias entre pesquisadores, estudantes e profissionais. A revista busca estimular a produção acadêmica de qualidade, contribuir para o debate científico e fortalecer a cultura de investigação e inovação no continente africano.
                </p>
              </div>

              {/* Missão */}
              <div className="bg-gradient-to-r from-green-50 to-yellow-50 p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-green-900 mb-3">Missão</h2>
                <p className="text-justify">
                  Promover a produção, avaliação e divulgação de conhecimento científico e acadêmico de qualidade, incentivando a pesquisa, a reflexão crítica e a inovação, contribuindo para o desenvolvimento intelectual e social de África e da comunidade global.
                </p>
              </div>

              {/* Visão */}
              <div className="bg-gradient-to-r from-yellow-50 to-green-50 p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-green-900 mb-3">Visão</h2>
                <p className="text-justify">
                  Ser reconhecida como uma revista de referência no continente africano e internacionalmente, estimulando a investigação interdisciplinar, fortalecendo a cultura científica e tornando o conhecimento acessível a pesquisadores, estudantes e profissionais.
                </p>
              </div>

              {/* Valores */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Valores</h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-green-700 font-bold">•</span>
                    <div>
                      <strong className="text-green-800">Rigor científico:</strong> compromisso com a qualidade e precisão dos conteúdos publicados.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-700 font-bold">•</span>
                    <div>
                      <strong className="text-green-800">Ética e transparência:</strong> práticas justas e claras na seleção e publicação de trabalhos.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-700 font-bold">•</span>
                    <div>
                      <strong className="text-green-800">Inovação e criatividade:</strong> incentivo à originalidade e novas abordagens de estudo.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-700 font-bold">•</span>
                    <div>
                      <strong className="text-green-800">Inclusão e diversidade:</strong> espaço aberto a autores de diferentes origens e áreas do conhecimento.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-700 font-bold">•</span>
                    <div>
                      <strong className="text-green-800">Colaboração:</strong> estímulo à troca de ideias e ao diálogo acadêmico.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DadosRevista;
