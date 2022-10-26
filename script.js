let keys = document.querySelectorAll(".key");

window.addEventListener("keydown", (e) => {
  console.log(e.code);
  let audio = document.querySelector(`audio[data-key="${e.code}"]`);
  let div = document.querySelector(`div[data-key="${e.code}"]`);

  if (!audio) {
    return;
  }
  audio.currentTime = 0;
  audio.play();
  div.classList.add("active");
});
keys.forEach((elem) => {
  elem.addEventListener("transitionend", () => {
    elem.classList.remove("active");
  });
});
//making for click-event;
keys.forEach((elem) => {
  elem.addEventListener("click", (e) => {
    let attribute = elem.getAttribute("data-key");
    let audio = document.querySelector(`audio[data-key="${attribute}"]`);
    if (!audio) {
      return;
    }
    audio.currentTime = 0;
    audio.play();
    elem.classList.add("active");
  });
});
