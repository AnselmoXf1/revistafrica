# 🚀 COMECE AQUI - SEO em 5 Passos

## O que foi feito?

Seu site estava com URLs assim:
```
https://revistafrica.com/#/artigo/123  ❌ Ruim para Google
```

Agora está assim:
```
https://revistafrica.com/artigo/123  ✅ Bom para Google
```

---

## 5 Passos para Colocar em Produção

### ⏱️ Tempo total: ~5 minutos + 48 horas de espera

---

## Passo 1: Fazer Deploy (2 minutos)

Abra o terminal e execute:

```bash
cd REID-main
git add .
git commit -m "feat: SEO - migrar para URLs limpas"
git push origin main
```

Depois acesse: https://vercel.com/dashboard

Aguarde até aparecer um ✅ verde (significa que o deploy terminou).

---

## Passo 2: Testar URLs (1 minuto)

Acesse no navegador:

- `https://revistafrica.com/` ← deve carregar
- `https://revistafrica.com/artigo/123` ← substitua 123 por um ID real

Se ambas carregarem normalmente (sem #), está funcionando! ✅

---

## Passo 3: Enviar Sitemap ao Google (1 minuto)

1. Acesse: https://search.google.com/search-console
2. Selecione `https://revistafrica.com`
3. Menu esquerdo → **Sitemaps**
4. Clique em **Adicionar Sitemap**
5. Cole: `https://revistafrica.com/api/sitemap.xml`
6. Clique em **Enviar**

Pronto! ✅

---

## Passo 4: Solicitar Indexação (1 minuto)

1. No Google Search Console, vá para **Inspeção de URL**
2. Cole: `https://revistafrica.com/artigo/123` (ID real)
3. Clique em **Solicitar Indexação**

Pronto! ✅

---

## Passo 5: Aguardar 48 Horas

Depois de 48 horas, pesquise no Google:

```
site:revistafrica.com
```

Você deve ver:
```
revistafrica.com/
revistafrica.com/artigo/123
revistafrica.com/artigo/456
revistafrica.com/submissoes
```

Se aparecer, significa que os artigos estão sendo indexados! 🎉

---

## ✅ Pronto!

Agora seu site:
- ✅ Tem URLs limpas
- ✅ Tem sitemap dinâmico
- ✅ Está no Google Search Console
- ✅ Será indexado pelo Google

---

## 🐛 Se algo der errado

### URLs ainda mostram #
Limpar cache: `Ctrl+Shift+Del` (Windows) ou `Cmd+Shift+Del` (Mac)

### Sitemap não aparece
Testar: `https://revistafrica.com/api/sitemap.xml`

### Google não indexa após 48 horas
Aguardar mais 48 horas ou verificar Google Search Console

---

## 📚 Documentos Completos

Para mais detalhes, leia:
- `DEPLOY_SEO.md` - Instruções detalhadas
- `SEO_CHECKLIST_FINAL.md` - Checklist completo
- `RESUMO_SEO_VISUAL.md` - Explicação visual

---

**Pronto? Comece pelo Passo 1!** 🚀
