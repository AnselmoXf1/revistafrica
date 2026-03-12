# 📝 Adicionar Artigos Manualmente ao Sitemap

## 🎯 Problema

API do Render não está funcionando. Sitemap só mostra páginas estáticas.

## ✅ Solução

Adicionar artigos manualmente ao sitemap.

---

## 🔧 Passo 1: Editar sitemap-fixed.js

Abra o arquivo:
```
REID-main/api/sitemap-fixed.js
```

Encontre a linha:
```javascript
const articles = [
  // Adicione seus artigos aqui manualmente
  // Exemplo:
  // { id: "123", title: "Título do Artigo", date: "2026-03-08" }
];
```

---

## 🔧 Passo 2: Adicionar Artigos

Adicione seus artigos no formato:

```javascript
const articles = [
  { id: "artigo1", title: "Título do Artigo 1", date: "2026-03-08" },
  { id: "artigo2", title: "Título do Artigo 2", date: "2026-03-07" },
  { id: "artigo3", title: "Título do Artigo 3", date: "2026-03-06" },
  // Adicione mais artigos aqui
];
```

**Onde:**
- `id`: ID do artigo (aparece na URL: `/artigo/{id}`)
- `title`: Título do artigo (para referência)
- `date`: Data de publicação (formato: YYYY-MM-DD)

---

## 🔧 Passo 3: Fazer Deploy

```bash
cd REID-main
git add .
git commit -m "feat: adicionar artigos manualmente ao sitemap"
git push origin main
```

Aguarde ✅ verde no Vercel.

---

## 🔍 Verificar

Após deploy, acesse:
```
https://revistafrica.com/sitemap.xml
```

**Resultado esperado:**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://revistafrica.com/</loc>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://revistafrica.com/submissoes</loc>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://revistafrica.com/artigo/artigo1</loc>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://revistafrica.com/artigo/artigo2</loc>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://revistafrica.com/artigo/artigo3</loc>
    <priority>0.9</priority>
  </url>
</urlset>
```

---

## 📤 Enviar ao Google

1. Google Search Console
2. Sitemaps
3. Enviar: `https://revistafrica.com/sitemap.xml`

---

## 🎯 Exemplo Completo

### Arquivo sitemap-fixed.js
```javascript
const articles = [
  { id: "analise-critica-politicas-africanas", title: "Análise Crítica sobre Políticas Africanas", date: "2026-03-08" },
  { id: "estudo-desenvolvimento-sustentavel", title: "Estudo sobre Desenvolvimento Sustentável", date: "2026-03-07" },
  { id: "pesquisa-educacao-africana", title: "Pesquisa sobre Educação Africana", date: "2026-03-06" },
  { id: "artigo-cultura-africana", title: "Artigo sobre Cultura Africana", date: "2026-03-05" },
  { id: "estudo-economia-africana", title: "Estudo sobre Economia Africana", date: "2026-03-04" }
];
```

### URLs Geradas
```
https://revistafrica.com/artigo/analise-critica-politicas-africanas
https://revistafrica.com/artigo/estudo-desenvolvimento-sustentavel
https://revistafrica.com/artigo/pesquisa-educacao-africana
https://revistafrica.com/artigo/artigo-cultura-africana
https://revistafrica.com/artigo/estudo-economia-africana
```

---

## 📊 Benefícios

✅ Artigos aparecem no sitemap
✅ Google indexa os artigos
✅ URLs funcionam (se artigos existirem)
✅ Solução temporária até API funcionar

---

## 🚀 Próximos Passos

1. **Agora:** Adicionar artigos manualmente
2. **Depois:** Fazer deploy
3. **Depois:** Enviar sitemap ao Google
4. **Depois:** Aguardar indexação

---

**Pronto?** Comece a adicionar artigos!

📝