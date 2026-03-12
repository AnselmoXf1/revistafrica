# Como Adicionar Mais Artigos/Livros

## Estrutura Simples para Adicionar Novos Artigos

### 1. Editar o arquivo `pages/ArtigoIndividual.tsx`

Localize o array `ARTIGOS_DADOS` e adicione um novo objeto:

```typescript
{
  id: 'nome-unico-do-artigo',
  title: 'Título do Livro/Artigo',
  author: 'Nome do Autor',
  year: 2023,
  description: 'Descrição curta (aparece na listagem)',
  category: 'Categoria',
  pdfUrl: '#', // Substituir pelo link real do Cloudinary
  longDescription: 'Descrição longa e detalhada do conteúdo'
}
```

### 2. Adicionar ao Sitemap

No arquivo `server/routes/sitemap.js`, adicione o ID do artigo ao array `artigos`:

```javascript
const artigos = [
  // ... artigos existentes
  'nome-unico-do-artigo', // ← Adicionar aqui
];
```

### 3. Exemplo Completo

```typescript
// Exemplo de novo artigo
{
  id: 'introducao-a-astronomia',
  title: 'Introdução à Astronomia',
  author: 'Carl Sagan',
  year: 1980,
  description: 'Guia introdutório sobre astronomia para iniciantes.',
  category: 'Astronomia',
  pdfUrl: 'https://res.cloudinary.com/seu-cloudinary/image/upload/v1/astronomia.pdf',
  longDescription: 'Este livro oferece uma introdução abrangente à astronomia, cobrindo desde o sistema solar até galáxias distantes. Ideal para estudantes e entusiastas que desejam compreender os fundamentos da ciência astronômica.'
}
```

## Passo a Passo

### Passo 1: Escolher um ID Único
- Use apenas letras minúsculas, números e hífens
- Ex: `historia-da-africa-moderna`
- Não use espaços ou caracteres especiais

### Passo 2: Preparar o Conteúdo
1. **Título:** Claro e descritivo
2. **Autor:** Nome completo ou organização
3. **Ano:** Ano de publicação
4. **Descrição curta:** 1-2 frases (aparece na listagem)
5. **Descrição longa:** 3-5 parágrafos (página do artigo)
6. **Categoria:** Escolha uma existente ou crie nova
7. **PDF:** Link do Cloudinary

### Passo 3: Categorias Disponíveis
- Física
- Química
- História
- Psicologia
- Desenvolvimento Pessoal
- Filosofia
- Estratégia
- Biologia
- Agricultura
- Agrofloresta
- Avicultura
- Suinocultura

### Passo 4: Upload do PDF no Cloudinary
1. Acesse o Cloudinary
2. Faça upload do PDF
3. Copie a URL pública
4. Cole no campo `pdfUrl`

### Passo 5: Testar
1. Acesse `/artigos` para ver o novo artigo na listagem
2. Clique no artigo para ver a página individual
3. Verifique os meta tags no código fonte
4. Teste o download do PDF

## Boas Práticas

### Para SEO:
- Use palavras-chave no título e descrição
- Mantenha descrições entre 150-300 caracteres
- Use categorias relevantes
- Adicione imagens de capa quando possível

### Para Usuários:
- Descrições claras e informativas
- Informações completas do autor
- Ano de publicação correto
- Link de PDF funcional

### Para Manutenção:
- Mantenha IDs consistentes
- Documente novas categorias
- Atualize o sitemap sempre que adicionar
- Teste em dispositivos móveis

## Script Automático (Opcional)

Para adicionar muitos artigos de uma vez, você pode criar um script:

```javascript
// scripts/add-articles.js
const newArticles = [
  {
    id: 'artigo-1',
    title: '...',
    // ... outros campos
  },
  {
    id: 'artigo-2',
    title: '...',
    // ... outros campos
  }
];

// Adicionar ao array existente
const allArticles = [...existingArticles, ...newArticles];
```

## Solução de Problemas

### Artigo não aparece na listagem:
- Verifique se o ID foi adicionado ao array `ARTIGOS_DADOS`
- Confirme que a categoria existe
- Verifique erros no console do navegador

### Página 404 ao acessar o artigo:
- Confirme que o ID está correto na URL
- Verifique se o artigo existe no array
- Recarregue a página com cache limpo

### Meta tags não aparecem:
- Verifique o componente `Helmet` na página
- Confirme que as props estão corretas
- Verifique o console por erros

## Dicas Avançadas

### 1. Imagens de Capa
Adicione um campo `coverUrl` para cada artigo:

```typescript
{
  // ... outros campos
  coverUrl: 'https://res.cloudinary.com/.../capa.jpg',
}
```

### 2. ISBN para Livros
Adicione metadados específicos para livros:

```typescript
{
  // ... outros campos
  isbn: '978-85-12345-67-8',
  pages: 320,
  publisher: 'Editora Exemplo',
}
```

### 3. Sistema de Tags
Adicione tags para busca avançada:

```typescript
{
  // ... outros campos
  tags: ['astronomia', 'ciência', 'educação', 'sagan'],
}
```

## Suporte
Para dúvidas ou problemas, consulte a documentação completa ou entre em contato com a equipe de desenvolvimento.