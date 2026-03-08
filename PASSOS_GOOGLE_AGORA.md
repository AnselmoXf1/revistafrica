# 🔍 PASSOS NO GOOGLE - FAÇA AGORA

## ✅ URLs Funcionando - Próximo Passo: Google

---

## 📋 GOOGLE SEARCH CONSOLE (Faça Agora - 15 minutos)

### PASSO 1: Acessar o Console

1. **Abra**: https://search.google.com/search-console
2. **Faça login** com sua conta Google (a que você usa para o site)

---

### PASSO 2: Adicionar Propriedade

**Opção A: Prefixo de URL (Mais Rápido - RECOMENDADO)**

1. Clique no botão **"Adicionar propriedade"** (canto superior esquerdo)
2. Escolha: **"Prefixo de URL"**
3. Digite: `https://revistafrica.com`
4. Clique em **"Continuar"**

**Opção B: Domínio (Mais Completo)**

1. Clique no botão **"Adicionar propriedade"**
2. Escolha: **"Domínio"**
3. Digite: `revistafrica.com` (sem https://)
4. Clique em **"Continuar"**

---

### PASSO 3: Verificar Propriedade

#### Método 1: Tag HTML (Mais Rápido - 5 minutos)

1. Google vai mostrar uma **meta tag** como esta:
   ```html
   <meta name="google-site-verification" content="ABC123..." />
   ```

2. **Copie** essa meta tag completa

3. **Abra o arquivo**: `REID-main/index.html`

4. **Cole a meta tag** dentro do `<head>`, depois das outras meta tags

5. **Salve o arquivo**

6. **Faça commit e push**:
   ```bash
   cd REID-main
   git add index.html
   git commit -m "Add Google Search Console verification"
   git push origin main
   ```

7. **Aguarde 2-3 minutos** (deploy automático)

8. **Volte no Google Search Console** e clique em **"Verificar"**

9. ✅ Deve aparecer: **"Propriedade verificada"**

#### Método 2: DNS (Se preferir)

1. Google vai mostrar um **registro TXT**
2. Copie o código
3. Vá no seu provedor de DNS (GoDaddy, Namecheap, etc)
4. Adicione registro TXT:
   - Tipo: `TXT`
   - Nome: `@`
   - Valor: [código copiado]
   - TTL: `3600`
5. Aguarde 10-30 minutos
6. Volte no Search Console e clique "Verificar"

---

### PASSO 4: Submeter Sitemap (IMPORTANTE!)

**Após verificação aprovada**:

1. No menu lateral esquerdo, clique em **"Sitemaps"**

2. Você verá um campo: **"Adicionar um novo sitemap"**

3. Digite: `api/sitemap.xml`

4. Clique em **"Enviar"**

5. ✅ Status deve ficar: **"Êxito"** ou **"Sucesso"**

6. Aguarde alguns minutos e atualize a página

7. Você verá:
   - **URLs descobertas**: Número de URLs no sitemap
   - **Última leitura**: Data/hora

---

### PASSO 5: Solicitar Indexação de Artigos (Acelera o processo)

**Para os 3-5 artigos mais importantes**:

1. No menu lateral, clique em **"Inspeção de URL"**

2. Cole a URL de um artigo:
   ```
   https://revistafrica.com/#/artigo/[ID_DO_ARTIGO]
   ```

3. Clique em **"Testar URL ativa"**

4. Aguarde o teste terminar (30-60 segundos)

5. Clique em **"Solicitar indexação"**

6. Aguarde confirmação: **"Solicitação de indexação enviada"**

7. **Repita** para mais 2-4 artigos importantes

**Dica**: Escolha os artigos mais recentes ou mais importantes da revista.

---

### PASSO 6: Adicionar Domínio Alternativo (Opcional)

Se quiser monitorar também o domínio Vercel:

1. Repita os **Passos 2-4** para: `https://revistafrica.vercel.app`

2. No Search Console de `revistafrica.com`:
   - Vá em **"Configurações"** → **"Configurações do site"**
   - Em **"Domínio preferido"**, escolha: `revistafrica.com`

---

## 🎓 GOOGLE SCHOLAR (Automático - Nada a Fazer!)

### ⚠️ IMPORTANTE: Google Scholar NÃO tem submissão manual

O Google Scholar indexa **automaticamente** quando:

1. ✅ Seu site está indexado no Google (Passo acima)
2. ✅ Detecta meta tags `citation_*` (já implementado)
3. ✅ Valida que é conteúdo acadêmico (já está)
4. ✅ PDF está acessível (já está)

### Quanto Tempo Leva?

```
┌─────────────────────────────────────────┐
│ SEMANA 1-2                              │
│ → Google indexa seu site                │
│ → Artigos aparecem no Google            │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│ SEMANA 2-4                              │
│ → Google Scholar detecta meta tags      │
│ → Começa a processar artigos            │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│ SEMANA 4-6                              │
│ → Artigos aparecem no Google Scholar    │
│ → Citações rastreáveis                  │
└─────────────────────────────────────────┘
```

### Como Verificar (Após 2-4 semanas)

**No Google Scholar**:

1. Acesse: https://scholar.google.com

2. Pesquise:
   ```
   site:revistafrica.com
   ```

3. Ou pesquise pelo título exato de um artigo:
   ```
   "Título Exato do Artigo"
   ```

4. Se aparecer = ✅ Indexado!

---

## 📊 MONITORAMENTO (Diário - 2 minutos)

### No Google Search Console

**Verificar Páginas Indexadas**:

1. Vá em **"Visão geral"**
2. Veja o gráfico de **"Páginas indexadas"**
3. Número deve aumentar gradualmente

**Verificar Erros**:

1. Vá em **"Páginas"** ou **"Cobertura"**
2. Veja se há erros
3. Se houver, clique para ver detalhes

**Verificar Sitemap**:

1. Vá em **"Sitemaps"**
2. Veja status: **"Êxito"**
3. Veja quantas URLs foram descobertas

### No Google (Busca Normal)

Digite no Google:
```
site:revistafrica.com
```

✅ Deve mostrar páginas indexadas (aumenta com o tempo)

---

## ✅ CHECKLIST COMPLETO

### Hoje (Obrigatório)
- [ ] Acessar Google Search Console
- [ ] Adicionar propriedade: revistafrica.com
- [ ] Verificar propriedade (meta tag ou DNS)
- [ ] Submeter sitemap: api/sitemap.xml
- [ ] Solicitar indexação de 3-5 artigos

### Esta Semana
- [ ] Verificar sitemap processado
- [ ] Verificar se há erros
- [ ] Buscar: site:revistafrica.com no Google
- [ ] Monitorar páginas indexadas

### Próximas Semanas
- [ ] Verificar crescimento de páginas indexadas (Semana 1-2)
- [ ] Buscar artigos no Google (Semana 1-2)
- [ ] Verificar Google Scholar (Semana 4-6)
- [ ] Pesquisar: site:revistafrica.com no Scholar

---

## 🆘 PROBLEMAS COMUNS

### Verificação falha
**Solução**:
- Se usou meta tag: aguarde deploy (2-3 min) e tente novamente
- Se usou DNS: aguarde até 48h
- Limpe cache do navegador (Ctrl+Shift+Del)
- Tente método alternativo

### Sitemap não aparece
**Solução**:
- Verifique se digitou: `api/sitemap.xml` (sem barra no início)
- Teste manualmente: https://revistafrica.com/api/sitemap.xml
- Aguarde 1-2 horas e verifique novamente

### Artigos não indexam
**Solução**:
- Aguarde tempo suficiente (1-2 semanas)
- Verifique erros no Search Console
- Solicite indexação manual novamente
- Verifique se robots.txt não está bloqueando

### Google Scholar não indexa
**Solução**:
- Aguarde mais tempo (pode levar 4-6 semanas)
- Verifique se artigos estão no Google primeiro
- Verifique meta tags na página (Ctrl+U)
- Certifique-se que PDFs estão acessíveis

---

## 📈 RESULTADOS ESPERADOS

### Semana 1
- ✅ Sitemap processado
- ✅ Primeiras páginas indexadas
- ✅ Aparecem em: site:revistafrica.com

### Semana 2
- ✅ Maioria dos artigos indexados
- ✅ Aparecem em buscas por título
- ✅ Tráfego orgânico começa

### Semana 4-6
- ✅ Artigos no Google Scholar
- ✅ Citações rastreáveis
- ✅ Visibilidade acadêmica completa

---

## 🎯 RESUMO DOS PASSOS

```
1. ✅ URLs funcionando (FEITO)
2. ⏳ Google Search Console (FAZER AGORA)
   ├─ Adicionar propriedade
   ├─ Verificar
   ├─ Submeter sitemap
   └─ Solicitar indexação
3. ⏳ Monitorar diariamente (2 min/dia)
4. ⏳ Aguardar Google Scholar (2-6 semanas)
```

**Tempo total hoje**: ~20 minutos  
**Depois**: 2 minutos por dia para monitorar

---

## 🎉 PRÓXIMO PASSO

**AGORA**: Siga o **PASSO 1** deste guia

**Comece por**: https://search.google.com/search-console

---

**Data**: 2026-03-07  
**Status**: URLs funcionando ✅  
**Próximo**: Configurar Google Search Console
