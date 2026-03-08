# ⚡ Referência Rápida - Indexação Google Scholar

## 🎯 Links Importantes

### Produção
```
Site:     https://revistafrica.com
Sitemap:  https://revistafrica.com/api/sitemap.xml
Backend:  https://api.revistafrica.onrender.com
Health:   https://api.revistafrica.onrender.com/api/health
```

### Dashboards
```
Vercel:   https://vercel.com/dashboard
Render:   https://render.com/dashboard
GitHub:   https://github.com/AnselmoXf1/revistafrica
Google:   https://search.google.com/search-console
```

---

## 📚 Guias por Situação

### "Quero começar agora"
→ **COMECE_AQUI_AGORA.md**

### "Preciso configurar o Google"
→ **PASSOS_GOOGLE.md**

### "Quero ver o que foi feito"
→ **RESUMO_FINAL_INDEXACAO.md**

### "Preciso de detalhes técnicos"
→ **IMPLEMENTACAO_COMPLETA.md**

### "Tenho um problema"
→ **CHECKLIST_INDEXACAO.md** (seção Troubleshooting)

### "Quero ver todos os guias"
→ **DOCUMENTACAO_INDEX.md**

---

## ✅ Checklist Rápido

### Hoje
- [ ] Aguardar deploy (5-10 min)
- [ ] Testar site funcionando
- [ ] Configurar Google Search Console
- [ ] Submeter sitemap

### Esta Semana
- [ ] Verificar sitemap processado
- [ ] Verificar páginas indexadas
- [ ] Monitorar erros

### Próximas Semanas
- [ ] Verificar Google (1-2 semanas)
- [ ] Verificar Google Scholar (2-6 semanas)

---

## 🔍 Comandos Úteis

### Testar Localmente
```bash
cd REID-main
npm run dev
```

### Testar SEO
```bash
npm run test-seo
```

### Ver Status Git
```bash
git status
git log --oneline -5
```

---

## 📊 Arquivos Principais

### Frontend
```
pages/ArticleDetail.tsx          # Página de artigo
components/ArticleStructuredData.tsx  # Dados estruturados
App.tsx                          # Rotas
```

### Backend
```
server/routes/sitemap.js         # Sitemap dinâmico
server/server.js                 # Servidor principal
```

### Documentação
```
COMECE_AQUI_AGORA.md            # Início rápido
PASSOS_GOOGLE.md                # Passos no Google
RESUMO_FINAL_INDEXACAO.md      # Resumo completo
```

---

## 🆘 Problemas Comuns

### Deploy não termina
```
Aguarde até 15 minutos
Verifique logs no dashboard
```

### Sitemap não funciona
```
Verifique backend rodando
Teste: /api/sitemap.xml
Verifique MongoDB conectado
```

### Artigos não indexam
```
Aguarde 1-2 semanas
Verifique Google Search Console
Solicite indexação manual
```

---

## 📈 Timeline

```
Hoje:        Deploy + Google
Dia 1-3:     Google processa
Semana 1-2:  Indexação Google
Semana 2-6:  Google Scholar
```

---

## 🎯 Resultado Final

✅ Páginas individuais de artigos  
✅ Meta tags Google Scholar  
✅ Sitemap dinâmico  
✅ Indexação no Google  
✅ Indexação no Google Scholar

---

## 📞 Suporte

Todos os guias estão em: `REID-main/`

**Comece por**: COMECE_AQUI_AGORA.md

---

**Atualizado**: 2026-03-07  
**Status**: ✅ Completo
