import refsApiServ from './refsApiServ';
import { checkGenreList } from '../main/genresChecker';

class RenderApi {
  constructor() {}

  createFilmCardsMarkup(data, genres) {
    return data
      .map(({ poster_path, title, genre_ids, release_date, id }) => {
        const filmGengres = checkGenreList(genre_ids, genres, release_date);

        const { date, genresOfCurrentFilm } = filmGengres;

        return ` <li class="film">
        <div class="film__thumb">
          <img data-id='${id}' class="film__img" src="https://image.tmdb.org/t/p/w500/${poster_path}" alt="${title}" />
        </div>
        <div class="film__wrap">
          <h2 class="film__title">${title}</h2>
          <p class="film__genres">${genresOfCurrentFilm} | ${date}</p>
        </div>
      </li>`;
      })
      .join('');
  }
  // createLibraryFilmCardsMarkup(data) {
  //   return data
  //     .map(
  //       ({}) =>
  //         `

  //   `
  //     )
  //     .join('');
  // }
  // createMoreFilmDetails(data) {
  //   return data
  //     .map(
  //       ({}) =>
  //         `

  //   `
  //     )
  //     .join('');
  // }
  //1 - Enter your selector like: ".films-list",
  //2 - Enter true or false to activate innerHtml before insertAdjacentHTML
  //3- Enter innerHtml value for default use -  ''
  //4 - Enter insertAdjecentHtml type for default use - 'beforeend'
  //5 - Enter createMarkup function that already has been created and put into parameters data as you need! like: { createMarkypFunc:  createMoreFi lmDetails(fetchToFilmsData()) }
  renderMarkup({
    selector,
    innerHtml = false,
    innerHTMLMarkup = '',
    insAdHtmltype = 'beforeend',
    createMarkypFunc,
  }) {
    const elem = document.querySelector(selector);
    // console.log();
    if (innerHtml) {
      elem.innerHTML = innerHTMLMarkup;
    }
    elem.insertAdjacentHTML(insAdHtmltype, createMarkypFunc);
  }
}

export default RenderApi;
//  <div class="example">
//
// </div>;
