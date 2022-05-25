import { galleryItems } from './gallery-items.js';
// Change code below this line


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
////href="${original}"


function onImageClick(e) {
  e.preventDefault()

  if (e.target.nodeName !== 'IMG') {
    return;
  }
  ////взяття посилання на оригінальну картинку
  const originalImageSource = e.target.getAttribute('data-source');

  /////Звернення до LightBox 
  const instance = basicLightbox.create(`
		<img src="${originalImageSource}">
	`,
    {
      onShow: (instance) => {
        document.addEventListener('keydown', onESCKeydown); },
      onClose: (instance) => { 
        document.removeEventListener('keydown', onESCKeydown);
      }
    });
  ///показ модалки
  instance.show();

  ///приховання модалки через кнопку ESC
  function onESCKeydown(e) {
  if (e.code === 'Escape') {
    instance.close();
    }
    ///перевірка натискання (чи реагує після закриття модалки )
    console.log(e.code);
}
}






