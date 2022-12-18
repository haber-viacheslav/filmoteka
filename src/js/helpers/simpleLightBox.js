import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { fetchApi } from '../main';
import { refs } from './refsApiServ';

export const teamGallery = new SimpleLightbox('.team-modal__list a', {
  sourceAttr: 'href',
  uniqueImages: true,
  captionsData: 'alt',
  rel: 'nofollow',
  loop: true,
  captionDelay: 300,
  animationSpeed: 300,
  animationSlide: true,
});

const teamSocial = new SimpleLightbox('.social__items a', {
  sourceAttr: 'href',
  uniqueImages: true,
  captionsData: 'alt',
  loop: true,
  rel: true,
  captionDelay: 300,
  animationSpeed: 300,
  animationSlide: true,
});
// teamGallery.on('show.simplelightbox');
// teamSocial.on('show.simplelightbox');
// function checkLinkIsImg(e) {
//   if (e.currentTarget.firstElementChild.className === 'team-modal__img') {
//     console.log('work');
//     // teamGallery.open();
//     // teamGallery.close();
//     // teamGallery.next();
//     // teamGallery.prev();
//     // teamGallery.destroy();
//     teamGallery.refresh();
//   }
// }
