# 🚀 Como Iniciar o Sistema

## ⚡ Início Rápido

### 1️⃣ Instalar Dependências do Backend
```cmd
cd server
npm install
```

### 2️⃣ Criar Usuário Admin
```cmd
npm run create-admin
```

Isso criará:
- Email: `admin@revistafrica.com`
- Senha: `admin123`

### 3️⃣ Iniciar Backend
```cmd
npm run dev
```

Você verá:
```
✅ MongoDB conectado com sucesso
🚀 Servidor rodando na porta 5000
```

### 4️⃣ Iniciar Frontend (em outro terminal)
```cmd
cd ..
npm run dev
```

### 5️⃣ Acessar o Sistema

**Site Público:** http://localhost:3000

**Painel Admin:**
1. Clique no ano **2026** no rodapé
2. Login:
   - Email: `admin@revistafrica.com`
   - Senha: `admin123`

## ✅ Funcionalidades

### Painel Admin
- ✅ Upload de revistas (capa JPG/PNG + PDF)
- ✅ Arquivos salvos no Cloudinary
- ✅ Dados salvos no MongoDB
- ✅ Listagem com busca
- ✅ Exclusão de revistas
- ✅ Visualização de PDFs

### Site Público
- ✅ Listagem de todas as revistas
- ✅ Busca por título/descrição
- ✅ Filtro por categoria
- ✅ Visualização de PDF no navegador
- ✅ Download de PDF

## 🔧 Configurações

### Backend (.env já configurado)
- MongoDB: Conectado
- Cloudinary: Configurado
- Porta: 5000

### Frontend (.env já configurado)
- API URL: http://localhost:5000/api

## 📝 Testar Upload

1. Acesse o painel admin
2. Clique em "Nova Revista"
3. Preencha os dados:
   - Título
   - Descrição
   - Categoria
   - Ano e Edição
4. Faça upload:
   - Capa (JPG/PNG)
   - PDF
5. Clique em "Publicar Revista"
6. A revista aparecerá no site público!

## 🐛 Problemas?

### Backend não conecta ao MongoDB
- Verifique o arquivo `server/.env`
- Confirme que o MongoDB Atlas está acessível

### Erro no Cloudinary
- Verifique as credenciais no `server/.env`

### Frontend não carrega revistas
- Confirme que o backend está rodando
- Verifique o console do navegador (F12)

## 🎉 Pronto!

Seu sistema está 100% funcional sem dados mock!
