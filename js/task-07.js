// Напиши скрипт, який реагує на зміну значення input#font - size - control
// (подія input) і змінює інлайн - стиль span#text, оновлюючи
// властивість font - size.В результаті, перетягуючи повзунок,
// буде змінюватися розмір тексту.

const inputRange = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

inputRange.addEventListener("input", fontSizeControl);

function fontSizeControl(event) {
  text.style.fontSize = event.currentTarget.value + "px";
}
