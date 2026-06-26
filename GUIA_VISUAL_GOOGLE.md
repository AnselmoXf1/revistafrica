# 👁️ GUIA VISUAL - Google Search Console

## 🎯 O QUE FAZER AGORA (Passo a Passo com Imagens Mentais)

---

## PASSO 1: Abrir Google Search Console

```
1. Abra seu navegador
2. Digite: search.google.com/search-console
3. Faça login com sua conta Google
```

**Você verá**: Tela inicial do Search Console

---

## PASSO 2: Adicionar Propriedade

```
1. Procure botão "Adicionar propriedade" (canto superior esquerdo)
2. Clique nele
3. Você verá 2 opções:
   ┌─────────────────────────────────┐
   │ ○ Domínio                       │
   │ ○ Prefixo de URL  ← ESCOLHA    │
   └─────────────────────────────────┘
4. Escolha: "Prefixo de URL"
5. Digite: https://revistafrica.com
6. Clique "Continuar"
```

---

## PASSO 3: Verificar Propriedade (Método Meta Tag)

```
1. Google mostra uma tela com várias opções
2. Procure: "Tag HTML"
3. Você verá algo assim:
   ┌─────────────────────────────────────────────┐
   │ <meta name="google-site-verification"      │
   │       content="ABC123XYZ..." />             │
   └─────────────────────────────────────────────┘
4. Clique em "COPIAR"
```

**Agora no seu computador**:

```
5. Abra: REID-main/index.html
6. Procure a linha que tem: <head>
7. Cole a meta tag DEPOIS das outras meta tags
8. Salve o arquivo (Ctrl+S)
```

**No terminal**:

```
9. cd REID-main
10. git add index.html
11. git commit -m "Add Google verification"
12. git push origin main
13. Aguarde 2-3 minutos (deploy automático)
```

**Volte no Google Search Console**:

```
14. Clique no botão "VERIFICAR"
15. ✅ Deve aparecer: "Propriedade verificada"
```

---

## PASSO 4: Submeter Sitemap

```
1. No menu lateral esquerdo, procure: "Sitemaps"
2. Clique em "Sitemaps"
3. Você verá um campo: "Adicionar um novo sitemap"
4. Digite: api/sitemap.xml
5. Clique "ENVIAR"
6. ✅ Status deve ficar: "Êxito"
```

**Aguarde 5-10 minutos e atualize a página**

Você verá:
```
┌─────────────────────────────────────────┐
│ Sitemap: api/sitemap.xml                │
│ Status: Êxito ✅                        │
│ URLs descobertas: 15                    │
│ Última leitura: Há 5 minutos            │
└─────────────────────────────────────────┘
```

---

## PASSO 5: Solicitar Indexação (Opcional mas Recomendado)

**Para acelerar a indexação dos artigos principais**:

```
1. No menu lateral, clique: "Inspeção de URL"
2. No topo, você verá um campo de busca
3. Cole a URL de um artigo:
   https://revistafrica.com/#/artigo/[ID]
4. Pressione Enter
5. Aguarde 30-60 segundos
6. Clique no botão: "SOLICITAR INDEXAÇÃO"
7. Aguarde confirmação
8. ✅ Aparece: "Solicitação enviada"
```

**Repita para 3-5 artigos importantes**

---

## 🎓 GOOGLE SCHOLAR - Nada a Fazer!

```
╔═══════════════════════════════════════════╗
║                                           ║
║  Google Scholar indexa AUTOMATICAMENTE    ║
║                                           ║
║  Não há submissão manual                  ║
║  Não há formulário para preencher         ║
║  Não há cadastro necessário               ║
║                                           ║
║  Apenas aguarde 2-6 semanas               ║
║                                           ║
╚═══════════════════════════════════════════╝
```

**Como funciona**:
1. Google indexa seu site (Passos acima)
2. Google Scholar detecta meta tags citation_*
3. Google Scholar valida conteúdo acadêmico
4. Artigos aparecem automaticamente

**Verificar (após 4-6 semanas)**:
```
1. Vá em: scholar.google.com
2. Pesquise: site:revistafrica.com
3. Se aparecer = Indexado! ✅
```

---

## 📊 MONITORAMENTO DIÁRIO (2 minutos)

### No Google Search Console

**Verificar Páginas Indexadas**:
```
1. Clique em "Visão geral" (menu lateral)
2. Veja o gráfico
3. Número deve aumentar com o tempo
```

**Verificar Erros**:
```
1. Clique em "Páginas" (menu lateral)
2. Veja se há erros em vermelho
3. Se houver, clique para ver detalhes
```

### No Google (Busca Normal)

```
1. Abra: google.com
2. Digite: site:revistafrica.com
3. Veja quantas páginas aparecem
4. Número deve aumentar com o tempo
```

---

## ✅ CHECKLIST VISUAL

```
HOJE:
├─ [ ] Abrir Search Console
├─ [ ] Adicionar propriedade
├─ [ ] Copiar meta tag
├─ [ ] Colar no index.html
├─ [ ] Commit e push
├─ [ ] Verificar propriedade ✅
├─ [ ] Submeter sitemap ✅
└─ [ ] Solicitar indexação de 3-5 artigos ✅

ESTA SEMANA:
├─ [ ] Verificar sitemap processado
├─ [ ] Verificar páginas indexadas
└─ [ ] Buscar: site:revistafrica.com

PRÓXIMAS SEMANAS:
├─ [ ] Monitorar crescimento (Semana 1-2)
├─ [ ] Artigos no Google (Semana 1-2)
└─ [ ] Artigos no Scholar (Semana 4-6)
```

---

## 🆘 SE ALGO DER ERRADO

### "Verificação falhou"
```
→ Aguarde 5 minutos e tente novamente
→ Limpe cache do navegador (Ctrl+Shift+Del)
→ Verifique se meta tag está no <head>
→ Verifique se fez push para GitHub
```

### "Sitemap não aparece"
```
→ Verifique se digitou: api/sitemap.xml
→ Teste: revistafrica.com/api/sitemap.xml
→ Aguarde 1-2 horas
```

### "Artigos não indexam"
```
→ Aguarde 1-2 semanas (é normal)
→ Verifique erros no Search Console
→ Solicite indexação manual novamente
```

---

## 📈 O QUE ESPERAR

```
┌─────────────────────────────────────────┐
│ HOJE                                    │
│ → Sitemap submetido ✅                  │
│ → Indexação solicitada ✅               │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│ DIA 1-3                                 │
│ → Google processa sitemap               │
│ → Primeiras páginas indexadas           │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│ SEMANA 1-2                              │
│ → Artigos aparecem no Google            │
│ → Tráfego orgânico começa               │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│ SEMANA 4-6                              │
│ → Artigos no Google Scholar             │
│ → Indexação completa ✅                 │
└─────────────────────────────────────────┘
```

---

## 🎯 RESUMO SUPER SIMPLES

```
1. Abra: search.google.com/search-console
2. Adicione: revistafrica.com
3. Copie meta tag
4. Cole no index.html
5. Commit e push
6. Verifique
7. Submeta sitemap: api/sitemap.xml
8. Pronto! ✅
```

**Tempo**: ~15 minutos  
**Depois**: Aguardar e monitorar

---

**Data**: 2026-03-07  
**Status**: URLs funcionando ✅  
**Próximo**: Seguir este guia passo a passo
