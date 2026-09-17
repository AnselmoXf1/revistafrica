import React, { useState } from 'react';
import { Mail, Phone, MessageCircle, Clock, DollarSign, Globe, Copy, Check } from 'lucide-react';

const CONTACTS = [
  {
    flag: '🇲🇿',
    country: 'Moçambique',
    name: 'Gestor Principal',
    phone: '873 574 681',
    whatsapp: 'https://wa.me/258873574681',
    color: 'border-green-200 bg-green-50',
    badge: 'bg-green-100 text-green-800',
  },
  {
    flag: '🇧🇷',
    country: 'Brasil',
    name: 'Gestor Brasil',
    phone: '+55 (85) 9 7546-9213',
    whatsapp: 'https://wa.me/5585975469213',
    color: 'border-yellow-200 bg-yellow-50',
    badge: 'bg-yellow-100 text-yellow-800',
  },
  {
    flag: '🇦🇴',
    country: 'Angola',
    name: 'Gestor Angola',
    phone: '+244 923 456 781',
    whatsapp: 'https://wa.me/244923456781',
    color: 'border-red-200 bg-red-50',
    badge: 'bg-red-100 text-red-800',
  },
];

const PRICES = [
  { flag: '🇧🇷', country: 'Brasil',      value: 'R$ 380,00',         currency: 'BRL', color: 'border-yellow-200 bg-yellow-50' },
  { flag: '🇲🇿', country: 'Moçambique',  value: '4.689,82 MZN',      currency: 'MZN', color: 'border-green-200 bg-green-50' },
  { flag: '🌐', country: 'Internacional', value: 'USD 73,40',         currency: 'USD', color: 'border-blue-200 bg-blue-50' },
];

const Contacto: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('revistaafricaa@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
            Fale Conosco
          </span>
          <div className="w-16 h-16 rounded-full bg-yellow-600/20 border-2 border-yellow-500/60 flex items-center justify-center mx-auto mb-5">
            <Mail size={28} className="text-yellow-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Contacto</h1>
          <p className="text-green-100/80 text-base mb-8">
            Estamos presentes em 3 países para atender autores, pesquisadores e parceiros.
          </p>

          {/* Email CTA */}
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-6 py-3">
            <Mail size={18} className="text-yellow-400 flex-shrink-0" />
            <span className="text-white font-medium text-sm">revistaafricaa@gmail.com</span>
            <button
              onClick={copyEmail}
              className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              title="Copiar email"
            >
              {copied ? <Check size={14} className="text-green-300" /> : <Copy size={14} className="text-white/70" />}
            </button>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-14 space-y-14">

        {/* ── Email block ── */}
        <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-brand-800 flex items-center justify-center flex-shrink-0 shadow-md">
              <Mail size={28} className="text-yellow-400" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-xl font-serif font-bold text-brand-900 mb-1">E-mail Principal</h2>
              <p className="text-gray-500 text-sm mb-3">Para submissões, dúvidas e parceiras institucionais.</p>
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <a
                  href="mailto:revistaafricaa@gmail.com"
                  className="px-6 py-2.5 bg-brand-800 hover:bg-brand-700 text-white font-bold rounded-xl transition-colors text-sm"
                >
                  Enviar E-mail
                </a>
                <button
                  onClick={copyEmail}
                  className="flex items-center gap-2 px-4 py-2.5 bg-gray-50 hover:bg-gray-100 text-gray-600 rounded-xl transition-colors text-sm border border-gray-200"
                >
                  {copied ? <Check size={15} className="text-green-500" /> : <Copy size={15} />}
                  {copied ? 'Copiado!' : 'Copiar endereço'}
                </button>
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-900 font-serif">48h</div>
              <div className="text-xs text-gray-500 font-medium">Prazo de resposta</div>
            </div>
          </div>
        </section>

        {/* ── Phone contacts ── */}
        <section>
          <h2 className="text-2xl font-serif font-bold text-brand-900 section-title mb-8">Contactos por País</h2>
          <div className="grid sm:grid-cols-3 gap-5">
            {CONTACTS.map(c => (
              <div key={c.country} className={`rounded-2xl border ${c.color} p-6 hover:shadow-md hover:-translate-y-1 transition-all duration-300`}>
                <div className="text-3xl mb-3">{c.flag}</div>
                <div className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-bold mb-3 ${c.badge}`}>
                  {c.country}
                </div>
                <h3 className="font-bold text-gray-900 text-sm mb-1">{c.name}</h3>
                <p className="text-lg font-bold text-gray-800 mb-4">{c.phone}</p>
                <div className="flex gap-2">
                  <a
                    href={`tel:${c.phone.replace(/\s/g, '')}`}
                    className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white border border-gray-200 text-gray-600 hover:text-brand-700 hover:border-brand-300 text-xs font-medium transition-colors"
                  >
                    <Phone size={13} /> Ligar
                  </a>
                  <a
                    href={c.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-green-600 text-white text-xs font-medium hover:bg-green-500 transition-colors"
                  >
                    <MessageCircle size={13} /> WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── WhatsApp banner ── */}
        <section
          className="rounded-2xl p-8 flex flex-col md:flex-row items-center gap-6 relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #16a34a 0%, #15803d 100%)' }}
        >
          <div className="absolute right-0 top-0 w-48 h-48 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none" />
          <div className="text-5xl">💬</div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-xl font-serif font-bold text-white mb-1">Atendimento via WhatsApp</h3>
            <p className="text-green-100/80 text-sm">Para publicar mais rápido, entre em contato direto pelo WhatsApp do escritório principal.</p>
          </div>
          <a
            href="https://wa.me/258852224979"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 flex items-center gap-2 px-6 py-3 bg-white text-green-800 font-bold rounded-xl hover:bg-green-50 transition-colors shadow-md"
          >
            <MessageCircle size={18} />
            +258 852 224 979
          </a>
        </section>

        {/* ── Hours ── */}
        <section className="grid md:grid-cols-2 gap-5">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center">
                <Clock size={18} className="text-brand-700" />
              </div>
              <h3 className="font-bold text-gray-900">Horário de Atendimento</h3>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between py-2 border-b border-gray-50">
                <span className="text-gray-600">Segunda — Sexta</span>
                <span className="font-semibold text-gray-900">08h — 18h</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-50">
                <span className="text-gray-600">Resposta por e-mail</span>
                <span className="font-semibold text-gray-900">Até 48h úteis</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-gray-600">Publicação de artigo</span>
                <span className="font-semibold text-green-700">5 dias úteis</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-yellow-50 flex items-center justify-center">
                <Globe size={18} className="text-yellow-600" />
              </div>
              <h3 className="font-bold text-gray-900">Presença Internacional</h3>
            </div>
            <div className="space-y-3 text-sm">
              {['🇲🇿 Moçambique — Sede Principal', '🇧🇷 Brasil — Escritório Regional', '🇦🇴 Angola — Representação'].map(line => (
                <div key={line} className="flex items-center gap-2 text-gray-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-600 flex-shrink-0" />
                  {line}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Pricing ── */}
        <section>
          <h2 className="text-2xl font-serif font-bold text-brand-900 section-title mb-3">Valores de Publicação</h2>
          <p className="text-gray-500 text-sm mb-8">Taxa única por artigo, já incluso o certificado por autor. Para 2+ autores, solicite cotação.</p>
          <div className="grid sm:grid-cols-3 gap-5">
            {PRICES.map(p => (
              <div key={p.country} className={`rounded-2xl border ${p.color} p-6 text-center hover:shadow-md hover:-translate-y-1 transition-all duration-300`}>
                <div className="text-3xl mb-3">{p.flag}</div>
                <div className="text-2xl font-bold font-serif text-gray-900 mb-1">{p.value}</div>
                <div className="text-sm text-gray-600">{p.country}</div>
                <div className="mt-3 inline-block px-2.5 py-0.5 rounded-full text-xs font-bold bg-white border border-gray-200 text-gray-600">
                  {p.currency}
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-5 bg-white rounded-xl p-4 border border-gray-100">
            * Publicação em 5 dias. Prazo reduzido para 48h mediante custo adicional. Acima de 1 autor, solicite cotação em <a href="mailto:revistaafricaa@gmail.com" className="text-brand-600 hover:underline">revistaafricaa@gmail.com</a>
          </p>
        </section>
      </div>
    </div>
  );
};

export default Contacto;
