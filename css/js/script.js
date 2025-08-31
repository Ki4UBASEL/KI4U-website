// Smooth scroll for in-page links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{
    const href=a.getAttribute('href');
    if(!href || href==='#') return;
    const el=document.querySelector(href);
    if(el){ e.preventDefault(); el.scrollIntoView({behavior:'smooth',block:'start'}); }
  });
});

// Demo contact form handler
const form=document.querySelector('.contact-form');
if(form){
  form.addEventListener('submit',e=>{
    e.preventDefault();
    const name=document.getElementById('name')?.value?.trim();
    const email=document.getElementById('email')?.value?.trim();
    const message=document.getElementById('message')?.value?.trim();
    if(name && email && message){
      alert('Danke! Wir melden uns bald.');
      form.reset();
    }else{
      alert('Bitte alle Pflichtfelder ausfüllen.');
    }
  });
}
