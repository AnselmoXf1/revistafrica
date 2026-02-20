import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Upload, FileText, Image as ImageIcon, Loader2, CheckCircle, ArrowLeft } from 'lucide-react';
import { magazinesAPI } from '../services/api';

const UploadMagazine: React.FC = () => {
  const navigate = useNavigate();
  const [isUploading, setIsUploading] = useState(false);
  const [uploadStep, setUploadStep] = useState<string>('');
  
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    year: new Date().getFullYear(),
    edition: 1
  });

  const [coverFile, setCoverFile] = useState<File | null>(null);
  const [pdfFile, setPdfFile] = useState<File | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, type: 'cover' | 'pdf') => {
    if (e.target.files && e.target.files[0]) {
      if (type === 'cover') setCoverFile(e.target.files[0]);
      else setPdfFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!coverFile || !pdfFile) {
      alert('Por favor, selecione a capa e o PDF.');
      return;
    }

    setIsUploading(true);

    try {
      setUploadStep('Enviando arquivos...');
      
      const formDataToSend = new FormData();
      formDataToSend.append('title', formData.title);
      formDataToSend.append('description', formData.description);
      formDataToSend.append('category', formData.category);
      formDataToSend.append('year', formData.year.toString());
      formDataToSend.append('edition', formData.edition.toString());
      formDataToSend.append('cover', coverFile);
      formDataToSend.append('pdf', pdfFile);

      await magazinesAPI.create(formDataToSend);
      
      setUploadStep('Publicação concluída!');
      setTimeout(() => {
        navigate('/admin');
      }, 500);

    } catch (error: any) {
      console.error(error);
      alert(error.message || 'Erro ao fazer upload. Tente novamente.');
      setIsUploading(false);
      setUploadStep('');
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <button 
        onClick={() => navigate('/admin')}
        className="flex items-center text-gray-500 hover:text-brand-600 mb-6 transition-colors"
      >
        <ArrowLeft size={18} className="mr-1" />
        Voltar para Painel
      </button>

      <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-100 bg-gray-50">
          <h1 className="text-xl font-bold text-gray-900 flex items-center gap-2">
            <Upload className="text-brand-600" size={24} />
            Publicar Nova Revista
          </h1>
          <p className="text-sm text-gray-500 mt-1">Preencha os dados e faça o upload dos arquivos.</p>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="col-span-1 md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Título da Revista</label>
              <input
                type="text"
                name="title"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-shadow outline-none"
                placeholder="Ex: Tech Inovação - Edição Especial"
                value={formData.title}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Categoria</label>
              <select
                name="category"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none"
                value={formData.category}
                onChange={handleChange}
              >
                <option value="">Selecione...</option>
                <option value="Ciências Sociais">Ciências Sociais</option>
                <option value="História">História</option>
                <option value="Cultura">Cultura</option>
                <option value="Política">Política</option>
                <option value="Economia">Economia</option>
                <option value="Educação">Educação</option>
                <option value="Outro">Outro</option>
              </select>
            </div>

            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">Ano</label>
                <input
                  type="number"
                  name="year"
                  required
                  min="1900"
                  max="2100"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none"
                  value={formData.year}
                  onChange={handleChange}
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">Nº Edição</label>
                <input
                  type="number"
                  name="edition"
                  required
                  min="1"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none"
                  value={formData.edition}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="col-span-1 md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Descrição</label>
              <textarea
                name="description"
                rows={3}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none"
                placeholder="Breve resumo do conteúdo..."
                value={formData.description}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="border-t border-gray-100 pt-6">
            <h3 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wide">Arquivos</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Cover Upload */}
              <div className={`border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center text-center transition-colors ${coverFile ? 'border-green-400 bg-green-50' : 'border-gray-300 hover:border-brand-400 hover:bg-gray-50'}`}>
                <input 
                  type="file" 
                  accept="image/*" 
                  id="cover-upload" 
                  className="hidden" 
                  onChange={(e) => handleFileChange(e, 'cover')}
                />
                <label htmlFor="cover-upload" className="cursor-pointer w-full flex flex-col items-center">
                  {coverFile ? (
                    <>
                      <CheckCircle className="h-10 w-10 text-green-500 mb-2" />
                      <span className="text-sm font-medium text-green-700 truncate max-w-full px-2">{coverFile.name}</span>
                      <span className="text-xs text-green-600 mt-1">Clique para trocar</span>
                    </>
                  ) : (
                    <>
                      <ImageIcon className="h-10 w-10 text-gray-400 mb-2" />
                      <span className="text-sm font-medium text-gray-700">Capa da Revista</span>
                      <span className="text-xs text-gray-500 mt-1">JPG, PNG (Max 5MB)</span>
                    </>
                  )}
                </label>
              </div>

              {/* PDF Upload */}
              <div className={`border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center text-center transition-colors ${pdfFile ? 'border-green-400 bg-green-50' : 'border-gray-300 hover:border-brand-400 hover:bg-gray-50'}`}>
                <input 
                  type="file" 
                  accept=".pdf" 
                  id="pdf-upload" 
                  className="hidden" 
                  onChange={(e) => handleFileChange(e, 'pdf')}
                />
                <label htmlFor="pdf-upload" className="cursor-pointer w-full flex flex-col items-center">
                   {pdfFile ? (
                    <>
                      <CheckCircle className="h-10 w-10 text-green-500 mb-2" />
                      <span className="text-sm font-medium text-green-700 truncate max-w-full px-2">{pdfFile.name}</span>
                      <span className="text-xs text-green-600 mt-1">Clique para trocar</span>
                    </>
                  ) : (
                    <>
                      <FileText className="h-10 w-10 text-gray-400 mb-2" />
                      <span className="text-sm font-medium text-gray-700">Arquivo PDF</span>
                      <span className="text-xs text-gray-500 mt-1">PDF (Max 100MB)</span>
                    </>
                  )}
                </label>
              </div>
            </div>
          </div>

          <div className="pt-4 flex items-center justify-end gap-3">
             <button
               type="button"
               onClick={() => navigate('/admin')}
               className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium transition-colors"
               disabled={isUploading}
             >
               Cancelar
             </button>
             <button
               type="submit"
               disabled={isUploading || !coverFile || !pdfFile}
               className={`px-8 py-2 rounded-lg text-white font-medium shadow-sm transition-all flex items-center gap-2 ${
                 isUploading || !coverFile || !pdfFile
                   ? 'bg-gray-400 cursor-not-allowed'
                   : 'bg-brand-600 hover:bg-brand-700'
               }`}
             >
               {isUploading ? (
                 <>
                   <Loader2 className="animate-spin" size={18} />
                   {uploadStep}
                 </>
               ) : (
                 'Publicar Revista'
               )}
             </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UploadMagazine;