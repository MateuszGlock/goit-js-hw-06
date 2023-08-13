const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

let docFrag = document.createDocumentFragment();
ingredients.forEach((ingredient) => {
  let li = docFrag.appendChild(document.createElement("li"));
  li.textContent = ingredient;
  li.className = "item";
});
document.getElementById("ingredients").appendChild(docFrag);
