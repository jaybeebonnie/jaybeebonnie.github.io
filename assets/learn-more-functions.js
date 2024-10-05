/*-----------------music player controls-------------------*/

document.addEventListener("DOMContentLoaded", function() {
    const audioPlayer = document.getElementById('audio-player'); 
    const playPauseButton = document.querySelector('.play-pause');
    const currentTimeDisplay = document.querySelector('.current-time');
    const totalTimeDisplay = document.querySelector('.total-time');
    const progressRange = document.querySelector('.progress-range');

    playPauseButton.addEventListener('click', () => {
        if (audioPlayer.paused) {
            audioPlayer.play();
            playPauseButton.innerHTML = '<i class="fas fa-pause"></i>'; 
        } else {
            audioPlayer.pause();
            playPauseButton.innerHTML = '<i class="fas fa-play"></i>'; 
        }
    });

    audioPlayer.addEventListener('loadedmetadata', () => {
        const totalDuration = Math.floor(audioPlayer.duration);
        totalTimeDisplay.textContent = formatTime(totalDuration);
    });

    audioPlayer.addEventListener('timeupdate', () => {
        const currentTime = Math.floor(audioPlayer.currentTime);
        currentTimeDisplay.textContent = formatTime(currentTime);
        progressRange.value = (currentTime / audioPlayer.duration) * 100;
    });

    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${minutes}:${secs < 10 ? '0' + secs : secs}`;
    }

    progressRange.addEventListener('input', () => {
        const newTime = (progressRange.value / 100) * audioPlayer.duration;
        audioPlayer.currentTime = newTime;
    });
});

/*---------------------For Tabs (reused code)--------------------------*/

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function openTab(tabname){
  for (tablink of tablinks){
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents){
    tabcontent.classList.remove("active-tab")
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab")
}

