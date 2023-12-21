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
		message.textContent = "Your number must be bigger than 1 and less than 100";
		!result;
	} else {
		message.textContent = '';
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
			const newBox = document.createElement('div');
			newBox.classList.add('box-item');
			newBox.style.width = `${30 + step}px`;
			newBox.style.height = `${30 + step}px`;
			newBox.style.backgroundColor = `${getRandomHexColor()}`

			fieldForBoxes.insertAdjacentElement('beforeend', newBox);
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