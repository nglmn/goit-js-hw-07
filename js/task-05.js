function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector('body'),
  changeBtn = document.querySelector('.change-color'),
  color = document.querySelector('.color');


function changeColor() {
  body.style.backgroundColor = getRandomHexColor();
  color.textContent = getRandomHexColor();
}

changeBtn.addEventListener('click', changeColor);