# 🚀 Deploy SEO - Instruções Passo a Passo

## 📋 Resumo das Mudanças

Foram feitas as seguintes alterações para melhorar o SEO:

1. **App.tsx**: Migrado de `HashRouter` para `BrowserRouter`
   - URLs agora são limpas: `/artigo/123` em vez de `/#/artigo/123`
   - Melhor indexação pelo Google

2. **server/routes/sitemap.js**: Atualizado para URLs limpas
   - Sitemap agora lista: `https://revistafrica.com/artigo/123`
   - Antes: `https://revistafrica.com/#/artigo/123`

3. **public/robots.txt**: Já estava correto
   - Permite indexação de todas as páginas públicas

4. **vercel.json**: Já estava configurado
   - Fallback para `index.html` para BrowserRouter

---

## 🔧 Passo 1: Fazer Deploy

### No seu computador:

```bash
# Entrar no diretório do projeto
cd REID-main

# Verificar status do git
git status

# Adicionar todas as mudanças
git add .

# Fazer commit
git commit -m "feat: migrar para BrowserRouter e URLs limpas para SEO"

# Fazer push
git push origin main
```

### Verificar Deploy no Vercel:
1. Acesse: https://vercel.com/dashboard
2. Selecione o projeto `REID-main`
3. Aguarde o deploy terminar (status verde)
4. Tempo estimado: 2-5 minutos

---

## ✅ Passo 2: Testar Localmente (Opcional)

Se quiser testar antes de fazer deploy:

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev
```

Acesse: `http://localhost:3000/artigo/123` (substitua 123 por um ID real)

---

## 🌐 Passo 3: Verificar URLs em Produção

Após o deploy estar verde no Vercel, acesse:

### URLs para testar:
- `https://revistafrica.com/` ✅ Homepage
- `https://revistafrica.com/artigo/123` ✅ Artigo (substitua 123)
- `https://revistafrica.com/submissoes` ✅ Submissões
- `https://revistafrica.com/conselho-editorial` ✅ Conselho Editorial
- `https://revistafrica.com/dados-revista` ✅ Dados da Revista
- `https://revistafrica.com/contacto` ✅ Contato

**Resultado esperado:** Todas as páginas carregam normalmente (sem #)

---

## 📄 Passo 4: Verificar Sitemap

Acesse: `https://revistafrica.com/api/sitemap.xml`

**Resultado esperado:**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://revistafrica.com/</loc>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://revistafrica.com/artigo/123</loc>
    <priority>0.9</priority>
  </url>
  ...
</urlset>
```

---

## 🤖 Passo 5: Verificar Robots.txt

Acesse: `https://revistafrica.com/robots.txt`

**Resultado esperado:**
```
User-agent: *
Allow: /
Allow: /artigo/
Allow: /submissoes
...
Sitemap: https://revistafrica.com/api/sitemap.xml
```

---

## 🔍 Passo 6: Google Search Console

### 6.1 Enviar Sitemap

1. Acesse: https://search.google.com/search-console
2. Selecione a propriedade `https://revistafrica.com`
3. Menu esquerdo → **Sitemaps**
4. Clique em **Adicionar/Testar Sitemap**
5. Cole: `https://revistafrica.com/api/sitemap.xml`
6. Clique em **Enviar**

**Resultado esperado:** "Sitemap enviado com sucesso"

### 6.2 Solicitar Indexação de um Artigo

1. Menu esquerdo → **Inspeção de URL**
2. Cole: `https://revistafrica.com/artigo/123` (ID real)
3. Clique em **Solicitar Indexação**
4. Aguarde 24-48 horas

---

## 📊 Passo 7: Verificar Indexação (Após 48 horas)

### No Google:
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

### Verificar artigos específicos:
```
site:revistafrica.com/artigo/
```

---

## 🐛 Troubleshooting

### Problema 1: URLs ainda mostram #
**Causa:** Cache do navegador
**Solução:** 
- Limpar cache: `Ctrl+Shift+Del` (Windows) ou `Cmd+Shift+Del` (Mac)
- Ou usar modo incógnito

### Problema 2: Sitemap não aparece
**Causa:** Backend não está rodando
**Solução:**
```bash
# Verificar se backend está rodando
curl https://revistafrica.com/api/sitemap.xml

# Se não funcionar, verificar logs no Render
# https://dashboard.render.com
```

### Problema 3: Google não indexa após 48 horas
**Causa:** Possíveis problemas de configuração
**Solução:**
1. Verificar robots.txt: `https://revistafrica.com/robots.txt`
2. Verificar sitemap: `https://revistafrica.com/api/sitemap.xml`
3. Verificar erros no Google Search Console
4. Aguardar mais 48 horas

### Problema 4: Artigos não aparecem no sitemap
**Causa:** Nenhum artigo no banco de dados
**Solução:**
1. Fazer upload de um artigo via admin
2. Aguardar 1 hora (cache do sitemap)
3. Verificar novamente: `https://revistafrica.com/api/sitemap.xml`

---

## 📈 Monitoramento Contínuo

### Verificar Indexação Regularmente
```
site:revistafrica.com/artigo/
```

### Monitorar Performance
- Google Search Console → **Performance**
- Verificar: Cliques, Impressões, CTR, Posição média

### Adicionar Novos Artigos
Cada novo artigo será automaticamente:
1. ✅ Adicionado ao sitemap
2. ✅ Indexável pelo Google
3. ✅ Visível em `site:revistafrica.com`

---

## 📝 Checklist de Deploy

- [ ] Fazer commit e push das mudanças
- [ ] Verificar deploy verde no Vercel
- [ ] Testar URLs sem # no navegador
- [ ] Verificar sitemap em `/api/sitemap.xml`
- [ ] Verificar robots.txt em `/robots.txt`
- [ ] Enviar sitemap ao Google Search Console
- [ ] Solicitar indexação de um artigo
- [ ] Aguardar 48 horas
- [ ] Pesquisar `site:revistafrica.com` no Google
- [ ] Verificar se artigos aparecem

---

## 🎯 Resultado Final

Após completar todos os passos, você terá:

✅ URLs limpas e SEO-friendly
✅ Sitemap dinâmico atualizado
✅ Robots.txt configurado
✅ Meta tags por artigo
✅ Artigos indexados no Google
✅ Artigos visíveis em buscas

---

**Status:** Pronto para deploy
**Data:** 2026-03-08
**Próxima revisão:** Após 1 semana de indexação
