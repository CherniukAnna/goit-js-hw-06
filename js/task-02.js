const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const itemEl = ingredients.map((ingredient) => {
  const title = document.createElement("li");
  title.textContent = ingredient;
  return title;
});

console.log(itemEl);

const listEl = document.querySelector("ul");
listEl.append(...itemEl);

console.log(listEl);

// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент < li >.Обов'язково використовуй
//  метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі < li > за одну операцію у список
//  ul#ingredients.
