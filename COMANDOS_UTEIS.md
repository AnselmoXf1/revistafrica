# 🛠️ Comandos Úteis

## 📦 Instalação

### Frontend
```bash
cd REID-main
npm install
```

### Backend
```bash
cd REID-main/server
npm install
```

---

## 🚀 Desenvolvimento Local

### Iniciar Backend
```bash
cd REID-main/server
npm run dev
# ou
node server.js
```

### Iniciar Frontend
```bash
cd REID-main
npm run dev
```

### Acessar
- Frontend: http://localhost:3000
- Backend: http://localhost:5000
- API Health: http://localhost:5000/api/health

---

## 🏗️ Build

### Build Frontend
```bash
cd REID-main
npm run build
```

### Preview Build
```bash
cd REID-main
npm run preview
```

---

## 🧪 Testes de API

### Health Check
```bash
curl http://localhost:5000/api/health
```

### Listar Revistas
```bash
curl http://localhost:5000/api/magazines
```

### Login
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@example.com","password":"senha123"}'
```

### Solicitar Recuperação de Senha
```bash
curl -X POST http://localhost:5000/api/auth/forgot-password \
  -H "Content-Type: application/json" \
  -d '{"email":"usuario@example.com"}'
```

### Redefinir Senha
```bash
curl -X POST http://localhost:5000/api/auth/reset-password \
  -H "Content-Type: application/json" \
  -d '{"email":"usuario@example.com","code":"123456","newPassword":"novaSenha123"}'
```

---

## 🗄️ MongoDB

### Criar Admin (Script)
```bash
cd REID-main/server
npm run create-admin
```

### Conectar via MongoDB Compass
```
mongodb+srv://revistaadmin:revistaadmin@cluster0.uusuwns.mongodb.net/revista-africa
```

---

## 🚀 Deploy

### Deploy Backend (Render via CLI)
```bash
# Instalar Render CLI
npm install -g render

# Login
render login

# Deploy
cd REID-main/server
render deploy
```

### Deploy Frontend (Vercel via CLI)
```bash
# Instalar Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
cd REID-main
vercel --prod
```

---

## 🔍 Debug

### Ver Logs Backend (Local)
```bash
cd REID-main/server
node server.js
# Logs aparecem no terminal
```

### Ver Logs Frontend (Local)
```bash
cd REID-main
npm run dev
# Logs aparecem no terminal e no console do navegador
```

### Verificar Variáveis de Ambiente
```bash
# Backend
cd REID-main/server
cat .env

# Frontend
cd REID-main
cat .env
```

---

## 🧹 Limpeza

### Limpar node_modules
```bash
# Frontend
cd REID-main
rm -rf node_modules
npm install

# Backend
cd REID-main/server
rm -rf node_modules
npm install
```

### Limpar Build
```bash
cd REID-main
rm -rf dist
npm run build
```

---

## 📊 Monitoramento

### Verificar Status do Servidor
```bash
# Local
curl http://localhost:5000/api/health

# Produção
curl https://api.revistafrica.onrender.com/api/health
```

### Verificar MongoDB
```bash
# Deve retornar "conectado"
curl https://api.revistafrica.onrender.com/api/health | grep mongodb
```

---

## 🔐 Segurança

### Gerar Nova JWT Secret
```bash
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
```

### Verificar Senha de App Gmail
1. Acesse: https://myaccount.google.com/apppasswords
2. Gere nova senha se necessário
3. Atualize EMAIL_PASSWORD no .env

---

## 🔄 Git

### Commit e Push
```bash
git add .
git commit -m "Sua mensagem"
git push origin main
```

### Ver Status
```bash
git status
```

### Ver Logs
```bash
git log --oneline
```

---

## 📦 NPM

### Atualizar Dependências
```bash
# Frontend
cd REID-main
npm update

# Backend
cd REID-main/server
npm update
```

### Verificar Vulnerabilidades
```bash
npm audit
npm audit fix
```

---

## 🌐 URLs Importantes

### Desenvolvimento
- Frontend: http://localhost:3000
- Backend: http://localhost:5000
- API: http://localhost:5000/api

### Produção
- Frontend: https://revistafrica.vercel.app
- Backend: https://api.revistafrica.onrender.com
- API: https://api.revistafrica.onrender.com/api

### Serviços
- Render Dashboard: https://dashboard.render.com
- Vercel Dashboard: https://vercel.com/dashboard
- MongoDB Atlas: https://cloud.mongodb.com
- Cloudinary: https://cloudinary.com/console

---

## 🆘 Troubleshooting

### Porta 5000 em uso
```bash
# Windows
netstat -ano | findstr :5000
taskkill /F /PID <PID></PID>inux/Mac
lsof -ti:5000 | xargs kill -9
```

### Limpar Cache do NPM
```bash
npm cache clean --force
```

### Reinstalar Tudo
```bash
# Frontend
cd REID-main
rm -rf node_modules package-lock.json
npm install

# Backend
cd REID-main/server
rm -rf node_modules package-lock.json
npm install
```

---

## 📝 Notas

- Sempre teste localmente antes de fazer deploy
- Mantenha .env fora do Git
- Faça backup do MongoDB regularmente
- Monitore logs de produção
- Atualize dependências mensalmente
