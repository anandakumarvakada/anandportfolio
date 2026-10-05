const body=document.body;
const menuToggle=document.querySelector('.menu-toggle');
const navLinks=document.querySelector('#nav-links');
const themeToggle=document.querySelector('#theme-toggle');
const form=document.querySelector('#contact-form');
const status=document.querySelector('#form-status');

menuToggle?.addEventListener('click',()=>{const open=navLinks.classList.toggle('open');menuToggle.setAttribute('aria-expanded',open);});
navLinks?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>navLinks.classList.remove('open')));

const savedTheme=localStorage.getItem('ak-theme');
if(savedTheme==='light') body.classList.add('light');
function updateThemeIcon(){themeToggle.textContent=body.classList.contains('light')?'☾':'☼';}
updateThemeIcon();
themeToggle?.addEventListener('click',()=>{body.classList.toggle('light');localStorage.setItem('ak-theme',body.classList.contains('light')?'light':'dark');updateThemeIcon();});

document.querySelector('#year').textContent=new Date().getFullYear();

const observer=new IntersectionObserver((entries)=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

const sections=[...document.querySelectorAll('main section[id]')];
const navItems=[...document.querySelectorAll('.nav-links a[href^="#"]')];
const sectionObserver=new IntersectionObserver(entries=>{
 entries.forEach(entry=>{if(entry.isIntersecting){navItems.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+entry.target.id));}});
},{rootMargin:'-35% 0px -55% 0px'});
sections.forEach(s=>sectionObserver.observe(s));

form?.addEventListener('submit',async(e)=>{
 e.preventDefault();
 const endpoint=form.getAttribute('action');
 if(!endpoint || endpoint==='YOUR_FORMSPREE_ENDPOINT'){
   status.textContent='Contact form setup required: add your Formspree endpoint in index.html.';
   return;
 }
 status.textContent='Sending…';
 try{
   const response=await fetch(endpoint,{method:'POST',body:new FormData(form),headers:{Accept:'application/json'}});
   if(response.ok){status.textContent='Message sent successfully.';form.reset();}
   else{status.textContent='Unable to send right now. Please try email instead.';}
 }catch(err){status.textContent='Network error. Please try email instead.';}
});
