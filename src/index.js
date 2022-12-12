import SpinneroOnLoadingApi from './js/helpers/spinnerApi';
// import refsApiServ from './js/helpers/refsApiServ';
import './js/modals/modals';
import { BASE_URL, API_KEY } from './js/baseConsts';
import onShowTrailer from './js/showTrailer';
import axios from 'axios';
import * as basicLightbox from 'basiclightbox';

import { renderMarkup } from './js/main/renderMainMarkup';

const spinnerOnMain = new SpinneroOnLoadingApi({
  options: { backgroundColor: '#000000', svgColor: '#FF6B08' },
});
const spinnerOnList = new SpinneroOnLoadingApi({});
spinnerOnMain.enabled({ timeDelay: 12, delayAfterStop: 400 });

renderMarkup();

// Pagination
const prevPage = document.querySelector('#prev');
const currentPage = document.querySelector('#curr');
const nextPage = document.querySelector('#next');
const filmList = document.querySelector('.films__list');

let page = 1;
let totalPages = null;

filmList.addEventListener('click', onShowFilmModal);
prevPage.addEventListener('click', onShowPrevPage);
nextPage.addEventListener('click', onShowNextPage);

async function onShowFilmModal(e) {
  if (!e.target.classList.contains('film__img')) {
    return;
  }

  document.body.style.overflow = 'hidden';

  e.currentTarget.removeEventListener('click', onShowFilmModal);

  const filmId = e.target.dataset.id;

  const params = {
    api_key: API_KEY,
  };

  const moreInfo = await axios.get(`${BASE_URL}/movie/${filmId}`, { params });

  const {
    poster_path,
    title,
    vote_average,
    vote_count,
    popularity,
    genres,
    overview,
  } = moreInfo.data;

  const fixedGenres = genres[0].name;

  const roundVote = !Number.isInteger(vote_average)
    ? vote_average.toFixed(1)
    : String(vote_average);

  const fixedVote = roundVote.includes('.0')
    ? roundVote.replace('.0', '')
    : roundVote;

  const roundPopularity = !Number.isInteger(popularity)
    ? popularity.toFixed(1)
    : String(popularity);

  const fixedPopularity = roundPopularity.includes('.0')
    ? roundPopularity.replace('.0', '')
    : roundPopularity;

  const instance = basicLightbox.create(
    `
    <div class="film__modal">
    
  <button class="film-modal__close">X</button>

      <div class="film-modal__thumb">
      <img
        class="film-modal__img"
        src="https://image.tmdb.org/t/p/w500/${poster_path}"
        alt="${title}"
      />
      </div>

      <div class="film-modal__text-wrap">
      <h2 class="film-modal__title">${title}</h2>

      <ul class="film-modal__list-characteristic">
        <li class="film-modal__item-characteristic">
          <p class="film-modal__characteristic-text">
            <span class="characteristic__name characteristic__name--vote"
              >Vote / Votes</span
            ><span class="characteristic__value characteristic__value--vote">
            <span class="characteristic__vote">${fixedVote}</span> / 
            <span class="characteristic__vote characteristic__vote--count">${vote_count}</span>
            </span>
          </p>
        </li>
        <li class="film-modal__item-characteristic">
          <p class="film-modal__characteristic-text">
            <span class="characteristic__name characteristic__name--popularity"
              >Popularity</span
            ><span class="characteristic__value">${fixedPopularity}</span>
          </p>
        </li>
        <li class="film-modal__item-characteristic">
          <p class="film-modal__characteristic-text">
            <span class="characteristic__name characteristic__name--title"
              >Original Title</span
            ><span class="characteristic__value">${title}</span>
          </p>
        </li>
        <li class="film-modal__item-characteristic">
          <p class="film-modal__characteristic-text">
            <span class="characteristic__name characteristic__name--genre"
              >Genre</span
            ><span class="characteristic__value">${fixedGenres}</span>
          </p>
        </li>
      </ul>

      <h3 class="film-modal__about-film-title">About</h3>
      <p class="film-modal__about-film-text"> ${overview}
      </p>

      <button class="film-modal__trailer" data-id="${filmId}">Show trailer</button>

      <div class="film-modal__wrap-btn flex">
        <button class="film-modal__btn film-modal__btn--watched">
          add to Watched
        </button>
        <button class="film-modal__btn film-modal__btn--queue">
          add to queue
        </button>
      </div>
     </div>
    </div>
`,
    {
      onShow: instance => {
        instance.element().querySelector('.film-modal__close').onclick =
          instance.close;
      },

      onClose: instance => {
        document.body.style.overflow = 'visible';
      },
    }
  );

  instance.show();

  document.addEventListener('keydown', onPressEsc, { once: true });

  // Trailer
  const testBtn = document.querySelector('.film-modal__trailer');
  testBtn.addEventListener('click', onShowTrailer);
  //

  filmList.addEventListener('click', onShowFilmModal);

  function onPressEsc(e) {
    if (e.code !== 'Escape') {
      return;
    }

    instance.close();
  }
}

function onShowPrevPage(e) {
  if (page === 1) {
    return;
  }

  if (nextPage.classList.contains('disabled')) {
    nextPage.classList.remove('disabled');
  }

  e.currentTarget.classList.remove('disabled');

  page -= 1;

  if (page === 1) {
    e.currentTarget.classList.add('disabled');
  }

  renderMarkup();

  currentPage.innerHTML = page;
  filmList.scrollIntoView({ behavior: 'smooth' });
}

function onShowNextPage(e) {
  if (page === totalPages) {
    if (!e.currentTarget.classList.contains('disabled')) {
      e.currentTarget.classList.add('disabled');
    }
    return;
  }

  if (prevPage.classList.contains('disabled')) {
    prevPage.classList.remove('disabled');
  }

  page += 1;
  spinnerOnList.enabled({ timeDelay: 5, delayAfterStop: 200 });
  renderMarkup();

  currentPage.innerHTML = page;
  filmList.scrollIntoView({ behavior: 'smooth' });
}

// renderMarkup

//
/**
 * refsApiServ code for application
 * open this file (refsApiServ.js) and add refs you need
 * ====================
 * const refs = refsApiServ;
 *=====================
 * Example of renderAPi Copy
 *
 * ==============================
 *  const api = new RenderApi();
 *  api.renderMarkup({
 *  selector: '.film-list',
 *  innerHtml = false/true,
 *  insAdjacentHTMLtype: //'beforeend' or different//,
 *  createMarkypFunc: api.createFilmCardsMarkup([{ nap: 30 }]),
 * });
 *================================================
 *
 * Example of spinnerApi Copy
 * ========================================
 * const loader = new SpinneroOnLoadingApi({
 *   label: 'Loading..',
 *   options: { backgroundColor: '#000000', svgColor: '#FF6B08' },
 * });
 * loader.enabled();
 * ==========================================================
 *
 *
 */
//
