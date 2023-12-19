function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}


const createBtn = document.querySelector('.createBtn'),
	fieldForBoxes = document.querySelector('#boxes'),
	destroyBtn = document.querySelector('.destroyBtn'),
	inputField = document.querySelector('.input'),
	message = document.querySelector('.warning-message');


function validateInput(value) {
	let result = true;
	if (value > 100 || value < 1) {
		message.classList.add('visible');
		!result;
	} else {
		message.classList.remove('visible');
		result;
	}
	return result;
}


const createBoxes = () => {
	destroyBoxes();
	const boxesCount = inputField.value;
	if (validateInput(boxesCount)) {
		for (let i = 0; i < boxesCount; i++) {
			const step = i * 10;
			fieldForBoxes.innerHTML += `
      <div class="box-item" style="
        width: ${30 + step}px;
        height: ${30 + step}px;
		
        background-color: ${getRandomHexColor()};"
      ></div>
    `;
		}
		inputField.value = '';
	}
}

function destroyBoxes() {
	while (fieldForBoxes.firstChild) {
		fieldForBoxes.firstChild.remove();
	}
}


createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);