
const form = document.querySelector('.login-form');

function sendForm(event) {
    let resultObj = {};
    event.preventDefault();
    const mailValue = event.target.elements.email.value;
    const passwordValue = event.target.elements.password.value;

    if (mailValue.trim() === '' || passwordValue.trim() === '') {
        alert('All form fields must be filled in');
    } else {
        resultObj = {
            mailValue: mailValue.trim(),
            passwordValue: passwordValue.trim(),
        };
        console.log(resultObj);
        form.reset();
    }
}

form.addEventListener('submit', sendForm);