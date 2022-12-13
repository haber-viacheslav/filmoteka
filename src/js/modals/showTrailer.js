import * as basicLightbox from 'basiclightbox';
import RenderApi from '../helpers/renderFuncApi';
import FetchFilmsApi from '../helpers/fetchFilmsApi';
import { checkFilmTrailer } from '../checkers/filmTrailerChecker';

const fetchApi = new FetchFilmsApi();
const renderApi = new RenderApi();

export default async function onShowTrailer(e) {
  const idTrailer = e.currentTarget.dataset.id;

  const showTrailersRequest = await fetchApi.getFilmTrailerById({
    id: idTrailer,
  });

  const showTrailers = showTrailersRequest.data.results;

  if (showTrailers.length === 0) {
    const instance = basicLightbox.create(
      renderApi.createModalWithoutFilmTrailer()
    );

    instance.show();

    document.addEventListener('keydown', onPressEsc, { once: true });

    function onPressEsc(e) {
      if (e.code !== 'Escape') {
        return;
      }

      instance.close();
    }

    return;
  }

  const trailer = checkFilmTrailer(showTrailers);

  const instance = basicLightbox.create(
    renderApi.createModalFilmTrailer(trailer.key)
  );

  instance.show();

  document.addEventListener('keydown', onPressEsc, { once: true });

  function onPressEsc(e) {
    if (e.code !== 'Escape') {
      return;
    }

    instance.close();
  }
}
