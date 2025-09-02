/* Glow an/aus per Taste "G" */
(function(){
  const mark = document.querySelector('.mark');
  let glowOn = true;

  function setGlow(active){
    glowOn = active;
    mark.style.filter = active
      ? 'drop-shadow(0 0 18px rgba(255,115,230,.45)) drop-shadow(0 0 28px rgba(86,49,216,.35))'
      : 'none';
  }

  document.addEventListener('keydown', (e)=>{
    if(e.key.toLowerCase() === 'g'){
      setGlow(!glowOn);
    }
  });
})();
