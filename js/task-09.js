function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
// console.dir(getRandomHexColor);
const body = document.body;
const btnChangeColor = body.querySelector(".change-color");
const spanColor = body.querySelector(".color");

btnChangeColor.addEventListener("click", changeColorBody);

function changeColorBody(event) {
  body.style.backgroundColor = getRandomHexColor();
  spanColor.textContent = getRandomHexColor();
  // console.dir(spanColor);
}