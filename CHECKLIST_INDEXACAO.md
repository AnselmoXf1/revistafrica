# ✅ Checklist de Indexação - Google e Google Scholar

## 📦 Arquivos Criados/Modificados

### Novos Arquivos
- ✅ `pages/ArticleDetail.tsx` - Página individual de artigos
- ✅ `components/ArticleStructuredData.tsx` - Dados estruturados JSON-LD
- ✅ `server/routes/sitemap.js` - Geração dinâmica de sitemap
- ✅ `public/robots.txt` - Configuração de crawlers
- ✅ `scripts/generate-sitemap.js` - Script para sitemap estático
- ✅ `SEO_GOOGLE_SCHOLAR.md` - Documentação completa
- ✅ `CHECKLIST_INDEXACAO.md` - Este arquivo

### Arquivos Modificados
- ✅ `App.tsx` - Adicionada rota `/artigo/:id` e HelmetProvider
- ✅ `pages/Home.tsx` - Links para páginas individuais
- ✅ `services/api.ts` - Método `getById()` já existente
- ✅ `server/server.js` - Rotas de sitemap adicionadas
- ✅ `index.html` - Meta tags melhoradas e link para sitemap
- ✅ `package.json` - Dependência `react-helmet-async` adicionada

## 🚀 Passos para Deploy

### 1. Instalar Dependências
```bash
cd REID-main
npm install
```

### 2. Testar Localmente
```bash
# Frontend
npm run dev

# Backend (em outro terminal)
cd server
npm start
```

### 3. Verificar URLs
- [ ] Página inicial: http://localhost:5173/
- [ ] Artigo individual: http://localhost:5173/#/artigo/{id}
- [ ] Sitemap: http://localhost:5000/api/sitemap.xml
- [ ] Robots: http://localhost:5173/robots.txt

### 4. Build para Produção
```bash
npm run build
```

### 5. Deploy
```bash
# Se usando Vercel
vercel --prod

# Ou commit e push para GitHub
git add .
git commit -m "feat: Implementar indexação Google Scholar"
git push origin main
```

## 🔍 Verificações Pós-Deploy

### Imediatamente Após Deploy

- [ ] Site está acessível: https://revistafrica.com/
- [ ] Robots.txt funciona: https://revistafrica.com/robots.txt
- [ ] Sitemap funciona: https://revistafrica.com/api/sitemap.xml
- [ ] Página de artigo funciona: https://revistafrica.com/#/artigo/{id}
- [ ] PDFs abrem diretamente no navegador

### Validações Técnicas

- [ ] Validar sitemap: https://www.xml-sitemaps.com/validate-xml-sitemap.html
- [ ] Testar meta tags: https://metatags.io/
- [ ] Verificar dados estruturados: https://search.google.com/test/rich-results
- [ ] Testar Open Graph: https://www.opengraph.xyz/
- [ ] Validar HTML: https://validator.w3.org/

### Verificar Meta Tags de um Artigo

Abra um artigo e inspecione o código-fonte (Ctrl+U). Procure por:

```html
<!-- Deve conter -->
<meta name="citation_title" content="..." />
<meta name="citation_pdf_url" content="..." />
<script type="application/ld+json">
  {"@context":"https://schema.org","@type":"ScholarlyArticle"...}
</script>
```

## 📊 Google Search Console

### Configuração Inicial (Primeira Vez)

1. [ ] Acessar: https://search.google.com/search-console
2. [ ] Adicionar propriedade: `https://revistafrica.com`
3. [ ] Verificar propriedade (escolher método):
   - Método recomendado: Tag HTML
   - Adicionar tag no `index.html` entre `<head>`
4. [ ] Aguardar confirmação de verificação

### Submeter Sitemap

1. [ ] No Search Console, ir em "Sitemaps"
2. [ ] Adicionar novo sitemap: `api/sitemap.xml`
3. [ ] Clicar em "Enviar"
4. [ ] Aguardar processamento (pode levar horas/dias)

### Solicitar Indexação Manual

Para acelerar a indexação dos primeiros artigos:

1. [ ] No Search Console, ir em "Inspeção de URL"
2. [ ] Inserir URL de um artigo
3. [ ] Clicar em "Solicitar indexação"
4. [ ] Repetir para 3-5 artigos principais

## 🎓 Google Scholar

### Requisitos Verificados

- [x] URLs únicas e estáveis para cada artigo
- [x] Meta tags `citation_*` implementadas
- [x] PDFs acessíveis publicamente
- [x] Informações bibliográficas completas
- [x] HTML semântico com Schema.org
- [x] Dados estruturados JSON-LD

### Processo de Indexação

O Google Scholar indexa automaticamente. **Não há submissão manual**.

**Tempo esperado**: 2-6 semanas após primeira indexação no Google

### Verificar Indexação

Após algumas semanas, pesquisar no Google Scholar:
```
site:revistafrica.com
```

Ou pesquisar por título específico:
```
allintitle: "título exato do artigo"
```

## 📈 Monitoramento Contínuo

### Semanalmente

- [ ] Verificar Google Search Console para erros
- [ ] Monitorar páginas indexadas
- [ ] Verificar cliques e impressões

### Mensalmente

- [ ] Verificar se novos artigos foram indexados
- [ ] Pesquisar artigos no Google Scholar
- [ ] Analisar performance de SEO
- [ ] Atualizar sitemap se necessário

## 🐛 Troubleshooting

### Artigos não aparecem no Google

**Possíveis causas:**
1. Tempo insuficiente (aguardar 1-2 semanas)
2. Sitemap não foi processado
3. Robots.txt bloqueando crawlers
4. Erros no HTML/meta tags
5. PDFs não acessíveis

**Soluções:**
- Verificar Search Console para erros específicos
- Reenviar sitemap
- Solicitar indexação manual
- Validar meta tags com ferramentas online

### PDFs não abrem

**Verificar:**
- [ ] URL do PDF está correto
- [ ] PDF não requer autenticação
- [ ] Cloudinary está configurado para acesso público
- [ ] CORS está configurado corretamente

### Sitemap retorna erro

**Verificar:**
- [ ] Servidor backend está rodando
- [ ] MongoDB está conectado
- [ ] Rota `/api/sitemap.xml` está registrada
- [ ] Formato XML está correto

## 📞 Suporte

Se encontrar problemas:

1. Verificar logs do servidor
2. Testar em ambiente local primeiro
3. Consultar documentação:
   - [Google Scholar Guidelines](https://scholar.google.com/intl/en/scholar/inclusion.html)
   - [Google Search Console Help](https://support.google.com/webmasters)
   - [Schema.org Documentation](https://schema.org/ScholarlyArticle)

## ✨ Melhorias Futuras

### Curto Prazo
- [ ] Adicionar campo de autores múltiplos
- [ ] Implementar palavras-chave por artigo
- [ ] Adicionar DOI se disponível
- [ ] Incluir ISSN da revista

### Médio Prazo
- [ ] Migrar de HashRouter para BrowserRouter (melhor SEO)
- [ ] Implementar Server-Side Rendering (SSR)
- [ ] Adicionar prerendering para crawlers
- [ ] Criar página de busca avançada

### Longo Prazo
- [ ] Integrar com CrossRef para DOIs
- [ ] Implementar métricas de citação
- [ ] Adicionar exportação de citações (BibTeX, RIS)
- [ ] Sistema de revisão por pares online

## 📝 Notas Finais

- **Paciência é fundamental**: Indexação leva tempo
- **Qualidade sobre quantidade**: Foco em metadados completos
- **Monitoramento constante**: Use Search Console regularmente
- **Documentação**: Mantenha registros de mudanças

---

**Data de Implementação**: 2026-03-07
**Versão**: 1.0
**Status**: ✅ Pronto para Deploy
