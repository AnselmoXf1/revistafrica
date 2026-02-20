import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Plus, FileText, Search, Clock, BookOpen, Calendar, TrendingUp, FolderOpen } from 'lucide-react';
import { Magazine } from '../types';
import { magazinesAPI } from '../services/api';

const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();
  const [magazines, setMagazines] = useState<Magazine[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  const refreshData = async () => {
    try {
      const data = await magazinesAPI.getAll();
      setMagazines(data);
    } catch (error) {
      console.error('Erro ao carregar revistas:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    refreshData();
  }, []);

  const filteredMagazines = magazines.filter(m => 
    m.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Estatísticas
  const totalMagazines = magazines.length;
  const categoriesCount = new Set(magazines.map(m => m.category)).size;
  const currentYear = new Date().getFullYear();
  const thisYearMagazines = magazines.filter(m => m.year === currentYear).length;
  const latestMagazine = magazines.length > 0 ? magazines[0] : null;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Painel de Controle</h1>
          <p className="text-gray-500 mt-1">Gerencie seu acervo de revistas.</p>
        </div>
        <Link
          to="/admin/upload"
          className="flex items-center gap-2 bg-brand-600 text-white px-5 py-2.5 rounded-lg shadow-sm hover:bg-brand-700 transition-colors font-medium"
        >
          <Plus size={20} />
          Nova Revista
        </Link>
      </div>

      {/* Cards de Estatísticas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Total de Revistas</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">{totalMagazines}</p>
            </div>
            <div className="bg-brand-100 rounded-full p-3">
              <BookOpen className="text-brand-600" size={24} />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Categorias</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">{categoriesCount}</p>
            </div>
            <div className="bg-purple-100 rounded-full p-3">
              <FolderOpen className="text-purple-600" size={24} />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Publicadas em {currentYear}</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">{thisYearMagazines}</p>
            </div>
            <div className="bg-green-100 rounded-full p-3">
              <Calendar className="text-green-600" size={24} />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Última Publicação</p>
              <p className="text-lg font-bold text-gray-900 mt-2 truncate">
                {latestMagazine ? `Ed. ${latestMagazine.edition}` : 'N/A'}
              </p>
            </div>
            <div className="bg-orange-100 rounded-full p-3">
              <TrendingUp className="text-orange-600" size={24} />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        {/* Toolbar */}
        <div className="p-4 border-b border-gray-200 bg-gray-50 flex flex-col sm:flex-row gap-4 justify-between items-center">
          <div className="relative w-full sm:w-96">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 sm:text-sm transition-shadow"
              placeholder="Buscar revistas..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="text-sm text-gray-500">
            Total: <strong>{filteredMagazines.length}</strong>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Capa / Título
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Detalhes
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Data Upload
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Ações
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {loading ? (
                <tr>
                  <td colSpan={4} className="px-6 py-12 text-center">
                    <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-brand-600"></div>
                    <p className="mt-2 text-gray-500 text-sm">Carregando...</p>
                  </td>
                </tr>
              ) : filteredMagazines.length > 0 ? (
                filteredMagazines.map((mag) => (
                  <tr key={mag.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-16 w-12 bg-gray-100 rounded border border-gray-200 overflow-hidden">
                          <img className="h-full w-full object-cover" src={mag.coverUrl} alt="" />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-bold text-gray-900">{mag.title}</div>
                          <div className="text-xs text-gray-500 flex items-center gap-1 mt-0.5">
                            <span className="bg-blue-100 text-blue-800 py-0.5 px-2 rounded-full">
                              {mag.category}
                            </span>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">Edição {mag.edition}</div>
                      <div className="text-sm text-gray-500">Ano {mag.year}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center text-sm text-gray-500 gap-1">
                        <Clock size={14} />
                        {new Date(mag.uploadDate).toLocaleDateString('pt-BR')}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex justify-end gap-2">
                        <a 
                          href={mag.pdfUrl} 
                          target="_blank" 
                          rel="noreferrer"
                          className="text-gray-400 hover:text-brand-600 transition-colors p-2 hover:bg-brand-50 rounded"
                          title="Ver PDF"
                        >
                          <FileText size={18} />
                        </a>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4} className="px-6 py-12 text-center text-gray-500 text-sm">
                    Nenhuma revista encontrada.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;