# Configuração de URLs - RevistaAfrica

## 🌐 URLs Configuradas

### Frontend
- **Vercel (Principal):** https://revistafrica.vercel.app
- **Domínio Personalizado:** https://revistafrica.com (quando configurado)
- **Desenvolvimento:** http://localhost:5173

### Backend
- **Render (Produção):** https://api-revistafrica.onrender.com
- **Desenvolvimento:** http://localhost:5000

## 🔒 Rate Limiting Implementado

### Login
- **Limite:** 3 tentativas por 15 minutos
- **Identificação:** Por endereço IP
- **Mensagem:** "Muitas tentativas de login. Por favor, tente novamente em 15 minutos."

### API Geral
- **Limite:** 100 requisições por 15 minutos
- **Proteção:** Contra abuso e ataques DDoS

## 📝 Configuração do Domínio Personalizado (revistafrica.com)

### No Vercel:

1. Acesse o projeto no Vercel Dashboard
2. Vá em **Settings** > **Domains**
3. Adicione o domínio: `revistafrica.com`
4. Adicione também: `www.revistafrica.com`

### No Provedor de Domínio:

Adicione os seguintes registros DNS:

```
Tipo: A
Nome: @
Valor: 76.76.21.21

Tipo: CNAME
Nome: www
Valor: cname.vercel-dns.com
```

**Tempo de propagação:** 24-48 horas

## 🚀 Deploy do Backend no Render

### Passos:

1. Acesse https://render.com
2. Crie um novo **Web Service**
3. Conecte ao repositório GitHub: `https://github.com/AnselmoXf1/revistafrica`
4. Configure:
   - **Name:** api-revistafrica
   - **Root Directory:** REID-main/server
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   - **Environment:** Node

5. Adicione as variáveis de ambiente:
   ```
   PORT=5000
   MONGODB_URI=mongodb+srv://revistaadmin:revistaadmin@cluster0.uusuwns.mongodb.net/revista-africa?retryWrites=true&w=majority&appName=Cluster0
   JWT_SECRET=revista_africa_secret_key_2026_super_seguro_mude_isso
   CLOUDINARY_CLOUD_NAME=dozv8vbuc
   CLOUDINARY_API_KEY=466684533682764
   CLOUDINARY_API_SECRET=sr7corAilOWbuoowREg5cWW67G0
   NODE_ENV=production
   EMAIL_USER=deeppianovibes@gmail.com
   EMAIL_PASSWORD=hrgffnyfycnmqamo
   FRONTEND_URL=https://revistafrica.vercel.app
   ```

6. Clique em **Create Web Service**

### URL do Backend:
Após o deploy, a URL será: `https://api-revistafrica.onrender.com`

## 🔄 CORS Configurado

O backend aceita requisições de:
- https://revistafrica.vercel.app
- https://www.revistafrica.vercel.app
- https://revistafrica.com
- https://www.revistafrica.com
- http://localhost:5173 (desenvolvimento)

## 📦 Instalação de Dependências

### Backend:
```bash
cd REID-main/server
npm install
```

Isso instalará o `express-rate-limit` e outras dependências.

### Frontend:
```bash
cd REID-main
npm install
```

## 🧪 Testar Rate Limit Localmente

1. Inicie o backend:
   ```bash
   cd REID-main/server
   npm run dev
   ```

2. Tente fazer login 4 vezes com credenciais erradas
3. Na 4ª tentativa, você receberá:
   ```json
   {
     "message": "Muitas tentativas de login. Por favor, tente novamente em 15 minutos.",
     "retryAfter": 900
   }
   ```

## 📊 Monitoramento

### Render Dashboard:
- Logs em tempo real
- Métricas de uso
- Status do serviço

### Vercel Dashboard:
- Analytics
- Logs de deploy
- Performance metrics

## 🔐 Segurança

### Headers de Segurança (configurados no vercel.json):
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `X-XSS-Protection: 1; mode=block`

### Rate Limiting:
- Proteção contra brute force no login
- Proteção contra abuso da API

### CORS:
- Apenas domínios autorizados podem fazer requisições

## 📝 Comandos Úteis

### Deploy Frontend (Vercel):
```bash
cd REID-main
git add .
git commit -m "Update: Configurar URLs e rate limiting"
git push origin main
```
O Vercel fará deploy automaticamente.

### Deploy Backend (Render):
O Render fará deploy automaticamente quando você fizer push para o GitHub.

### Testar Localmente:
```bash
# Backend
cd REID-main/server
npm run dev

# Frontend (em outro terminal)
cd REID-main
npm run dev
```

## ✅ Checklist de Deploy

- [x] Rate limiting implementado no backend
- [x] URLs atualizadas no .env
- [x] CORS configurado para múltiplos domínios
- [x] vercel.json criado com headers de segurança
- [x] Documentação criada
- [ ] Instalar dependências do backend: `npm install`
- [ ] Fazer commit e push para GitHub
- [ ] Configurar backend no Render
- [ ] Configurar domínio personalizado no Vercel (opcional)
- [ ] Testar rate limiting em produção
- [ ] Verificar logs no Render e Vercel
