// Genera los CV en PDF (español: cv.html, inglés: cv-en.html) usando Chrome o Edge.
// Uso: npm run cv
const { execFileSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const { pathToFileURL } = require('url');

const candidatos = [
  process.env.CHROME_PATH,
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome', '/usr/bin/chromium'
].filter(Boolean);
const navegador = candidatos.find(p => fs.existsSync(p));
if (!navegador) { console.error('No encontré Chrome ni Edge. Definí CHROME_PATH.'); process.exit(1); }

const versiones = [
  ['cv.html', 'Nadia-Antonella-Ruiz-CV.pdf'],
  ['cv-en.html', 'Nadia-Antonella-Ruiz-CV-EN.pdf']
];
for (const [html, pdf] of versiones) {
  const salida = path.join(__dirname, pdf);
  execFileSync(navegador, [
    '--headless=new', '--disable-gpu', '--no-pdf-header-footer', '--virtual-time-budget=5000',
    `--print-to-pdf=${salida}`, pathToFileURL(path.join(__dirname, html)).href
  ], { stdio: 'ignore' });
  console.log('CV listo en', path.relative(process.cwd(), salida));
}
