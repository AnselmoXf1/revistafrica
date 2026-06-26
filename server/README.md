# Backend - Revista África

## Configuração

### 1. Instalar dependências
```bash
cd server
npm install
```

### 2. Configurar variáveis de ambiente
Copie o arquivo `.env.example` para `.env` e preencha com suas credenciais:

```bash
cp .env.example .env
```

Edite o arquivo `.env`:
- `MONGODB_URI`: URL de conexão do MongoDB Atlas
- `JWT_SECRET`: Chave secreta para JWT (gere uma aleatória)
- `CLOUDINARY_CLOUD_NAME`: Nome do seu cloud no Cloudinary
- `CLOUDINARY_API_KEY`: API Key do Cloudinary
- `CLOUDINARY_API_SECRET`: API Secret do Cloudinary

### 3. MongoDB Atlas
1. Acesse https://www.mongodb.com/cloud/atlas
2. Crie uma conta gratuita
3. Crie um cluster
4. Em "Database Access", crie um usuário
5. Em "Network Access", adicione seu IP (ou 0.0.0.0/0 para qualquer IP)
6. Clique em "Connect" > "Connect your application"
7. Copie a connection string e cole no `.env`

### 4. Cloudinary
1. Acesse https://cloudinary.com
2. Crie uma conta gratuita
3. No Dashboard, copie:
   - Cloud Name
   - API Key
   - API Secret
4. Cole no arquivo `.env`

### 5. Criar usuário admin
Execute este script no MongoDB ou use o endpoint de registro e depois atualize manualmente:

```javascript
// No MongoDB Compass ou Atlas
db.users.insertOne({
  name: "Admin",
  email: "admin@revistafrica.com",
  password: "$2a$10$...", // Use bcrypt para gerar o hash
  isAdmin: true,
  createdAt: new Date(),
  updatedAt: new Date()
})
```

Ou registre via API e depois atualize:
```bash
# Registrar
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"name":"Admin","email":"admin@revistafrica.com","password":"senha123"}'

# Depois atualize no MongoDB para isAdmin: true
```

### 6. Iniciar servidor
```bash
npm run dev
```

O servidor estará rodando em `http://localhost:5000`

## Endpoints

### Auth
- `POST /api/auth/register` - Registrar usuário
- `POST /api/auth/login` - Login
- `GET /api/auth/me` - Obter usuário atual (requer token)

### Magazines
- `GET /api/magazines` - Listar todas as revistas
- `GET /api/magazines/:id` - Buscar revista por ID
- `POST /api/magazines` - Criar revista (requer admin)
- `DELETE /api/magazines/:id` - Deletar revista (requer admin)

## Frontend

No diretório raiz do projeto (REID-main), crie um arquivo `.env`:

```
VITE_API_URL=http://localhost:5000/api
```

Depois inicie o frontend:
```bash
npm run dev
```
