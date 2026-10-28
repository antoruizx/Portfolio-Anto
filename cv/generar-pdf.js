// Genera cv/Nadia-Antonella-Ruiz-CV.pdf a partir de cv/cv.html usando Chrome o Edge.
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

const salida = path.join(__dirname, 'Nadia-Antonella-Ruiz-CV.pdf');
execFileSync(navegador, [
  '--headless=new', '--disable-gpu', '--no-pdf-header-footer', '--virtual-time-budget=5000',
  `--print-to-pdf=${salida}`, pathToFileURL(path.join(__dirname, 'cv.html')).href
], { stdio: 'ignore' });
console.log('CV listo en', path.relative(process.cwd(), salida));
