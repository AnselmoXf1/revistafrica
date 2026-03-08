# 📖 Passo a Passo - Deploy SEO

## ⏱️ Tempo Total: ~10 minutos

---

## 🔧 Passo 1: Abrir Terminal

Abra o terminal/CMD no seu computador.

---

## 📂 Passo 2: Entrar no Diretório

```bash
cd REID-main
```

Pressione **Enter**.

---

## 🔍 Passo 3: Verificar Status

```bash
git status
```

Pressione **Enter**.

**Você deve ver:**
```
modified:   App.tsx
modified:   vercel.json
modified:   index.html
new file:   api/sitemap.js
new file:   api/robots.js
```

---

## ✅ Passo 4: Adicionar Mudanças

```bash
git add .
```

Pressione **Enter**.

---

## 💬 Passo 5: Fazer Commit

```bash
git commit -m "feat: SEO completo - sitemap no domínio oficial"
```

Pressione **Enter**.

**Você deve ver:**
```
[main abc1234] feat: SEO completo - sitemap no domínio oficial
 5 files changed, 150 insertions(+), 20 deletions(-)
```

---

## 🚀 Passo 6: Fazer Push

```bash
git push origin main
```

Pressione **Enter**.

**Você deve ver:**
```
Enumerating objects: 7, done.
Counting objects: 100% (7/7), done.
...
To github.com:seu-usuario/REID-main.git
   abc1234..def5678  main -> main
```

---

## ⏳ Passo 7: Aguardar Deploy

1. Abra: https://vercel.com/dashboard
2. Selecione o projeto `REID-main`
3. Aguarde até aparecer ✅ verde

**Tempo:** 2-5 minutos

---

## 🧪 Passo 8: Testar Sitemap

Abra o navegador e acesse:

```
https://revistafrica.com/sitemap.xml
```

**Resultado esperado:** XML com lista de artigos

---

## 🧪 Passo 9: Testar Robots.txt

Abra o navegador e acesse:

```
https://revistafrica.com/robots.txt
```

**Resultado esperado:** Arquivo de texto com permissões

---

## 🧪 Passo 10: Testar Artigo

Abra o navegador e acesse:

```
https://revistafrica.com/artigo/123
```

(Substitua 123 por um ID real)

**Resultado esperado:** Página carrega normalmente

---

## 📤 Passo 11: Enviar Sitemap ao Google

1. Acesse: https://search.google.com/search-console
2. Selecione: `https://revistafrica.com`
3. Menu esquerdo → **Sitemaps**
4. Clique em **Adicionar Sitemap**
5. Cole: `https://revistafrica.com/sitemap.xml`
6. Clique em **Enviar**

**Resultado esperado:** "Sitemap enviado com sucesso"

---

## 📋 Passo 12: Solicitar Indexação

1. Menu esquerdo → **Inspeção de URL**
2. Cole: `https://revistafrica.com/artigo/123` (ID real)
3. Clique em **Solicitar Indexação**

**Resultado esperado:** Indexação solicitada

---

## ⏰ Passo 13: Aguardar 48 Horas

Google leva 24-72 horas para indexar.

---

## 🔎 Passo 14: Verificar Indexação

Após 48 horas, abra o Google e pesquise:

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
```

---

## 🎉 Pronto!

Seus artigos estão no Google! 🚀

---

## 📞 Problemas?

Se algo não funcionar:

1. Verificar `TROUBLESHOOTING_SEO.md`
2. Verificar Google Search Console
3. Aguardar mais tempo

---

**Sucesso!** ✅
