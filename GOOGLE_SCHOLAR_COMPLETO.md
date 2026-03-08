# 🎓 Google Scholar - Guia Completo

## 🎯 Objetivo

Fazer com que os artigos apareçam no Google Scholar (indexação acadêmica).

---

## 📊 Como Funciona

### 1. Google Scholar Encontra o Artigo
```
Google Scholar Bot
    ↓
Acessa: https://revistafrica.com/artigo/123
    ↓
Procura por meta tags acadêmicas
    ↓
Encontra: citation_title, citation_author, etc
```

### 2. Google Scholar Indexa
```
Google Scholar
    ↓
Extrai informações do artigo
    ↓
Indexa no banco de dados acadêmico
    ↓
Torna disponível para pesquisa
```

### 3. Google Scholar Mostra nos Resultados
```
Pesquisa: "revista africa"
    ↓
Resultado:
[1] Título do Artigo - RevistaAfrica, 2026
    Autores: RevistaAfrica
    Citações: 0
```

---

## ✅ Meta Tags Implementadas

### Meta Tags Obrigatórias ✅

```html
<!-- Título do artigo -->
<meta name="citation_title" content="Título do Artigo">

<!-- Autores -->
<meta name="citation_author" content="RevistaAfrica">

<!-- Data de publicação -->
<meta name="citation_publication_date" content="2026/01/01">

<!-- Título da revista -->
<meta name="citation_journal_title" content="RevistaAfrica">

<!-- Volume -->
<meta name="citation_volume" content="1">

<!-- PDF URL -->
<meta name="citation_pdf_url" content="https://res.cloudinary.com/.../documento.pdf">

<!-- Resumo -->
<meta name="citation_abstract" content="Descrição do artigo">

<!-- Idioma -->
<meta name="citation_language" content="pt">

<!-- Editora -->
<meta name="citation_publisher" content="RevistaAfrica">
```

### Meta Tags Adicionais ✅

```html
<!-- Dublin Core -->
<meta name="DC.title" content="Título do Artigo">
<meta name="DC.creator" content="RevistaAfrica">
<meta name="DC.subject" content="Categoria">
<meta name="DC.description" content="Descrição">
<meta name="DC.publisher" content="RevistaAfrica">
<meta name="DC.date" content="2026-03-08">
<meta name="DC.type" content="Text">
<meta name="DC.format" content="application/pdf">
<meta name="DC.language" content="pt">

<!-- Open Graph -->
<meta property="og:title" content="Título do Artigo">
<meta property="og:description" content="Descrição">
<meta property="og:image" content="Capa do artigo">
<meta property="og:url" content="https://revistafrica.com/artigo/123">
<meta property="og:type" content="article">
<meta property="article:published_time" content="2026-03-08">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Título do Artigo">
<meta name="twitter:description" content="Descrição">
<meta name="twitter:image" content="Capa do artigo">
```

---

## 🔧 Implementação Atual

### ArticleDetail.tsx ✅

Já tem implementado:
- ✅ citation_title
- ✅ citation_author
- ✅ citation_publication_date
- ✅ citation_journal_title
- ✅ citation_volume
- ✅ citation_pdf_url
- ✅ citation_abstract
- ✅ citation_language
- ✅ citation_publisher
- ✅ Dublin Core meta tags
- ✅ Open Graph meta tags
- ✅ Twitter Card meta tags

---

## 📝 Meta Tags Opcionais para Melhorar

### 1. DOI (Digital Object Identifier)
```html
<meta name="citation_doi" content="10.1234/example.doi">
```

**Como obter:**
- Registrar na CrossRef: https://www.crossref.org
- Ou usar um DOI genérico

### 2. ISSN (International Standard Serial Number)
```html
<meta name="citation_issn" content="1234-5678">
```

**Como obter:**
- Registrar a revista na ISSN: https://www.issn.org

### 3. Número/Edição
```html
<meta name="citation_issue" content="1">
```

### 4. Páginas
```html
<meta name="citation_firstpage" content="1">
<meta name="citation_lastpage" content="20">
```

### 5. Palavras-chave
```html
<meta name="citation_keywords" content="palavra-chave1, palavra-chave2">
```

---

## 🚀 Próximas Otimizações

### 1. Adicionar DOI
```typescript
<meta name="citation_doi" content={article.doi || "10.1234/revistafrica"} />
```

### 2. Adicionar ISSN
```typescript
<meta name="citation_issn" content="2024-1234" />
```

### 3. Adicionar Número/Edição
```typescript
<meta name="citation_issue" content={article.issue?.toString()} />
```

### 4. Adicionar Páginas
```typescript
<meta name="citation_firstpage" content={article.firstPage?.toString()} />
<meta name="citation_lastpage" content={article.lastPage?.toString()} />
```

### 5. Adicionar Palavras-chave
```typescript
<meta name="citation_keywords" content={article.keywords?.join(", ")} />
```

---

## 📊 Structured Data JSON-LD

### Implementação Completa

```json
{
  "@context": "https://schema.org",
  "@type": "ScholarlyArticle",
  "headline": "Título do Artigo",
  "description": "Descrição do artigo",
  "image": "https://res.cloudinary.com/.../capa.jpg",
  "url": "https://revistafrica.com/artigo/123",
  "datePublished": "2026-03-08",
  "author": {
    "@type": "Organization",
    "name": "RevistaAfrica"
  },
  "isPartOf": {
    "@type": "Periodical",
    "name": "RevistaAfrica",
    "issn": "2024-1234"
  },
  "volumeNumber": 1,
  "issueNumber": 1,
  "pageStart": 1,
  "pageEnd": 20,
  "associatedMedia": {
    "@type": "MediaObject",
    "url": "https://res.cloudinary.com/.../documento.pdf",
    "encodingFormat": "application/pdf"
  },
  "keywords": ["palavra-chave1", "palavra-chave2"],
  "inLanguage": "pt"
}
```

---

## 🔍 Como Google Scholar Encontra

### 1. Meta Tags
```html
<meta name="citation_title" content="...">
<meta name="citation_author" content="...">
```

### 2. Structured Data
```json
{
  "@type": "ScholarlyArticle",
  "headline": "...",
  "author": "..."
}
```

### 3. Dublin Core
```html
<meta name="DC.title" content="...">
<meta name="DC.creator" content="...">
```

### 4. PDF Metadata
- Título do PDF
- Autor do PDF
- Conteúdo do PDF

---

## ✅ Checklist Google Scholar

- [x] Meta tag citation_title
- [x] Meta tag citation_author
- [x] Meta tag citation_publication_date
- [x] Meta tag citation_journal_title
- [x] Meta tag citation_volume
- [x] Meta tag citation_pdf_url
- [x] Meta tag citation_abstract
- [x] Meta tag citation_language
- [x] Meta tag citation_publisher
- [x] Dublin Core meta tags
- [x] Structured Data JSON-LD
- [ ] DOI (opcional)
- [ ] ISSN (opcional)
- [ ] Número/Edição (opcional)
- [ ] Páginas (opcional)
- [ ] Palavras-chave (opcional)

---

## 📈 Tempo para Indexação

### Google Scholar
- **Primeira indexação:** 1-3 meses
- **Atualização:** 1-2 semanas
- **Citações:** Aparecem após citação

### Google Scholar Profiles
- Criar perfil: https://scholar.google.com/citations
- Adicionar artigos manualmente
- Vincular com ORCID

---

## 🎯 Resultado Esperado

### Pesquisa no Google Scholar
```
"revista africa"
```

### Resultado
```
[1] Título do Artigo - RevistaAfrica, 2026
    Autores: RevistaAfrica
    Citações: 0
    [PDF] https://res.cloudinary.com/.../documento.pdf
```

---

## 🔗 Links Importantes

### Google Scholar
- **Google Scholar:** https://scholar.google.com
- **Google Scholar Profiles:** https://scholar.google.com/citations
- **Documentação:** https://scholar.google.com/intl/en/scholar/about.html

### Identificadores
- **CrossRef (DOI):** https://www.crossref.org
- **ISSN:** https://www.issn.org
- **ORCID:** https://orcid.org

### Ferramentas
- **Structured Data Test:** https://search.google.com/test/rich-results
- **Schema.org:** https://schema.org

---

## 📝 Exemplo Completo

### URL do Artigo
```
https://revistafrica.com/artigo/abc123
```

### Meta Tags
```html
<meta name="citation_title" content="Análise Crítica sobre Políticas Africanas">
<meta name="citation_author" content="RevistaAfrica">
<meta name="citation_publication_date" content="2026/03/08">
<meta name="citation_journal_title" content="RevistaAfrica">
<meta name="citation_volume" content="1">
<meta name="citation_pdf_url" content="https://res.cloudinary.com/revistafrica/image/upload/v1234567890/artigos/analise-critica.pdf">
<meta name="citation_abstract" content="Análise aprofundada sobre políticas africanas contemporâneas...">
<meta name="citation_language" content="pt">
<meta name="citation_publisher" content="RevistaAfrica">
```

### Resultado no Google Scholar
```
[1] Análise Crítica sobre Políticas Africanas - RevistaAfrica, 2026
    Autores: RevistaAfrica
    Citações: 0
    [PDF] https://res.cloudinary.com/revistafrica/image/upload/v1234567890/artigos/analise-critica.pdf
```

---

## 🚀 Próximos Passos

1. ✅ Deploy com meta tags atuais
2. ⏳ Aguardar 1-3 meses para indexação
3. ⏳ Criar Google Scholar Profile
4. ⏳ Adicionar artigos ao perfil
5. ⏳ Vincular com ORCID
6. ⏳ Monitorar citações

---

**Status:** ✅ Meta tags implementadas
**Próximo passo:** Deploy e aguardar indexação

🎓
