import { refs } from '../helpers/refsApiServ';
import { teamGallery } from '../helpers/simpleLightBox';
refs.btnOpenRef.addEventListener('click', onOpenBtn);
refs.btnCloseRef.addEventListener('click', onCloseBtn);
// refs.btnOpenUserRef.addEventListener('click', onOpenBtn);
// refs.btnCloseUserRef.addEventListener('click', onCloseBtn);

function onCloseBtn() {
  onToggle();

  onRemoveListners();
}
function onOpenBtn() {
  onToggle();
  onAddListeners();
}

function onBackdropClose(e) {
  if (!e.target.classList.contains('backdrop')) {
    return;
  }
  onToggle();
  onRemoveListners();
}

function onModalKeydown(e) {
  if (teamGallery.on('shown.simplelightbox', onRemoveListners)) {
    teamGallery.on('closed.simplelightbox', onAddListeners);
  }
  if (e.code === 'Escape') {
    onToggle();
    onRemoveListners();
  }
}
// Toggle modal classes
function onToggle() {
  refs.teamModal.classList.toggle('is-hidden');
  refs.body.classList.toggle('no-scroll');
}

// addEventListeners
function onAddListeners() {
  refs.teamModal.addEventListener('click', onBackdropClose);
  refs.body.addEventListener('keydown', onModalKeydown);
}

// removeEventListeners
function onRemoveListners() {
  refs.body.removeEventListener('keydown', onModalKeydown);
  refs.teamModal.removeEventListener('click', onBackdropClose);
}
