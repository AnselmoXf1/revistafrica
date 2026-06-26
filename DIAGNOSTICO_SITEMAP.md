# 🔍 Diagnóstico do Sitemap

## Problema Identificado

No Google Search Console, há 2 sitemaps com erros:

1. `https://revistafrica.com/api/sitemap.xml` - **1 erro**
2. `https://www.revistafrica.com/sitemap.xml` - **5 erros**

---

## Causa Provável

### Erro 1: `/api/sitemap.xml`
Possíveis causas:
- Backend não está respondendo
- Nenhum artigo no banco de dados
- Erro na geração do XML

### Erro 2: `/sitemap.xml` (www)
Possíveis causas:
- Arquivo estático não existe
- Redirecionamento incorreto

---

## Solução

### Passo 1: Verificar se Backend está Rodando

Acesse: `https://api-revistafrica.onrender.com/api/sitemap.xml`

**Se funcionar:** Backend está OK
**Se não funcionar:** Backend está offline

### Passo 2: Verificar Artigos no Banco de Dados

1. Acesse o admin: `https://revistafrica.com/admin`
2. Verifique se há artigos cadastrados
3. Se não houver, faça upload de um artigo

### Passo 3: Remover Sitemap Incorreto

No Google Search Console:
1. Vá para **Sitemaps**
2. Clique nos 3 pontos do sitemap com erro
3. Clique em **Remover**

### Passo 4: Adicionar Sitemap Correto

1. Clique em **Adicionar Sitemap**
2. Cole: `https://revistafrica.com/api/sitemap.xml`
3. Clique em **Enviar**

---

## Checklist de Verificação

- [ ] Backend está rodando?
- [ ] Há artigos no banco de dados?
- [ ] Sitemap gera XML correto?
- [ ] Robots.txt está correto?
- [ ] Vercel está com deploy verde?

---

## Próximos Passos

1. Verificar backend
2. Adicionar artigos se necessário
3. Remover sitemaps com erro
4. Adicionar sitemap correto
5. Aguardar 48 horas
6. Verificar `site:revistafrica.com`

---

**Status:** Aguardando verificação
