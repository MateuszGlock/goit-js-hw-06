// JavaScript
const categoriesList = document.querySelectorAll("ul#categories > li.item");

// Liczenie liczby kategorii
const numberOfCategories = categoriesList.length;
console.log(`Number of categories: ${numberOfCategories}\n`);

// Pętla dla każdego elementu li.item
categoriesList.forEach((category) => {
  // Pobieranie nagłówka elementu
  const header = category.querySelector("h2").textContent;

  // Pobieranie liczby elementów w danej kategorii
  const elements = category.querySelectorAll("ul > li").length;

  // Wypisanie w konsoli nazwy kategorii i liczby elementów
  console.log(`Category: ${header}`);
  console.log(`Elements: ${elements}\n`);
});
