const inputName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');

const wrongKeys = ['Backspace', 'ShiftRight', 'ShiftLeft', 'Tab', 'CapsLock', 'AltLeft', 'AltRight', 'MetaLeft', 'MetaRight', 'ArrowLeft', 'ArrowRight', 'ArrowDown', 'ArrowUp'];


function writeName(e) {
    if (e.code === 'Space') {
        outputName.textContent = 'Anonymus';
    }
    if (!checkKey(e.code, wrongKeys)) {
        outputName.textContent += e.key.trim();
    }
}

function checkKey(target, arr) {
    for (let i = 0; i < arr.length; i++) {
        if (target === arr[i]) {
            return true;
        }
    }
    return false;
}

inputName.addEventListener('keydown', writeName);
