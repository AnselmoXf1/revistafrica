# 🎓 Otimizações Adicionais - Google Scholar

## 🎯 Objetivo

Melhorar a indexação no Google Scholar com otimizações adicionais.

---

## 1. Registrar DOI (Digital Object Identifier)

### O que é DOI?
Identificador único e permanente para artigos acadêmicos.

### Como Registrar?

#### Opção 1: CrossRef (Recomendado)
1. Acesse: https://www.crossref.org
2. Registre a revista
3. Registre cada artigo
4. Obtenha DOI: `10.1234/revistafrica.2026.001`

#### Opção 2: DataCite
1. Acesse: https://datacite.org
2. Registre como publisher
3. Registre artigos
4. Obtenha DOI

#### Opção 3: DOI Genérico
```
10.1234/revistafrica
```

### Implementação
```typescript
<meta name="citation_doi" content="10.1234/revistafrica.2026.001" />
```

---

## 2. Registrar ISSN (International Standard Serial Number)

### O que é ISSN?
Identificador único para a revista.

### Como Registrar?

1. Acesse: https://www.issn.org
2. Preencha formulário
3. Aguarde aprovação (1-2 semanas)
4. Obtenha ISSN: `2024-1234`

### Implementação
```typescript
<meta name="citation_issn" content="2024-1234" />
```

---

## 3. Criar Google Scholar Profile

### Passo 1: Acessar
1. Acesse: https://scholar.google.com/citations
2. Clique em **Create Profile**

### Passo 2: Preencher Informações
- Nome: RevistaAfrica
- Email: contato@revistafrica.com
- Instituição: RevistaAfrica
- Área: Multidisciplinar

### Passo 3: Adicionar Artigos
1. Clique em **Add Articles**
2. Pesquise seus artigos
3. Selecione e adicione

### Passo 4: Vincular com ORCID
1. Acesse: https://orcid.org
2. Crie conta
3. Vincule com Google Scholar

---

## 4. Otimizar PDF no Cloudinary

### Metadados do PDF

```
Título: Análise Crítica sobre Políticas Africanas
Autor: RevistaAfrica
Assunto: Políticas Africanas
Palavras-chave: africa, politicas, analise
```

### URL Otimizada
```
https://res.cloudinary.com/revistafrica/image/upload/
  q_auto,
  f_auto,
  c_limit,w_1000/
  artigos/analise-critica-politicas-africanas.pdf
```

---

## 5. Adicionar Mais Meta Tags

### Número/Edição
```typescript
<meta name="citation_issue" content={article.issue?.toString()} />
```

### Páginas
```typescript
<meta name="citation_firstpage" content={article.firstPage?.toString()} />
<meta name="citation_lastpage" content={article.lastPage?.toString()} />
```

### Palavras-chave
```typescript
<meta name="citation_keywords" content={article.keywords?.join(", ")} />
```

### URL da Revista
```typescript
<meta name="citation_journal_url" content="https://revistafrica.com" />
```

### Data Online
```typescript
<meta name="citation_online_date" content={publishDate} />
```

---

## 6. Structured Data Completo

### JSON-LD Otimizado
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
    "name": "RevistaAfrica",
    "url": "https://revistafrica.com"
  },
  "isPartOf": {
    "@type": "Periodical",
    "name": "RevistaAfrica",
    "issn": "2024-1234",
    "url": "https://revistafrica.com"
  },
  "volumeNumber": 1,
  "issueNumber": 1,
  "pageStart": 1,
  "pageEnd": 20,
  "identifier": {
    "@type": "PropertyValue",
    "propertyID": "doi",
    "value": "10.1234/revistafrica.2026.001"
  },
  "associatedMedia": {
    "@type": "MediaObject",
    "url": "https://res.cloudinary.com/.../documento.pdf",
    "encodingFormat": "application/pdf"
  },
  "keywords": ["palavra-chave1", "palavra-chave2"],
  "inLanguage": "pt",
  "publisher": {
    "@type": "Organization",
    "name": "RevistaAfrica"
  }
}
```

---

## 7. Sitemap para Google Scholar

### Adicionar ao Sitemap
```xml
<url>
  <loc>https://revistafrica.com/artigo/123</loc>
  <lastmod>2026-03-08</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.9</priority>
</url>
```

---

## 8. Robots.txt para Google Scholar

### Permitir Indexação
```
User-agent: Googlebot-Scholar
Allow: /
Allow: /artigo/
Allow: *.pdf
```

---

## 📊 Checklist de Otimizações

### Essencial
- [x] Meta tags citation_*
- [x] Dublin Core meta tags
- [x] Structured Data JSON-LD
- [x] PDF no Cloudinary
- [ ] DOI registrado
- [ ] ISSN registrado

### Recomendado
- [ ] Google Scholar Profile criado
- [ ] Artigos adicionados ao perfil
- [ ] ORCID vinculado
- [ ] Palavras-chave adicionadas
- [ ] Páginas adicionadas
- [ ] Número/Edição adicionado

### Avançado
- [ ] Citações monitoradas
- [ ] Métricas de impacto
- [ ] Colaborações acadêmicas
- [ ] Indexação em outras bases

---

## 📈 Tempo para Indexação

### Google Scholar
- **Primeira indexação:** 1-3 meses
- **Atualização:** 1-2 semanas
- **Citações:** Aparecem após citação

### Recomendações
1. Deploy com meta tags atuais
2. Registrar DOI e ISSN
3. Criar Google Scholar Profile
4. Aguardar 1-3 meses
5. Monitorar indexação

---

## 🔗 Links Importantes

### Registros
- **CrossRef:** https://www.crossref.org
- **ISSN:** https://www.issn.org
- **ORCID:** https://orcid.org

### Plataformas
- **Google Scholar:** https://scholar.google.com
- **Google Scholar Profiles:** https://scholar.google.com/citations
- **ResearchGate:** https://www.researchgate.net
- **Academia.edu:** https://www.academia.edu

### Ferramentas
- **Structured Data Test:** https://search.google.com/test/rich-results
- **Schema.org:** https://schema.org

---

## 🚀 Próximos Passos

### Imediato
1. Deploy com meta tags atuais
2. Testar com Structured Data Test

### Curto Prazo (1-2 semanas)
1. Registrar DOI na CrossRef
2. Registrar ISSN
3. Criar Google Scholar Profile

### Médio Prazo (1-3 meses)
1. Aguardar indexação
2. Adicionar artigos ao perfil
3. Monitorar citações

### Longo Prazo
1. Aumentar visibilidade
2. Aumentar citações
3. Melhorar métricas de impacto

---

**Status:** ✅ Meta tags implementadas
**Próximo passo:** Registrar DOI e ISSN

🎓
