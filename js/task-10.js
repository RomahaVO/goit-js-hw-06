
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
  // updatePages(markup.join(" "));
  updatePages(markup);

}



function createBoxes(amount) {
  const markup = [];
  const sizeCouter = 30 ;

  for (let i = 0; i < amount; i ++) {
    const size = sizeCouter+i*10;
    const element = `<div class="item" style="width: ${size}px;
    height: ${size}px;
    background: ${getRandomHexColor()}"><div>`;

    markup.push(element);
  }
  return markup;

}


function updatePages(markup = "") {
  // boxes.innerHTML = flatMap(markup);
  // boxes.appendChild(markup);
  // boxes.insertAdjacentElement('afterend',[markup]);
  // boxes.insertAdjacentHTML('afterend',markup);
  boxes.innerHTML = [...markup];
}



createBtn.addEventListener("click", onClick);
destroyBtn.addEventListener("click", () => {
  input.value = "";
  updatePages();
});








// const controls= document.getElementById("controls");
// const createBtn = controls.querySelector("[data-create]");
// const destroyBtn = controls.querySelector("[data-destroy]");
// const input = controls.querySelector("input");
// const boxes = document.getElementById("boxes");

// 'insertAdjacentHTML("beforeend", markup)'


// function getRandomHexColor() {
//   return #${Math.floor(Math.random() * 16777215).toString(16)};
// }
// const createBtn = document.querySelector("[data-create]");
// const destroyBtn = document.querySelector("[data-destroy]");
// const inputEl = document.querySelector('.controls');

// function onInputNumber(event) {
//   console.log(event.currentTarget.value);
// }
// function createBoxes(amount) {
//   const basicSize = 30;
//   for (let i = 0; i < amount; i+=1) {
//     const size = basicSize + i * 10;
//     const div = document.createElement("div");
//       div.style.width = "${size}px"; 
//       div.style.height = "${size}px"; 
//       div.style.background = "${getRandomHexColor()"}
        
//       boxew.appendChild(div);}



// function destroyBoxes() {
//   boxes.textContent = '';
// };



//---------------- new f...--------
// function createBoxes(amount) {
//   const basicSize = 30;
//   for (let i = 0; i < amount; i+=1) {
//     const size = basicSize + i * 10;
//     const div = document.createElement("div");
//       div.style.width = "${size}px"; 
//       div.style.height = "${size}px"; 
//       div.style.backgroundColor = "${getRandomHexColor()";
    
//       boxes.append(div);
//     }
//   }