import SpinneroOnLoadingApi from './js/helpers/spinnerApi';
// import refsApiServ from './js/helpers/refsApiServ';
import './js/modals/modals';
import FetchFilmsApi from './js/helpers/fetchFilmsApi';
import RenderApi from './js/helpers/renderFuncApi';
import { onShowPrevPage } from './js/pagination/pagination';
import { onShowNextPage } from './js/pagination/pagination';

import { renderMarkup } from './js/main/renderMainMarkup';
import { onShowFilmModal } from './js/modals/filmDetailsModal';

export const fetchApi = new FetchFilmsApi();
export const renderApi = new RenderApi();

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
const prevPage = document.querySelector('#prev');
// const currentPage = document.querySelector('#curr');
const nextPage = document.querySelector('#next');

prevPage.addEventListener('click', onShowPrevPage);
nextPage.addEventListener('click', onShowNextPage);

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
