// const refs = 
// document.querySelector('#value');
// document.querySelector(`button[data-action="decrement"]`);
// document.querySelector(`button[data-action="increment"]`);
// console.log(refs.dataset.decrement);

// let counterValue = 0;
// let step = 1;

// const render = () => {
//     refs.value.textContent = count;
// };

// const incrementBtn = document.querySelector(`[data-action="increment"]`);
// const decrementBtn = document.querySelector(`[data-action="increment"]`);
// const value = document.querySelector('#value');
// const wrapper = document.querySelector('#counter');

// let counterValue = 0;
// const increment = () => {
//     counterValue += 1;

//     value.textContent = counterValue;
// };

// const decrement = () => {
//     counterValue -= 1;

//     value.textContent = counterValue;
// };

// incrementBtn.addEventListener('click', increment);
// decrementBtn.addEventListener('click', decrement);

const refs = {
    spanValue: document.querySelector('#value'),
    incrementBtn: document.querySelector(`[data-action="increment"]`),
    decrementBtn: document.querySelector(`[data-action="decrement"]`),
};

let counterValue = 0;
let step = 1;

const render = () => {
        refs.spanValue.textContent = counterValue;
};

const handleDecrement = () => {
    counterValue -= step;
    render();
};

const handleIncrement = () => {
    counterValue += step;
    render();
};

// const handleStepChange = (event) => {
//     step = Number(event.target.spanValue);
// };
// render();

refs.decrementBtn.addEventListener('click', handleDecrement);
refs.incrementBtn.addEventListener('click', handleIncrement);
