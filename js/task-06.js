function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const createBtn = document.querySelector('.createBtn'),
  fieldForBoxes = document.querySelector('#boxes'),
  destroyBtn = document.querySelector('.destroyBtn'),
  inputField = document.querySelector('.input');

let userValue = null;
function getInputValue(event) {
  userValue = event.target.value
  return userValue;
}

// function createBoxes(event) {
//   console.log(event.target);
// }

userValue = inputField.addEventListener('change', getInputValue);
console.log(userValue);
// createBtn.addEventListener('click', createBoxes);
