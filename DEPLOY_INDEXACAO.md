# 🚀 Deploy Rápido - Indexação Google Scholar

## ⚡ Comandos Rápidos

### 1. Instalar Dependências
```bash
cd REID-main
npm install
```

### 2. Testar Localmente
```bash
# Terminal 1 - Frontend
npm run dev

# Terminal 2 - Backend
cd server
npm start
```

### 3. Verificar Funcionamento
```bash
# Testar SEO
npm run test-seo

# Acessar no navegador
# Frontend: http://localhost:5173/
# Sitemap: http://localhost:5000/api/sitemap.xml
```

### 4. Build e Deploy
```bash
# Build
npm run build

# Deploy (Vercel)
vercel --prod

# Ou commit para GitHub
git add .
git commit -m "feat: Implementar indexação Google Scholar"
git push origin main
```

## ✅ Verificação Pós-Deploy

### URLs para Testar
- [ ] https://revistafrica.com/
- [ ] https://revistafrica.com/robots.txt
- [ ] https://revistafrica.com/api/sitemap.xml
- [ ] https://revistafrica.com/#/artigo/{id}

### Ferramentas de Validação
- [ ] Sitemap: https://www.xml-sitemaps.com/validate-xml-sitemap.html
- [ ] Meta Tags: https://metatags.io/
- [ ] Rich Results: https://search.google.com/test/rich-results
- [ ] Open Graph: https://www.opengraph.xyz/

## 📊 Google Search Console

### Setup Rápido
1. Acesse: https://search.google.com/search-console
2. Adicione: `https://revistafrica.com`
3. Verifique a propriedade
4. Submeta sitemap: `api/sitemap.xml`
5. Solicite indexação de 3-5 artigos

## 📝 Checklist Completo

Para checklist detalhado, veja: `CHECKLIST_INDEXACAO.md`

## 📚 Documentação

- `INDEXACAO_IMPLEMENTADA.md` - Resumo da implementação
- `SEO_GOOGLE_SCHOLAR.md` - Guia técnico completo
- `CHECKLIST_INDEXACAO.md` - Checklist detalhado

## 🎯 Resultado Esperado

- ✅ Páginas individuais para cada artigo
- ✅ Meta tags do Google Scholar
- ✅ Sitemap dinâmico funcionando
- ✅ Robots.txt configurado
- ✅ PDFs acessíveis publicamente
- ✅ Dados estruturados JSON-LD
- ✅ HTML semântico

## ⏱️ Timeline de Indexação

- **Imediato**: Site acessível
- **1-3 dias**: Google começa a indexar
- **1-2 semanas**: Artigos aparecem no Google
- **2-6 semanas**: Artigos no Google Scholar

## 🆘 Problemas?

Consulte a seção Troubleshooting em:
- `INDEXACAO_IMPLEMENTADA.md`
- `SEO_GOOGLE_SCHOLAR.md`

---

**Status**: ✅ Pronto para Deploy
**Data**: 2026-03-07
