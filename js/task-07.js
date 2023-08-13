const inputBox = document.getElementById("font-size-control");
const outputBox = document.getElementById("text");
function sizeUpdate() {
  const fontSize = inputBox.value;
  outputBox.style.fontSize = `${fontSize}px`;
}
inputBox.addEventListener("input", sizeUpdate);
