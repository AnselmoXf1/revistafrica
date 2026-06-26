import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const API_URL = process.env.VITE_API_URL || 'http://localhost:5000/api';
const STATIC_FILE_PATH = path.join(__dirname, '../data/staticMagazines.ts');

async function syncData() {
  console.log(`Buscando artigos do backend (${API_URL})...`);
  
  try {
    const response = await fetch(`${API_URL}/magazines`);
    if (!response.ok) {
      throw new Error(`Erro HTTP: ${response.status}`);
    }
    
    const data = await response.json();
    
    if (!Array.isArray(data)) {
      throw new Error('A resposta da API não é um array válido.');
    }
    
    console.log(`Sucesso: ${data.length} artigos encontrados.`);
    
    const fileContent = `// Arquivo gerado automaticamente pelo script sync-data.js
// Última sincronização: ${new Date().toISOString()}

export const staticMagazines: any[] = ${JSON.stringify(data, null, 2)}.map(mag => ({ ...mag, id: mag._id || mag.id }));
`;
    
    fs.writeFileSync(STATIC_FILE_PATH, fileContent, 'utf-8');
    console.log('✅ Arquivo staticMagazines.ts atualizado com sucesso!');
    
  } catch (error) {
    console.error('❌ Falha ao sincronizar os dados:', error);
    process.exit(1);
  }
}

syncData();
