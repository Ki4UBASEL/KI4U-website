// Smooth scrolling for in-page links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const href = anchor.getAttribute('href');
    if (!href || href === '#') return;
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// Intersection Observer for fade-in + cards slide-up
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

// Prepare service cards for animation
document.querySelectorAll('.service-card').forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(50px)';
  card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(card);
});

// Form submission (demo)
const form = document.querySelector('form');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const name = document.getElementById('name')?.value?.trim();
    const email = document.getElementById('email')?.value?.trim();
    const message = document.getElementById('message')?.value?.trim();
    if (name && email && message) {
      alert('Vielen Dank für Ihre Nachricht! Wir melden uns bald bei Ihnen.');
      form.reset();
    } else {
      alert('Bitte füllen Sie alle Pflichtfelder aus.');
    }
  });
}

// Dynamic glow effect on hover
document.querySelectorAll('.service-card, .contact-form, .contact-info').forEach(el => {
  el.addEventListener('mouseenter', () => {
    el.style.boxShadow = '0 0 30px rgba(0,255,255,0.4), inset 0 0 30px rgba(0,255,255,0.1)';
  });
  el.addEventListener('mouseleave', () => {
    el.style.boxShadow = '';
  });
});

// Parallax for background grid
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset || document.documentElement.scrollTop || 0;
  const grid = document.querySelector('.bg-grid');
  if (grid) grid.style.transform = `translateY(${scrolled * 0.2}px)`;
});
