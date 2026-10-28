/* Selector de idioma. El sitio está escrito en español; los demás idiomas
   los traduce Google Translate (se guarda la elección en la cookie "googtrans"). */
(function(){
  const CODES = ['es','en','pt','it','fr','de','nl','ca','gl','eu','sv','da','no','fi','is','pl','cs','sk','sl','hr','sr','bs','hu','ro','bg','mk','el','sq','lt','lv','et','uk','be','ru','ka','hy','az','kk','uz','tr','ar','he','fa','ur','hi','bn','pa','gu','mr','ta','te','kn','ml','ne','si','zh-CN','zh-TW','ja','ko','mn','vi','th','km','lo','my','id','ms','tl','sw','am','so','yo','ig','ha','zu','xh','af','ga','cy','mt','lb','eo','la','qu','gn','haw','mi'];
  const TOP = ['es','en','pt','it','fr','de'];

  const read = () => { const m=document.cookie.match(/(?:^|;\s*)googtrans=\/[^/]*\/([^;]+)/); return m?decodeURIComponent(m[1]):'es'; };
  const hash = location.hash.match(/googtrans\((?:[^|]*\|)?([^)]+)\)/);
  const current = hash ? hash[1] : read();
  const translated = current !== 'es';
  window.SITE_TRANSLATED = translated;

  const name = (code, inLang) => {
    try { const n=new Intl.DisplayNames([inLang], {type:'language'}).of(code); return n.charAt(0).toLocaleUpperCase(inLang)+n.slice(1); }
    catch(_) { return code; }
  };

  function setLang(code){
    const kill='googtrans=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';
    document.cookie=kill;
    const host=location.hostname; if(host.includes('.')) document.cookie=kill+'; domain=.'+host;
    if(code!=='es') document.cookie='googtrans=/es/'+code+'; path=/; max-age=31536000; SameSite=Lax';
    if(/googtrans/.test(location.hash)) history.replaceState(null,'',location.pathname+location.search);
    location.reload();
  }

  // Botón y lista
  const box=document.getElementById('lang'); if(!box) return;
  const btn=box.querySelector('button'), panel=box.querySelector('.lang-panel'), list=box.querySelector('ul'), search=box.querySelector('input');
  box.querySelector('.lang-code').textContent=current.split('-')[0].toUpperCase();
  const order=[...TOP, ...CODES.filter(c=>!TOP.includes(c)).sort((a,b)=>name(a,'es').localeCompare(name(b,'es'),'es'))];
  list.innerHTML=order.map(c=>{
    const own=name(c,c), es=name(c,'es');
    return `<li><button type="button" data-lang="${c}" aria-current="${c===current}"><span>${own}</span>${own!==es?`<small>${es}</small>`:''}</button></li>`;
  }).join('');
  const toggle=open=>{ panel.hidden=!open; btn.setAttribute('aria-expanded',open); if(open){ search.value=''; filter(); search.focus(); } };
  const filter=()=>{ const q=search.value.trim().toLowerCase();
    list.querySelectorAll('li').forEach(li=>{ li.hidden=q && !li.textContent.toLowerCase().includes(q); }); };
  btn.addEventListener('click',()=>toggle(panel.hidden));
  search.addEventListener('input',filter);
  search.addEventListener('keydown',e=>{ if(e.key==='Enter'){ const f=list.querySelector('li:not([hidden]) button'); f&&f.click(); } });
  list.addEventListener('click',e=>{ const b=e.target.closest('[data-lang]'); if(!b) return; b.dataset.lang===current?toggle(false):setLang(b.dataset.lang); });
  document.addEventListener('click',e=>{ if(!panel.hidden && !box.contains(e.target)) toggle(false); });
  document.addEventListener('keydown',e=>{ if(e.key==='Escape' && !panel.hidden){ toggle(false); btn.focus(); } });

  // Fuera del español, los botones de CV bajan la versión en inglés
  if(translated) document.querySelectorAll('a[href="cv/Nadia-Antonella-Ruiz-CV.pdf"]').forEach(l=>{
    l.href='cv/Nadia-Antonella-Ruiz-CV-EN.pdf'; l.download='Nadia-Antonella-Ruiz-Resume.pdf';
  });

  // Cargar Google Translate solo si hace falta
  if(translated){
    window.gtInit=()=>new google.translate.TranslateElement({pageLanguage:'es', autoDisplay:false}, 'gt-el');
    const s=document.createElement('script');
    s.src='https://translate.google.com/translate_a/element.js?cb=gtInit'; s.async=true;
    document.head.appendChild(s);
  }
})();
