/* Interacciones del portafolio. El contenido está en data.js */
(function(){
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  const esc = s => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));

  const log = document.getElementById('log');
  function renderLog(f){
    log.innerHTML = BITACORA.filter(e => f==='all' || e.tipo===f).map(e => `
      <li class="entry ${e.estado||''}">
        <div class="when">${esc(e.fecha)}</div>
        <span class="node" aria-hidden="true"></span>
        <article class="post spot">
          <header><span class="type">${esc(e.tipo)}</span>${e.estado==='soon'?'<span class="soon-badge">Próximamente</span>':''}${e.estado==='now'?'<span class="soon-badge" style="color:var(--ok)">En curso</span>':''}</header>
          <h3>${esc(e.titulo)}</h3><p>${esc(e.texto)}</p>
          ${e.cert?`<button class="cert-btn" type="button" data-cert="${e.cert}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="9" r="5"/><path d="M9 13.5 8 21l4-2 4 2-1-7.5"/></svg>Ver certificación</button>`:''}
          ${e.proyecto?`<a class="cert-btn" href="#proyecto-${e.proyecto}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="14" rx="2"/><path d="M3 9h18M8 21h8"/></svg>Ver caso de estudio</a>`:''}
        </article>
      </li>`).join('');
  }
  function updateLog(){
    const mark=innerHeight*0.62, r=log.getBoundingClientRect();
    log.style.setProperty('--fill', Math.max(0,Math.min(r.height-20, mark-r.top-10))+'px');
    log.querySelectorAll('.entry').forEach(e=>{
      const n=e.querySelector('.node').getBoundingClientRect();
      e.classList.toggle('lit', n.top+5 < mark);
    });
  }
  renderLog('all'); updateLog();
  addEventListener('scroll', updateLog, {passive:true});
  addEventListener('resize', updateLog);
  document.querySelectorAll('.filter').forEach(b => b.addEventListener('click', () => {
    document.querySelectorAll('.filter').forEach(x => x.setAttribute('aria-pressed', x===b));
    renderLog(b.dataset.f); updateLog();
  }));

  document.getElementById('projects').innerHTML = PROYECTOS.map(p => `
    <article class="proj spot${p.destacado?' featured':''}" id="proyecto-${p.id}">
      <div class="shot">${(p.imgs||[p.img]).map((s,k)=>`<img src="${s}" alt="Captura ${k+1} de ${esc(p.titulo)}" loading="lazy" class="${k===0?'on':''}">`).join('')}${(p.imgs||[]).length>1?`<div class="dots">${p.imgs.map((_,k)=>`<i class="${k===0?'on':''}"></i>`).join('')}</div>`:''}</div>
      <div class="proj-body">
        ${p.destacado?'<span class="feat-badge">Proyecto destacado</span>':''}<h3>${esc(p.titulo)}</h3><p>${esc(p.texto)}</p>
        <div class="proj-foot"><div class="stackgrid">${p.stack.map(s=>`<span class="tag">${esc(s)}</span>`).join('')}</div>
        <span style="display:flex;gap:16px;flex-wrap:wrap">${p.caso?'<a class="go" href="#caso-foja">Caso de estudio ↓</a>':''}<a class="go" href="${p.link}" target="_blank" rel="noopener">Ver proyecto ↗</a></span></div>
      </div>
    </article>`).join('');
  { const f=PROYECTOS.find(p=>p.caso); document.getElementById('caseImg').src=f.imgs[f.imgs.length-1]; }

  /* ---------- texto rotativo ---------- */
  const words = ["sistemas","páginas web","apps para negocios","experiencias"];
  const rotor = document.getElementById('rotor');
  if(!reduce){
    let i=0;
    setInterval(()=>{
      i=(i+1)%words.length;
      const target=words[i]; let n=0;
      const chars="▓▒░<>/#*";
      const t=setInterval(()=>{
        n++;
        rotor.textContent = target.split('').map((c,k)=> k<n-3 ? c : (c===' '?' ':chars[(Math.random()*chars.length)|0])).join('');
        if(n>target.length+3){clearInterval(t);rotor.textContent=target;}
      },38);
    },2800);
  }

  /* ---------- credencial colgante: física de resorte + inclinación 3D ---------- */
  const stage=document.getElementById('stage'), hang=document.getElementById('hang'), tilt=document.getElementById('tilt'), flip=document.getElementById('flip');
  const clasp=document.getElementById('clasp'), strapLayers=[...document.querySelectorAll('#strap .sp')], strapSheen=document.getElementById('strapSheen'); let sheenOff=0;
  let tx=0,ty=0,cx=0,cy=0,gx=50,gy=20,hover=false,t0=performance.now();
  let hx=0, hy=reduce?0:-140, vx=0, vy=0, rot=0, drag=false, grab={x:0,y:0}, ptr={x:0,y:0}, downAt=null, moved=0;
  const soft=(v,m)=>m*Math.tanh(v/m), clamp=(v,a)=>Math.max(-a,Math.min(a,v));
  function frame(now){
    // posición de la credencial
    if(drag){
      const nx=soft(ptr.x-grab.x,170), ny=Math.max(-90,soft(ptr.y-grab.y,150));
      vx=nx-hx; vy=ny-hy; hx=nx; hy=ny;
    } else if(!reduce){
      vx+=-0.055*hx-0.11*vx; vy+=-0.07*hy-0.13*vy;
      hx+=vx; hy+=vy;
    }
    const swing=reduce?0:Math.sin((now-t0)/1400)*1.2;
    const rt=-Math.atan2(hx,260)*57.3*0.9 - vx*0.9 + (hover||drag?0:swing);
    rot+=(clamp(rt,40)-rot)*0.25;
    hang.style.transform=`translate(${hx.toFixed(2)}px,${hy.toFixed(2)}px) rotate(${rot.toFixed(2)}deg)`;
    clasp.style.setProperty('--shine',(50-rot*6)+'%');

    // inclinación 3D y brillo
    if(drag){ tx=clamp(vx*2.4,28); ty=clamp(-vy*2.4,24); gx=50+clamp(vx*6,45); gy=30; }
    else if(!hover && !reduce){
      const s=(now-t0)/1000; tx=Math.sin(s*.7)*6; ty=Math.cos(s*.5)*-5;
      gx=50+Math.sin(s*.7)*25; gy=25+Math.cos(s*.5)*15;
    }
    cx+=(tx-cx)*.1; cy+=(ty-cy)*.1;
    tilt.style.transform=`rotateY(${cx.toFixed(2)}deg) rotateX(${cy.toFixed(2)}deg)`;
    flip.querySelectorAll('.face').forEach(f=>{f.style.setProperty('--gx',gx+'%');f.style.setProperty('--gy',gy+'%');f.style.setProperty('--ang',(200+cx*6)+'deg')});

    // cinta: del borde superior al gancho
    const sr=stage.getBoundingClientRect(), cr=clasp.getBoundingClientRect();
    const ax=sr.width/2, ay=-120, px=cr.left+cr.width/2-sr.left, py=cr.top-sr.top+4;
    const mx=(ax+px)/2 - vx*3, my=(ay+py)/2 + 10;
    const d=`M ${ax.toFixed(1)} ${ay} Q ${mx.toFixed(1)} ${my.toFixed(1)} ${px.toFixed(1)} ${py.toFixed(1)}`;
    strapLayers.forEach(l=>l.setAttribute('d',d));
    if(!reduce){ sheenOff-= 1.6+Math.min(14,Math.hypot(vx,vy)*1.4); strapSheen.setAttribute('stroke-dashoffset',sheenOff.toFixed(1)); }
    if(!reduce) requestAnimationFrame(frame);
  }
  if(!reduce){ tilt.classList.add('building'); setTimeout(()=>tilt.classList.remove('building'),2100); }
  requestAnimationFrame(frame);
  if(reduce) addEventListener('resize',()=>requestAnimationFrame(frame));

  hang.addEventListener('pointerdown',e=>{
    if(e.button!==undefined && e.button!==0) return;
    drag=!reduce; downAt={x:e.clientX,y:e.clientY}; moved=0;
    ptr={x:e.clientX,y:e.clientY}; grab={x:e.clientX-hx,y:e.clientY-hy};
    hang.classList.add('dragging'); try{hang.setPointerCapture(e.pointerId)}catch(_){}
  });
  hang.addEventListener('pointermove',e=>{
    if(!downAt) return;
    ptr={x:e.clientX,y:e.clientY};
    moved=Math.max(moved,Math.hypot(e.clientX-downAt.x,e.clientY-downAt.y));
  });
  const release=e=>{
    if(!downAt) return;
    const wasClick=moved<6; drag=false; downAt=null; hang.classList.remove('dragging');
    if(wasClick && e.type==='pointerup') doFlip();
  };
  hang.addEventListener('pointerup',release);
  hang.addEventListener('pointercancel',release);

  stage.addEventListener('pointermove',e=>{
    if(e.pointerType==='touch' || drag) return;
    const r=tilt.getBoundingClientRect();
    const px=(e.clientX-r.left)/r.width, py=(e.clientY-r.top)/r.height;
    if(px<-.2||px>1.2||py<-.2||py>1.2){ if(hover){hover=false;t0=performance.now();} return; }
    hover=true; tx=(px-.5)*30; ty=(.5-py)*26; gx=px*100; gy=py*100;
  });
  stage.addEventListener('pointerleave',()=>{hover=false;t0=performance.now();});
  function doFlip(){flip.classList.toggle('is-back'); flip.setAttribute('aria-label', flip.classList.contains('is-back')?'Reverso de la credencial. Tocá para volver al frente.':'Credencial de Nadia Antonella Ruiz. Tocá para ver el reverso.')}
  flip.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();doFlip();}});

  /* ---------- carrusel de capturas: pasa solo con el mouse encima (en celular, solo) ---------- */
  document.querySelectorAll('.proj').forEach(c=>{
    const imgs=c.querySelectorAll('.shot img'), dots=c.querySelectorAll('.dots i');
    if(imgs.length<2) return;
    let k=0, timer=null;
    const go=()=>{imgs[k].classList.remove('on');dots[k]&&dots[k].classList.remove('on');k=(k+1)%imgs.length;imgs[k].classList.add('on');dots[k]&&dots[k].classList.add('on');};
    const start=()=>{if(!timer){go();timer=setInterval(go,1800);}};
    const stop=()=>{clearInterval(timer);timer=null;};
    if(matchMedia('(hover: hover)').matches){c.addEventListener('pointerenter',start);c.addEventListener('pointerleave',stop);}
    else if(!reduce){setInterval(go,3200);}
  });

  /* ---------- tilt suave en proyectos ---------- */
  if(!reduce) document.querySelectorAll('.proj').forEach(c=>{
    c.addEventListener('pointermove',e=>{ if(e.pointerType==='touch')return;
      const r=c.getBoundingClientRect(), x=(e.clientX-r.left)/r.width-.5, y=(e.clientY-r.top)/r.height-.5;
      c.style.transform=`perspective(900px) rotateY(${x*6}deg) rotateX(${-y*6}deg) translateY(-4px)`;});
    c.addEventListener('pointerleave',()=>c.style.transform='');
  });

  /* ---------- foto en la barra ---------- */

  /* ---------- luz que sigue al mouse en tarjetas ---------- */
  document.querySelectorAll('.tile').forEach(t=>t.classList.add('spot'));
  document.addEventListener('pointermove',e=>{
    const el=e.target.closest && e.target.closest('.spot'); if(!el) return;
    const r=el.getBoundingClientRect();
    el.style.setProperty('--mx',(e.clientX-r.left)+'px'); el.style.setProperty('--my',(e.clientY-r.top)+'px');
  },{passive:true});

  /* ---------- inclinación 3D en tarjetas de "Ahora" y del caso ---------- */
  if(!reduce) document.querySelectorAll('#ahora .tile, .case .tile').forEach(c=>{
    c.style.transition='transform .4s cubic-bezier(.2,.8,.2,1), border-color .3s';
    c.addEventListener('pointermove',e=>{ if(e.pointerType==='touch')return;
      const r=c.getBoundingClientRect(), x=(e.clientX-r.left)/r.width-.5, y=(e.clientY-r.top)/r.height-.5;
      c.style.transform=`perspective(900px) rotateY(${x*7}deg) rotateX(${-y*7}deg) translateY(-3px)`;});
    c.addEventListener('pointerleave',()=>c.style.transform='');
  });

  /* ---------- botones magnéticos ---------- */
  if(!reduce && matchMedia('(hover: hover)').matches) document.querySelectorAll('.btn').forEach(b=>{
    b.addEventListener('pointermove',e=>{const r=b.getBoundingClientRect();
      b.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.18}px,${(e.clientY-r.top-r.height/2)*.28}px)`;});
    b.addEventListener('pointerleave',()=>b.style.transform='');
  });

  /* ---------- títulos que se decodifican al aparecer ---------- */
  if(!reduce && 'IntersectionObserver' in window){
    const glyphs='▓▒░<>/#*_01';
    const io=new IntersectionObserver(es=>es.forEach(en=>{
      if(!en.isIntersecting) return; io.unobserve(en.target);
      const el=en.target, txt=el.textContent; let n=0;
      const t=setInterval(()=>{ n+=1.4;
        el.textContent=txt.split('').map((c,k)=>k<n||c===' '?c:glyphs[(Math.random()*glyphs.length)|0]).join('');
        if(n>=txt.length){clearInterval(t);el.textContent=txt;}
      },22);
    }),{threshold:.6});
    document.querySelectorAll('section h2').forEach(h=>io.observe(h));
  }

  /* ---------- modal de certificación 3D ---------- */
  const modal=document.getElementById('certModal'), card=document.getElementById('certCard');
  let lastFocus=null;
  function openCert(id){
    const c=CERTS[id]; if(!c) return;
    lastFocus=document.activeElement;
    document.getElementById('certKicker').textContent='Certificación · '+c.anio;
    document.getElementById('certTitle').textContent=c.titulo;
    document.getElementById('certOrg').textContent=c.org;
    const imgBox=document.getElementById('certImg'), tabs=document.getElementById('certTabs');
    const show=k=>{
      imgBox.innerHTML=`<img src="${c.imgs[k]}" alt="${esc(c.paginas[k])} de ${esc(c.titulo)}">`;
      imgBox.classList.remove('swap'); imgBox.offsetWidth; imgBox.classList.add('swap');
      tabs.querySelectorAll('button').forEach((b,i)=>b.setAttribute('aria-pressed',i===k));
    };
    tabs.innerHTML = c.imgs.length>1 ? c.paginas.map((n,k)=>`<button type="button" aria-pressed="${k===0}">${esc(n)}</button>`).join('') : '';
    tabs.querySelectorAll('button').forEach((b,k)=>b.addEventListener('click',()=>show(k)));
    show(0);
    card.style.animation='none'; card.offsetHeight; card.style.animation='';
    card.style.transform='';
    modal.hidden=false; document.body.style.overflow='hidden';
    document.getElementById('certX').focus();
  }
  function closeCert(){ modal.hidden=true; document.body.style.overflow=''; lastFocus&&lastFocus.focus&&lastFocus.focus(); }
  document.addEventListener('click',e=>{
    const b=e.target.closest('[data-cert]'); if(b){openCert(b.dataset.cert);return;}
    if(e.target.closest('[data-close]')) closeCert();
  });
  document.addEventListener('keydown',e=>{ if(e.key==='Escape' && !modal.hidden) closeCert(); });
  card.addEventListener('animationend',()=>{card.style.animation='none';});
  card.addEventListener('pointermove',e=>{
    if(reduce||e.pointerType==='touch') return;
    const r=card.getBoundingClientRect(), x=(e.clientX-r.left)/r.width, y=(e.clientY-r.top)/r.height;
    card.style.transform=`rotateY(${(x-.5)*14}deg) rotateX(${(.5-y)*12}deg)`;
    card.style.setProperty('--gx',x*100+'%'); card.style.setProperty('--gy',y*100+'%'); card.style.setProperty('--ang',(200+(x-.5)*80)+'deg');
  });
  card.addEventListener('pointerleave',()=>{card.style.transition='transform .6s cubic-bezier(.2,.8,.2,1)';card.style.transform='';setTimeout(()=>card.style.transition='',600);});

  /* ---------- cuenta regresiva FAPPE (7 nov 2026, hora Argentina) ---------- */
  const target=new Date('2026-11-07T09:00:00-03:00').getTime();
  const cd=document.getElementById('count');
  function tick(){
    const ms=Math.max(0,target-Date.now());
    cd.querySelector('[data-k=d]').textContent=String(Math.floor(ms/864e5)).padStart(2,'0');
    cd.querySelector('[data-k=h]').textContent=String(Math.floor(ms/36e5)%24).padStart(2,'0');
  }
  tick(); setInterval(tick,30000);

  /* ---------- copiar email ---------- */
  const toast=document.getElementById('toast');
  const show=m=>{toast.textContent=m;toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),1800)};
  document.getElementById('copy').addEventListener('click',()=>{
    const txt=document.getElementById('mail').textContent;
    navigator.clipboard.writeText(txt).then(()=>show('Email copiado'),()=>{
      const r=document.createRange(); r.selectNodeContents(document.getElementById('mail'));
      const s=getSelection(); s.removeAllRanges(); s.addRange(r); show('Seleccionado: copialo con Ctrl+C');
    });
  });
})();
