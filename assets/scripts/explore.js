// explore.js


function init() {

  const face      = document.querySelector('#explore > img');        
  const textArea  = document.getElementById('text-to-speak');    
  const voiceSel  = document.getElementById('voice-select');    
  const talkBtn   = document.querySelector('#explore button');      


  function loadVoices() {
    voiceSel.innerHTML = '';                                       
    speechSynthesis.getVoices().forEach((v, idx) => {            
      const opt = new Option(`${v.name} (${v.lang})`, idx);
      voiceSel.add(opt);
    });
  }


  loadVoices();
  speechSynthesis.onvoiceschanged = loadVoices;                  

 
  talkBtn.addEventListener('click', () => {
    if (voiceSel.selectedIndex < 0 || textArea.value.trim() === '') return;

    const utter = new SpeechSynthesisUtterance(textArea.value);       
    utter.voice = speechSynthesis.getVoices()[voiceSel.value];      
    utter.onstart = () => face.src = 'assets/images/smiling-open.png';
    utter.onend   = () => face.src = 'assets/images/smiling.png';   
    speechSynthesis.speak(utter);                            
  });
}


window.addEventListener('DOMContentLoaded', init);         