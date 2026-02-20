# 🚀 Deploy para Produção

## URLs de Produção
- **Frontend**: https://revistafrica.vercel.app
- **Backend**: https://api.revistafrica.onrender.com

---

## 📦 1. Deploy do Backend (Render)

### Passo 1: Preparar Repositório
1. Certifique-se que o código está no GitHub
2. Commit e push de todas as alterações

### Passo 2: Criar Serviço no Render
1. Acesse https://render.com
2. Clique em "New +" → "Web Service"
3. Conecte seu repositório GitHub
4. Configure:
   - **Name**: `api-revistafrica` (ou outro nome)
   - **Region**: Escolha a mais próxima
   - **Branch**: `main`
   - **Root Directory**: `REID-main/server`
   - **Runtime**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `node server.js`
   - **Instance Type**: Free (ou pago se preferir)

### Passo 3: Configurar Variáveis de Ambiente
No painel do Render, vá em "Environment" e adicione:

```
PORT=5000
NODE_ENV=production
MONGODB_URI=mongodb+srv://revistaadmin:revistaadmin@cluster0.uusuwns.mongodb.net/revista-africa?retryWrites=true&w=majority&appName=Cluster0
JWT_SECRET=revista_africa_secret_key_2026_super_seguro_mude_isso
CLOUDINARY_CLOUD_NAME=dozv8vbuc
CLOUDINARY_API_KEY=466684533682764
CLOUDINARY_API_SECRET=sr7corAilOWbuoowREg5cWW67G0
EMAIL_USER=deeppianovibes@gmail.com
EMAIL_PASSWORD=hrgffnyfycnmqamo
FRONTEND_URL=https://revistafrica.vercel.app
```

### Passo 4: Deploy
1. Clique em "Create Web Service"
2. Aguarde o build e deploy (5-10 minutos)
3. Teste a URL: `https://api.revistafrica.onrender.com/api/health`

### ⚠️ Importante - MongoDB Atlas
Adicione o IP do Render no MongoDB Atlas:
1. Acesse https://cloud.mongodb.com
2. Vá em "Network Access"
3. Adicione: `0.0.0.0/0` (permite todos) ou IPs específicos do Render

---

## 🌐 2. Deploy do Frontend (Vercel)

### Passo 1: Instalar Vercel CLI (Opcional)
```bash
npm install -g vercel
```

### Passo 2: Deploy via Vercel Dashboard
1. Acesse https://vercel.com
2. Clique em "Add New" → "Project"
3. Importe seu repositório GitHub
4. Configure:
   - **Framework Preset**: Vite
   - **Root Directory**: `REID-main`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`

### Passo 3: Configurar Variáveis de Ambiente
No painel da Vercel, vá em "Settings" → "Environment Variables":

```
VITE_API_URL=https://api.revistafrica.onrender.com/api
```

### Passo 4: Deploy
1. Clique em "Deploy"
2. Aguarde o build (2-5 minutos)
3. Acesse: https://revistafrica.vercel.app

### Passo 5: Configurar Domínio Personalizado (Opcional)
1. No painel da Vercel, vá em "Settings" → "Domains"
2. Adicione seu domínio customizado
3. Configure DNS conforme instruções

---

## 🔧 3. Configurações Adicionais

### MongoDB Atlas - Network Access
1. Acesse https://cloud.mongodb.com
2. Network Access → Add IP Address
3. Adicione: `0.0.0.0/0` (permite todos os IPs)
4. Ou adicione IPs específicos do Render

### Gmail - Senha de App
Se ainda não configurou:
1. Acesse https://myaccount.google.com/security
2. Ative "Verificação em duas etapas"
3. Vá em "Senhas de app"
4. Gere uma senha para "Email"
5. Use essa senha na variável `EMAIL_PASSWORD`

---

## ✅ 4. Verificação

### Testar Backend
```bash
# Health check
curl https://api.revistafrica.onrender.com/api/health

# Listar revistas
curl https://api.revistafrica.onrender.com/api/magazines
```

### Testar Frontend
1. Acesse https://revistafrica.vercel.app
2. Verifique se as revistas carregam
3. Teste login
4. Teste recuperação de senha

---

## 🔄 5. Atualizações Futuras

### Backend (Render)
- Push para GitHub → Deploy automático no Render

### Frontend (Vercel)
- Push para GitHub → Deploy automático na Vercel

---

## 📝 6. Comandos Úteis

### Deploy via CLI (Vercel)
```bash
cd REID-main
vercel --prod
```

### Logs do Backend (Render)
- Acesse o painel do Render
- Vá em "Logs" para ver erros

### Rollback (Vercel)
- No painel, vá em "Deployments"
- Clique nos 3 pontos → "Promote to Production"

---

## ⚠️ Troubleshooting

### Backend não conecta ao MongoDB
- Verifique Network Access no MongoDB Atlas
- Adicione 0.0.0.0/0 na whitelist

### CORS Error no Frontend
- Verifique se FRONTEND_URL está correto no backend
- Verifique se VITE_API_URL está correto no frontend

### Email não envia
- Verifique EMAIL_USER e EMAIL_PASSWORD
- Use senha de app do Gmail, não a senha normal

### 404 ao recarregar página
- Já configurado no vercel.json (rewrites)

---

## 📊 Monitoramento

### Render
- Dashboard mostra CPU, memória, requests
- Logs em tempo real

### Vercel
- Analytics de performance
- Logs de build e runtime

---

## 💰 Custos

### Render Free Tier
- ✅ 750 horas/mês grátis
- ⚠️ Dorme após 15 min de inatividade
- ⚠️ Primeiro request pode demorar (cold start)

### Vercel Free Tier
- ✅ 100 GB bandwidth/mês
- ✅ Sem cold start
- ✅ Deploy ilimitados

### MongoDB Atlas Free Tier
- ✅ 512 MB storage
- ✅ Shared cluster

---

## 🎯 Próximos Passos

1. ✅ Deploy backend no Render
2. ✅ Configurar variáveis de ambiente
3. ✅ Configurar MongoDB Atlas Network Access
4. ✅ Deploy frontend na Vercel
5. ✅ Testar todas as funcionalidades
6. 📧 Configurar domínio personalizado (opcional)
7. 📊 Configurar monitoramento (opcional)
