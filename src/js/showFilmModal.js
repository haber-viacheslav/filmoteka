import axios from 'axios';
import * as basicLightbox from 'basiclightbox';
import { BASE_URL, API_KEY } from './baseConsts';

export default async function onShowFilmModal(e) {
  if (!e.target.classList.contains('film__img')) {
    return;
  }

  document.body.style.overflow = 'hidden';

  e.currentTarget.removeEventListener('click', onShowFilmModal);

  const filmId = e.target.dataset.id;

  const params = {
    api_key: API_KEY,
  };

  const moreInfo = await axios.get(`${BASE_URL}/movie/${filmId}`, { params });

  const {
    poster_path,
    title,
    vote_average,
    vote_count,
    popularity,
    genres,
    overview,
  } = moreInfo.data;

  const fixedGenres = genres[0].name;

  const roundVote = !Number.isInteger(vote_average)
    ? vote_average.toFixed(1)
    : String(vote_average);

  const fixedVote = roundVote.includes('.0')
    ? roundVote.replace('.0', '')
    : roundVote;

  const roundPopularity = !Number.isInteger(popularity)
    ? popularity.toFixed(1)
    : String(popularity);

  const fixedPopularity = roundPopularity.includes('.0')
    ? roundPopularity.replace('.0', '')
    : roundPopularity;

  const instance = basicLightbox.create(
    `
    <div class="film__modal">
    
  <button class="film-modal__close">X</button>

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

      <div class="film-modal__wrap-btn flex">
        <button class="film-modal__btn film-modal__btn--watched">
          add to Watched
        </button>
        <button class="film-modal__btn film-modal__btn--queue">
          add to queue
        </button>
      </div>
     </div>
    </div>
`,
    {
      onShow: instance => {
        instance.element().querySelector('.film-modal__close').onclick =
          instance.close;
      },

      onClose: instance => {
        document.body.style.overflow = 'visible';
      },
    }
  );

  instance.show();

  document.addEventListener(
    'keydown',
    e => {
      if (e.code !== 'Escape') {
        return;
      }

      instance.close();
    },
    { once: true }
  );

  filmList.addEventListener('click', onShowFilmModal);
}
