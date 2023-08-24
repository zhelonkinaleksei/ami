const audio = document.getElementById('audio');
const playPauseButton = document.getElementById('play-pause-button');
const playhead = document.getElementById('playhead');
const currentTime = document.getElementById('current-time');
const totalTime = document.getElementById('total-time');
const muteButton = document.getElementById('mute-button');
const volumeRange = document.getElementById('volume-range');

/*playPauseButton.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    playPauseButton.textContent = '⏸';
  } else {
    audio.pause();
    playPauseButton.textContent = '▶️';
  }
});*/

audio.addEventListener('timeupdate', () => {
  const progress = (audio.currentTime / audio.duration) * 100;
  playhead.style.width = `${progress}%`;

  const minutes = Math.floor(audio.currentTime / 60);
  const seconds = Math.floor(audio.currentTime % 60);
  currentTime.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
});

audio.addEventListener('durationchange', () => {
  const minutes = Math.floor(audio.duration / 60);
  const seconds = Math.floor(audio.duration % 60);
  totalTime.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
});

muteButton.addEventListener('click', () => {
  audio.muted = !audio.muted;
  muteButton.textContent = audio.muted ? '🔈' : '🔊';
});

volumeRange.addEventListener('input', () => {
  audio.volume = volumeRange.value;
});