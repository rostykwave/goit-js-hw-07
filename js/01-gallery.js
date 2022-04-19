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

///Крок 3 ESC - додаємо слухача Escape тоді, коли модалка відкрита
// document.addEventListener('keydown', onESCKeydown);




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

  if (e.target.nodeName !== 'IMG') {
    return;
  }

  
  const originalImageSource = e.target.getAttribute('data-source');

  const instance = basicLightbox.create(`
		<img src="${originalImageSource}">
	`,
    {
      onShow: (instance) => {
        document.addEventListener('keydown', (e) => {
          if (e.code === 'Escape') {
            console.log(instance);
            instance.close();
          }
    }); },
      onClose: (instance) => { document.removeEventListener('keydown', (e) => {
          if (e.code === 'Escape') {
            console.log(instance);
            instance.close();
          }
    }); }
    });
  
  instance.show();

  ///додаємо слухача Escape тоді, коли модалка відкрита
  // document.addEventListener('keydown', onESCKeydown);

}

function onESCKeydown(e) {
  console.log(e);

  if (e.code === 'Escape') {
    console.log('key', e.key);
    console.log('code', e.code);
    // console.log(instance);
    instance.close();
  }
}



///Як з'єднати instance між двома функціями

// function onCloseModal() {
  
// document.removeEventListener('keydown', onESCKeydown);
// }


// Завдання або запитання ментору
///Як блокувати перехід властивостіі href тегу a при кліку, не видаляючи його