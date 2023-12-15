const inputName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');

const defaultName = 'Anonymus';
outputName.textContent = defaultName;

function writeName(event) {
    if (event.target.value === '' || event.code == '32') {
        outputName.textContent = defaultName;
    } else {
        outputName.textContent = event.target.value;
    }
}

inputName.addEventListener('input', writeName);