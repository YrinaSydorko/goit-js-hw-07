import { galleryItems } from './gallery-items.js';
const galleryContainer = document.querySelector('.gallery');


const markup = galleryItems.reduce(
  (acc, { original, preview, description }) =>
    (acc += `<li>
  <a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</li>`),
  ''
);

galleryContainer.insertAdjacentHTML('beforeend', markup);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
  //<a class="gallery__link" href="large-image.jpg">
   // <img
    //  class="gallery__image"
    //  src="small-image.jpg"
    //  data-source="large-image.jpg"
    //  alt="Image description"
    ///>
  //</a>
//</li>
   //Add gallery items to list
//console.log("galleryList")