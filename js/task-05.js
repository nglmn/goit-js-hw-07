function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const widget = document.querySelector('.widget'),
  changeBtn = widget.querySelector('.change-color');


function changeColor() {
  return widget.style.backgroundColor = getRandomHexColor();
}

changeBtn.addEventListener('click', changeColor);