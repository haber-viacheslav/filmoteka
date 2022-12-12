import SpinneroOnLoadingApi from './js/helpers/spinnerApi';
// import refsApiServ from './js/helpers/refsApiServ';
import './js/modals/modals';

import { renderMarkup } from './js/main/renderMainMarkup';
import { onShowFilmModal } from './js/modals/filmDetailsModal';

// Spiner
const spinnerOnMain = new SpinneroOnLoadingApi({
  options: { backgroundColor: '#000000', svgColor: '#FF6B08' },
});
const spinnerOnList = new SpinneroOnLoadingApi({});
spinnerOnMain.enabled({ timeDelay: 12, delayAfterStop: 400 });

// First render
renderMarkup();

const filmList = document.querySelector('.films__list');
filmList.addEventListener('click', onShowFilmModal);

// Pagination
// const prevPage = document.querySelector('#prev');
// const currentPage = document.querySelector('#curr');
// const nextPage = document.querySelector('#next');

// let page = 1;
// let totalPages = null;

// prevPage.addEventListener('click', onShowPrevPage);
// nextPage.addEventListener('click', onShowNextPage);

// function onShowPrevPage(e) {
//   if (page === 1) {
//     return;
//   }

//   if (nextPage.classList.contains('disabled')) {
//     nextPage.classList.remove('disabled');
//   }

//   e.currentTarget.classList.remove('disabled');

//   page -= 1;

//   if (page === 1) {
//     e.currentTarget.classList.add('disabled');
//   }

//   renderMarkup();

//   currentPage.innerHTML = page;
//   filmList.scrollIntoView({ behavior: 'smooth' });
// }

// function onShowNextPage(e) {
//   if (page === totalPages) {
//     if (!e.currentTarget.classList.contains('disabled')) {
//       e.currentTarget.classList.add('disabled');
//     }
//     return;
//   }

//   if (prevPage.classList.contains('disabled')) {
//     prevPage.classList.remove('disabled');
//   }

//   page += 1;
//   spinnerOnList.enabled({ timeDelay: 5, delayAfterStop: 200 });
//   renderMarkup();

//   currentPage.innerHTML = page;
//   filmList.scrollIntoView({ behavior: 'smooth' });
// }

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
