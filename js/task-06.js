function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const createBtn = document.querySelector('.createBtn'),
  fieldForBoxes = document.querySelector('#boxes'),
  destroyBtn = document.querySelector('.destroyBtn'),
  inputField = document.querySelector('.input');

function createBoxes(event) {
  const boxesCount = inputField.value;

  for (let i = 0; i < boxesCount; i++) {
    const step = i * 10;
    const gap = 20;
    fieldForBoxes.innerHTML += `
      <div style="
        width: ${30 + step}px;
        height: ${30 + step}px;
        background-color: ${getRandomHexColor()};">
      </div>
    `;
  }
  inputField.value = '';
}


createBtn.addEventListener('click', createBoxes);
createBtn.addEventListener('click', createBoxes);