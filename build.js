// Copia el sitio a la carpeta dist para publicarlo (Vercel / Netlify).
const fs = require('fs');
const path = require('path');

const out = path.join(__dirname, 'dist');
fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(out);

for (const item of ['index.html', 'css', 'js', 'img', 'cv/Nadia-Antonella-Ruiz-CV.pdf', 'cv/Nadia-Antonella-Ruiz-CV-EN.pdf']) {
  fs.cpSync(path.join(__dirname, item), path.join(out, item), { recursive: true });
}
console.log('Sitio listo en dist/');
