import './backend'
import FetchFilmsApi from './helpers/fetchFilmsApi';
import RenderApi from './helpers/renderFuncApi';
import searchMovie from './main/searchMovie';
import { spinnerOnMain } from './spinner/spinner';
import { renderMarkup } from './main/renderMainMarkup';
import { onShowFilmModal } from './modals/filmDetailsModal';
import { refs } from './helpers/refsApiServ';
import { onCreatePagination } from './pagination/pagination';

import { themeChange } from './helpers/changeTheme';
// Class
export const fetchApi = new FetchFilmsApi();
export const renderApi = new RenderApi();

// First render
spinnerOnMain.enabled({ timeDelay: 12, delayAfterStop: 400 });
renderMarkup();

// Modal film
refs.filmList.addEventListener('click', onShowFilmModal);

// Pagination
refs.pagRef.addEventListener('click', onCreatePagination);
