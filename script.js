const init = () => {
    const inputEmail = document.querySelector('input[type="email"]');
    const inputPassword = document.querySelector('input[type="password"]');
    const submitButton = document.querySelector('input[type="submit"]');

    if(submitButton) {
        submitButton.addEventListener('click', (event) => {
            event.preventDefault();

            fetch('https://regres.in/api/login', {
                method: 'POST',
                headers: {
                    'ContentType': 'application/json'
                },
                body: JSON.stringify({
                    email: inputEmail.value,
                    password: inputPassword.value,
                })
            })
        })
    }

    console.log(inputEmail, inputPassword, submitButton);
}

window.onload = init