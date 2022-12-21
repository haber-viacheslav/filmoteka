import RenderApi from '../helpers/renderFuncApi';
import FetchFilmsApi from '../helpers/fetchFilmsApi';
import getFilmSearchCheck from '../checkers/filmSearchChecker';
import { refs } from '../helpers/refsApiServ';
import { getErrMessage } from '../checkers/filmSearchChecker';
const renderApi = new RenderApi();

const apiSearch = new FetchFilmsApi({
  baseURL: 'https://api.themoviedb.org/3/',
});
console.log();
if (!window.location.href.includes('user-page')) {
  refs.form.addEventListener('submit', onSearchBtnClick);
} else {
  refs.form.removeEventListener('submit', onSearchBtnClick);
}

export default function onSearchBtnClick(e) {
  e.preventDefault();

  const value = e.currentTarget.elements.search_user.value.trim();

  apiSearch.actualQuery = value;
  getFilmSearchCheck(value);

  apiSearch.incrementPage({ step: 1 });
}

export async function getSearchedFilm() {
  const films = await apiSearch.getSearchFilmsData({});
  const genresObj = await apiSearch.getGenresList({});
  const genres = genresObj.data.genres;
  const filmsArrLength = films.data.results.length;

  if (!filmsArrLength) {
    refs.filmList.innerHTML = '';
    return getErrMessage({ addMessage: true });
  }

  const markup = renderApi.createFilmCardsMarkup(films.data.results, genres);

  renderApi.renderMarkup({
    selector: '.films__list',
    innerHtml: true,
    innerHTMLMarkup: '',
    insAdHtmltype: 'beforeend',
    createMarkypFunc: markup,
  });
}
