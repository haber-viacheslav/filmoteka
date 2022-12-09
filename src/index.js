// import FetchFilmsApi from './js/helpers/fetchFilmsApi';
// import SpinneroOnLoadingApi from './js/helpers/spinnerApi';
// import refsApiServ from './js/helpers/refsApiServ';
// import RenderApi from './js/helpers/renderFuncApi';

import './js/helpers/modals';
import axios from 'axios';

// // 76cbb606f190fc237086ec33f1fd98a3

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '76cbb606f190fc237086ec33f1fd98a3';
const filmList = document.querySelector('.films__list');

let page = 1;
let totalPages = null;

// Pagination
const prevPage = document.querySelector('#prev');
const currentPage = document.querySelector('#curr');
const nextPage = document.querySelector('#next');
const scroolToTop = document.querySelector('.films');

prevPage.addEventListener('click', onShowPrevPage);
nextPage.addEventListener('click', onShowNextPage);

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
  scroolToTop.scrollIntoView({ behavior: 'smooth' });
}

function onShowNextPage() {
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

  renderMarkup();

  currentPage.innerHTML = page;
  scroolToTop.scrollIntoView({ behavior: 'smooth' });
}

// renderMarkup

renderMarkup();

async function renderMarkup() {
  const params = {
    api_key: API_KEY,
    page,
  };

  const genresObj = await axios.get(`${BASE_URL}/genre/movie/list`, { params });
  const genres = genresObj.data.genres;

  const films = await axios.get(`${BASE_URL}/trending/movie/day`, { params });
  totalPages = films.data.total_pages;

  const markup = films.data.results
    .map(({ poster_path, title, genre_ids, release_date }) => {
      let genreIsMany = null;
      let maxGenreIds = genre_ids;

      if (genre_ids.length > 2) {
        genreIsMany = true;
        maxGenreIds = genre_ids.slice(0, 2);
      } else {
        genreIsMany = false;
      }

      const ArrayGenresOfCurrentFilm = maxGenreIds.map(genre_id => {
        return genres.find(oneGenre => oneGenre.id === genre_id);
      });
      let genresOfCurrentFilm = ArrayGenresOfCurrentFilm.map(
        oneGenre => oneGenre.name
      ).join(', ');

      if (genreIsMany) {
        genresOfCurrentFilm += ', Other';
      }

      const date = release_date.slice(0, 4);

      return ` <li class="film">
      <div class="film__thumb">
          <img class="film__img" src="https://image.tmdb.org/t/p/w500/${poster_path}" alt="${title}" />
          </div>
          <div class="film__wrap">
        <h2 class="film__title">${title}</h2>
        <p class="film__genres">${genresOfCurrentFilm} | ${date}</p>
        </div>
      </li>`;
    })
    .join('');

  filmList.innerHTML = markup;
}

>>>>>>> main
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
