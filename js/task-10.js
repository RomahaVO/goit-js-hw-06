
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const controls= document.getElementById("controls");
const createBtn = controls.querySelector("[data-create]");
const destroyBtn = controls.querySelector("[data-destroy]");
const input = controls.querySelector("input");
const boxes = document.getElementById("boxes");

function onClick() {
  const amount = input.valueAsNumber;
  if (!amount) return;
  const markup = createBoxes(amount);
  updatePages(markup);
}


function createBoxes(amount) {
  const markup = [];
  let sizeCouter = 30 ;
  for (let i = 0; i < amount; i ++) {
    const element = `<div class="item" style="width: ${sizeCouter}px;
    height: ${sizeCouter}px;
    background: ${getRandomHexColor()}"><div>`;
    sizeCouter += 10;

    markup.push(element);
  }
  return markup;
}


function updatePages(markup = "") {
  boxes.innerHTML = markup;
}


createBtn.addEventListener("click", onClick);
destroyBtn.addEventListener("click", () => {
  input.value = "";
  updatePages();
});