(()=>{const get=(k,f)=>{try{return JSON.parse(localStorage.getItem(k))??f}catch{return f}},put=(k,v)=>{try{localStorage.setItem(k,JSON.stringify(v))}catch{}};const theme=document.querySelector('#theme');if(get('cos-theme',false))document.body.classList.add('dark-mode');theme?.addEventListener('click',()=>{document.body.classList.toggle('dark-mode');put('cos-theme',document.body.classList.contains('dark-mode'))});const menu=document.querySelector('.menu');menu?.addEventListener('click',()=>{let n=document.querySelector('#nav');n.classList.toggle('open');menu.setAttribute('aria-expanded',n.classList.contains('open'))});let studied=get('cos-studied',[]),bookmarks=get('cos-bookmarks',[]);const update=()=>{document.querySelectorAll('#progress-count,#progress-total').forEach(e=>e.textContent=studied.length);let b=document.querySelector('#bookmark-total');if(b)b.textContent=bookmarks.length;document.querySelectorAll('.study').forEach(e=>e.textContent=studied.includes(e.dataset.id)?'✓ Studied':'Mark as studied');document.querySelectorAll('.bookmark').forEach(e=>e.textContent=bookmarks.includes(e.dataset.id)?'★ Bookmarked':'☆ Bookmark')};document.querySelector('.study')?.addEventListener('click',e=>{let id=e.currentTarget.dataset.id;studied=studied.includes(id)?studied.filter(x=>x!==id):[...studied,id];put('cos-studied',studied);update()});document.querySelector('.bookmark')?.addEventListener('click',e=>{let id=e.currentTarget.dataset.id;bookmarks=bookmarks.includes(id)?bookmarks.filter(x=>x!==id):[...bookmarks,id];put('cos-bookmarks',bookmarks);update()});document.querySelector('#reset')?.addEventListener('click',()=>{if(confirm('Clear studied lectures and bookmarks on this device?')){studied=[];bookmarks=[];put('cos-studied',studied);put('cos-bookmarks',bookmarks);update()}});document.querySelector('#filter')?.addEventListener('input',e=>document.querySelectorAll('.lecture-card').forEach(c=>c.hidden=!c.textContent.toLowerCase().includes(e.target.value.toLowerCase())));const quiz=document.querySelector('#quiz');if(quiz&&window.QUESTIONS){let items=[...window.QUESTIONS];const render=()=>{quiz.innerHTML='';items.filter(q=>document.querySelector('#topic').value==='All topics'||q[0]===document.querySelector('#topic').value).forEach((q,i)=>{let box=document.createElement('section');box.className='card question';let title=document.createElement('h3');title.textContent=q[1];let tag=document.createElement('span');tag.className='eyebrow';tag.textContent=q[0]+' / ORIGINAL QUICK CHECK';box.append(tag,title);q[2].forEach(opt=>{let label=document.createElement('label'),input=document.createElement('input');input.type='radio';input.name='q'+i;input.value=opt;label.append(input,document.createTextNode(' '+opt));box.append(label)});let btn=document.createElement('button'),res=document.createElement('p');btn.textContent='Check answer';res.className='result';btn.addEventListener('click',()=>{let selected=box.querySelector('input:checked');res.textContent=selected?(selected.value===q[3]?'Correct. ':'Not quite. ')+q[4]:'Choose an answer first.'});box.append(btn,res);quiz.append(box)})};document.querySelector('#topic').addEventListener('change',render);document.querySelector('#shuffle').addEventListener('click',()=>{for(let i=items.length-1;i>0;i--){let j=Math.floor(Math.random()*(i+1));[items[i],items[j]]=[items[j],items[i]]}render()});render()}update()})();

// Reveal a linked worked example when its destination is a collapsed section.
function openLinkedSection() {
  if (!location.hash) return;
  let id;
  try { id = decodeURIComponent(location.hash.slice(1)); } catch { return; }
  let element = document.getElementById(id);
  if (!element) return;
  for (let node = element; node; node = node.parentElement) {
    if (node.tagName === 'DETAILS') node.open = true;
  }
}
openLinkedSection();
window.addEventListener('hashchange', openLinkedSection);


// Section helpers: progress marks on the notes page, review filters and expand/collapse.
(()=>{
  const rd=(k,f)=>{try{return JSON.parse(localStorage.getItem(k))??f}catch{return f}};
  const studied=rd('cos-studied',[]),marked=rd('cos-bookmarks',[]);
  document.querySelectorAll('.lecture-card').forEach(c=>{
    const id=c.getAttribute('href');
    c.classList.toggle('done',studied.includes(id));
    c.classList.toggle('starred',marked.includes(id));
  });
  const only=document.querySelector('#only-lost');
  only?.addEventListener('change',()=>document.querySelectorAll('.qrev').forEach(d=>{d.hidden=only.checked&&d.dataset.status==='full'}));
  document.querySelector('#expand-all')?.addEventListener('click',()=>document.querySelectorAll('main details').forEach(d=>{d.open=true}));
  document.querySelector('#collapse-all')?.addEventListener('click',()=>document.querySelectorAll('main details').forEach(d=>{d.open=false}));
})();
