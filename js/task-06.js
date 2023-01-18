// Напиши скрипт, який під час втрати фокусу на інпуті(подія blur),
//     перевіряє його вміст щодо правильної кількості введених символів.

// Яка кількість символів повинна бути в інпуті, зазначається в його
// атрибуті data - length.
// Якщо введена правильна кількість символів, то border інпуту стає
// зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS - класи valid і invalid,
//     які ми вже додали у вихідні файли завдання.

const input = document.querySelector("#validation-input");

const inputBorder = function (event) {
  input.classList.add("invalid");

  switch (event.currentTarget.value.length) {
    case Number(event.target.dataset.length):
      input.classList.replace("invalid", "valid");
      break;
    case 0:
      input.classList.remove("invalid");
      break;
  }
};

input.addEventListener("input", inputBorder);
