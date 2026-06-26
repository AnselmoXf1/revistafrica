# 📋 Passos de Deploy - Versão Visual

## 🎯 Objetivo
Fazer deploy do SEO completo e colocar artigos no Google.

---

## ⏱️ Tempo Total
- Deploy: 10 minutos
- Espera: 48 horas
- Total: ~2 dias

---

## 📍 Passo 1: Abrir Terminal

```bash
# Abra o terminal/CMD
# Navegue até o projeto
cd REID-main
```

---

## 📍 Passo 2: Verificar Mudanças

```bash
# Ver o que foi modificado
git status
```

**Você deve ver:**
```
modified:   App.tsx
modified:   index.html
modified:   public/robots.txt
modified:   vercel.json
new file:   api/robots.js
new file:   api/sitemap.js
```

---

## 📍 Passo 3: Fazer Commit

```bash
# Adicionar tudo
git add .

# Fazer commit
git commit -m "feat: SEO completo - sitemap e robots.txt no domínio oficial"
```

---

## 📍 Passo 4: Fazer Push

```bash
# Enviar para GitHub
git push origin main
```

**Resultado esperado:**
```
Enumerating objects: 10, done.
Counting objects: 100% (10/10), done.
...
To github.com:seu-usuario/REID-main.git
   abc1234..def5678  main -> main
```

---

## 📍 Passo 5: Aguardar Deploy no Vercel

1. Abra: https://vercel.com/dashboard
2. Selecione o projeto `REID-main`
3. Aguarde o status ficar verde ✅

**Você verá:**
```
✅ Production Deployment
   Ready
   Deployed to https://revistafrica.vercel.app
```

**Tempo:** 2-5 minutos

---

## 📍 Passo 6: Testar URLs

Abra o navegador e acesse:

### Homepage
```
https://revistafrica.com/
```
✅ Deve carregar normalmente

### Artigo (substitua 123 por ID real)
```
https://revistafrica.com/artigo/123
```
✅ Deve carregar o artigo

### Sitemap
```
https://revistafrica.com/sitemap.xml
```
✅ Deve retornar XML com lista de artigos

### Robots.txt
```
https://revistafrica.com/robots.txt
```
✅ Deve retornar arquivo de texto

---

## 📍 Passo 7: Enviar Sitemap ao Google

1. Abra: https://search.google.com/search-console
2. Selecione: `https://revistafrica.com`
3. Menu esquerdo → **Sitemaps**
4. Clique em: **Adicionar/Testar Sitemap**
5. Cole: `https://revistafrica.com/sitemap.xml`
6. Clique em: **Enviar**

**Resultado esperado:**
```
✅ Sitemap enviado com sucesso
```

---

## 📍 Passo 8: Solicitar Indexação

1. No Google Search Console
2. Menu esquerdo → **Inspeção de URL**
3. Cole: `https://revistafrica.com/artigo/123` (ID real)
4. Clique em: **Solicitar Indexação**

**Resultado esperado:**
```
✅ Indexação solicitada
```

---

## 📍 Passo 9: Aguardar 48 Horas

⏳ Aguarde 2 dias para o Google indexar

---

## 📍 Passo 10: Verificar Resultados

Abra o Google e pesquise:

```
site:revistafrica.com
```

**Resultado esperado:**
```
revistafrica.com/
revistafrica.com/artigo/123
revistafrica.com/artigo/456
revistafrica.com/submissoes
revistafrica.com/conselho-editorial
revistafrica.com/dados-revista
revistafrica.com/contacto
```

✅ Se aparecer, está funcionando!

---

## 🎯 Resumo Visual

```
┌─────────────────────────────────────────┐
│ 1. Terminal: git add .                  │
│ 2. Terminal: git commit -m "..."        │
│ 3. Terminal: git push origin main       │
│ 4. Vercel: Aguardar deploy verde ✅     │
│ 5. Navegador: Testar URLs               │
│ 6. Google Search Console: Enviar sitemap│
│ 7. Google Search Console: Solicitar idx │
│ 8. Aguardar 48 horas                    │
│ 9. Google: Pesquisar site:revistafrica  │
│ 10. Verificar se artigos aparecem ✅    │
└─────────────────────────────────────────┘
```

---

## ✅ Checklist

- [ ] Passo 1: Terminal aberto
- [ ] Passo 2: Mudanças verificadas
- [ ] Passo 3: Commit feito
- [ ] Passo 4: Push feito
- [ ] Passo 5: Deploy verde no Vercel
- [ ] Passo 6: URLs testadas
- [ ] Passo 7: Sitemap enviado ao Google
- [ ] Passo 8: Indexação solicitada
- [ ] Passo 9: 48 horas aguardadas
- [ ] Passo 10: Resultados verificados

---

## 🐛 Se Algo Deu Errado

### URLs ainda mostram #
```
Solução: Limpar cache (Ctrl+Shift+Del)
```

### Sitemap não aparece
```
Solução: Aguardar 5 minutos e tentar novamente
```

### Google não indexa
```
Solução: Aguardar mais 48 horas
```

---

## 📞 Precisa de Ajuda?

Consulte:
- `DEPLOY_COMPLETO_SEO.md` - Instruções detalhadas
- `TROUBLESHOOTING_SEO.md` - Resolver problemas
- `GOOGLE_SEARCH_CONSOLE_PASSO_A_PASSO.md` - Guia do Google

---

**Pronto? Comece pelo Passo 1!** 🚀
