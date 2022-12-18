import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { refs } from './refsApiServ';

export const teamGallery = new SimpleLightbox('.team-modal__list  a', {
  sourceAttr: 'href',
  uniqueImages: false,
  captionClass: '.team-modal__list',
  captionsData: 'alt',
  loop: true,
  captionDelay: 300,
  animationSpeed: 300,
  animationSlide: true,
});

teamGallery.on('show.simplelightbox', checkLinkIsImg);

function checkLinkIsImg(e) {
  if (e.currentTarget.firstElementChild.className === 'team-modal__img') {
    console.log('work');
    // teamGallery.open();
    // teamGallery.close();
    // teamGallery.next();
    // teamGallery.prev();
    // teamGallery.destroy();
    teamGallery.refresh();
  }
}
