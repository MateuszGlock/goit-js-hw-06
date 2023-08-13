const inputBox = document.getElementById("validation-input");

inputBox.addEventListener("blur", updateColour);
function updateColour() {
  let inputLength = inputBox.value.length;
  if (inputLength == inputBox.dataset.length) {
    inputBox.className = "valid";
    return;
  }
  inputBox.className = "invalid";
}
