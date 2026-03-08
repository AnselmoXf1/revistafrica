# 🔧 Referência Técnica SEO

## 📋 Configuração Técnica

### 1. Frontend (Vercel)

#### App.tsx
```typescript
import { BrowserRouter, Routes, Route } from 'react-router-dom';

<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/artigo/:id" element={<ArticleDetail />} />
    <Route path="/submissoes" element={<Submissoes />} />
    {/* ... outras rotas */}
  </Routes>
</BrowserRouter>
```

#### Vite Config
```typescript
export default defineConfig(({ mode }) => {
  return {
    server: {
      port: 3000,
      host: '0.0.0.0',
      middlewareMode: false,
    },
    // ... resto da config
  };
});
```

#### Vercel.json
```json
{
  "rewrites": [
    {
      "source": "/api/sitemap.xml",
      "destination": "https://api.revistafrica.onrender.com/api/sitemap.xml"
    },
    {
      "source": "/api/robots.txt",
      "destination": "https://api.revistafrica.onrender.com/api/robots.txt"
    },
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

---

### 2. Backend (Render)

#### Sitemap Route
```javascript
router.get('/sitemap.xml', async (req, res) => {
  const magazines = await Magazine.find().sort({ uploadDate: -1 });
  const baseUrl = 'https://revistafrica.com';
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}/</loc>
    <priority>1.0</priority>
  </url>
  ${magazines.map(mag => `
  <url>
    <loc>${baseUrl}/artigo/${mag._id}</loc>
    <priority>0.9</priority>
  </url>`).join('')}
</urlset>`;

  res.header('Content-Type', 'application/xml');
  res.header('Cache-Control', 'public, max-age=3600');
  res.send(sitemap);
});
```

#### Robots.txt Route
```javascript
router.get('/robots.txt', (req, res) => {
  const robotsTxt = `User-agent: *
Allow: /
Allow: /artigo/
Allow: /submissoes
Allow: /conselho-editorial
Allow: /dados-revista
Allow: /contacto
Disallow: /admin
Disallow: /login

Sitemap: https://revistafrica.com/api/sitemap.xml
`;

  res.header('Content-Type', 'text/plain');
  res.send(robotsTxt);
});
```

---

### 3. Meta Tags

#### Index.html
```html
<meta name="robots" content="index, follow" />
<meta name="description" content="..." />
<meta name="keywords" content="..." />
<link rel="canonical" href="https://revistafrica.com/" />
<link rel="sitemap" type="application/xml" href="/api/sitemap.xml" />

<!-- Open Graph -->
<meta property="og:type" content="website" />
<meta property="og:url" content="https://revistafrica.com/" />
<meta property="og:title" content="..." />
<meta property="og:description" content="..." />

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="..." />
<meta name="twitter:description" content="..." />
```

#### ArticleDetail.tsx (Helmet)
```typescript
<Helmet>
  <title>{article.title} - RevistaAfrica</title>
  <meta name="description" content={article.description} />
  <link rel="canonical" href={articleUrl} />
  
  {/* Google Scholar */}
  <meta name="citation_title" content={article.title} />
  <meta name="citation_author" content="RevistaAfrica" />
  <meta name="citation_publication_date" content={`${article.year}/01/01`} />
  <meta name="citation_pdf_url" content={article.pdfUrl} />
  
  {/* Dublin Core */}
  <meta name="DC.title" content={article.title} />
  <meta name="DC.creator" content="RevistaAfrica" />
  <meta name="DC.date" content={publishDate} />
  
  {/* Open Graph */}
  <meta property="og:title" content={article.title} />
  <meta property="og:description" content={article.description} />
  <meta property="og:image" content={article.coverUrl} />
  <meta property="og:url" content={articleUrl} />
  
  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={article.title} />
  <meta name="twitter:description" content={article.description} />
</Helmet>
```

---

## 🔗 URLs Importantes

### Frontend
- **Homepage:** `https://revistafrica.com/`
- **Artigo:** `https://revistafrica.com/artigo/{id}`
- **Submissões:** `https://revistafrica.com/submissoes`
- **Conselho Editorial:** `https://revistafrica.com/conselho-editorial`
- **Dados da Revista:** `https://revistafrica.com/dados-revista`
- **Contato:** `https://revistafrica.com/contacto`

### Backend
- **Sitemap:** `https://revistafrica.com/api/sitemap.xml`
- **Robots.txt:** `https://revistafrica.com/api/robots.txt`
- **API Artigos:** `https://api.revistafrica.onrender.com/api/magazines`
- **API Artigo por ID:** `https://api.revistafrica.onrender.com/api/magazines/{id}`

### Google
- **Search Console:** `https://search.google.com/search-console`
- **Pesquisa:** `site:revistafrica.com`
- **Pesquisa Artigos:** `site:revistafrica.com/artigo/`

---

## 📊 Estrutura de Dados

### Magazine (MongoDB)
```javascript
{
  _id: ObjectId,
  title: String,
  description: String,
  category: String,
  year: Number,
  edition: Number,
  pdfUrl: String,
  coverUrl: String,
  uploadDate: Date,
  // ... outros campos
}
```

### Sitemap XML
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://revistafrica.com/</loc>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
    <lastmod>2026-03-08</lastmod>
  </url>
  <url>
    <loc>https://revistafrica.com/artigo/123</loc>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
    <lastmod>2026-03-08</lastmod>
  </url>
</urlset>
```

---

## 🔄 Fluxo de Requisição

```
1. Usuário acessa: https://revistafrica.com/artigo/123
   ↓
2. Vercel recebe requisição
   ↓
3. Vercel não encontra arquivo estático
   ↓
4. Vercel retorna index.html (fallback)
   ↓
5. React carrega no navegador
   ↓
6. BrowserRouter processa URL: /artigo/123
   ↓
7. React Router encontra rota: <Route path="/artigo/:id" />
   ↓
8. ArticleDetail.tsx renderiza
   ↓
9. useParams() extrai id: "123"
   ↓
10. Faz requisição: GET /api/magazines/123
    ↓
11. Backend (Render) retorna dados
    ↓
12. Helmet atualiza meta tags
    ↓
13. Página renderiza com dados
    ↓
14. Google Bot vê página completa com meta tags
    ↓
15. Google indexa a página
```

---

## 🐛 Troubleshooting Técnico

### Problema: URLs ainda mostram #
**Causa:** Cache do navegador ou deploy não terminou
**Solução:**
```bash
# Limpar cache
Ctrl+Shift+Del (Windows)
Cmd+Shift+Del (Mac)

# Ou usar modo incógnito
```

### Problema: Sitemap não aparece
**Causa:** Backend não está rodando
**Solução:**
```bash
# Testar sitemap
curl https://revistafrica.com/api/sitemap.xml

# Verificar logs no Render
# https://dashboard.render.com
```

### Problema: Artigos não aparecem no sitemap
**Causa:** Nenhum artigo no banco de dados
**Solução:**
```bash
# Fazer upload de um artigo via admin
# Aguardar 1 hora (cache)
# Verificar novamente
```

### Problema: Google não indexa
**Causa:** Possíveis problemas de configuração
**Solução:**
```bash
# Verificar robots.txt
curl https://revistafrica.com/robots.txt

# Verificar sitemap
curl https://revistafrica.com/api/sitemap.xml

# Verificar Google Search Console
# https://search.google.com/search-console
```

---

## 📈 Monitoramento

### Google Search Console
- **Performance:** Cliques, Impressões, CTR, Posição
- **Cobertura:** Páginas indexadas, erros
- **Sitemaps:** Status do sitemap
- **Inspeção de URL:** Status de indexação

### Métricas Importantes
- **Impressões:** Vezes que apareceu em buscas
- **Cliques:** Vezes que clicaram no resultado
- **CTR:** (Cliques / Impressões) × 100
- **Posição:** Posição média nos resultados

---

## 🔐 Segurança

### CORS
```javascript
const corsOptions = {
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://revistafrica.vercel.app', 'https://revistafrica.com']
    : '*',
  credentials: true,
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
```

### Headers de Segurança
```json
{
  "headers": [
    {
      "key": "X-Content-Type-Options",
      "value": "nosniff"
    },
    {
      "key": "X-Frame-Options",
      "value": "DENY"
    },
    {
      "key": "X-XSS-Protection",
      "value": "1; mode=block"
    }
  ]
}
```

---

## 📝 Checklist de Implementação

- [x] Migrar para BrowserRouter
- [x] Atualizar sitemap com URLs limpas
- [x] Atualizar robots.txt com URLs limpas
- [x] Configurar Vercel com fallback
- [x] Adicionar meta tags no index.html
- [x] Adicionar Helmet no ArticleDetail.tsx
- [x] Adicionar Google Scholar meta tags
- [x] Adicionar Dublin Core meta tags
- [x] Adicionar Open Graph meta tags
- [x] Adicionar Twitter Card meta tags
- [x] Configurar cache do sitemap
- [x] Configurar CORS
- [x] Configurar headers de segurança

---

## 🎯 Próximos Passos

1. Deploy das mudanças
2. Testar URLs no navegador
3. Verificar sitemap
4. Enviar sitemap ao Google Search Console
5. Solicitar indexação
6. Aguardar 48 horas
7. Verificar `site:revistafrica.com`
8. Monitorar performance

---

**Referência técnica completa!** 🚀
