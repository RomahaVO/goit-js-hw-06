const itemsElement = document.querySelectorAll(".item");
console.log(`Number of categories: ${itemsElement.length}`);
console.log('');
itemsElement.forEach((item) => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  const listElement = item.lastElementChild;
    console.log(`Elements: ${listElement.children.length}`);
    console.log('');
});
