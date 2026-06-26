import React from 'react';
import { Mail, FileText, CheckCircle } from 'lucide-react';

const Submissoes: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-16 px-4">
      <div className="max-w-4xl w-full bg-white border border-gray-300 shadow-sm">
        {/* Header Institucional */}
        <div className="bg-brand-900 text-white p-8 border-b-4 border-yellow-600 flex flex-col items-center text-center">
          <FileText size={48} className="text-yellow-500 mb-4" />
          <h1 className="text-4xl font-serif font-bold tracking-tight">Submissões</h1>
          <p className="text-xl text-brand-100 font-serif mt-2">
            Condições para submissão de artigos à Revista África
          </p>
        </div>

        <div className="p-8 md:p-12 text-gray-800 leading-relaxed space-y-10 font-sans">
          
          {/* Caixa Como Submeter */}
          <div className="bg-brand-50 border-l-4 border-brand-800 p-8 shadow-sm">
            <h2 className="text-2xl font-serif font-bold text-brand-900 mb-3 flex items-center gap-2">
              <CheckCircle size={24} className="text-brand-700" />
              Como Submeter seu Artigo
            </h2>
            <p className="mb-6 text-lg">
              Para submeter seu artigo científico à Revista África, envie o manuscrito para o nosso email oficial:
            </p>
            <a 
              href="mailto:revistaafricaa@gmail.com?subject=Submissão de Artigo"
              className="inline-flex items-center gap-2 px-8 py-3 bg-brand-800 text-white hover:bg-brand-900 transition-colors font-bold text-lg border border-brand-900"
            >
              <Mail size={20} />
              revistaafricaa@gmail.com
            </a>
          </div>

          <div className="space-y-8">
            <h2 className="text-3xl font-serif font-bold text-gray-900 border-b-2 border-brand-800 pb-2">Condições de Submissão</h2>
            
            {/* Requisitos Gerais */}
            <div className="bg-gray-50 p-6 border border-gray-300">
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-4">Requisitos Gerais para Submissão</h3>
              <ol className="list-decimal pl-6 space-y-3 text-gray-800 text-lg">
                <li>O artigo deve ser original e inédito, não estando em processo de revisão ou publicação em outras revistas.</li>
                <li>Ficheiros devem ser submetidos em Microsoft Word (.doc ou .docx).</li>
                <li>Texto deve seguir padrões de estilo e referências descritos nas Instruções para Autores.</li>
              </ol>
            </div>

            {/* Envio de Artigos */}
            <div>
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-3">I. Envio de Artigos</h3>
              <ul className="list-disc pl-6 space-y-2 text-lg">
                <li>Submeter artigos diretamente no site da Revista África via email: <strong>revistaafricaa@gmail.com</strong></li>
                <li>Documentos obrigatórios: Manuscrito em Word</li>
              </ul>
            </div>

            {/* Apresentação dos Textos */}
            <div>
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-4">II. Apresentação dos Textos</h3>
              
              <div className="bg-yellow-50 border border-yellow-300 p-6 mb-6">
                <h4 className="font-serif font-bold text-gray-900 mb-3 text-lg">Estrutura Geral:</h4>
                <ul className="space-y-2 text-lg">
                  <li><strong>Título:</strong> conciso, ilustrativo, em português e inglês, máximo 20 palavras.</li>
                  <li><strong>Resumo:</strong> 150 a 300 palavras em português e inglês, com estrutura:
                    <ol className="list-decimal pl-6 mt-2 space-y-1 text-base">
                      <li>Introdução (problema, objetivo/finalidade)</li>
                      <li>Metodologia (desenho, participantes, métodos de recolha e análise)</li>
                      <li>Resultados (evidências estatísticas)</li>
                      <li>Discussão/Conclusões (síntese dos resultados)</li>
                    </ol>
                  </li>
                  <li><strong>Palavras-chave:</strong> 3 a 5 termos em português, inglês ou espanhol.</li>
                  <li><strong>Extensão:</strong>
                    <ul className="pl-6 mt-1 space-y-1 text-base">
                      <li>■ Pesquisas e estudos: 10–15 páginas</li>
                      <li>■ Experiências, relatórios e ensaios: 15–20 páginas</li>
                    </ul>
                  </li>
                </ul>
              </div>

              <h4 className="font-serif font-bold text-gray-900 mb-3 text-lg">Estrutura Detalhada para Pesquisas e Estudos:</h4>
              <ol className="list-decimal pl-6 space-y-2 text-lg">
                <li>Introdução: tema, contexto, objetivos, justificativa, limitações.</li>
                <li>Fundamentação teórica / quadro teórico / estudos anteriores.</li>
                <li>Metodologia: detalhar desenho, participantes, amostra, métodos de recolha, considerações éticas e materiais.</li>
                <li>Resultados – apresentação e análise.</li>
                <li>Discussão – interpretação e comparação com estudos anteriores.</li>
                <li>Conclusões / Recomendações.</li>
              </ol>

              <p className="text-sm italic mt-4 text-gray-600 bg-gray-50 p-4 border border-gray-200">
                Para engenharia e ciências da saúde: Introdução, materiais e métodos, resultados e discussão, conclusões/recomendações, agradecimentos (opcional), referências bibliográficas.
              </p>
            </div>

            {/* Elementos Gráficos */}
            <div>
              <h4 className="font-serif font-bold text-gray-900 mb-2 text-lg">Elementos Gráficos:</h4>
              <ul className="list-disc pl-6 space-y-1 text-lg">
                <li>Esquemas, gráficos, tabelas numerados sequencialmente e incluídos na secção de resultados.</li>
                <li>Uso de ilustrações deve ser moderado.</li>
              </ul>
            </div>

            {/* Referências */}
            <div>
              <h4 className="font-serif font-bold text-gray-900 mb-2 text-lg">Referências Bibliográficas:</h4>
              <ul className="list-disc pl-6 space-y-1 text-lg">
                <li>Apenas as citadas no texto.</li>
                <li>Seguir Normas APA (6ª edição), Vancouver ou ABNT.</li>
              </ul>
            </div>

            {/* Processo Editorial */}
            <div>
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-3">III. Processo Editorial</h3>
              <ol className="list-decimal pl-6 space-y-3 text-lg">
                <li><strong>Recepção de Artigos:</strong> Conselho Editorial verifica adequação; recepção não implica aceitação.</li>
                <li><strong>Revisão por Pares:</strong> pelo menos dois revisores especialistas, confidencial e anónima; aceitação final depende da incorporação das sugestões.</li>
                <li><strong>Decisão Editorial:</strong> critérios incluem organização, clareza, originalidade, relevância, atualidade, qualidade metodológica, validade científica e ética; autores notificados da decisão.</li>
              </ol>
            </div>

            {/* Direitos */}
            <div>
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-3">IV. Direitos de Reprodução</h3>
              <ul className="list-disc pl-6 space-y-1 text-lg">
                <li>Revista África detém direitos de autor.</li>
                <li>Reprodução requer autorização do Conselho Editorial.</li>
              </ul>
            </div>

            {/* Formatação */}
            <div className="bg-brand-50 border border-brand-300 p-6 mt-8">
              <h3 className="text-xl font-serif font-bold text-brand-900 mb-4">Formatação Padrão do Artigo</h3>
              <ul className="space-y-2 text-brand-900 text-base">
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
  );
};

export default Submissoes;
