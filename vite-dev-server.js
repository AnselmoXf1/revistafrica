import { createServer } from 'vite'
import { resolve } from 'path'

async function createDevServer() {
  const server = await createServer({
    configFile: false,
    root: process.cwd(),
    server: {
      port: 3000,
      host: '0.0.0.0',
      open: true,
      historyApiFallback: true,
      proxy: {
        '/api': {
          target: 'http://localhost:5000',
          changeOrigin: true,
          secure: false
        }
      }
    },
    plugins: [],
    resolve: {
      alias: {
        '@': resolve(__dirname, './src')
      }
    }
  })
  
  await server.listen()
  server.printUrls()
}

createDevServer().catch(console.error)