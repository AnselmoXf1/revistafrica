export interface Magazine {
  _id?: string;
  id?: string;
  title: string;
  description: string;
  coverUrl: string;
  coverPublicId?: string;
  pdfUrl: string;
  pdfPublicId?: string;
  year: number;
  edition: number;
  uploadDate: string;
  category: string;
}

export interface User {
  email: string;
  name: string;
  isAdmin: boolean;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

export enum ViewMode {
  GRID = 'GRID',
  LIST = 'LIST'
}