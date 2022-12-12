import { refs } from '../helpers/refsApiServ';

refs.btnOpenRef.addEventListener('click', onBtnToggle);
refs.btnCloseRef.addEventListener('click', onBtnToggle);
refs.body.addEventListener('keydown', onModalKeydown);

function onBtnToggle() {
  refs.teamModal.classList.toggle('is-hidden');
  refs.body.classList.toggle('no-scroll');
}

function onModalKeydown(event) {
  if (refs.teamModal.classList.contains('is-hidden')) {
    return;
  }
  if (event.code === 'Escape') {
    console.log('Esc Pressed');

    onBtnToggle();
  }
}
for (const link of refs.teamLinks) {
  link.addEventListener('click', onCancelTeamLink);
}
function onCancelTeamLink(e) {
  e.preventDefault();
}
