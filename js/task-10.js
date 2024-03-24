function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

function createBoxes(amount) {
  const boxesContainer = document.getElementById("boxes");
  boxesContainer.innerHTML = ""; // Clear previous boxes

  let dimension = 30; // Initial dimension

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.classList.add("box");
    box.style.width = dimension + "px";
    box.style.height = dimension + "px";
    box.style.backgroundColor = getRandomHexColor();
    boxesContainer.appendChild(box);
    dimension += 10; // Increase dimension for the next box
  }
}

function destroyBoxes() {
  const boxesContainer = document.getElementById("boxes");
  boxesContainer.innerHTML = ""; // Clear all boxes
}

document.querySelector("[data-create]").addEventListener("click", function () {
  const amountInput = document.querySelector('input[type="number"]');
  const amount = parseInt(amountInput.value);
  createBoxes(amount);
});

document.querySelector("[data-destroy]").addEventListener("click", function () {
  destroyBoxes();
});
