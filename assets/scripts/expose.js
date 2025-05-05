//expose.js
function init() {

  const hornSelect   = document.getElementById('horn-select');       
  const hornImg      = document.querySelector('#expose > img');     
  const volumeSlider = document.getElementById('volume');          
  const volumeIcon   = document.querySelector('#volume-controls img');
  const playBtn      = document.querySelector('#expose button');     
  const audioEl      = document.querySelector('#expose audio');      
  const confetti     = new JSConfetti();                           

  /* ---------- horn dropdown ---------- */
  hornSelect.addEventListener('change', () => {
    const horn = hornSelect.value;                 
    hornImg.src = `assets/images/${horn}.svg`;
    hornImg.alt = horn.replace('-', ' ') + ' image';
    audioEl.src = `assets/audio/${horn}.mp3`;
  });

  /* ---------- live volume slider ---------- */
  volumeSlider.addEventListener('input', () => {
    const v = +volumeSlider.value;   
    audioEl.volume = v / 100;   
    let lvl = 0;
    if (v >= 67)      lvl = 3;
    else if (v >= 33) lvl = 2;
    else if (v >= 1)  lvl = 1;
    volumeIcon.src = `assets/icons/volume-level-${lvl}.svg`;
    volumeIcon.alt = `Volume level ${lvl}`;
  });

  /* ---------- play button ---------- */
  playBtn.addEventListener('click', () => {
    if (!audioEl.src) return;            
    audioEl.play();
    if (hornSelect.value === 'party-horn') confetti.addConfetti();
  });
}


window.addEventListener('DOMContentLoaded', init);      
