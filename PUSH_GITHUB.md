# 📤 Como Fazer Push para o GitHub

## Passo a Passo

### 1. Abrir Terminal no Diretório Correto
Abra o terminal (CMD ou PowerShell) e navegue até a pasta REID-main:

```bash
cd "C:\Users\Anselmo D.Bistiro\Desktop\Reid\REID-main"
```

### 2. Inicializar Git (se necessário)
```bash
git init
```

### 3. Adicionar Todos os Arquivos
```bash
```

### 4. Fazer o Primeiro Commit
```bash
git commit -m "Initial commit: Sistema completo de gestão de revistas com recuperação de senha"
```

### 5. Adicionar o Repositório Remoto
```bash
git remote add origin https://github.com/AnselmoXf1/revistafrica.git
```

### 6. Verificar Branch
```bash
git branch -M main
```

### 7. Fazer Push
```bash
git push -u origin main
```

Se pedir credenciais:
- Username: AnselmoXf1
- Password: Use um Personal Access Token (não a senha do GitHub)

---

## 🔑 Como Criar Personal Access Token

1. Acesse: https://github.com/settings/tokens
2. Clique em "Generate new token" → "Generate new token (classic)"
3. Dê um nome: "Revista Africa Deploy"
4. Selecione os escopos:
   - ✅ repo (todos)
   - ✅ workflow
5. Clique em "Generate token"
6. Copie o token (você não verá novamente!)
7. Use esse token como senha no git push

---

## 📋 Comandos Completos (Copiar e Colar)

```bash
cd "C:\Users\Anselmo D.Bistiro\Desktop\Reid\REID-main"
git init
git add .
git commit -m "Initial commit: Sistema completo com recuperação de senha"
git remote add origin https://github.com/AnselmoXf1/revistafrica.git
git branch -M main
git push -u origin main
```

---

## ⚠️ Se Já Existe Repositório

Se o repositório já tem conteúdo, use:

```bash
git pull origin main --allow-unrelated-histories
git push -u origin main
```

---

## 🔄 Atualizações Futuras

Depois do primeiro push, para atualizar:

```bash
git add .
git commit -m "Descrição da mudança"
git push
```

---

## ✅ Verificar se Funcionou

Acesse: https://github.com/AnselmoXf1/revistafrica

Você deve ver todos os arquivos lá!

---

## 🚀 Próximos Passos Após Push

1. ✅ Código no GitHub
2. 🔵 Deploy Frontend na Vercel
3. 🔴 Deploy Backend no Render

Siga o guia: DEPLOY_RAPIDO.md
