const buttonEl = document.querySelector(".change-color");
const spanEl = document.querySelector(".color");

buttonEl.addEventListener("click", buttonElClick);

function buttonElClick() {
  spanEl.textContent = getRandomHexColor();
  document.body.style.background = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}