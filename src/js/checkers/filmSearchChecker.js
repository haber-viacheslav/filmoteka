import { getSearchedFilm } from '../main/searchMovie';
import { refs } from '../helpers/refsApiServ';

export default function getFilmSearchCheck(value) {
  if (!value) {
    getErrMessage({ addMessage: true });
    return;
  }

  getErrMessage({ addMessage: false });
  getSearchedFilm();
}

export function getErrMessage({ addMessage }) {
  if (!addMessage) {
    return refs.searchError.classList.add('is-hidden');
  }
  return refs.searchError.classList.remove('is-hidden');
}
