import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');

// console.log(galleryContainer);

////Створення розмітки з файлу gallery-items
const cardsMarkup = createCarmsMarkup(galleryItems);
////Вставлення розміки
galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup);

////Фунція, яка створює розмітку збудь-якого масивву об'єтків
function createCarmsMarkup(images) {
    return images
        .map(({ preview, original, descrition }) => {
            // console.log(image.description);
            return `
<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${descrition}"
    />
  </a>
</div>
            `;
        })
        .join('');  
}

////Join() потрібна для об'єднання елементів масиву, створеного за допомогою map, в один рядок///

