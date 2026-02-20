import React from 'react';
import { Mail, FileText, CheckCircle } from 'lucide-react';

const Submissoes: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
              <FileText className="text-green-700" size={32} />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Submissões</h1>
            <p className="text-lg text-gray-600">
              Condições para submissão de artigos à Revista África
            </p>
          </div>

          <div className="space-y-6 text-gray-700 leading-relaxed">
            <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg">
              <h2 className="text-xl font-semibold text-green-900 mb-3 flex items-center gap-2">
                <CheckCircle size={24} />
                Como Submeter seu Artigo
              </h2>
              <p className="mb-4">
                Para submeter seu artigo científico à RevistaAfrica, envie o manuscrito para o nosso email oficial:
              </p>
              <a 
                href="mailto:revistaafricaa@gmail.com?subject=Submissão de Artigo"
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-700 text-white rounded-lg hover:bg-green-800 transition-colors font-semibold shadow-md"
              >
                <Mail size={20} />
                revistaafricaa@gmail.com
              </a>
            </div>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Condições de Submissão</h2>
              
              {/* Requisitos Gerais */}
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Requisitos Gerais para Submissão</h3>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>O artigo deve ser original e inédito, não estando em processo de revisão ou publicação em outras revistas.</li>
                  <li>Ficheiros devem ser submetidos em Microsoft Word (.doc ou .docx).</li>
                  <li>Texto deve seguir padrões de estilo e referências descritos nas Instruções para Autores.</li>
                </ol>
              </div>

              {/* Envio de Artigos */}
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">I. Envio de Artigos</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Submeter artigos diretamente no site da RevistaAfrica via email: <strong>revistaafricaa@gmail.com</strong></li>
                <li>Documentos obrigatórios: Manuscrito em Word</li>
              </ul>

              {/* Apresentação dos Textos */}
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">II. Apresentação dos Textos</h3>
              
              <div className="bg-yellow-50 p-5 rounded-lg mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">Estrutura Geral:</h4>
                <ul className="space-y-2 text-sm">
                  <li><strong>Título:</strong> conciso, ilustrativo, em português e inglês, máximo 20 palavras.</li>
                  <li><strong>Resumo:</strong> 150 a 300 palavras em português e inglês, com estrutura:
                    <ol className="list-decimal pl-6 mt-1">
                      <li>Introdução (problema, objetivo/finalidade)</li>
                      <li>Metodologia (desenho, participantes, métodos de recolha e análise)</li>
                      <li>Resultados (evidências estatísticas)</li>
                      <li>Discussão/Conclusões (síntese dos resultados)</li>
                    </ol>
                  </li>
                  <li><strong>Palavras-chave:</strong> 3 a 5 termos em português, inglês ou espanhol.</li>
                  <li><strong>Extensão:</strong>
                    <ul className="pl-6 mt-1">
                      <li>• Pesquisas e estudos: 10–15 páginas</li>
                      <li>• Experiências, relatórios e ensaios: 15–20 páginas</li>
                    </ul>
                  </li>
                </ul>
              </div>

              <h4 className="font-semibold text-gray-900 mb-2 mt-4">Estrutura Detalhada para Pesquisas e Estudos:</h4>
              <ol className="list-decimal pl-6 space-y-1">
                <li>Introdução: tema, contexto, objetivos, justificativa, limitações.</li>
                <li>Fundamentação teórica / quadro teórico / estudos anteriores.</li>
                <li>Metodologia: detalhar desenho, participantes, amostra, métodos de recolha, considerações éticas e materiais.</li>
                <li>Resultados – apresentação e análise.</li>
                <li>Discussão – interpretação e comparação com estudos anteriores.</li>
                <li>Conclusões / Recomendações.</li>
              </ol>

              <p className="text-sm italic mt-3 text-gray-600">
                Para engenharia e ciências da saúde: Introdução, materiais e métodos, resultados e discussão, conclusões/recomendações, agradecimentos (opcional), referências bibliográficas.
              </p>

              {/* Elementos Gráficos */}
              <h4 className="font-semibold text-gray-900 mb-2 mt-4">Elementos Gráficos:</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>Esquemas, gráficos, tabelas numerados sequencialmente e incluídos na secção de resultados.</li>
                <li>Uso de ilustrações deve ser moderado.</li>
              </ul>

              {/* Referências */}
              <h4 className="font-semibold text-gray-900 mb-2 mt-4">Referências Bibliográficas:</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>Apenas as citadas no texto.</li>
                <li>Seguir Normas APA (6ª edição), Vancouver ou ABNT.</li>
              </ul>

              {/* Processo Editorial */}
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">III. Processo Editorial</h3>
              <ol className="list-decimal pl-6 space-y-2">
                <li><strong>Recepção de Artigos:</strong> Conselho Editorial verifica adequação; recepção não implica aceitação.</li>
                <li><strong>Revisão por Pares:</strong> pelo menos dois revisores especialistas, confidencial e anónima; aceitação final depende da incorporação das sugestões.</li>
                <li><strong>Decisão Editorial:</strong> critérios incluem organização, clareza, originalidade, relevância, atualidade, qualidade metodológica, validade científica e ética; autores notificados da decisão.</li>
              </ol>

              {/* Direitos */}
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">IV. Direitos de Reprodução</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>RevistaAfrica detém direitos de autor.</li>
                <li>Reprodução requer autorização do Conselho Editorial.</li>
              </ul>

              {/* Formatação */}
              <div className="bg-green-50 p-5 rounded-lg mt-6">
                <h3 className="text-xl font-semibold text-green-900 mb-3">Formatação Padrão do Artigo</h3>
                <ul className="space-y-1 text-sm">
                  <li><strong>Título:</strong> Arial 16, negrito, alinhado à direita.</li>
                  <li><strong>Resumo:</strong> Arial 12 negrito (título), Arial 10 justificado (corpo).</li>
                  <li><strong>Palavras-chave:</strong> Arial 10, justificado.</li>
                  <li><strong>Títulos principais:</strong> Arial 14, negrito; subtítulos: Arial 12.</li>
                  <li><strong>Corpo do texto:</strong> Arial 11, justificado, espaçamento 1,15.</li>
                  <li><strong>Referências:</strong> APA 6ª edição, Vancouver ou ABNT.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Submissoes;
