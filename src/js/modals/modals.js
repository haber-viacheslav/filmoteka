import { refs } from '../helpers/refsApiServ';
import { teamGallery } from '../helpers/simpleLightBox';
refs.btnOpenRef.addEventListener('click', onBtnToggle);
refs.btnCloseRef.addEventListener('click', onBtnToggle);
refs.body.addEventListener('keydown', onModalKeydown);

function onToggle() {
  refs.teamModal.classList.toggle('is-hidden');
  refs.body.classList.toggle('no-scroll');
}

function onBtnToggle() {
  onToggle();
  refs.teamModal.addEventListener('click', onBackdropClose);
}

function onBackdropClose(e) {
  if (!e.target.classList.contains('backdrop')) {
    return;
  }
  onToggle();
}

function onModalKeydown(e) {
  if (refs.teamModal.classList.contains('is-hidden')) {
    return;
  }
  if (e.code === 'Escape') {
    onToggle();
  }

  refs.teamModal.removeEventListener('click', onBackdropClose);
}
