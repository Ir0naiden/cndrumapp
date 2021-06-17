function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return null;
  key.classList.add("playing");
  audio.currentTime = 0;
  audio.play();
  setTimeout(function() {
    key.classList.remove("playing");
  }, 100);
}

window.addEventListener("keydown", playSound, false);

function clickSound(part) {
  const sound = document.getElementById(part);
  sound.play();
}