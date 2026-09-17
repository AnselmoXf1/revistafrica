import React, { useState } from 'react';
import { Mail, FileText, CheckCircle, ChevronDown, ChevronUp, Clock, Shield, Users, BookOpen } from 'lucide-react';

const STEPS = [
  {
    step: '01',
    icon: FileText,
    color: 'bg-blue-500',
    title: 'Prepare seu Manuscrito',
    desc: 'Arquivo Word (.doc ou .docx), fonte Arial, espaçamento 1,15. Inclua título, resumo em PT/EN, palavras-chave e referências em APA/Vancouver/ABNT.',
  },
  {
    step: '02',
    icon: Mail,
    color: 'bg-brand-700',
    title: 'Envie por E-mail',
    desc: 'Submeta diretamente para revistaafricaa@gmail.com com assunto "Submissão de Artigo — [Título]".',
  },
  {
    step: '03',
    icon: Users,
    color: 'bg-purple-600',
    title: 'Revisão por Pares',
    desc: 'Dois especialistas avaliam o artigo de forma confidencial e anônima. Você recebe o feedback com sugestões de melhoria.',
  },
  {
    step: '04',
    icon: CheckCircle,
    color: 'bg-yellow-600',
    title: 'Publicação',
    desc: 'Após aprovação e incorporação das sugestões, o artigo é publicado em até 5 dias no acervo da revista.',
  },
];

const REQUIREMENTS = [
  { label: 'Formato',         val: 'Microsoft Word (.doc ou .docx)' },
  { label: 'Fonte',           val: 'Arial' },
  { label: 'Tamanho corpo',   val: 'Arial 11, justificado, espaçamento 1,15' },
  { label: 'Título',          val: 'Arial 16, negrito, alinhado à direita' },
  { label: 'Resumo',          val: '150–300 palavras em PT e EN' },
  { label: 'Palavras-chave',  val: '3 a 5 termos (PT, EN ou ES)' },
  { label: 'Extensão',        val: '10–15 páginas (pesquisas) ou 15–20 (ensaios)' },
  { label: 'Referências',     val: 'APA 6ª ed., Vancouver ou ABNT' },
  { label: 'Idiomas aceites', val: 'Português, Inglês ou Espanhol' },
];

const FAQ = [
  {
    q: 'O artigo precisa ser inédito?',
    a: 'Sim. O artigo deve ser original e inédito, não estando em processo de revisão ou publicação em outras revistas ou meios de comunicação.',
  },
  {
    q: 'Qual o prazo para revisão?',
    a: 'O processo editorial dura em média 5 dias úteis. Sob custos adicionais, o prazo pode ser reduzido para 48h.',
  },
  {
    q: 'É necessário pagar para publicar?',
    a: 'Sim, há uma taxa de publicação que já inclui o certificado por autor. Consulte os valores na página de Contacto ou envie e-mail para cotação com mais de 1 autor.',
  },
  {
    q: 'A revisão é cega?',
    a: 'Sim. Adotamos o sistema de revisão por pares duplo-cega: nem os autores conhecem os revisores, nem os revisores conhecem os autores.',
  },
  {
    q: 'Posso submeter em inglês?',
    a: 'Sim. Aceitamos submissões em Português, Inglês e Espanhol.',
  },
];

const Submissoes: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gray-50">

      {/* ── Hero ── */}
      <section
        className="relative overflow-hidden py-20 px-4 text-center"
        style={{ background: 'linear-gradient(135deg, #052e16 0%, #14532d 55%, #166534 100%)' }}
      >
        <div className="absolute inset-0 hero-pattern pointer-events-none" />
        <div className="absolute top-0 right-0 w-80 h-80 bg-yellow-600/10 blur-3xl rounded-full pointer-events-none" />
        <div className="relative z-10 max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card text-yellow-300 text-xs font-semibold tracking-widest uppercase mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
            Para Autores
          </span>
          <div className="w-16 h-16 rounded-full bg-yellow-600/20 border-2 border-yellow-500/60 flex items-center justify-center mx-auto mb-5">
            <FileText size={28} className="text-yellow-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            Submissões
          </h1>
          <p className="text-green-100/80 text-base mb-8">
            Publique sua pesquisa na Revista África e contribua para o avanço do conhecimento científico.
          </p>
          <a
            href="mailto:revistaafricaa@gmail.com?subject=Submissão de Artigo"
            className="inline-flex items-center gap-2 px-8 py-4 bg-yellow-600 hover:bg-yellow-500 text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-yellow-500/30"
          >
            <Mail size={18} />
            Submeter Agora
          </a>
        </div>
      </section>

      {/* ── Process steps ── */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-serif font-bold text-brand-900 section-title mb-10">Como Funciona</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((s, i) => (
            <div key={s.step} className="relative bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              {i < STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-10 -right-3 w-6 h-0.5 bg-gray-200 z-10" />
              )}
              <div className={`w-12 h-12 rounded-xl ${s.color} flex items-center justify-center mb-4 shadow-md`}>
                <s.icon size={22} className="text-white" />
              </div>
              <div className="text-xs font-bold text-gray-300 mb-1 tracking-widest">PASSO {s.step}</div>
              <h3 className="font-bold text-brand-900 text-sm mb-2">{s.title}</h3>
              <p className="text-gray-500 text-xs leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Requirements ── */}
      <section className="bg-white border-y border-gray-100 py-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-serif font-bold text-brand-900 section-title mb-6">Formatação Obrigatória</h2>
              <div className="space-y-3">
                {REQUIREMENTS.map(r => (
                  <div key={r.label} className="flex gap-3 py-3 border-b border-gray-50 last:border-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-2 flex-shrink-0" />
                    <div>
                      <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-0.5">{r.label}</span>
                      <span className="text-sm text-gray-800">{r.val}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-5">
              <h2 className="text-3xl font-serif font-bold text-brand-900 section-title mb-6">Estrutura do Artigo</h2>
              {[
                { n: '1', t: 'Introdução', d: 'Tema, contexto, objetivos, justificativa e limitações do estudo.' },
                { n: '2', t: 'Fundamentação Teórica', d: 'Quadro teórico e revisão dos estudos anteriores relevantes.' },
                { n: '3', t: 'Metodologia', d: 'Desenho, participantes, métodos de recolha e considerações éticas.' },
                { n: '4', t: 'Resultados', d: 'Apresentação e análise dos dados obtidos.' },
                { n: '5', t: 'Discussão', d: 'Interpretação e comparação com estudos anteriores.' },
                { n: '6', t: 'Conclusões', d: 'Síntese dos resultados e recomendações para pesquisas futuras.' },
              ].map(item => (
                <div key={item.n} className="flex gap-4">
                  <div className="w-8 h-8 rounded-lg bg-brand-800 text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                    {item.n}
                  </div>
                  <div>
                    <div className="font-semibold text-brand-900 text-sm">{item.t}</div>
                    <div className="text-xs text-gray-500 mt-0.5">{item.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Guarantees ── */}
      <section className="max-w-5xl mx-auto px-4 py-14">
        <div className="grid sm:grid-cols-3 gap-5">
          {[
            { icon: Clock,   color: 'text-blue-500',   bg: 'bg-blue-50',   border: 'border-blue-100',   title: 'Publicação em 5 dias',   desc: 'Após aprovação final pelo conselho editorial.' },
            { icon: Shield,  color: 'text-brand-700',  bg: 'bg-brand-50',  border: 'border-brand-100',  title: 'Revisão Cega',           desc: 'Processo anônimo e confidencial por dois especialistas.' },
            { icon: BookOpen,color: 'text-yellow-600', bg: 'bg-yellow-50', border: 'border-yellow-100', title: 'Certificado Incluso',     desc: 'Certificado de publicação incluído na taxa por autor.' },
          ].map(g => (
            <div key={g.title} className={`rounded-2xl p-6 border ${g.bg} ${g.border} text-center`}>
              <div className={`w-12 h-12 rounded-xl ${g.bg} flex items-center justify-center mx-auto mb-3 border ${g.border}`}>
                <g.icon size={22} className={g.color} />
              </div>
              <h3 className="font-bold text-gray-900 text-sm mb-1">{g.title}</h3>
              <p className="text-gray-500 text-xs">{g.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-white border-t border-gray-100 py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-brand-900 section-title mb-8">Dúvidas Frequentes</h2>
          <div className="space-y-3">
            {FAQ.map((faq, i) => (
              <div key={i} className="rounded-xl border border-gray-100 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-800 text-sm pr-4">{faq.q}</span>
                  {openFaq === i
                    ? <ChevronUp size={16} className="text-brand-600 flex-shrink-0" />
                    : <ChevronDown size={16} className="text-gray-400 flex-shrink-0" />
                  }
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed border-t border-gray-50 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="py-16 px-4 text-center"
        style={{ background: 'linear-gradient(135deg, #14532d 0%, #166534 100%)' }}
      >
        <div className="max-w-xl mx-auto">
          <h3 className="text-2xl font-serif font-bold text-white mb-3">Pronto para publicar?</h3>
          <p className="text-green-100/80 text-sm mb-6">Envie seu manuscrito agora e nossa equipe entrará em contato em até 48 horas.</p>
          <a
            href="mailto:revistaafricaa@gmail.com?subject=Submissão de Artigo"
            className="inline-flex items-center gap-2 px-8 py-4 bg-yellow-600 hover:bg-yellow-500 text-white font-bold rounded-xl transition-all duration-300 shadow-lg"
          >
            <Mail size={18} />
            revistaafricaa@gmail.com
          </a>
        </div>
      </section>
    </div>
  );
};

export default Submissoes;
