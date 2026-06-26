import { staticMagazines } from '../data/staticMagazines';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// Auth helpers
const getToken = () => localStorage.getItem('token');
const setToken = (token: string) => localStorage.setItem('token', token);
const removeToken = () => localStorage.removeItem('token');

const authHeaders = () => ({
  'Authorization': `Bearer ${getToken()}`
});

// Auth API
export const authAPI = {
  async login(email: string, password: string) {
    const res = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.message || 'Erro ao fazer login');
    setToken(data.token);
    return data;
  },

  async register(name: string, email: string, password: string) {
    const res = await fetch(`${API_URL}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password })
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.message || 'Erro ao registrar');
    setToken(data.token);
    return data;
  },

  async getMe() {
    const res = await fetch(`${API_URL}/auth/me`, {
      headers: authHeaders()
    });
    if (!res.ok) throw new Error('Não autorizado');
    return res.json();
  },

  logout() {
    removeToken();
  }
};

// Magazines API
export const magazinesAPI = {
  async getAll() {
    try {
      const res = await fetch(`${API_URL}/magazines`);
      if (!res.ok) throw new Error('Erro ao buscar revistas');
      const data = await res.json();
      const apiMags = data.map((mag: any) => ({ ...mag, id: mag._id || mag.id }));
      
      const allMags = [...staticMagazines, ...apiMags];
      const uniqueMags = Array.from(new Map(allMags.map(m => [m.id, m])).values());
      return uniqueMags.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    } catch (error) {
      console.error("Erro ao buscar API, usando dados estáticos:", error);
      return staticMagazines;
    }
  },

  async getById(id: string) {
    try {
      const staticMag = staticMagazines.find(m => m.id === id || m._id === id);
      if (staticMag) return staticMag;

      const res = await fetch(`${API_URL}/magazines/${id}`);
      if (!res.ok) throw new Error('Revista não encontrada');
      const data = await res.json();
      return { ...data, id: data._id || data.id };
    } catch (error) {
      const staticMag = staticMagazines.find(m => m.id === id || m._id === id);
      if (staticMag) return staticMag;
      throw error;
    }
  },

  async create(formData: FormData) {
    const token = getToken();
    const res = await fetch(`${API_URL}/magazines`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`
      },
      body: formData
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.message || 'Erro ao criar revista');
    return { ...data, id: data._id || data.id };
  },

  async update(id: string, formData: FormData) {
    const token = getToken();
    const res = await fetch(`${API_URL}/magazines/${id}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${token}`
      },
      body: formData
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.message || 'Erro ao atualizar revista');
    return { ...data, id: data._id || data.id };
  },

  async delete(id: string) {
    const res = await fetch(`${API_URL}/magazines/${id}`, {
      method: 'DELETE',
      headers: authHeaders()
    });
    if (!res.ok) throw new Error('Erro ao deletar revista');
    return res.json();
  }
};
