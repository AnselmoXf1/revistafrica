export default function handler(req, res) {
  const baseUrl = 'https://revistafrica.com';
  
  const robotsTxt = `User-agent: *
Allow: /
Allow: /artigo/
Allow: /submissoes
Allow: /conselho-editorial
Allow: /dados-revista
Allow: /contacto
Disallow: /admin
Disallow: /login

Sitemap: ${baseUrl}/sitemap.xml
`;

  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Cache-Control', 'public, max-age=86400');
  res.status(200).send(robotsTxt);
}
