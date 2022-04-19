import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');
const markup = makeMarkup(galleryItems);
galleryRef.insertAdjacentHTML('beforeend', markup )

function makeMarkup(images) {
    return images
        .map(({ preview, original, description }) => {
            return `
        <a class="gallery__item" href="${original}">
  <img 
  class="gallery__image" 
  src="${preview}" 
  alt="${description}" />
</a>
`;
        })
        .join('');
};
