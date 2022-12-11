import axios from 'axios';
import * as basicLightbox from 'basiclightbox';
import { BASE_URL, API_KEY } from './baseConsts';

export default async function onShowTrailer(e) {
  const idTrailer = e.currentTarget.dataset.id;

  const params = {
    api_key: API_KEY,
  };

  const showTrailersRequest = await axios.get(
    `${BASE_URL}/movie/${idTrailer}/videos`,
    {
      params,
    }
  );

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

  const instance = basicLightbox.create(`
    <iframe class='film-modal__iframe' src="https://www.youtube.com/embed/${trailer.key}" frameborder="0"></iframe>
`);

  instance.show();

  document.addEventListener('keydown', onPressEsc, { once: true });

  function onPressEsc(e) {
    if (e.code !== 'Escape') {
      return;
    }

    instance.close();
  }
}
