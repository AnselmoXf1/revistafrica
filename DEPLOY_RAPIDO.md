# 🚀 Deploy Rápido - Guia Resumido

## 📋 Pré-requisitos
- Conta GitHub (código já commitado)
- Conta Render (https://render.com)
- Conta Vercel (https://vercel.com)
- MongoDB Atlas configurado (Network Access: 0.0.0.0/0)

---

## 🔴 PASSO 1: Deploy Backend (Render) - 5 minutos

### 1.1 Criar Web Service
1. Acesse https://render.com → "New +" → "Web Service"
2. Conecte GitHub e selecione o repositório
3. Configure:
   ```
   Name: api-revistafrica
   Root Directory: REID-main/server
   Runtime: Node
   Build Command: npm install
   Start Command: node server.js
   ```

### 1.2 Adicionar Variáveis de Ambiente
Copie e cole no Render (Environment):
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

### 1.3 Deploy
- Clique "Create Web Service"
- Aguarde 5-10 minutos
- Copie a URL gerada (ex: https://api-revistafrica.onrender.com)

### 1.4 Testar
Abra no navegador: `https://sua-url.onrender.com/api/health`

Deve retornar:
```json
{
  "status": "ok",
  "message": "Servidor rodando",
  "mongodb": "conectado"
}
```

---

## 🔵 PASSO 2: Deploy Frontend (Vercel) - 3 minutos

### 2.1 Importar Projeto
1. Acesse https://vercel.com → "Add New" → "Project"
2. Importe o repositório GitHub
3. Configure:
   ```
   Framework Preset: Vite
   Root Directory: REID-main
   Build Command: npm run build
   Output Directory: dist
   ```

### 2.2 Adicionar Variável de Ambiente
Em "Environment Variables", adicione:
```
VITE_API_URL=https://sua-url-do-render.onrender.com/api
```
⚠️ Substitua pela URL real do Render!

### 2.3 Deploy
- Clique "Deploy"
- Aguarde 2-5 minutos
- Acesse: https://revistafrica.vercel.app

---

## ✅ PASSO 3: Verificação Final

### Testar Backend
```bash
# Health check
curl https://sua-url.onrender.com/api/health

# Listar revistas
curl https://sua-url.onrender.com/api/magazines
```

### Testar Frontend
1. Acesse https://revistafrica.vercel.app
2. ✅ Revistas devem carregar
3. ✅ Teste login
4. ✅ Teste recuperação de senha

---

## ⚠️ Problemas Comuns

### Backend: "Cannot connect to MongoDB"
**Solução:**
1. Acesse https://cloud.mongodb.com
2. Network Access → Add IP Address
3. Adicione: `0.0.0.0/0`

### Frontend: "Failed to fetch"
**Solução:**
1. Verifique se VITE_API_URL está correto na Vercel
2. Deve ser: `https://sua-url.onrender.com/api` (com /api no final)
3. Redeploy na Vercel após corrigir

### Backend: "Cold start lento"
**Normal no plano free do Render**
- Primeiro request demora ~30 segundos
- Depois fica rápido
- Dorme após 15 min de inatividade

### Email não envia
**Solução:**
1. Verifique EMAIL_USER e EMAIL_PASSWORD no Render
2. Use senha de app do Gmail (não a senha normal)
3. Gere em: https://myaccount.google.com/apppasswords

---

## 🔄 Atualizações Futuras

### Atualizar Backend
```bash
git add .
git commit -m "Update backend"
git push
```
→ Render faz deploy automático

### Atualizar Frontend
```bash
git add .
git commit -m "Update frontend"
git push
```
→ Vercel faz deploy automático

---

## 📊 URLs Finais

Após deploy, você terá:

- **Frontend**: https://revistafrica.vercel.app
- **Backend**: https://api-revistafrica.onrender.com
- **API Health**: https://api-revistafrica.onrender.com/api/health
- **API Magazines**: https://api-revistafrica.onrender.com/api/magazines

---

## 🎯 Checklist Final

- [ ] Backend no Render está online
- [ ] MongoDB conectado (verificar logs)
- [ ] Frontend na Vercel está online
- [ ] Revistas carregam na home
- [ ] Login funciona
- [ ] Upload funciona (admin)
- [ ] Recuperação de senha funciona
- [ ] PDFs abrem corretamente

---

## 💡 Dicas

1. **Logs do Render**: Clique no serviço → "Logs" para ver erros
2. **Logs da Vercel**: Clique no deployment → "View Function Logs"
3. **Redeploy**: Se algo der errado, clique em "Manual Deploy" → "Deploy latest commit"
4. **Domínio customizado**: Configure depois em Settings → Domains

---

## 🆘 Precisa de Ajuda?

1. Verifique logs no Render/Vercel
2. Teste endpoints individualmente
3. Confirme variáveis de ambiente
4. Verifique MongoDB Atlas Network Access

**Tempo total estimado: 10-15 minutos** ⏱️
