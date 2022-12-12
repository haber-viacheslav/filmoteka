import axios from 'axios';
import * as basicLightbox from 'basiclightbox';
import RenderApi from './helpers/renderFuncApi';
import FetchFilmsApi from './helpers/fetchFilmsApi';

const fetchApi = new FetchFilmsApi();
const renderApi = new RenderApi();

export default async function onShowTrailer(e) {
  const idTrailer = e.currentTarget.dataset.id;

  const showTrailersRequest = await fetchApi.getFilmTrailerById({
    id: idTrailer,
  });

  const showTrailers = showTrailersRequest.data.results;

  if (showTrailers.length === 0) {
    const instance =
      basicLightbox.create(`<div class="empty"><p class='empty__text'>Sorry, but this film don't have trailer :(</p></div>
`);

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

  const findTrailer = showTrailers.find(video => video.type === 'Trailer');

  const trailer = findTrailer === undefined ? showTrailers[0] : findTrailer;

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
