import { fetchApi } from '../main';
import { renderApi } from '../main';

export async function renderMarkup() {
  const genresObj = await fetchApi.getGenresList({});
  const genres = genresObj.data.genres;

  const films = await fetchApi.getAllFilmsData({});

  const markup = renderApi.createFilmCardsMarkup(films.data.results, genres);

  renderApi.renderMarkup({
    selector: '.films__list',
    innerHtml: true,
    createMarkypFunc: markup,
  });
}
