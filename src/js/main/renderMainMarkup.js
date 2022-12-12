import RenderApi from '../helpers/renderFuncApi';
import FetchFilmsApi from '../helpers/fetchFilmsApi';

const fetchApi = new FetchFilmsApi();
const renderApi = new RenderApi();

export async function renderMarkup() {
  const genresObj = await fetchApi.getGenresList({});
  const genres = genresObj.data.genres;

  const films = await fetchApi.getAllFilmsData({});

  totalPages = films.data.total_pages;
  console.log(films.data.results);

  const markup = renderApi.createFilmCardsMarkup(films.data.results, genres);

  renderApi.renderMarkup({
    selector: '.films__list',
    innerHtml: true,
    createMarkypFunc: markup,
  });
}
