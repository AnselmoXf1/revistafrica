export function createSlug(text: string): string {
  if (!text) return '';
  return text
    .toString()
    .normalize('NFD') // divide caracteres com acentos
    .replace(/[\u0300-\u036f]/g, '') // remove os acentos
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9 ]/g, '') // remove tudo que não for letra, número ou espaço
    .replace(/\s+/g, '-'); // substitui espaços por hífens
}
