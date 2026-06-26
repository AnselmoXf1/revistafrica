# ✅ Checklist Pré-Deploy

## Antes de fazer deploy, verifique:

### 🔧 Configurações Gerais
- [ ] Código commitado no GitHub
- [ ] Todas as dependências instaladas
- [ ] Build local funciona sem erros

### 🗄️ MongoDB Atlas
- [ ] Cluster está ativo (não pausado)
- [ ] Network Access configurado (0.0.0.0/0 ou IPs específicos)
- [ ] Usuário e senha corretos
- [ ] String de conexão atualizada

### 📧 Email (Gmail)
- [ ] Verificação em duas etapas ativada
- [ ] Senha de app gerada
- [ ] EMAIL_USER configurado
- [ ] EMAIL_PASSWORD configurado

### ☁️ Cloudinary
- [ ] Conta criada
- [ ] CLOUDINARY_CLOUD_NAME correto
- [ ] CLOUDINARY_API_KEY correto
- [ ] CLOUDINARY_API_SECRET correto

### 🔐 Segurança
- [ ] JWT_SECRET é forte e único
- [ ] Senhas não estão hardcoded
- [ ] .env não está no Git (.gitignore configurado)

### 🌐 URLs
- [ ] VITE_API_URL aponta para backend de produção
- [ ] FRONTEND_URL configurado no backend
- [ ] CORS configurado corretamente

### 📦 Backend (Render)
- [ ] package.json tem todas as dependências
- [ ] server.js está na raiz de REID-main/server
- [ ] Porta configurada via process.env.PORT
- [ ] Todas as variáveis de ambiente listadas

### 🎨 Frontend (Vercel)
- [ ] package.json tem script "build"
- [ ] vercel.json configurado
- [ ] .env tem VITE_API_URL
- [ ] Build local funciona (npm run build)

---

## 🧪 Testes Locais

### Testar Backend Local
```bash
cd REID-main/server
npm install
node server.js
```

Deve mostrar:
```
✅ MongoDB conectado com sucesso
🚀 Servidor rodando na porta 5000
```

### Testar Frontend Local
```bash
cd REID-main
npm install
npm run build
npm run preview
```

Deve abrir sem erros.

---

## 🚀 Ordem de Deploy

1. **Primeiro**: Deploy do Backend (Render)
   - Aguarde ficar online
   - Teste: https://api.revistafrica.onrender.com/api/health

2. **Depois**: Deploy do Frontend (Vercel)
   - Configure VITE_API_URL com URL do backend
   - Deploy

3. **Finalmente**: Teste completo
   - Acesse o frontend
   - Teste todas as funcionalidades

---

## 🔍 Verificações Pós-Deploy

### Backend
- [ ] Health check responde: `/api/health`
- [ ] Magazines carregam: `/api/magazines`
- [ ] Login funciona: `/api/auth/login`
- [ ] Recuperação de senha funciona: `/api/auth/forgot-password`

### Frontend
- [ ] Página inicial carrega
- [ ] Revistas aparecem
- [ ] Login funciona
- [ ] Upload funciona (admin)
- [ ] Recuperação de senha funciona
- [ ] PDF viewer abre

### Integração
- [ ] Frontend se conecta ao backend
- [ ] Sem erros CORS
- [ ] Imagens carregam do Cloudinary
- [ ] Emails são enviados

---

## ⚠️ Problemas Comuns

### "Cannot connect to MongoDB"
→ Adicione 0.0.0.0/0 no Network Access do MongoDB Atlas

### "CORS Error"
→ Verifique FRONTEND_URL no backend e CORS config

### "Email not sent"
→ Use senha de app do Gmail, não senha normal

### "Cold start lento" (Render Free)
→ Normal no plano free, primeiro request demora ~30s

### "404 ao recarregar página"
→ Já configurado no vercel.json

---

## 📞 Suporte

Se encontrar problemas:
1. Verifique logs no Render/Vercel
2. Teste endpoints individualmente
3. Verifique variáveis de ambiente
4. Consulte documentação oficial
