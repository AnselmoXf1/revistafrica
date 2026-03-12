import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware para servir SPA (Single Page Application)
export const spaMiddleware = (req, res, next) => {
  // Se não for uma rota de API e não for um arquivo estático
  if (!req.path.startsWith('/api') && 
      !req.path.startsWith('/assets') && 
      !req.path.includes('.')) {
    // Serve o index.html para todas as rotas do frontend
    return res.sendFile(path.join(__dirname, '../../dist/index.html'));
  }
  next();
};

// Middleware para desenvolvimento (quando não há arquivos dist)
export const devSpaMiddleware = (req, res, next) => {
  // Se não for uma rota de API
  if (!req.path.startsWith('/api')) {
    // Redireciona para o servidor de desenvolvimento do Vite
    return res.redirect(`http://localhost:3000${req.path}`);
  }
  next();
};