# 🔧 Corrigir Sitemap - Adicionar Artigos

## 🎯 Problema

Sitemap só mostra 5 páginas (estáticas). Artigos não aparecem.

---

## 🔍 Causas Possíveis

### 1. Backend (Render) Não Está Rodando
```
Sitemap tenta buscar artigos em:
https://api.revistafrica.onrender.com/api/magazines

Se backend está down, retorna erro
```

### 2. Nenhum Artigo no Banco de Dados
```
Se não há artigos, sitemap só mostra páginas estáticas
```

### 3. Erro na Requisição
```
Timeout, CORS, ou outro erro
```

---

## ✅ Solução 1: Verificar Backend

### Passo 1: Testar API
```bash
curl https://api.revistafrica.onrender.com/api/magazines
```

**Resultado esperado:** JSON com artigos
```json
[
  {
    "_id": "123",
    "title": "Título do Artigo",
    "uploadDate": "2026-03-08"
  }
]
```

**Se retornar erro:** Backend está down

### Passo 2: Reiniciar Backend
1. Acesse: https://dashboard.render.com
2. Selecione: `api-revistafrica`
3. Clique em: **Manual Deploy**
4. Aguarde terminar

---

## ✅ Solução 2: Adicionar Artigos

### Passo 1: Fazer Upload
1. Acesse: `https://revistafrica.com/admin`
2. Faça login
3. Clique em: **Upload Magazine**
4. Preencha os dados
5. Clique em: **Upload**

### Passo 2: Aguardar Cache
Sitemap tem cache de 1 hora. Aguarde.

### Passo 3: Verificar Sitemap
```
https://revistafrica.com/sitemap.xml
```

Você deve ver os artigos adicionados.

---

## ✅ Solução 3: Forçar Atualização

### Passo 1: Fazer Deploy Novo
```bash
cd REID-main
git add .
git commit -m "fix: melhorar sitemap com timeout e fallback"
git push origin main
```

### Passo 2: Aguardar Vercel
Acesse: https://vercel.com/dashboard
Aguarde: ✅ Verde

### Passo 3: Limpar Cache
```
https://revistafrica.com/sitemap.xml?cache=false
```

---

## 🔍 Verificar Sitemap

### Acesse
```
https://revistafrica.com/sitemap.xml
```

### Resultado Esperado
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
    <loc>https://revistafrica.com/artigo/123</loc>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://revistafrica.com/artigo/456</loc>
    <priority>0.9</priority>
  </url>
  ...
</urlset>
```

---

## 📤 Enviar ao Google Search Console

### Passo 1: Acesse
```
https://search.google.com/search-console
```

### Passo 2: Selecione Propriedade
```
https://revistafrica.com
```

### Passo 3: Vá para Sitemaps
Menu esquerdo → **Sitemaps**

### Passo 4: Remover Sitemap Antigo
Se houver sitemap antigo, remova.

### Passo 5: Adicionar Novo Sitemap
1. Clique em **Adicionar Sitemap**
2. Cole: `https://revistafrica.com/sitemap.xml`
3. Clique em **Enviar**

**Resultado esperado:** "Sitemap enviado com sucesso"

---

## 🔎 Verificar Indexação

### Pesquisa no Google
```
site:revistafrica.com/artigo/
```

**Resultado esperado:** Artigos aparecem

---

## 📊 Checklist

- [ ] Backend está rodando
- [ ] Há artigos no banco de dados
- [ ] Sitemap mostra artigos
- [ ] Sitemap enviado ao Google
- [ ] Artigos aparecem em `site:revistafrica.com`

---

## 🐛 Troubleshooting

### Problema: Sitemap ainda só mostra 5 páginas

**Solução:**
1. Verificar se backend está rodando
2. Verificar se há artigos no banco de dados
3. Fazer deploy novo
4. Limpar cache do navegador
5. Aguardar 1 hora

### Problema: Erro ao acessar sitemap

**Solução:**
1. Verificar se Vercel está online
2. Verificar logs do Vercel
3. Fazer deploy novo

### Problema: Google não indexa artigos

**Solução:**
1. Verificar robots.txt
2. Verificar sitemap
3. Solicitar indexação manualmente
4. Aguardar 48-72 horas

---

## 🚀 Próximos Passos

1. Verificar backend
2. Adicionar artigos
3. Fazer deploy novo
4. Enviar sitemap ao Google
5. Aguardar indexação

---

**Status:** 🔧 Corrigindo

✅
