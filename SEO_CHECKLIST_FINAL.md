# ✅ SEO Checklist Final - RevistaAfrica

## 🎯 Objetivo
Fazer o domínio oficial **revistafrica.com** mostrar os artigos nas buscas do Google.

---

## ✅ Condições Técnicas Implementadas

### 1️⃣ URLs Públicas Limpas (SEM #)
- ✅ **Migrado de HashRouter para BrowserRouter**
- ✅ URLs agora são: `https://revistafrica.com/artigo/123`
- ✅ Antes era: `https://revistafrica.com/#/artigo/123` (ruim para SEO)
- ✅ Vercel configurado com fallback para `index.html`

**Arquivo modificado:** `App.tsx`

---

### 2️⃣ Sitemap Dinâmico
- ✅ Sitemap gerado automaticamente pelo backend
- ✅ URLs corretas: `https://revistafrica.com/artigo/{id}`
- ✅ Atualizado a cada novo artigo
- ✅ Cache de 1 hora para performance

**Arquivo:** `server/routes/sitemap.js`
**URL:** `https://revistafrica.com/api/sitemap.xml`

---

### 3️⃣ Robots.txt Configurado
- ✅ Permite indexação de todas as páginas públicas
- ✅ Bloqueia `/admin` e `/login`
- ✅ Aponta para o sitemap

**Arquivo:** `public/robots.txt`
**URL:** `https://revistafrica.com/robots.txt`

---

### 4️⃣ Meta Tags SEO
- ✅ Title e Description
- ✅ Open Graph (Facebook/LinkedIn)
- ✅ Twitter Card
- ✅ Canonical URL
- ✅ Robots meta tag: `index, follow`

**Arquivo:** `index.html`

---

## 🚀 Próximos Passos (IMPORTANTE!)

### Passo 1: Deploy das Mudanças
```bash
# No diretório REID-main
git add .
git commit -m "feat: migrar para BrowserRouter e URLs limpas para SEO"
git push origin main
```

Aguarde o deploy no Vercel (2-5 minutos).

---

### Passo 2: Verificar URLs no Navegador
Acesse:
- `https://revistafrica.com/` (homepage)
- `https://revistafrica.com/artigo/123` (substitua 123 por um ID real)
- `https://revistafrica.com/submissoes`
- `https://revistafrica.com/conselho-editorial`

**Resultado esperado:** Páginas carregam normalmente (sem #)

---

### Passo 3: Testar Sitemap
Acesse:
- `https://revistafrica.com/api/sitemap.xml`

**Resultado esperado:** XML com lista de artigos
```xml
<url>
  <loc>https://revistafrica.com/artigo/123</loc>
  <priority>0.9</priority>
</url>
```

---

### Passo 4: Testar Robots.txt
Acesse:
- `https://revistafrica.com/robots.txt`

**Resultado esperado:** Arquivo de texto com permissões

---

### Passo 5: Google Search Console
1. Acesse: https://search.google.com/search-console
2. Selecione a propriedade `https://revistafrica.com`
3. Vá para **Sitemaps** (menu esquerdo)
4. Clique em **Adicionar/Testar Sitemap**
5. Cole: `https://revistafrica.com/api/sitemap.xml`
6. Clique em **Enviar**

**Resultado esperado:** "Sitemap enviado com sucesso"

---

### Passo 6: Solicitar Indexação
1. No Google Search Console, vá para **Inspeção de URL**
2. Cole: `https://revistafrica.com/artigo/123` (ID real)
3. Clique em **Solicitar Indexação**
4. Aguarde 24-48 horas

---

### Passo 7: Verificar Indexação
Após 48 horas, pesquise no Google:
```
site:revistafrica.com
```

**Resultado esperado:**
```
revistafrica.com/
revistafrica.com/artigo/123
revistafrica.com/artigo/456
revistafrica.com/submissoes
```

---

## 📊 Monitoramento

### Verificar Indexação Regularmente
```
site:revistafrica.com/artigo/
```

### Monitorar Performance
- Google Search Console → Performance
- Verificar cliques, impressões, CTR

### Adicionar Novos Artigos
Cada novo artigo será automaticamente:
1. Adicionado ao sitemap
2. Indexável pelo Google
3. Visível em `site:revistafrica.com`

---

## ⚠️ Possíveis Problemas

### Problema: URLs ainda mostram #
**Solução:** Limpar cache do navegador (Ctrl+Shift+Del)

### Problema: Sitemap não aparece
**Solução:** Verificar se backend está rodando
```bash
curl https://revistafrica.com/api/sitemap.xml
```

### Problema: Google não indexa
**Solução:** Aguardar 48-72 horas e verificar:
- Robots.txt permite indexação
- Sitemap está correto
- Não há erros no Search Console

---

## 📝 Resumo da Arquitetura

```
Usuário digita: revistafrica.com/artigo/123
                        ↓
                  Vercel (Frontend)
                        ↓
                  BrowserRouter
                        ↓
                  Carrega ArticleDetail.tsx
                        ↓
                  Faz requisição à API
                        ↓
            api-revistafrica.onrender.com
                        ↓
                  MongoDB (dados)
                        ↓
                  Retorna artigo
                        ↓
                  Renderiza na página
```

---

## ✅ Checklist Final

- [ ] Deploy das mudanças no Vercel
- [ ] Verificar URLs sem # no navegador
- [ ] Testar sitemap em `/api/sitemap.xml`
- [ ] Testar robots.txt em `/robots.txt`
- [ ] Enviar sitemap ao Google Search Console
- [ ] Solicitar indexação de um artigo
- [ ] Aguardar 48 horas
- [ ] Pesquisar `site:revistafrica.com` no Google
- [ ] Verificar se artigos aparecem

---

**Status:** ✅ Pronto para produção
**Data:** 2026-03-08
**Próxima revisão:** Após 1 semana de indexação
