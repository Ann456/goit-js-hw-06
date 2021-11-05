const divEl = document.querySelector(".widget");
const buttonEl = document.querySelector(".change-color");
const spanEl = document.querySelector(".color");

divEl.addEventListener("click", buttonElClick);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const color = getRandomHexColor();

function buttonElClick(event) {
  spanEl.textContent = getRandomHexColor();
  if (!event.target.classList.contains("change-color")) {
    return;
  }
  return (document.body.style.background = color);
}
