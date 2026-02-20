# 📚 Revista África - Sistema de Gestão de Acervo Digital

Sistema completo para gerenciamento e visualização de revistas acadêmicas online.

## 🌟 Funcionalidades

- ✅ Visualização de acervo de revistas
- ✅ Sistema de autenticação (login/logout)
- ✅ Recuperação de senha via email
- ✅ Painel administrativo
- ✅ Upload de revistas (PDF + capa)
- ✅ Visualizador de PDF integrado
- ✅ Busca e filtros
- ✅ Design responsivo

## 🚀 URLs de Produção

- **Frontend**: https://revistafrica.vercel.app
- **Backend API**: https://api.revistafrica.onrender.com

## 🛠️ Tecnologias

### Frontend
- React 19.2.4
- TypeScript
- Vite
- Tailwind CSS
- React Router DOM
- Lucide React (ícones)

### Backend
- Node.js + Express
- MongoDB + Mongoose
- JWT (autenticação)
- Nodemailer (emails)
- Cloudinary (armazenamento)
- Bcrypt (segurança)

## 📦 Instalação Local

### Pré-requisitos
- Node.js 18+
- MongoDB (local ou Atlas)
- Conta Cloudinary
- Conta Gmail (para emails)

### Backend
```bash
cd REID-main/server
npm install
cp .env.example .env
# Configure as variáveis no .env
npm start
```

### Frontend
```bash
cd REID-main
npm install
cp .env.example .env
# Configure VITE_API_URL no .env
npm run dev
```

## 🚀 Deploy

### Guia Rápido (10-15 minutos)
Leia: [DEPLOY_RAPIDO.md](DEPLOY_RAPIDO.md)

### Guia Completo
Leia: [DEPLOY_PRODUCAO.md](DEPLOY_PRODUCAO.md)

### Checklist Pré-Deploy
Leia: [PRE_DEPLOY_CHECKLIST.md](PRE_DEPLOY_CHECKLIST.md)

## 📖 Documentação

- [RESUMO_IMPLEMENTACAO.md](RESUMO_IMPLEMENTACAO.md) - Resumo completo do projeto
- [RECUPERACAO_SENHA_IMPLEMENTADA.md](RECUPERACAO_SENHA_IMPLEMENTADA.md) - Sistema de recuperação de senha
- [CONFIGURAR_MONGODB.md](CONFIGURAR_MONGODB.md) - Configuração do MongoDB Atlas
- [COMANDOS_UTEIS.md](COMANDOS_UTEIS.md) - Comandos úteis para desenvolvimento

## 🔐 Variáveis de Ambiente

### Backend (.env)
```env
PORT=5000
NODE_ENV=production
MONGODB_URI=sua_string_de_conexao
JWT_SECRET=sua_chave_secreta
CLOUDINARY_CLOUD_NAME=seu_cloud_name
CLOUDINARY_API_KEY=sua_api_key
CLOUDINARY_API_SECRET=seu_api_secret
EMAIL_USER=seu_email@gmail.com
EMAIL_PASSWORD=sua_senha_de_app
FRONTEND_URL=https://revistafrica.vercel.app
```

### Frontend (.env)
```env
VITE_API_URL=https://api.revistafrica.onrender.com/api
```

## 🧪 Testes

### Testar Backend
```bash
curl https://api.revistafrica.onrender.com/api/health
```

### Testar Frontend
Acesse: https://revistafrica.vercel.app

## 📊 Estrutura do Projeto

```
REID-main/
├── components/          # Componentes React
├── pages/              # Páginas da aplicação
├── services/           # Serviços (API)
├── context/            # Context API (Auth)
├── public/             # Assets públicos
├── server/             # Backend
│   ├── models/         # Modelos MongoDB
│   ├── routes/         # Rotas da API
│   ├── middleware/     # Middlewares
│   ├── services/       # Serviços (Email)
│   └── config/         # Configurações
└── docs/               # Documentação
```

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/nova-funcionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT.

## 👥 Autores

- Equipe Revista África

## 🆘 Suporte

Para problemas ou dúvidas:
1. Verifique a [documentação](DEPLOY_PRODUCAO.md)
2. Consulte [comandos úteis](COMANDOS_UTEIS.md)
3. Abra uma issue no GitHub

## 🎯 Roadmap

- [x] Sistema de autenticação
- [x] Recuperação de senha
- [x] Upload de revistas
- [x] Visualizador de PDF
- [x] Deploy em produção
- [ ] Sistema de busca avançada
- [ ] Estatísticas de acesso
- [ ] Exportação de dados
- [ ] API pública

---

**Desenvolvido com ❤️ para a comunidade acadêmica**
