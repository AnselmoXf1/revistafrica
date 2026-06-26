import React, { useState, useEffect } from 'react';
import { X, Download } from 'lucide-react';
import { Magazine } from '../types';

interface PDFViewerModalProps {
  magazine: Magazine | null;
  isOpen: boolean;
  onClose: () => void;
}

const PDFViewerModal: React.FC<PDFViewerModalProps> = ({ magazine, isOpen, onClose }) => {
  const [pdfBlobUrl, setPdfBlobUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    let objectUrl = '';
    
    if (isOpen && magazine?.pdfUrl) {
      setLoading(true);
      setError(false);
      
      // O Cloudinary manda como octet-stream/attachment, então nós baixamos o arquivo 
      // internamente e forçamos o navegador a tratar como PDF usando Blob
      fetch(magazine.pdfUrl)
        .then(res => {
          if (!res.ok) throw new Error('Falha ao baixar PDF');
          return res.blob();
        })
        .then(blob => {
          const pdfBlob = new Blob([blob], { type: 'application/pdf' });
          objectUrl = URL.createObjectURL(pdfBlob);
          setPdfBlobUrl(objectUrl);
        })
        .catch(err => {
          console.error(err);
          setError(true);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setPdfBlobUrl(null);
    }
    
    return () => {
      if (objectUrl) URL.revokeObjectURL(objectUrl);
    };
  }, [isOpen, magazine]);

  if (!isOpen || !magazine) return null;

  return (
    <div className="fixed inset-0 z-[100] overflow-hidden" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div 
        className="fixed inset-0 bg-gray-900 bg-opacity-90 transition-opacity" 
        aria-hidden="true"
        onClick={onClose}
      ></div>

      <div className="fixed inset-0 flex items-center justify-center p-2 sm:p-4">
        <div className="relative bg-white rounded-lg shadow-2xl w-full h-full max-w-6xl max-h-[95vh] flex flex-col">
          
          <div className="bg-white px-4 sm:px-6 py-4 border-b border-gray-200 flex justify-between items-center flex-shrink-0 rounded-t-lg">
            <h3 className="text-lg leading-6 font-semibold text-gray-900 flex flex-wrap items-center gap-2">
              <span className="truncate max-w-[200px] sm:max-w-md lg:max-w-2xl" title={magazine.title}>{magazine.title}</span>
              {magazine.edition && (
                <span className="text-sm font-normal text-brand-800 bg-brand-50 px-2 py-0.5 border border-brand-200">
                  Edição {magazine.edition}
                </span>
              )}
            </h3>
            <div className="flex items-center gap-2 ml-4">
              {pdfBlobUrl && (
                <a
                  href={pdfBlobUrl}
                  download={`${magazine.title}.pdf`}
                  className="hidden sm:flex items-center gap-2 px-4 py-2 bg-brand-800 text-white hover:bg-brand-900 transition-colors font-semibold text-sm shadow-sm border border-brand-900"
                >
                  <Download size={16} />
                  Baixar PDF
                </a>
              )}
              <button
                onClick={onClose}
                className="bg-white p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 transition-colors border border-transparent hover:border-red-200 ml-2"
                title="Fechar"
              >
                <X size={24} />
              </button>
            </div>
          </div>

          <div className="flex-grow bg-gray-100 relative overflow-hidden flex items-center justify-center">
             {loading && (
               <div className="text-center">
                 <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-brand-700"></div>
                 <p className="mt-4 text-gray-600 font-medium">Carregando documento para visualização...</p>
                 <p className="text-sm text-gray-500 mt-2">Isso pode levar alguns segundos dependendo do tamanho.</p>
               </div>
             )}
             
             {error && (
               <div className="text-center text-red-600 p-6 bg-red-50 border border-red-200">
                 <p className="font-semibold mb-2">Não foi possível carregar a visualização inline.</p>
                 <a href={magazine.pdfUrl} target="_blank" rel="noopener noreferrer" className="underline font-medium hover:text-red-800">
                   Clique aqui para baixar o arquivo diretamente
                 </a>
               </div>
             )}

             {!loading && !error && pdfBlobUrl && (
               <iframe 
                 src={pdfBlobUrl}
                 className="w-full h-full border-0" 
                 title="PDF Viewer"
                 allow="fullscreen"
               ></iframe>
             )}
          </div>

          <div className="sm:hidden bg-gray-50 px-4 py-3 border-t border-gray-200 flex justify-center gap-3">
             {pdfBlobUrl ? (
               <a
                 href={pdfBlobUrl}
                 download={`${magazine.title}.pdf`}
                 className="flex-1 flex justify-center items-center gap-2 px-4 py-2 bg-brand-800 text-white rounded-none hover:bg-brand-900 transition-colors font-semibold text-sm shadow-sm"
               >
                 <Download size={16} />
                 Baixar PDF
               </a>
             ) : (
               <a
                 href={magazine.pdfUrl}
                 download
                 target="_blank"
                 rel="noopener noreferrer"
                 className="flex-1 flex justify-center items-center gap-2 px-4 py-2 bg-brand-800 text-white rounded-none hover:bg-brand-900 transition-colors font-semibold text-sm shadow-sm"
               >
                 <Download size={16} />
                 Download Direto
               </a>
             )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PDFViewerModal;