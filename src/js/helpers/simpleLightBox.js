import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export const teamGallery = new SimpleLightbox('.team-modal__link', {
  sourceAttr: 'href',
  captionsData: 'alt',
  rel: 'nofollow',
  fileExt: 'webp|jpg',
  loop: true,
  captionDelay: 300,
  animationSpeed: 300,
  animationSlide: true,
  alertError: true,
});
