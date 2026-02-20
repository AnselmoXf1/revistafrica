import React from 'react';
import { X } from 'lucide-react';
import { Magazine } from '../types';

interface PDFViewerModalProps {
  magazine: Magazine | null;
  isOpen: boolean;
  onClose: () => void;
}

const PDFViewerModal: React.FC<PDFViewerModalProps> = ({ magazine, isOpen, onClose }) => {
  if (!isOpen || !magazine) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      
      {/* Background overlay */}
      <div 
        className="fixed inset-0 bg-gray-900 bg-opacity-90 transition-opacity" 
        aria-hidden="true"
        onClick={onClose}
      ></div>

      {/* Modal Container - Full Screen */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <div className="relative bg-white rounded-lg shadow-2xl w-full h-full max-w-7xl max-h-[95vh] flex flex-col">
          
          {/* Header */}
          <div className="bg-white px-6 py-4 border-b border-gray-200 flex justify-between items-center flex-shrink-0">
            <h3 className="text-lg leading-6 font-semibold text-gray-900 flex items-center gap-2">
              <span className="truncate max-w-xs sm:max-w-md lg:max-w-2xl">{magazine.title}</span>
              <span className="text-sm font-normal text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
                Edição {magazine.edition}
              </span>
            </h3>
            <div className="flex items-center gap-2">
              <button
                onClick={onClose}
                className="bg-white rounded-full p-2 text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500"
              >
                <span className="sr-only">Fechar</span>
                <X size={24} />
              </button>
            </div>
          </div>

          {/* Body - PDF Viewer */}
          <div className="flex-grow bg-gray-100 relative overflow-hidden">
             <iframe 
               src={`https://mozilla.github.io/pdf.js/web/viewer.html?file=${encodeURIComponent(magazine.pdfUrl)}`}
               className="w-full h-full border-0" 
               title="PDF Viewer"
             ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PDFViewerModal;