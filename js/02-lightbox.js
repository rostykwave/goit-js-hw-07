import { galleryItems } from './gallery-items.js';
// Change code below this line


// Крок 1
const galleryRef = document.querySelector('.gallery');
////Створення розмітки з файлу gallery-items
const markup = makeMarkup(galleryItems);
////Вставлення розміки
galleryRef.insertAdjacentHTML('beforeend', markup);

////Крок 2 
///ініціація і модифікація підпису лайтбоксу 
var lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionSelector: 'img',
    captionType: 'attr',
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
});


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




//////Рішення як не дозволити виконатись href - запустити Simple LightBox ще до першого кліку, все решта зробиться "під капотом"
////