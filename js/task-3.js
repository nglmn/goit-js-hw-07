const inputName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');

const defaultName = 'Anonymous';
outputName.textContent = defaultName;

function writeName(event) {
    if (event.target.value.trim() === '') {
        outputName.textContent = defaultName;
    } else {
        outputName.textContent = event.target.value.trim();
    }
}

inputName.addEventListener('input', writeName);