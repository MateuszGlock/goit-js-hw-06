const counterValue = document.getElementById("value");
const decrementButton = document.querySelector(
  'button[data-action="decrement"]'
);
const incrementButton = document.querySelector(
  'button[data-action="increment"]'
);

let currentValue = 0;

function updateCounterValue() {
  counterValue.textContent = currentValue;
}

function decrement() {
  currentValue -= 1;
  updateCounterValue();
}

function increment() {
  currentValue += 1;
  updateCounterValue();
}

decrementButton.addEventListener("click", decrement);
incrementButton.addEventListener("click", increment);
