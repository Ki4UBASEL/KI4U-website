/* Glow an/aus per Taste "G" */
(function(){
  const mark = document.querySelector('.mark');
  if (!mark) return;
  let glowOn = true;

  function setGlow(active){
    glowOn = active;
    mark.style.filter = active
      ? 'drop-shadow(0 0 18px rgba(0,212,255,.45)) drop-shadow(0 0 28px rgba(0,102,255,.35))'
      : 'none';
  }

  document.addEventListener('keydown', (e)=>{
    if(e.key.toLowerCase() === 'g'){
      setGlow(!glowOn);
    }
  });
})();

/* Formular → Formspree → Redirect auf danke.html */
(function(){
  const form = document.getElementById('contactForm');
  const statusEl = document.getElementById('formStatus');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (statusEl){ statusEl.style.display = 'block'; statusEl.textContent = 'Sende …'; }

    try {
      const data = new FormData(form);
      const resp = await fetch(form.action, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      });

      if (resp.ok) {
        window.location.href = 'danke.html';
      } else {
        if (statusEl){
          statusEl.textContent = 'Ups, das hat nicht geklappt. Bitte später erneut versuchen.';
        }
      }
    } catch (err) {
      if (statusEl){
        statusEl.textContent = 'Netzwerkfehler. Bist du online?';
      }
    }
  });
})();
