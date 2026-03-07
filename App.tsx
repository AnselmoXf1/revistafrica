import React from 'react';
import { HashRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AuthProvider, useAuth } from './context/AuthContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import AdminDashboard from './pages/AdminDashboard';
import UploadMagazine from './pages/UploadMagazine';
import EditMagazine from './pages/EditMagazine';
import Submissoes from './pages/Submissoes';
import ConselhoEditorial from './pages/ConselhoEditorial';
import DadosRevista from './pages/DadosRevista';
import Contacto from './pages/Contacto';
import ArticleDetail from './pages/ArticleDetail';

// Protected Route Component
const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

const AppContent: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/artigo/:id" element={<ArticleDetail />} />
          <Route path="/submissoes" element={<Submissoes />} />
          <Route path="/conselho-editorial" element={<ConselhoEditorial />} />
          <Route path="/dados-revista" element={<DadosRevista />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/login" element={<Login />} />
          <Route 
            path="/admin" 
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/admin/upload" 
            element={
              <ProtectedRoute>
                <UploadMagazine />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/admin/edit/:id" 
            element={
              <ProtectedRoute>
                <EditMagazine />
              </ProtectedRoute>
            } 
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  console.log('App component loaded');
  return (
    <HelmetProvider>
      <AuthProvider>
        <HashRouter>
          <AppContent />
        </HashRouter>
      </AuthProvider>
    </HelmetProvider>
  );
};

export default App;