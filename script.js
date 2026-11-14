const $ = (s, r = document) => r.querySelector(s);

/* ---------- navigation ---------- */
const views = document.querySelectorAll('.view'), navs = document.querySelectorAll('.nav'), stage = $('#stage');
const ORDER = ['bio','ach','family','subj','prof','class','proj','contact'];
const TITLES = { bio:'Personal Information', ach:'Achievements', family:'Family', subj:'Subjects', prof:'Professors', class:'Classmates', proj:'Projects', contact:'Contact' };
let cur = 'home';
function show(id){
  if(!document.getElementById(id)) id = 'home';
  cur = id;
  views.forEach(v => v.classList.toggle('show', v.id === id));
  navs.forEach(n => n.classList.toggle('active', n.dataset.go === id));
  stage.classList.toggle('sub', id !== 'home');
  const i = ORDER.indexOf(id), last = i === ORDER.length - 1;
  $('#crumb').textContent = i < 0 ? '' : `${TITLES[id]} · ${i + 1} of ${ORDER.length}`;
  $('#prev').hidden = i < 1;
  $('#nl').textContent = last ? '' : 'Next: ';
  $('#nt').textContent = last ? 'Back to home' : TITLES[ORDER[i + 1]];
  history.replaceState(null, '', '#' + id);
}
const step = d => { const i = ORDER.indexOf(cur); if(i >= 0) show(ORDER[i + d] || 'home'); };
$('#next').addEventListener('click', () => step(1));
$('#prev').addEventListener('click', () => step(-1));
document.addEventListener('keydown', e => {
  if(/INPUT|TEXTAREA/.test(e.target.tagName) || document.querySelector('.modal.open')) return;
  if(e.key === 'ArrowRight') step(1);
  if(e.key === 'ArrowLeft') step(-1);
});
document.addEventListener('click', e => { const b = e.target.closest('[data-go]'); if(b) show(b.dataset.go); });
show(location.hash.slice(1) || 'home');

/* ---------- theme (only the visitor's own view changes) ---------- */
const root = document.documentElement;
try { const t = localStorage.getItem('theme'); if(t) root.dataset.theme = t; } catch(e){}
$('#theme').addEventListener('click', () => {
  root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
  try { localStorage.setItem('theme', root.dataset.theme); } catch(e){}
});

/* ---------- photos (view only, listed in data.js) ---------- */
document.querySelectorAll('.photo[data-key]').forEach(box => {
  const src = PHOTOS[box.dataset.key];
  if(src){ $('img', box).src = src; box.classList.add('has'); }
});
const thumb = (key, cls, label) => {
  const s = PHOTOS[key];
  return `<span class="${cls}">${s ? `<img src="${s}" alt="" draggable="false">` : `<b>${label}</b>`}</span>`;
};
const initials = n => { const w = n.replace(/[^\w\s]/g, '').trim().split(/\s+/); return (w[0]?.[0] || '') + (w.length > 1 ? w[w.length-1][0] : ''); };
const norm = c => typeof c === 'string' ? { name: c } : c;

/* ---------- render lists from data.js ---------- */
$('#mates').innerHTML = CLASSMATES.map((c, i) => {
  c = norm(c);
  return `<button class="cm" data-open="mate" data-i="${i}">${thumb('c' + (i+1), 'av', initials(c.name))}<span>${c.name}</span></button>`;
}).join('');

$('#journey').innerHTML = SCHOOLS.map((s, i) =>
  `<button class="card school" data-open="school" data-i="${i}"><span class="lw">${thumb('s' + (i+1), 'logo-box', 'Logo')}</span><span class="pill">${s.level}</span><h3>${s.name}</h3><p>${s.years}</p><em>${s.achievements ? 'View ' + s.achievements.length + ' achievements' : 'View more'}</em></button>`
).join('');

$('#projects').innerHTML = PROJECTS.map((p, i) =>
  `<button class="card proj" data-open="project" data-i="${i}">${thumb('p' + (i+1), 'thumb', p.title[0])}<span class="pinfo"><h3>${p.title}</h3><span class="tags">${p.tech.map(t => `<span>${t}</span>`).join('')}</span><em>View more</em></span></button>`
).join('');

$('#famtree').insertAdjacentHTML('beforeend', FAMILY.map((f, i) =>
  `<button class="card fam" data-open="family" data-i="${i}">${thumb('f' + (i+1), 'av lg', initials(f.name))}<span class="ft"><span class="pill">${f.role}</span><h3>${f.name}</h3><p>${f.sub}</p><em>View more</em></span></button>`
).join(''));

$('#subjects').innerHTML = SUBJECTS.map((s, i) =>
  `<button class="card subj" style="--i:${i}" data-open="subject" data-i="${i}"><span class="sbadge">${s.code}</span><h3>${s.name}</h3><p>${s.prof}</p><span class="units">${s.units} units</span><em>View more</em></button>`
).join('');

$('#profs').innerHTML = PROFESSORS.map((p, i) =>
  `<button class="card prof" data-open="prof" data-i="${i}">${thumb('pr' + (i+1), 'av lg', initials(p.name))}<h3>${p.name}</h3><p>${p.subject}</p><em>View more</em></button>`
).join('');

const COUNTS = { PROJECTS, SCHOOLS, SUBJECTS, PROFESSORS, CLASSMATES, FAMILY };
document.querySelectorAll('[data-count]').forEach(el => el.textContent = COUNTS[el.dataset.count].length);

/* ---------- detail pop-up ---------- */
const modal = $('#modal'), mphoto = $('#mphoto'), mimg = $('img', mphoto);
function open(type, i){
  if(type === 'school' && SCHOOLS[i].achievements) return openSchool(i);
  let d;
  if(type === 'mate'){
    const c = norm(CLASSMATES[i]);
    d = { key:'c'+(i+1), shape:'', tag:'Classmate', title:c.name, sub:c.nickname || 'CITCS 1F - Group B', desc:c.info || 'Details coming soon.', tags:c.tags || [] };
  } else if(type === 'school'){
    const s = SCHOOLS[i];
    d = { key:'s'+(i+1), shape:'square', tag:s.level, title:s.name, sub:s.years, desc:s.desc, tags:s.honors };
  } else if(type === 'family'){
    const f = FAMILY[i];
    d = { key:'f'+(i+1), shape:'', tag:f.role, title:f.name, sub:f.sub, desc:f.desc, tags:f.tags };
  } else if(type === 'subject'){
    const s = SUBJECTS[i];
    d = { badge:s.code, tag:s.units + ' units', title:s.name, sub:s.prof + ' · ' + s.schedule, desc:s.desc, tags:s.topics };
  } else if(type === 'prof'){
    const p = PROFESSORS[i];
    d = { key:'pr'+(i+1), shape:'', tag:'Professor', title:p.name, sub:p.subject, desc:p.desc, tags:p.tags, link:p.email ? 'mailto:' + p.email : '', linkText:'Email professor' };
  } else {
    const p = PROJECTS[i];
    d = { key:'p'+(i+1), shape:'wide', tag:'Project · ' + p.year, title:p.title, sub:'', desc:p.desc, tags:p.tech, link:p.link, linkText:'Open project' };
  }
  $('#mbadge').hidden = !d.badge; $('#mbadge').textContent = d.badge || '';
  mphoto.hidden = !!d.badge;
  mphoto.className = 'photo mph ' + (d.shape || '');
  const src = d.key && PHOTOS[d.key];
  mimg.src = src || ''; mphoto.classList.toggle('has', !!src);
  $('#mtag').textContent = d.tag; $('#mtitle').textContent = d.title;
  $('#msub').textContent = d.sub; $('#msub').hidden = !d.sub;
  $('#mdesc').textContent = d.desc;
  $('#mtags').innerHTML = (d.tags || []).map(t => `<span>${t}</span>`).join('');
  const l = $('#mlink'); l.hidden = !d.link; if(d.link){ l.href = d.link; l.textContent = d.linkText; }
  modal.classList.add('open');
}
const close = () => modal.classList.remove('open');
document.addEventListener('click', e => { const b = e.target.closest('[data-open]'); if(b) open(b.dataset.open, +b.dataset.i); });
$('#mx').addEventListener('click', close);
modal.addEventListener('click', e => { if(e.target === modal) close(); });
document.addEventListener('keydown', e => { if(e.key === 'Escape') close(); });

/* ---------- contact form: the only thing visitors can type in ---------- */
$('#form').addEventListener('submit', e => {
  e.preventDefault();
  const d = new FormData(e.target);
  const to = 'querofrancis123@gmail.com';
  const body = `${d.get('msg')}\n\nFrom: ${d.get('name')} (${d.get('email')})`;
  location.href = `mailto:${to}?subject=${encodeURIComponent('Portfolio message from ' + d.get('name'))}&body=${encodeURIComponent(body)}`;
});

/* ---------- intro ---------- */
const intro = $('#intro');
function endIntro(){
  if(!intro || intro.classList.contains('out')) return;
  intro.classList.add('out');
  setTimeout(() => intro.remove(), 1000);
}
intro.addEventListener('click', endIntro);
document.addEventListener('keydown', e => { if(e.key === 'Enter' || e.key === ' ') endIntro(); });
setTimeout(endIntro, 3700);

/* ---------- age updates itself from the birthday (April 17, 2008) ---------- */
(() => {
  const n = new Date(); let age = n.getFullYear() - 2008;
  if(n < new Date(n.getFullYear(), 3, 17)) age--;
  document.querySelectorAll('[data-age]').forEach(el => el.textContent = age);
})();

/* ---------- Personal Information: Basic info / Interests & goals ---------- */
document.querySelectorAll('.seg button').forEach(b => b.addEventListener('click', () => {
  document.querySelectorAll('.seg button').forEach(x => x.classList.toggle('on', x === b));
  document.querySelectorAll('.pane').forEach(p => p.classList.toggle('on', p.id === b.dataset.pane));
}));

/* ---------- school pop-up with several achievements, photo gallery, files and video ---------- */
const am = $('#amodal'), lb = $('#lb'), lbbody = $('#lbbody');
let aList = [], aPhotos = [];

function openSchool(i){
  const s = SCHOOLS[i];
  aList = s.achievements;
  $('#atag').textContent = s.level; $('#atitle').textContent = s.name; $('#asub').textContent = s.years;
  $('#aseg').innerHTML = aList.map((a, k) => `<button data-k="${k}">${a.title}</button>`).join('');
  $('#aseg').hidden = aList.length < 2;
  showAch(0);
  am.classList.add('open');
}
function showAch(k){
  const a = aList[k]; aPhotos = a.photos || [];
  document.querySelectorAll('#aseg button').forEach(b => b.classList.toggle('on', +b.dataset.k === k));
  $('#atit2').textContent = a.title;
  $('#abadge').textContent = a.badge || ''; $('#abadge').hidden = !a.badge;
  $('#adate').textContent = a.date || ''; $('#adate').hidden = !a.date;
  $('#adesc').textContent = a.desc;
  $('#atags').innerHTML = (a.tags || []).map(t => `<span>${t}</span>`).join('');
  $('#agal').hidden = !aPhotos.length;
  $('#gthumbs').innerHTML = aPhotos.map((p, j) => `<button data-j="${j}"><img src="${p.src}" alt=""></button>`).join('');
  $('#gthumbs').hidden = aPhotos.length < 2;
  setPhoto(0);
  let x = (a.files || []).map(f => `<a href="${f.src}" target="_blank" rel="noopener">${f.label}</a>`).join('');
  if(a.video) x += `<button data-video="${a.video}">▶ Watch video</button>`;
  $('#aextra').innerHTML = x; $('#aextra').hidden = !x;
}
function setPhoto(j){
  const p = aPhotos[j]; if(!p) return;
  $('#gimg').src = p.src; $('#gcap').textContent = (p.cap || '') + ' · tap to enlarge';
  document.querySelectorAll('#gthumbs button').forEach(b => b.classList.toggle('on', +b.dataset.j === j));
}
function openLb(html){ lbbody.innerHTML = html; lb.classList.add('open'); }
function closeLb(){ lb.classList.remove('open'); lbbody.innerHTML = ''; }

am.addEventListener('click', e => {
  if(e.target === am) return am.classList.remove('open');
  const seg = e.target.closest('#aseg button'); if(seg) return showAch(+seg.dataset.k);
  const th = e.target.closest('#gthumbs button'); if(th) return setPhoto(+th.dataset.j);
  if(e.target.id === 'gimg') return openLb(`<img src="${e.target.src}" alt="">`);
  const v = e.target.closest('[data-video]');
  if(v){
    const src = v.dataset.video;
    if(/^https?:/.test(src)) window.open(src, '_blank', 'noopener');
    else openLb(`<video src="${src}" controls autoplay playsinline></video>`);
  }
});
$('#ax').addEventListener('click', () => am.classList.remove('open'));
lb.addEventListener('click', e => { if(e.target === lb || e.target.id === 'lbx') closeLb(); });
document.addEventListener('keydown', e => {
  if(e.key !== 'Escape') return;
  if(lb.classList.contains('open')) closeLb(); else am.classList.remove('open');
});
