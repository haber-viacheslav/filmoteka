export function checkFilmTrailer(trailers) {
  const findTrailer = trailers.find(video => video.type === 'Trailer');

  return findTrailer === undefined ? trailers[0] : findTrailer;
}
