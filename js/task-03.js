"use strict";

const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const imagesEl = images
  .map((image) => {
    return `<li><img class= image src= ${image.url} alt='${image.alt}' width= 340px></img>
  </li>`;
  })
  .join("");

const galleryEl = document.querySelector(".gallery");
galleryEl.style.display = "flex";
galleryEl.style.flexDirection = "column";
galleryEl.style.gap = "10px";
galleryEl.insertAdjacentHTML("afterbegin", imagesEl);
