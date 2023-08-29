const audioPlayerElements = document.querySelectorAll('.audio-player');

audioPlayerElements.forEach((element) => {
  new GreenAudioPlayer(element);
});