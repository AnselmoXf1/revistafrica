import React from 'react';
import { Eye, Download, Calendar, Layers, ArrowRight } from 'lucide-react';
import { Magazine } from '../types';

interface MagazineCardProps {
  magazine: Magazine;
  onView: (magazine: Magazine) => void;
}

const CATEGORY_COLORS: Record<string, { bg: string; text: string; dot: string }> = {
  Economia:  { bg: 'bg-blue-500',   text: 'text-white', dot: 'bg-blue-300' },
  Educação:  { bg: 'bg-purple-500', text: 'text-white', dot: 'bg-purple-300' },
  Política:  { bg: 'bg-red-500',    text: 'text-white', dot: 'bg-red-300' },
  Cultura:   { bg: 'bg-orange-500', text: 'text-white', dot: 'bg-orange-300' },
  Outro:     { bg: 'bg-gray-500',   text: 'text-white', dot: 'bg-gray-300' },
};

const MagazineCard: React.FC<MagazineCardProps> = ({ magazine, onView }) => {
  const color = CATEGORY_COLORS[magazine.category] ?? CATEGORY_COLORS['Outro'];

  return (
    <div className="group relative bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">

      {/* ── Cover image ── */}
      <div
        className="relative overflow-hidden cursor-pointer flex-shrink-0"
        style={{ aspectRatio: '3/4' }}
        onClick={() => onView(magazine)}
      >
        {/* image */}
        <img
          src={magazine.coverUrl}
          alt={magazine.title}
          className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
        />

        {/* dark overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* hover CTA */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <button className="flex items-center gap-2 px-5 py-2.5 bg-white text-gray-900 rounded-full font-semibold text-sm shadow-xl transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
            <Eye size={16} className="text-brand-600" />
            Ler Agora
          </button>
        </div>

        {/* category badge */}
        <div className={`absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold shadow-md ${color.bg} ${color.text}`}>
          <span className={`w-1.5 h-1.5 rounded-full ${color.dot}`} />
          {magazine.category}
        </div>

        {/* edition badge */}
        <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-sm text-white text-xs font-semibold">
          Ed. {magazine.edition}
        </div>
      </div>

      {/* ── Body ── */}
      <div className="p-5 flex flex-col flex-grow">

        {/* year */}
        <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
          <span className="flex items-center gap-1">
            <Calendar size={11} />
            {magazine.year}
          </span>
          <span className="flex items-center gap-1">
            <Layers size={11} />
            Edição {magazine.edition}
          </span>
        </div>

        {/* title */}
        <h3 className="font-bold text-base text-gray-900 mb-2 line-clamp-2 group-hover:text-brand-700 transition-colors leading-snug flex-grow">
          {magazine.title}
        </h3>

        {/* description */}
        <p className="text-xs text-gray-500 line-clamp-2 mb-4 leading-relaxed">
          {magazine.description}
        </p>

        {/* actions */}
        <div className="pt-3 border-t border-gray-50 flex gap-2">
          <button
            onClick={() => onView(magazine)}
            className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2.5 text-sm font-semibold text-brand-700 bg-brand-50 hover:bg-brand-100 rounded-xl transition-colors group/btn"
          >
            <Eye size={14} />
            Visualizar
            <ArrowRight size={12} className="opacity-0 group-hover/btn:opacity-100 -ml-1 group-hover/btn:ml-0 transition-all" />
          </button>
          <a
            href={magazine.pdfUrl}
            download
            target="_blank"
            rel="noopener noreferrer"
            title="Baixar PDF"
            className="flex items-center justify-center w-10 h-10 rounded-xl bg-gray-50 hover:bg-gray-100 border border-gray-200 text-gray-500 hover:text-brand-700 transition-colors flex-shrink-0"
          >
            <Download size={15} />
          </a>
        </div>
      </div>

      {/* subtle left accent on hover */}
      <div className={`absolute left-0 top-0 bottom-0 w-0.5 ${color.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
    </div>
  );
};

export default MagazineCard;
