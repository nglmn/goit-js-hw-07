const inputName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');

outputName.textContent = 'Anonymus';

function writeName(e) {
    if (e.keyCode >= 65 && e.keyCode <= 90 && e.keyCode != 8) {
        outputName.textContent += e.key;
    }
    // if (e.keyCode === 32) {
    //     outputName.textContent = 'Anonymus';
    // } else 
    // else {
    //     outputName.textContent = '';
    // }

}

inputName.addEventListener('input', writeName);
// 
// inputName.addEventListener('keydown', (e) => {
//     typedName.push(e.key);
// })
// console.log(typedName);
