// Порахує і виведе в консоль кількість
//  категорій в ul#categories, тобто елементів
// li.item.
// Для кожного элемента li.item у списку
// ul#categories, знайде і виведе в консоль
//  текст заголовку елемента(тегу < h2 >) і
//  кількість елементів в категорії(усіх < li >, вкладених в нього).
// В результаті, в консолі будуть виведені
//  наступні повідомлення.

// //вариант - 1
const totalCategories = document.querySelectorAll(".item");
console.log(`Number of ${totalCategories.length} categories.`);

const categoriesArray = [...totalCategories]
  .map(
    (categories) => `Category: ${categories.children[0].textContent}
Elements: ${categories.children[1].children.length}`
  )
  .join("\n");
console.log(categoriesArray);

//вариант - 2

// const allItems = document.querySelectorAll(".item");
// const allItemsQty = allItems.length;

// console.log(`Number of ${allItemsQty} categories.`);
// allItems.forEach((element) => {
//   let elementTitle = element.querySelector("h2").textContent;

//   let oneTitleElements = element.querySelectorAll("li");
//   let oneTitleElemntsQty = oneTitleElements.length;

//   console.log(elementTitle);
//   console.log(oneTitleElemntsQty);
// });
