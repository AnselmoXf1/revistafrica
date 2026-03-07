# 🌐 Configuração de Domínios - RevistaAfrica

## 📋 Domínios Configurados

### Domínio Principal
- **URL**: https://revistafrica.com
- **Uso**: Produção principal
- **Indexação**: Google e Google Scholar

### Domínio Alternativo
- **URL**: https://revistafrica.vercel.app
- **Uso**: Deploy automático Vercel
- **Indexação**: Secundário

### Backend API
- **URL**: https://api.revistafrica.onrender.com
- **Uso**: API REST

---

## 🔧 Configuração Atual

### Frontend (Vite/React)

Todos os arquivos já estão configurados para usar `revistafrica.com` como domínio principal:

#### Meta Tags (index.html)
```html
<meta property="og:url" content="https://revistafrica.com/" />
<link rel="canonical" href="https://revistafrica.com/" />
```

#### Páginas de Artigos (ArticleDetail.tsx)
```typescript
const articleUrl = `https://revistafrica.com/#/artigo/${article._id}`;
```

#### Dados Estruturados (ArticleStructuredData.tsx)
```typescript
"url": `https://revistafrica.com/#/artigo/${article.id}`,
"publisher": {
  "logo": {
    "url": "https://revistafrica.com/logo.svg"
  }
}
```

#### Sitemap (server/routes/sitemap.js)
```javascript
const baseUrl = 'https://revistafrica.com';
```

#### Robots.txt (public/robots.txt)
```txt
Sitemap: https://revistafrica.com/api/sitemap.xml
```

---

## 🚀 Configuração no Vercel

### Passo 1: Adicionar Domínio Personalizado

1. Acesse o projeto no Vercel Dashboard
2. Vá em **Settings** → **Domains**
3. Adicione o domínio: `revistafrica.com`
4. Adicione também: `www.revistafrica.com`

### Passo 2: Configurar DNS

No seu provedor de DNS (ex: GoDaddy, Namecheap, Cloudflare):

#### Registro A (para revistafrica.com)
```
Type: A
Name: @
Value: 76.76.21.21
TTL: 3600
```

#### Registro CNAME (para www.revistafrica.com)
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 3600
```

### Passo 3: Aguardar Propagação

- Tempo: 24-48 horas
- Verificar: https://dnschecker.org/

### Passo 4: Configurar SSL

O Vercel configura SSL automaticamente via Let's Encrypt.

---

## 🔄 CORS no Backend

O backend já está configurado para aceitar requisições de ambos os domínios:

```javascript
const corsOptions = {
  origin: process.env.NODE_ENV === 'production' 
    ? [
        'https://revistafrica.com',
        'https://www.revistafrica.com',
        'https://revistafrica.vercel.app',
        'https://www.revistafrica.vercel.app'
      ]
    : '*',
  credentials: true,
  optionsSuccessStatus: 200
};
```

---

## 📊 Redirecionamentos

### Configurar Redirecionamento www → não-www

No Vercel, criar arquivo `vercel.json` na raiz:

```json
{
  "redirects": [
    {
      "source": "https://www.revistafrica.com/:path*",
      "destination": "https://revistafrica.com/:path*",
      "permanent": true
    }
  ]
}
```

### Manter Ambos os Domínios Funcionando

Ambos `revistafrica.com` e `revistafrica.vercel.app` continuarão funcionando, mas:
- **revistafrica.com** será o domínio canônico (para SEO)
- **revistafrica.vercel.app** funcionará como alternativo

---

## 🔍 SEO e Indexação

### URLs Canônicas

Todas as páginas usam `revistafrica.com` como URL canônica:

```html
<link rel="canonical" href="https://revistafrica.com/" />
```

Isso informa ao Google que `revistafrica.com` é a versão preferida.

### Sitemap

O sitemap usa `revistafrica.com`:
```xml
<url>
  <loc>https://revistafrica.com/#/artigo/123</loc>
</url>
```

### Google Search Console

Adicione **ambos** os domínios no Search Console:
1. https://revistafrica.com
2. https://revistafrica.vercel.app

Configure `revistafrica.com` como domínio preferido.

---

## ✅ Checklist de Configuração

### Antes do Deploy
- [x] Atualizar todas as URLs para revistafrica.com
- [x] Configurar meta tags canônicas
- [x] Atualizar sitemap
- [x] Atualizar robots.txt
- [x] Configurar CORS no backend

### Após Adicionar Domínio no Vercel
- [ ] Configurar registros DNS
- [ ] Aguardar propagação (24-48h)
- [ ] Verificar SSL ativo
- [ ] Testar acesso: https://revistafrica.com
- [ ] Testar acesso: https://www.revistafrica.com

### Google Search Console
- [ ] Adicionar revistafrica.com
- [ ] Adicionar revistafrica.vercel.app
- [ ] Definir revistafrica.com como preferido
- [ ] Submeter sitemap: https://revistafrica.com/api/sitemap.xml
- [ ] Solicitar indexação de páginas principais

---

## 🧪 Testes

### Verificar Domínio Funcionando

```bash
# Testar DNS
nslookup revistafrica.com

# Testar HTTPS
curl -I https://revistafrica.com

# Testar sitemap
curl https://revistafrica.com/api/sitemap.xml

# Testar robots.txt
curl https://revistafrica.com/robots.txt
```

### Verificar Redirecionamentos

```bash
# Deve redirecionar para https://revistafrica.com
curl -I http://revistafrica.com

# Deve redirecionar para https://revistafrica.com
curl -I https://www.revistafrica.com
```

---

## 🔧 Variáveis de Ambiente

### Frontend (.env)
```env
VITE_API_URL=https://api.revistafrica.onrender.com/api
```

### Backend (.env)
```env
FRONTEND_URL=https://revistafrica.com
MONGODB_URI=sua_mongodb_uri
CLOUDINARY_CLOUD_NAME=seu_cloud_name
CLOUDINARY_API_KEY=sua_api_key
CLOUDINARY_API_SECRET=seu_api_secret
JWT_SECRET=seu_jwt_secret
```

---

## 📈 Monitoramento

### Após Configuração

1. **Verificar Acesso**
   - https://revistafrica.com ✅
   - https://www.revistafrica.com ✅
   - https://revistafrica.vercel.app ✅

2. **Verificar SSL**
   - Certificado válido ✅
   - HTTPS forçado ✅

3. **Verificar SEO**
   - Meta tags corretas ✅
   - URLs canônicas ✅
   - Sitemap acessível ✅

4. **Verificar Indexação**
   - Google Search Console configurado ✅
   - Sitemap submetido ✅
   - Páginas sendo indexadas ✅

---

## 🆘 Troubleshooting

### Domínio não resolve

**Problema**: revistafrica.com não abre

**Soluções**:
1. Verificar configuração DNS
2. Aguardar propagação (até 48h)
3. Limpar cache DNS local: `ipconfig /flushdns` (Windows)
4. Testar em modo anônimo do navegador

### SSL não funciona

**Problema**: Aviso de certificado inválido

**Soluções**:
1. Aguardar Vercel gerar certificado (até 24h)
2. Verificar se domínio está verificado no Vercel
3. Forçar renovação no Vercel Dashboard

### CORS Error

**Problema**: Erro de CORS ao acessar API

**Soluções**:
1. Verificar FRONTEND_URL no backend
2. Adicionar domínio no corsOptions
3. Reiniciar servidor backend
4. Limpar cache do navegador

### Sitemap não atualiza

**Problema**: Sitemap mostra URLs antigas

**Soluções**:
1. Limpar cache do servidor
2. Reiniciar backend
3. Verificar conexão MongoDB
4. Testar endpoint diretamente

---

## 📝 Notas Importantes

1. **Ambos os domínios funcionam**: revistafrica.com e revistafrica.vercel.app
2. **Domínio canônico**: revistafrica.com (para SEO)
3. **SSL automático**: Configurado pelo Vercel
4. **Propagação DNS**: Pode levar até 48 horas
5. **CORS configurado**: Backend aceita ambos os domínios

---

## 🎯 Resultado Final

Após configuração completa:

```
✅ https://revistafrica.com → Site principal
✅ https://www.revistafrica.com → Redireciona para revistafrica.com
✅ https://revistafrica.vercel.app → Funciona como alternativo
✅ SSL ativo em todos os domínios
✅ CORS configurado corretamente
✅ SEO otimizado para revistafrica.com
✅ Sitemap e robots.txt configurados
✅ Pronto para indexação no Google Scholar
```

---

**Status**: ✅ Configuração Completa
**Data**: 2026-03-07
**Domínio Principal**: https://revistafrica.com
