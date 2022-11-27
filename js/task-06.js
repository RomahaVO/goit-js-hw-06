const inputEl = document.querySelector('#validation-input');

const validation = () => {
    inputEl.classList.remove('valid', 'invalid');
    inputEl.value.length === Number(inputEl.dataset.length)
        ?inputEl.classList.add('valid')
        :inputEl.classList.add('invalid')
};

inputEl.addEventListener('blur', validation);
