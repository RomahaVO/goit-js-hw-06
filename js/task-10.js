
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
  const markup = createBoxes(amount).join(" ");
  updatePages(markup);
  console.dir(markup)
console.log(markup)
}



function createBoxes(amount) {
  const markup = [];
  for (let i = 0; i < amount; i ++) {
    let element = `<div style="width: ${30+i*10}px;
    height: ${30+i*10}px;
    background: ${getRandomHexColor()}"><div>`;

    markup.push(element);
  }
  return markup;
};




function updatePages(markup = "") {
  // boxes.innerHTML = flatMap(markup);
  // boxes.append(markup);
  // boxes.insertAdjacentElement("afterend",markup);
    // boxes.insertAdjacentHTML("beforeEnd",markup);
    boxes.innerHTML = markup;
  // boxes.insertAdjacentHTML("beforeend", markup);
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