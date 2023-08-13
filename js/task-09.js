const buttonBox = document.querySelector("div > button");
const outputBox = document.querySelector("div > p > span");
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
function changeColor() {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  outputBox.textContent = randomColor;
}
buttonBox.addEventListener("click", changeColor);
