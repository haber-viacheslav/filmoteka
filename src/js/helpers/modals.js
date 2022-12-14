import { refs } from './refsApiServ';

refs.btnOpenRef.addEventListener('click', onBtnToggle);
refs.btnCloseRef.addEventListener('click', onBtnToggle);
refs.body.addEventListener('keydown', onModalKeydown);
refs.teamModal.addEventListener('click', onBackdropClose);

function onToggle() {
  refs.teamModal.classList.toggle('is-hidden');
  refs.body.classList.toggle('no-scroll');
}

function onBtnToggle() {
  onToggle();
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
