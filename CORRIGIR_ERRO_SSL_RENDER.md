# 🔧 Corrigir Erro SSL - Render API

## 🎯 Problema

```
ERR_SSL_VERSION_OR_CIPHER_MISMATCH
api.revistafrica.onrender.com uses an unsupported protocol
```

Backend no Render tem erro SSL/TLS.

---

## ✅ Solução Implementada

Melhorei o `api/sitemap.js` para:
1. ✅ Tentar HTTPS primeiro
2. ✅ Se falhar, tentar HTTP
3. ✅ Se ambas falharem, retornar sitemap com páginas estáticas
4. ✅ Sempre retorna XML válido

---

## 🚀 Deploy Corrigido

```bash
cd REID-main
git add .
git commit -m "fix: corrigir erro SSL ao buscar artigos da API"
git push origin main
```

Aguarde ✅ verde no Vercel.

---

## 🔍 Verificar Sitemap

Após deploy, acesse:
```
https://revistafrica.com/sitemap.xml
```

**Resultado esperado:**
- Se backend funciona: Mostra artigos
- Se backend falha: Mostra apenas páginas estáticas

---

## 🐛 Solução Permanente para Render

### Opção 1: Verificar Certificado SSL no Render

1. Acesse: https://dashboard.render.com
2. Selecione: `api-revistafrica`
3. Vá para: **Settings**
4. Procure por: **SSL/TLS**
5. Verifique se está ativado

### Opção 2: Reiniciar Backend

1. Acesse: https://dashboard.render.com
2. Selecione: `api-revistafrica`
3. Clique em: **Manual Deploy**
4. Aguarde terminar

### Opção 3: Usar Domínio Customizado

Se tiver domínio customizado:
1. Configurar SSL no Render
2. Usar domínio customizado em vez de onrender.com

---

## 📊 Fluxo Atual

```
Sitemap Request
    ↓
Tenta HTTPS
    ↓
Se falhar, tenta HTTP
    ↓
Se ambas falharem, retorna páginas estáticas
    ↓
Sempre retorna XML válido
```

---

## ✅ Checklist

- [ ] Fazer deploy
- [ ] Verificar sitemap
- [ ] Se artigos não aparecem, reiniciar backend
- [ ] Enviar sitemap ao Google

---

## 🎯 Próximos Passos

1. **Agora:** Fazer deploy
2. **Depois:** Verificar sitemap
3. **Depois:** Se não funcionar, reiniciar backend
4. **Depois:** Enviar ao Google

---

**Pronto?** Comece o deploy!

🚀
