# 🐛 Troubleshooting SEO - Guia Completo

## 🎯 Problemas Comuns e Soluções

---

## ❌ Problema 1: URLs ainda mostram #

### Sintomas
- Acesso `https://revistafrica.com/artigo/123`
- Mas a URL muda para `https://revistafrica.com/#/artigo/123`

### Causas Possíveis
1. Cache do navegador
2. Deploy não terminou
3. App.tsx ainda usa HashRouter

### Soluções

#### Solução 1: Limpar Cache
**Windows:**
```
Ctrl + Shift + Del
```

**Mac:**
```
Cmd + Shift + Del
```

Depois:
1. Selecione "Cookies e outros dados de sites"
2. Clique em "Limpar dados"
3. Recarregue a página

#### Solução 2: Usar Modo Incógnito
1. Abra uma janela incógnita
2. Acesse `https://revistafrica.com/artigo/123`
3. Se funcionar, é cache

#### Solução 3: Verificar Deploy
1. Acesse https://vercel.com/dashboard
2. Verifique se o deploy está verde ✅
3. Se não, aguarde terminar

#### Solução 4: Verificar App.tsx
1. Abra `App.tsx`
2. Verifique se tem `BrowserRouter` (não `HashRouter`)
3. Se não, fazer commit e push novamente

---

## ❌ Problema 2: Sitemap não aparece

### Sintomas
- Acesso `https://revistafrica.com/api/sitemap.xml`
- Erro 404 ou página em branco

### Causas Possíveis
1. Backend não está rodando
2. Rota não está configurada
3. Erro no servidor

### Soluções

#### Solução 1: Verificar Backend
```bash
# Testar sitemap
curl https://revistafrica.com/api/sitemap.xml

# Se retornar XML, está funcionando
# Se retornar erro, backend está down
```

#### Solução 2: Verificar Logs no Render
1. Acesse https://dashboard.render.com
2. Selecione o serviço `api-revistafrica`
3. Vá para **Logs**
4. Procure por erros

#### Solução 3: Reiniciar Backend
1. Acesse https://dashboard.render.com
2. Selecione o serviço `api-revistafrica`
3. Clique em **Manual Deploy**
4. Aguarde terminar

#### Solução 4: Verificar Rota
1. Abra `server/routes/sitemap.js`
2. Verifique se tem `router.get('/sitemap.xml', ...)`
3. Verifique se está exportado: `export default router`
4. Verifique se está importado em `server.js`: `import sitemapRoutes from './routes/sitemap.js'`
5. Verifique se está registrado: `app.use('/api', sitemapRoutes)`

---

## ❌ Problema 3: Artigos não aparecem no sitemap

### Sintomas
- Sitemap aparece, mas sem artigos
- Apenas páginas estáticas

### Causas Possíveis
1. Nenhum artigo no banco de dados
2. Erro ao buscar artigos
3. Banco de dados desconectado

### Soluções

#### Solução 1: Fazer Upload de um Artigo
1. Acesse `https://revistafrica.com/admin`
2. Faça login
3. Clique em **Upload Magazine**
4. Preencha os dados
5. Clique em **Upload**

#### Solução 2: Aguardar Cache
1. Sitemap tem cache de 1 hora
2. Aguarde 1 hora
3. Acesse novamente: `https://revistafrica.com/api/sitemap.xml`

#### Solução 3: Verificar Banco de Dados
1. Acesse https://cloud.mongodb.com
2. Selecione o cluster
3. Vá para **Collections**
4. Verifique se tem artigos em `magazines`

#### Solução 4: Verificar Logs
1. Acesse https://dashboard.render.com
2. Verifique logs do backend
3. Procure por erros de conexão com MongoDB

---

## ❌ Problema 4: Google não indexa após 48 horas

### Sintomas
- Sitemap enviado ao Google
- Indexação solicitada
- Mas artigos não aparecem em `site:revistafrica.com`

### Causas Possíveis
1. Robots.txt bloqueia indexação
2. Meta tags incorretas
3. Erro no Google Search Console
4. Página não está acessível

### Soluções

#### Solução 1: Verificar Robots.txt
```bash
curl https://revistafrica.com/robots.txt
```

Deve conter:
```
User-agent: *
Allow: /
Allow: /artigo/
Disallow: /admin
Disallow: /login
Sitemap: https://revistafrica.com/api/sitemap.xml
```

Se tiver `Disallow: /`, Google não indexa nada.

#### Solução 2: Verificar Meta Tags
1. Acesse `https://revistafrica.com/artigo/123`
2. Clique com botão direito → **Inspecionar**
3. Procure por `<meta name="robots">`
4. Deve conter: `index, follow`

#### Solução 3: Verificar Google Search Console
1. Acesse https://search.google.com/search-console
2. Vá para **Cobertura**
3. Procure por erros
4. Se houver, clique para ver detalhes

#### Solução 4: Verificar Acessibilidade
1. Acesse `https://revistafrica.com/artigo/123`
2. Página deve carregar normalmente
3. Se não carregar, há problema

#### Solução 5: Aguardar Mais Tempo
- Google leva 24-72 horas
- Às vezes leva até 2 semanas
- Paciência é necessária

---

## ❌ Problema 5: Erro ao solicitar indexação

### Sintomas
- Google Search Console mostra erro
- Não consegue solicitar indexação

### Causas Possíveis
1. URL incorreta
2. Página não existe
3. Página não está acessível
4. Erro no Google

### Soluções

#### Solução 1: Verificar URL
1. Copie a URL do Google Search Console
2. Acesse no navegador
3. Se não carregar, URL está errada

#### Solução 2: Verificar Página
1. Acesse `https://revistafrica.com/artigo/123`
2. Verifique se carrega
3. Se não, artigo não existe

#### Solução 3: Aguardar e Tentar Novamente
1. Aguarde 24 horas
2. Tente solicitar indexação novamente
3. Às vezes é erro temporário do Google

---

## ❌ Problema 6: Artigos aparecem mas com título genérico

### Sintomas
- Artigos aparecem em `site:revistafrica.com`
- Mas título é genérico (não é o título do artigo)

### Causas Possíveis
1. Meta tags não estão dinâmicas
2. Helmet não está funcionando
3. Google ainda não atualizou cache

### Soluções

#### Solução 1: Verificar Meta Tags
1. Acesse `https://revistafrica.com/artigo/123`
2. Clique com botão direito → **Inspecionar**
3. Procure por `<title>`
4. Deve conter o título do artigo

#### Solução 2: Verificar Helmet
1. Abra `pages/ArticleDetail.tsx`
2. Verifique se tem `<Helmet>`
3. Verifique se tem `<title>{article.title}</title>`

#### Solução 3: Aguardar Google Atualizar
1. Google leva tempo para atualizar cache
2. Aguarde 1-2 semanas
3. Depois pesquise novamente

---

## ❌ Problema 7: Erro 404 ao acessar artigo

### Sintomas
- Acesso `https://revistafrica.com/artigo/123`
- Erro 404 - Página não encontrada

### Causas Possíveis
1. Vercel não está com fallback configurado
2. Artigo não existe
3. ID está errado

### Soluções

#### Solução 1: Verificar Vercel.json
1. Abra `vercel.json`
2. Verifique se tem:
```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

#### Solução 2: Verificar Artigo
1. Acesse `https://revistafrica.com/admin`
2. Verifique se artigo existe
3. Copie o ID correto
4. Acesse `https://revistafrica.com/artigo/{ID}`

#### Solução 3: Fazer Deploy Novamente
1. Se vercel.json está correto
2. Fazer commit e push
3. Aguardar deploy terminar

---

## ❌ Problema 8: Sitemap muito grande

### Sintomas
- Sitemap tem muitos artigos
- Google avisa que sitemap é muito grande

### Causas Possíveis
- Mais de 50.000 URLs no sitemap

### Soluções

#### Solução 1: Dividir Sitemap
Se tiver mais de 50.000 URLs, criar múltiplos sitemaps:
- `sitemap1.xml` (URLs 1-50.000)
- `sitemap2.xml` (URLs 50.001-100.000)
- `sitemap_index.xml` (lista dos sitemaps)

#### Solução 2: Implementar Paginação
```javascript
router.get('/sitemap.xml', async (req, res) => {
  const page = req.query.page || 1;
  const limit = 50000;
  const skip = (page - 1) * limit;
  
  const magazines = await Magazine.find()
    .skip(skip)
    .limit(limit);
  
  // ... gerar sitemap
});
```

---

## 🔍 Checklist de Troubleshooting

- [ ] Limpar cache do navegador
- [ ] Verificar se deploy está verde
- [ ] Testar URLs no navegador
- [ ] Verificar sitemap: `/api/sitemap.xml`
- [ ] Verificar robots.txt: `/robots.txt`
- [ ] Verificar meta tags: Inspecionar página
- [ ] Verificar Google Search Console
- [ ] Verificar logs do backend
- [ ] Verificar banco de dados
- [ ] Aguardar 48-72 horas

---

## 📞 Suporte

Se nenhuma solução funcionar:

1. Verificar logs do Vercel
2. Verificar logs do Render
3. Verificar Google Search Console
4. Aguardar mais tempo
5. Tentar novamente

---

**Problema resolvido?** 🎉

Se não, consulte a documentação completa em `DEPLOY_SEO.md`
