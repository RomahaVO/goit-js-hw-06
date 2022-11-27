const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsLi =  document.querySelector('#ingredients');

const createLi = (ingredient) => { 
  const liElements = document.createElement('li');
    liElements.textContent = ingredient;
    liElements.classList.add('item');
    return liElements;
};

const elementsLi = ingredients.map(createLi);
ingredientsLi.append(...elementsLi);


