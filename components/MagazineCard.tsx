import React from 'react';
import { Eye, Download, Calendar, Layers } from 'lucide-react';
import { Magazine } from '../types';

interface MagazineCardProps {
  magazine: Magazine;
  onView: (magazine: Magazine) => void;
}

const MagazineCard: React.FC<MagazineCardProps> = ({ magazine, onView }) => {
  return (
    <div className="group bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col h-full">
      <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 cursor-pointer" onClick={() => onView(magazine)}>
        <img 
          src={magazine.coverUrl} 
          alt={magazine.title} 
          className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-500 scale-105"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <button 
            className="bg-white/90 text-gray-900 px-6 py-2 rounded-full font-medium shadow-lg backdrop-blur-sm transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-2"
          >
            <Eye size={18} />
            Ler Agora
          </button>
        </div>
        <div className="absolute top-3 right-3 bg-brand-600 text-white text-xs font-bold px-2 py-1 rounded shadow-sm">
          {magazine.category}
        </div>
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
          <span className="flex items-center gap-1">
            <Calendar size={12} />
            {magazine.year}
          </span>
          <span className="flex items-center gap-1">
            <Layers size={12} />
            Ed. {magazine.edition}
          </span>
        </div>
        
        <h3 className="font-bold text-lg text-gray-900 mb-2 line-clamp-1 group-hover:text-brand-600 transition-colors">
          {magazine.title}
        </h3>
        <p className="text-sm text-gray-600 line-clamp-2 mb-4 flex-grow">
          {magazine.description}
        </p>
        
        <div className="pt-4 border-t border-gray-100 flex gap-2">
          <button 
            onClick={() => onView(magazine)}
            className="flex-1 flex items-center justify-center gap-2 px-3 py-2 text-sm font-medium text-brand-600 bg-brand-50 rounded-lg hover:bg-brand-100 transition-colors"
          >
            <Eye size={16} />
            Visualizar
          </button>
          <a 
            href={magazine.pdfUrl} 
            download
            className="flex items-center justify-center gap-2 px-3 py-2 text-sm font-medium text-gray-600 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200"
            target="_blank"
            rel="noopener noreferrer"
            title="Baixar PDF"
          >
            <Download size={16} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MagazineCard;