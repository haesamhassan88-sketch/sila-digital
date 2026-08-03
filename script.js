
const menu=document.querySelector('.menu');
const links=document.querySelector('.nav-links');
if(menu&&links){menu.onclick=()=>links.classList.toggle('open');links.querySelectorAll('a').forEach(a=>a.onclick=()=>links.classList.remove('open'))}
document.querySelectorAll('[data-year]').forEach(e=>e.textContent=new Date().getFullYear());
const form=document.querySelector('#contactForm');
if(form){form.addEventListener('submit',e=>{e.preventDefault();const n=document.querySelector('#name').value.trim();const s=document.querySelector('#service').value.trim();const m=document.querySelector('#message').value.trim();const t=`Hello Sila Digital,%0AName: ${encodeURIComponent(n)}%0AService: ${encodeURIComponent(s)}%0AMessage: ${encodeURIComponent(m)}`;window.open(`https://wa.me/201117667992?text=${t}`,'_blank')})}
