import refsApiServ from './refsApiServ';
import { checkGenreList } from '../checkers/genresChecker';
import { checkUserGenreList } from '../checkers/genresUserChecker';
// import { genres } from './genres'

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
  createFilmUserCardsMarkup(data) {
    return data
      .map(({ data: { poster_path, title, release_date, id, genres } }) => {
        const filmGengres = checkUserGenreList(genres, release_date);
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
  createAuthorizatedUserHeaderMarkup() {
    return `<li class="menu__item">
            <a
              href="./index.html"
              target="_self"
              class="menu__link menu__link--current"
              >HOME</a
            >
          </li>
          <li class="menu__item">
            <a href="./user-page.html" target="_self" class="menu__link "
              >MY LIBRARY</a
            >
          </li>
         `;
  }

  createModalFilmDetails(
    {
      poster_path,
      title,
      fixedGenres,
      vote_count,
      fixedVote,
      fixedPopularity,
      overview,
    },
    filmId
  ) {
    return `
        <div class="film__modal">
        
      <button class="film-modal__close"><span class="film-modal__btn-text">&#10006</span></button>
    
          <div class="film-modal__thumb">
          <img
            class="film-modal__img"
            src="https://image.tmdb.org/t/p/w500/${poster_path}"
            alt="${title}"
          />
          </div>
    
          <div class="film-modal__text-wrap">
          <h2 class="film-modal__title">${title}</h2>
    
          <ul class="film-modal__list-characteristic">
            <li class="film-modal__item-characteristic">
              <p class="film-modal__characteristic-text">
                <span class="characteristic__name characteristic__name--vote"
                  >Vote / Votes</span
                ><span class="characteristic__value characteristic__value--vote">
                <span class="characteristic__vote">${fixedVote}</span> / 
                <span class="characteristic__vote characteristic__vote--count">${vote_count}</span>
                </span>
              </p>
            </li>
            <li class="film-modal__item-characteristic">
              <p class="film-modal__characteristic-text">
                <span class="characteristic__name characteristic__name--popularity"
                  >Popularity</span
                ><span class="characteristic__value">${fixedPopularity}</span>
              </p>
            </li>
            <li class="film-modal__item-characteristic">
              <p class="film-modal__characteristic-text">
                <span class="characteristic__name characteristic__name--title"
                  >Original Title</span
                ><span class="characteristic__value">${title}</span>
              </p>
            </li>
            <li class="film-modal__item-characteristic">
              <p class="film-modal__characteristic-text">
                <span class="characteristic__name characteristic__name--genre"
                  >Genre</span
                ><span class="characteristic__value">${fixedGenres}</span>
              </p>
            </li>
          </ul>
    
          <h3 class="film-modal__about-film-title">About</h3>
          <p class="film-modal__about-film-text"> ${overview}
          </p>
    
          <button class="modal-btn film-modal__trailer" data-id="${filmId} aria-lable="youtube"><span class="film-modal__sumbol">&#9658;</span></button>
    
          <div class="film-modal__wrap-btn flex">
            <button class="modal-btn film-modal__btn film-modal__btn--watched">add to Watched</button>
            <button class="modal-btn film-modal__btn film-modal__btn--queue">add to queue</button>



            <button class="modal-btn film-modal__btn  film-modal__btn--queue-remove-js film-modal__btn-queue-active is-hidden">
              Remove from Queue
            </button>
             <button class="modal-btn film-modal__btn film-modal__btn--watched-remove-js film-modal__btn-watched-active is-hidden">
              Remove from Watched
            </button>
            
          </div>
         </div>
        </div>
    `;
  }

  createModalFilmTrailer(key) {
    return `
    <iframe class='film-modal__iframe' src="https://www.youtube.com/embed/${key}" frameborder="0"></iframe>
`;
  }
  createModalWithoutFilmTrailer() {
    return `<div class="empty"><p class='empty__text'>Sorry, but this film don't have trailer :(</p></div>
    `;
  }
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
