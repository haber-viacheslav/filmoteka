import './firebase/backend';
import './firebase/auth';
import FetchFilmsApi from './helpers/fetchFilmsApi';
import RenderApi from './helpers/renderFuncApi';
import searchMovie from './main/searchMovie';
import { spinnerOnMain } from './spinner/spinner';
import { renderMarkup } from './main/renderMainMarkup';
import { onShowFilmModal } from './modals/filmDetailsModal';
import { refs } from './helpers/refsApiServ';
import { onCreatePagination } from './pagination/pagination';
import {
  onScroll,
  onScrollToTopBtn,
  onScrollToDownBtn,
} from './helpers/btnScroll';
import { themeChange } from './helpers/changeTheme';
import { checkLoadPageStatus } from './checkers/pageOnLoadCheker';
import './modals/modals';
import './helpers/pageChange';
import './helpers/simpleLightBox';
// Class
export const fetchApi = new FetchFilmsApi();
export const renderApi = new RenderApi();

// First render
spinnerOnMain.enabled({ timeDelay: 20 });
checkLoadPageStatus({ delayAfterStop: 400 });
renderMarkup();

// Modal film
refs.filmList.addEventListener('click', onShowFilmModal);
// Pagination
refs.pagRef.addEventListener('click', onCreatePagination);
