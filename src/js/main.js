import FetchFilmsApi from './helpers/fetchFilmsApi';
import RenderApi from './helpers/renderFuncApi';
import { spinnerOnMain } from './spinner/spinner';
import { onShowPrevPage } from './pagination/pagination';
import { onShowNextPage } from './pagination/pagination';
import { renderMarkup } from './main/renderMainMarkup';
import { onShowFilmModal } from './modals/filmDetailsModal';

// Class
export const fetchApi = new FetchFilmsApi();
export const renderApi = new RenderApi();

// First render
spinnerOnMain.enabled({ timeDelay: 12, delayAfterStop: 400 });
renderMarkup();

// Modal film
const filmList = document.querySelector('.films__list');
filmList.addEventListener('click', onShowFilmModal);

// Pagination
const prevPage = document.querySelector('#prev');
const nextPage = document.querySelector('#next');

prevPage.addEventListener('click', onShowPrevPage);
nextPage.addEventListener('click', onShowNextPage);
