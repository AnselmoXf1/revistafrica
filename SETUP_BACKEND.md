# 🚀 Setup Completo - Backend Revista África

## 📋 Pré-requisitos
- Node.js 18+ instalado
- Conta no MongoDB Atlas (gratuita)
- Conta no Cloudinary (gratuita)

## 🔧 Passo 1: Configurar MongoDB Atlas

1. Acesse https://www.mongodb.com/cloud/atlas/register
2. Crie uma conta gratuita
3. Crie um novo cluster (escolha a opção FREE)
4. Aguarde a criação do cluster (2-5 minutos)
5. Clique em "Database Access" no menu lateral
   - Clique em "Add New Database User"
   - Crie um usuário com senha (anote!)
6. Clique em "Network Access"
   - Clique em "Add IP Address"
   - Escolha "Allow Access from Anywhere" (0.0.0.0/0)
7. Volte para "Database" e clique em "Connect"
   - Escolha "Connect your application"
   - Copie a connection string
   - Substitua `<password>` pela senha do usuário

## ☁️ Passo 2: Configurar Cloudinary

1. Acesse https://cloudinary.com/users/register/free
2. Crie uma conta gratuita
3. No Dashboard, você verá:
   - Cloud Name
   - API Key
   - API Secret
4. Anote essas 3 informações

## 💻 Passo 3: Instalar Backend

```bash
cd REID-main/server
npm install
```

## ⚙️ Passo 4: Configurar Variáveis de Ambiente

Crie o arquivo `.env` na pasta `server`:

```bash
cd server
copy .env.example .env
```

Edite o arquivo `.env` com suas credenciais:

```env
PORT=5000
MONGODB_URI=mongodb+srv://seu_usuario:sua_senha@cluster.mongodb.net/revista-africa?retryWrites=true&w=majority
JWT_SECRET=mude_isso_para_algo_super_secreto_e_aleatorio_123456789
CLOUDINARY_CLOUD_NAME=seu_cloud_name_aqui
CLOUDINARY_API_KEY=sua_api_key_aqui
CLOUDINARY_API_SECRET=seu_api_secret_aqui
NODE_ENV=development
```

## 👤 Passo 5: Criar Usuário Admin

```bash
npm run create-admin
```

Isso criará um admin com:
- Email: `admin@revistafrica.com`
- Senha: `admin123`

⚠️ **IMPORTANTE**: Altere a senha após o primeiro login!

## 🚀 Passo 6: Iniciar Backend

```bash
npm run dev
```

Você verá:
```
✅ MongoDB conectado com sucesso
🚀 Servidor rodando na porta 5000
```

## 🎨 Passo 7: Configurar Frontend

Na pasta raiz do projeto (REID-main), crie o arquivo `.env`:

```env
VITE_API_URL=http://localhost:5000/api
```

## ▶️ Passo 8: Iniciar Frontend

Em outro terminal:

```bash
cd REID-main
npm run dev
```

## ✅ Passo 9: Testar

1. Abra o navegador em `http://localhost:3000`
2. Clique no ano "2026" no rodapé
3. Faça login com:
   - Email: `admin@revistafrica.com`
   - Senha: `admin123`
4. Você será redirecionado para o painel admin

## 📝 Funcionalidades

### Painel Admin
- ✅ Upload de revistas (capa + PDF)
- ✅ Listagem de revistas
- ✅ Exclusão de revistas
- ✅ Busca de revistas
- ✅ Armazenamento no Cloudinary
- ✅ Dados no MongoDB

### Público
- ✅ Visualização de revistas
- ✅ Download de PDFs
- ✅ Filtros e busca

## 🐛 Troubleshooting

### Erro de conexão MongoDB
- Verifique se o IP está liberado no Network Access
- Confirme que a senha está correta na connection string
- Teste a conexão no MongoDB Compass

### Erro no Cloudinary
- Verifique se as credenciais estão corretas
- Confirme que não há espaços extras no .env

### Porta 5000 em uso
- Mude a porta no `.env`: `PORT=5001`
- Atualize o frontend `.env`: `VITE_API_URL=http://localhost:5001/api`

## 📚 Endpoints da API

### Autenticação
- `POST /api/auth/login` - Login
- `POST /api/auth/register` - Registrar
- `GET /api/auth/me` - Dados do usuário

### Revistas
- `GET /api/magazines` - Listar todas
- `GET /api/magazines/:id` - Buscar por ID
- `POST /api/magazines` - Criar (admin)
- `DELETE /api/magazines/:id` - Deletar (admin)

## 🎉 Pronto!

Seu sistema está completo e funcional com:
- ✅ Backend Node.js + Express
- ✅ MongoDB para dados
- ✅ Cloudinary para arquivos
- ✅ Autenticação JWT
- ✅ Painel admin completo
