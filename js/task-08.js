const refs = {
    form: document.querySelector('.login-form'),
    button: document.querySelector('button[type="submit"]'),
};

refs.button.addEventListener("click", onFormSubmit);

function onFormSubmit () {
    refs.form.addEventListener("submit", handleSubmit);
};

function handleSubmit (event) {
    event.preventDefault();
    const {
        elements: {email , password},
    } = event.currentTarget;

    if (email.value === "" || password.value === "") {
        alert("Всі поля повинні бути заповнені!");
    };
    event.currentTarget.reset();
};

