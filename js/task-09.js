function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
// console.dir(getRandomHexColor);
const body = document.body;
const btnChangeColor = body.querySelector(".change-color");
const spanColor = body.querySelector(".color");

btnChangeColor.addEventListener("click", changeColorBody);

function changeColorBody(event) {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  spanColor.textContent = color;
  // console.dir(spanColor);
}