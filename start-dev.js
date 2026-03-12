import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log('🚀 Iniciando servidores de desenvolvimento...\n');

// Iniciar servidor Express (API)
console.log('📡 Iniciando servidor Express (API) na porta 5000...');
const apiServer = spawn('node', ['server/server.js'], {
  cwd: __dirname,
  stdio: 'inherit',
  shell: true,
  env: {
    ...process.env,
    NODE_ENV: 'development',
    PORT: 5000
  }
});

apiServer.on('error', (err) => {
  console.error('❌ Erro ao iniciar servidor Express:', err);
});

// Aguardar um pouco para o servidor Express iniciar
setTimeout(() => {
  // Iniciar servidor Vite (Frontend)
  console.log('\n🎨 Iniciando servidor Vite (Frontend) na porta 3000...');
  const viteServer = spawn('npm', ['run', 'dev'], {
    cwd: __dirname,
    stdio: 'inherit',
    shell: true
  });

  viteServer.on('error', (err) => {
    console.error('❌ Erro ao iniciar servidor Vite:', err);
  });

  // Gerenciar encerramento
  const shutdown = () => {
    console.log('\n🛑 Encerrando servidores...');
    apiServer.kill();
    viteServer.kill();
    process.exit(0);
  };

  process.on('SIGINT', shutdown);
  process.on('SIGTERM', shutdown);
}, 2000);