import { refs } from '../helpers/refsApiServ';
import { teamGallery, teamSocial } from '../helpers/simpleLightBox';
refs.btnOpenRef.addEventListener('click', onBtnToggle);
refs.btnCloseRef.addEventListener('click', onBtnToggle);
refs.btnOpenUserRef.addEventListener('click', onBtnToggle);
refs.btnCloseUserRef.addEventListener('click', onBtnToggle);

function onToggle() {
  refs.teamModal.classList.toggle('is-hidden');
  refs.body.classList.toggle('no-scroll');
}

function onBtnToggle() {
  onToggle();
  refs.teamModal.addEventListener('click', onBackdropClose);
  refs.body.addEventListener('keydown', onModalKeydown);
}

function onBackdropClose(e) {
  if (!e.target.classList.contains('backdrop')) {
    return;
  }
  onToggle();
  refs.body.removeEventListener('keydown', onModalKeydown);
  refs.teamModal.removeEventListener('click', onBackdropClose);
}

function onModalKeydown(e) {
  if (refs.teamModal.classList.contains('is-hidden')) {
    return;
  }
  if (e.code === 'Escape') {
    onToggle();
    refs.body.removeEventListener('keydown', onModalKeydown);
    refs.teamModal.removeEventListener('click', onBackdropClose);
  }
}
