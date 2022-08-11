let keys = document.querySelectorAll(".key");
window.addEventListener("keydown", (e) => {
  console.log(e.code);
  let audio = document.querySelector(`audio[data-key="${e.code}"]`);

  console.log(audio);
  if (!audio) {
    return;
  }
  audio.play();
});
