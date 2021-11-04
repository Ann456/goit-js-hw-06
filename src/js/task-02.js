const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsElContainer = document.querySelector('#ingredients');

const elements = ingredients.map((ingredient) => {
  const ingredientsEl = document.createElement('li');

  ingredientsEl.classList.add('ítem');
  ingredientsEl.textContent = ingredient;
  
  return ingredientsEl;
});

ingredientsElContainer.append(...elements);

