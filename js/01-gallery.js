import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

// Крок 1
const galleryContainer = document.querySelector('.gallery');
////Створення розмітки з файлу gallery-items
const cardsMarkup = createCardsMarkup(galleryItems);
////Вставлення розміки
galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup);

////Крок 2
galleryContainer.addEventListener('click', onImageClick);




// Функції
////Фунція, яка створює розмітку збудь-якого масивву об'єтків
function createCardsMarkup(images) {
    return images
        .map(({ preview, original, descrition }) => {
            // console.log(image.description);
            return `
<div class="gallery__item">
  <a class="gallery__link">
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
////href="${original}"

function onImageClick(e) {
  console.log(e.target.nodeName);
  if (e.target.nodeName !== 'IMG') {
    return;
  }
  console.log(e.target.getAttribute('data-source'));
  const originalImageSource = e.target.getAttribute('data-source');

  basicLightbox.create(`
		<img src="${originalImageSource}">
	`).show()

}


///Як блокувати перехід властивостіі href тегу a при кліку, не видаляючи його