import RenderApi from '../helpers/renderFuncApi';
import FetchFilmsApi from '../helpers/fetchFilmsApi';
import * as basicLightbox from 'basiclightbox';
import onShowTrailer from './showTrailer';
import { onAuthStateChanged } from 'firebase/auth';
import { getDatabase, ref, get } from 'firebase/database';
import { app } from '../firebase/initFirebase';
import { checkFilmDetailes } from '../checkers/filmDetailesChecker';
import {
  addFilmToQueque,
  addFilmToWatched,
  deleteFilmFromQueue,
  deleteFilmFromWatched,
} from '../user-service/userServ';
import { refs } from '../helpers/refsApiServ';
const db = getDatabase(app);
const fetchApi = new FetchFilmsApi();
const renderApi = new RenderApi();
export let currentFilmId = '';

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
  //
  //
  //

  const addToQueue = document.querySelector('.film-modal__btn--queue');
  const addToWatch = document.querySelector('.film-modal__btn--watched');
  if (
    location.href === 'http://localhost:1234/user-page.html' ||
    location.href ===
      'https://haber-viacheslav.github.io/filmoteka/user-page.html'
  ) {
    addToQueue.textContent = 'Remove from Queue';
    addToQueue.classList.add('film-modal__btn-queue-active');

    addToWatch.textContent = 'Remove from Watched';
    addToWatch.classList.add('film-modal__btn-watched-active');
  }
  currentFilmId = filmId;
  addToQueue.addEventListener('click', addFilmToQueque);
  addToWatch.addEventListener('click', addFilmToWatched);

  // start 'change textContent btn'
  // console.log(addToQueue)
  // console.log(addToWatch)

  // end 'change textContent btn'

  //

  //
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
