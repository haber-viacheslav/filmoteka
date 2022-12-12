import RenderApi from '../helpers/renderFuncApi';
import FetchFilmsApi from '../helpers/fetchFilmsApi';
import * as basicLightbox from 'basiclightbox';
import onShowTrailer from '../showTrailer';
import { checkFilmDetailes } from '../checkers/filmDetailesChecker';

const fetchApi = new FetchFilmsApi();
const renderApi = new RenderApi();

export async function onShowFilmModal(event) {
  if (!event.target.classList.contains('film__img')) {
    return;
  }

  document.body.style.overflow = 'hidden';

  event.currentTarget.removeEventListener('click', onShowFilmModal);

  const filmId = event.target.dataset.id;

  const moreInfo = await fetchApi.getCurrentFilm({ id: filmId });

  const moreInfoObj = checkFilmDetailes(moreInfo.data);

  const instance = basicLightbox.create(
    renderApi.createModalFilmDetails(moreInfoObj, filmId),
    {
      onShow: instance => {
        instance.element().querySelector('.film-modal__close').onclick =
          instance.close;
      },

      onClose: instance => {
        document.body.style.overflow = 'visible';
        event.target
          .closest('.films__list')
          .addEventListener('click', onShowFilmModal);
      },
    }
  );

  instance.show();

  document.addEventListener('keydown', onPressEsc, { once: true });

  function onPressEsc(e) {
    if (e.code !== 'Escape') {
      return;
    }

    instance.close();
  }

  // Trailer
  const trailerBtn = document.querySelector('.film-modal__trailer');
  trailerBtn.addEventListener('click', onShowTrailer);
  //
}
