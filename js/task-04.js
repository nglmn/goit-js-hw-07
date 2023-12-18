
const form = document.querySelector('.login-form');

function sendForm(event) {
    let resulObj = {};
    event.preventDefault();
    const mail = event.target.elements.email.value;
    const password = event.target.elements.password.value;

    if (mail === '' || password === '') {
        alert('All form fields must be filled in');
    } else {
        resulObj = {
            mail: mail.trim(),
            password: password.trim(),
        };
    }
    console.log(resulObj);
    form.reset();

}

form.addEventListener('submit', sendForm);