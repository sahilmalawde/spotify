document.querySelectorAll('.song button').forEach(button => {
  button.addEventListener('click', function() {
    const audioId = this.getAttribute('data-audio');
    const audio = document.getElementById(audioId);
    curAudio = audio;
    toggleAudio(audio, this);
  });
});

var playlist = document.getElementById('play');
var curAudio = '';

// document.querySelectorAll('.song').forEach(song =>{
//     song.addEventListener('mouseover', function() {
        
//       });
// })

function toggleAudio(audio, button) {
  if (audio.paused) {
    playAudio(audio, button);
  } else {
    pauseAudio(audio, button);
  }
}

function playAudio(audio, button) {
  
  document.querySelectorAll('audio').forEach(aud =>{
    aud.pause();
    if(curAudio != aud){
        aud.load();
    }
    
  }) 
  document.querySelectorAll('.song button').forEach(button => {
    button.innerHTML = `<i class="fa-solid fa-play"></i>`;
  }); 
  audio.play().then(function() {
    button.innerHTML = `<i class="fa-solid fa-pause"></i>`;
}).catch(function(error) {
    console.error('Error playing audio:', error);
  });
}

function pauseAudio(audio, button) {
  audio.pause();
  button.innerHTML = `<i class="fa-solid fa-play"></i>`;
}

