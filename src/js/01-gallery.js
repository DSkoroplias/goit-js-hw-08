// Add imports above this line
import { galleryItems } from './gallery-items';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Change code below this line

console.log(galleryItems);

const refs = {
  gallery: document.querySelector('.gallery'),
  cardsGallery: getItemGallery(galleryItems),
  //   modalSource: instance.element().querySelector("img"),
};

refs.gallery.insertAdjacentHTML('beforeend', refs.cardsGallery);

function getItemGallery(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>`;
    })
    .join('');
}

let gallery = new SimpleLightbox('.gallery a', {
  navText: ['←', '→'],
  captionsData: 'alt',
  captionDelay: '250',
  doubleTapZoom: '2',
});
