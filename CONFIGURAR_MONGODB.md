# Configuração do MongoDB Atlas

## Problema Atual
O servidor está rodando mas não consegue conectar ao MongoDB Atlas, causando erro 500 nas requisições.

## Solução

### 1. Acessar MongoDB Atlas
- Acesse: https://cloud.mongodb.com
- Faça login com suas credenciais

### 2. Verificar se o Cluster está Ativo
- No painel, verifique se o cluster "Cluster0" está rodando
- Se estiver pausado, clique em "Resume" para reativá-lo

### 3. Configurar Network Access (Whitelist de IPs)
- No menu lateral, clique em "Network Access"
- Clique em "Add IP Address"
- Escolha uma das opções:
  - **Para desenvolvimento**: Clique em "Allow Access from Anywhere" (0.0.0.0/0)
  - **Para produção**: Adicione apenas seu IP específico
- Clique em "Confirm"

### 4. Verificar Database Access (Usuário e Senha)
- No menu lateral, clique em "Database Access"
- Verifique se o usuário "revistaadmin" existe
- Se necessário, crie um novo usuário ou redefina a senha
- Atualize a string de conexão no arquivo `.env` se mudou as credenciais

### 5. Reiniciar o Servidor
Após configurar o MongoDB Atlas, reinicie o servidor backend.

## String de Conexão Atual
```
mongodb+srv://revistaadmin:revistaadmin@cluster0.uusuwns.mongodb.net/revista-africa?retryWrites=true&w=majority&appName=Cluster0
```

## Alternativa: MongoDB Local
Se preferir usar MongoDB local para desenvolvimento:

1. Instale MongoDB Community: https://www.mongodb.com/try/download/community
2. Inicie o serviço MongoDB
3. Atualize o `.env`:
```
MONGODB_URI=mongodb://localhost:27017/revista-africa
```
