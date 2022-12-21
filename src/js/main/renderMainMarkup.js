import { fetchApi } from '../main';
import { renderApi } from '../main';
import { createPages } from '../pagination/createPages';
import {genres} from '../helpers/genres'

export async function renderMarkup() {
  
  // console.log(genres)
  const films = await fetchApi.getAllFilmsData({});

  const markup = renderApi.createFilmCardsMarkup(films.data.results, genres);

  renderApi.renderMarkup({
    selector: '.films__list',
    innerHtml: true,
    createMarkypFunc: markup,
  });

  createPages(fetchApi.actualPage, fetchApi.totalPages);
}
