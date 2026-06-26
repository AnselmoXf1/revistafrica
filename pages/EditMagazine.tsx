import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Upload, Image as ImageIcon, Loader2, ArrowLeft, Save } from 'lucide-react';
import { magazinesAPI } from '../services/api';

const EditMagazine: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    year: new Date().getFullYear(),
    edition: 1
  });

  const [coverFile, setCoverFile] = useState<File | null>(null);
  const [currentCoverUrl, setCurrentCoverUrl] = useState('');

  useEffect(() => {
    const loadMagazine = async () => {
      if (!id) return;
      try {
        const magazine = await magazinesAPI.getById(id);
        setFormData({
          title: magazine.title,
          description: magazine.description,
          category: magazine.category,
          year: magazine.year,
          edition: magazine.edition
        });
        setCurrentCoverUrl(magazine.coverUrl);
      } catch (error) {
        console.error('Erro ao carregar revista:', error);
        alert('Erro ao carregar dados da revista');
        navigate('/admin');
      } finally {
        setIsLoading(false);
      }
    };
    loadMagazine();
  }, [id, navigate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setCoverFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!id) return;

    setIsSaving(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('title', formData.title);
      formDataToSend.append('description', formData.description);
      formDataToSend.append('category', formData.category);
      formDataToSend.append('year', formData.year.toString());
      formDataToSend.append('edition', formData.edition.toString());
      
      if (coverFile) {
        formDataToSend.append('cover', coverFile);
      }

      await magazinesAPI.update(id, formDataToSend);
      
      alert('Revista atualizada com sucesso!');
      navigate('/admin');

    } catch (error: any) {
      console.error(error);
      alert(error.message || 'Erro ao atualizar. Tente novamente.');
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-brand-600"></div>
          <p className="mt-4 text-gray-500">Carregando...</p>
        </div>
      </div>
    );
  }

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
            Editar Revista
          </h1>
          <p className="text-sm text-gray-500 mt-1">Atualize os dados da revista.</p>
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
            <h3 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wide">Atualizar Capa</h3>
            
            <div className="flex flex-col md:flex-row gap-6 items-start">
              {/* Current Cover */}
              <div className="flex-1">
                <p className="text-xs text-gray-500 mb-2">Capa Atual:</p>
                <div className="border-2 border-gray-200 rounded-lg p-4 bg-gray-50">
                  <img src={currentCoverUrl} alt="Capa atual" className="w-full h-auto rounded" />
                </div>
              </div>

              {/* New Cover Upload */}
              <div className="flex-1">
                <p className="text-xs text-gray-500 mb-2">Nova Capa (opcional):</p>
                <div className={`border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center text-center transition-colors ${coverFile ? 'border-green-400 bg-green-50' : 'border-gray-300 hover:border-brand-400 hover:bg-gray-50'}`}>
                  <input 
                    type="file" 
                    accept="image/*" 
                    id="cover-upload" 
                    className="hidden" 
                    onChange={handleFileChange}
                  />
                  <label htmlFor="cover-upload" className="cursor-pointer w-full flex flex-col items-center">
                    {coverFile ? (
                      <>
                        <ImageIcon className="h-10 w-10 text-green-500 mb-2" />
                        <span className="text-sm font-medium text-green-700 truncate max-w-full px-2">{coverFile.name}</span>
                        <span className="text-xs text-green-600 mt-1">Clique para trocar</span>
                      </>
                    ) : (
                      <>
                        <ImageIcon className="h-10 w-10 text-gray-400 mb-2" />
                        <span className="text-sm font-medium text-gray-700">Escolher nova capa</span>
                        <span className="text-xs text-gray-500 mt-1">JPG, PNG (Max 5MB)</span>
                      </>
                    )}
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-4 flex items-center justify-end gap-3">
             <button
               type="button"
               onClick={() => navigate('/admin')}
               className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium transition-colors"
               disabled={isSaving}
             >
               Cancelar
             </button>
             <button
               type="submit"
               disabled={isSaving}
               className={`px-8 py-2 rounded-lg text-white font-medium shadow-sm transition-all flex items-center gap-2 ${
                 isSaving
                   ? 'bg-gray-400 cursor-not-allowed'
                   : 'bg-brand-600 hover:bg-brand-700'
               }`}
             >
               {isSaving ? (
                 <>
                   <Loader2 className="animate-spin" size={18} />
                   Salvando...
                 </>
               ) : (
                 <>
                   <Save size={18} />
                   Salvar Alterações
                 </>
               )}
             </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditMagazine;
