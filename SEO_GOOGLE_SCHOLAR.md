# Guia de Indexação - Google e Google Scholar

## ✅ Implementações Realizadas

### 1. Páginas Individuais para Artigos

Cada artigo agora possui uma página dedicada com URL única:
- **Formato**: `https://revistafrica.com/#/artigo/{id}`
- **Exemplo**: `https://revistafrica.com/#/artigo/507f1f77bcf86cd799439011`

### 2. Meta Tags do Google Scholar

Cada página de artigo inclui as seguintes meta tags acadêmicas:

```html
<!-- Google Scholar Meta Tags -->
<meta name="citation_title" content="Título do Artigo" />
<meta name="citation_author" content="Nome do Autor" />
<meta name="citation_publication_date" content="2024/01/01" />
<meta name="citation_journal_title" content="RevistaAfrica" />
<meta name="citation_volume" content="1" />
<meta name="citation_pdf_url" content="URL_DO_PDF" />
<meta name="citation_abstract" content="Resumo do artigo" />
<meta name="citation_language" content="pt" />
<meta name="citation_publisher" content="RevistaAfrica" />

<!-- Dublin Core Meta Tags -->
<meta name="DC.title" content="Título do Artigo" />
<meta name="DC.creator" content="Nome do Autor" />
<meta name="DC.subject" content="Categoria" />
<meta name="DC.description" content="Descrição" />
<meta name="DC.publisher" content="RevistaAfrica" />
<meta name="DC.date" content="2024-01-01" />
<meta name="DC.type" content="Text" />
<meta name="DC.format" content="application/pdf" />
<meta name="DC.language" content="pt" />
```

### 3. HTML Semântico

As páginas de artigos utilizam marcação semântica HTML5 e Schema.org:

```html
<article itemScope itemType="https://schema.org/ScholarlyArticle">
  <h1 itemProp="headline name">Título</h1>
  <span itemProp="author">Autor</span>
  <time itemProp="datePublished">Data</time>
  <p itemProp="abstract description">Resumo</p>
</article>
```

### 4. Sitemap Dinâmico

**Sitemap XML gerado automaticamente** incluindo todos os artigos:
- **URL**: `https://revistafrica.com/api/sitemap.xml`
- Atualizado automaticamente quando novos artigos são adicionados
- Inclui páginas estáticas e artigos individuais

### 5. Robots.txt

Arquivo `robots.txt` configurado para permitir indexação:
- **URL**: `https://revistafrica.com/robots.txt`
- Permite indexação de todas as páginas públicas
- Bloqueia área administrativa
- Referencia o sitemap

```txt
User-agent: *
Allow: /
Allow: /#/artigo/
Disallow: /#/admin
Disallow: /#/login

Sitemap: https://revistafrica.vercel.app/api/sitemap.xml
```

### 6. PDFs Acessíveis

- PDFs hospedados no Cloudinary (acesso público)
- Links diretos para download
- Visualização no navegador sem login
- URLs permanentes e estáveis

## 📋 Checklist de Verificação

### Antes do Deploy

- [ ] Verificar se todos os PDFs estão acessíveis publicamente
- [ ] Testar URLs de artigos individuais
- [ ] Validar sitemap XML: https://www.xml-sitemaps.com/validate-xml-sitemap.html
- [ ] Verificar robots.txt
- [ ] Testar meta tags com: https://metatags.io/

### Após o Deploy

- [ ] Submeter sitemap ao Google Search Console
- [ ] Verificar indexação no Google: `site:revistafrica.vercel.app`
- [ ] Aguardar indexação do Google Scholar (pode levar semanas)
- [ ] Monitorar erros no Google Search Console

## 🔧 Configuração do Google Search Console

1. Acesse: https://search.google.com/search-console
2. Adicione a propriedade: `https://revistafrica.com`
3. Verifique a propriedade (método HTML tag ou DNS)
4. Submeta o sitemap: `https://revistafrica.com/api/sitemap.xml`
5. Solicite indexação das páginas principais

## 📊 Google Scholar

### Requisitos Atendidos

✅ Cada artigo tem URL única e estável
✅ Meta tags citation_* implementadas
✅ PDF acessível publicamente
✅ Informações bibliográficas completas
✅ HTML semântico com Schema.org

### Tempo de Indexação

O Google Scholar indexa automaticamente, mas pode levar:
- **2-4 semanas** para primeiros artigos
- **Mais rápido** após o site ser reconhecido

### Verificação

Para verificar se um artigo foi indexado:
```
site:revistafrica.com "título do artigo"
```

No Google Scholar:
```
allintitle: título do artigo
```

## 🚀 Melhorias Futuras

### Campos Adicionais para Artigos

Para melhor indexação, considere adicionar ao modelo de dados:

```typescript
interface Article {
  // Campos existentes...
  
  // Novos campos sugeridos:
  authors: string[];           // Lista de autores
  keywords: string[];          // Palavras-chave
  doi?: string;                // Digital Object Identifier
  issn?: string;               // ISSN da revista
  pages?: string;              // Páginas (ex: "10-25")
  abstract: string;            // Resumo completo
  language: string;            // Idioma (pt, en, etc)
  references?: string[];       // Referências bibliográficas
}
```

### Meta Tags Adicionais

```html
<!-- DOI (se disponível) -->
<meta name="citation_doi" content="10.1234/exemplo" />

<!-- ISSN (se disponível) -->
<meta name="citation_issn" content="1234-5678" />

<!-- Páginas -->
<meta name="citation_firstpage" content="10" />
<meta name="citation_lastpage" content="25" />

<!-- Palavras-chave -->
<meta name="citation_keywords" content="palavra1, palavra2, palavra3" />
```

## 📝 Notas Importantes

1. **HashRouter (#)**: O site usa HashRouter, o que pode limitar a indexação. Para melhor SEO, considere migrar para BrowserRouter no futuro.

2. **Renderização**: Como é uma SPA (Single Page Application), certifique-se de que o conteúdo é renderizado no lado do cliente de forma acessível aos crawlers.

3. **Prerendering**: Para melhor indexação, considere usar serviços como:
   - Prerender.io
   - Netlify Prerendering
   - React Snap

4. **Metadados Dinâmicos**: O react-helmet-async foi implementado para gerenciar meta tags dinâmicas por página.

## 🔗 Links Úteis

- [Google Scholar Inclusion Guidelines](https://scholar.google.com/intl/en/scholar/inclusion.html)
- [Google Search Console](https://search.google.com/search-console)
- [Schema.org ScholarlyArticle](https://schema.org/ScholarlyArticle)
- [Dublin Core Metadata](https://www.dublincore.org/specifications/dublin-core/dcmi-terms/)
- [Sitemap Protocol](https://www.sitemaps.org/protocol.html)

## 🆘 Suporte

Se tiver problemas com indexação:

1. Verifique o Google Search Console para erros
2. Teste as meta tags com ferramentas online
3. Certifique-se de que os PDFs estão acessíveis
4. Aguarde tempo suficiente (2-4 semanas para Google Scholar)
5. Considere adicionar mais metadados bibliográficos
