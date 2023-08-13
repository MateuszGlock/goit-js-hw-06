const inputBox = document.getElementById("name-input");
let inputText = inputBox.value;
const outputBox = document.getElementById("name-output");
function outputUpdate() {
  inputText = inputBox.value;
  if (inputText !== "") {
    outputBox.textContent = inputText;
    return;
  }
  outputBox.textContent = "Anonymus";
}
inputBox.addEventListener("input", outputUpdate);
