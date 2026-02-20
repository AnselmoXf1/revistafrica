import { Magazine } from '../types';

const STORAGE_KEY = 'revistas_db_v1';

// Initial Mock Data
const INITIAL_DATA: Magazine[] = [
  {
    id: '1',
    title: 'Tech Inovação',
    description: 'As novidades da inteligência artificial no mercado de trabalho.',
    coverUrl: 'https://picsum.photos/id/1/400/600',
    pdfUrl: 'https://pdfobject.com/pdf/sample.pdf', // Public sample PDF
    year: 2024,
    edition: 45,
    uploadDate: '2024-03-15',
    category: 'Tecnologia'
  },
  {
    id: '2',
    title: 'Vida & Saúde',
    description: 'Dicas de nutrição e exercícios para o verão.',
    coverUrl: 'https://picsum.photos/id/2/400/600',
    pdfUrl: 'https://pdfobject.com/pdf/sample.pdf',
    year: 2023,
    edition: 12,
    uploadDate: '2023-11-20',
    category: 'Saúde'
  },
  {
    id: '3',
    title: 'Mundo Business',
    description: 'Estratégias de investimento para 2025.',
    coverUrl: 'https://picsum.photos/id/3/400/600',
    pdfUrl: 'https://pdfobject.com/pdf/sample.pdf',
    year: 2024,
    edition: 8,
    uploadDate: '2024-01-10',
    category: 'Negócios'
  }
];

export const getMagazines = (): Magazine[] => {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_DATA));
    return INITIAL_DATA;
  }
  return JSON.parse(stored);
};

export const saveMagazine = (magazine: Magazine): void => {
  const current = getMagazines();
  const updated = [magazine, ...current];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
};

export const updateMagazine = (magazine: Magazine): void => {
  const current = getMagazines();
  const updated = current.map(m => m.id === magazine.id ? magazine : m);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
};

export const deleteMagazine = (id: string): void => {
  const current = getMagazines();
  const updated = current.filter(m => m.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
};

// Mock Cloudinary Upload (Simulated)
export const mockUploadToCloudinary = async (file: File): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // In a real app, this would be the Cloudinary URL returned from their API
      // For demo purposes, we return a placeholder or a generic PDF link if it's a PDF
      if (file.type === 'application/pdf') {
        resolve('https://pdfobject.com/pdf/sample.pdf');
      } else {
        // Return a random image for covers to make the demo look good
        const randomId = Math.floor(Math.random() * 100) + 10;
        resolve(`https://picsum.photos/id/${randomId}/400/600`);
      }
    }, 1500);
  });
};