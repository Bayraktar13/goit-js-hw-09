function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const startButtonEl = document.querySelector('[data-start]');
const stopButtonEl = document.querySelector('[data-stop]');
const bodyEl = document.body;
let interval;

startButtonEl.addEventListener('click', setColorHandler);

function setColorHandler(event) {
  interval = setInterval(callback, 1000);
  function callback() {
    event.target.disabled = true;
    stopButtonEl.disabled = false;
    bodyEl.style.backgroundColor = getRandomHexColor();
  }
}

stopButtonEl.addEventListener('click', stopColorHandler);

function stopColorHandler(event) {
  event.target.disabled = true;
  startButtonEl.disabled = false;
  clearInterval(interval);
}
