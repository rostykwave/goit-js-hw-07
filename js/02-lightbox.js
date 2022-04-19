import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
// Крок 1
const galleryRef = document.querySelector('.gallery');
////Створення розмітки з файлу gallery-items
const markup = makeMarkup(galleryItems);
////Вставлення розміки
galleryRef.insertAdjacentHTML('beforeend', markup);

////Крок 2
galleryRef.addEventListener('click', openModal)

function makeMarkup(images) {
    return images
        .map(({ preview, original, description }) => {
            return `
        <a class="gallery__item" href="${original}" target="_blank" rel="noopener noreferrer">
  <img 
  class="gallery__image" 
  src="${preview}" 
  alt="${description}" />
</a>
`;
        })
        .join('');
};


function openModal(e) {
    const originalImage = e.target.closest('.gallery__item').getAttribute('href');
    console.log(originalImage);
}


//////як не дозволити виконатись href////
////