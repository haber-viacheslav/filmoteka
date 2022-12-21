export function checkUserGenreList(genres, release_date) {
  let genreIsMany = null;
  let maxGenreIds = genres;

  if (genres.length > 2) {
    genreIsMany = true;
    maxGenreIds = genres.slice(0, 2);
  } else {
    genreIsMany = false;
  }

  // const ArrayGenresOfCurrentFilm = maxGenreIds.map(genre_id => {
  //   return genres.find(oneGenre => oneGenre.id === genre_id);
  // });
  let genresOfCurrentFilm = maxGenreIds.map(({ name }) => name).join(', ');

  if (genreIsMany) {
    maxGenreIds += ', Other';
  }

  const date = release_date.slice(0, 4);

  return { date, genresOfCurrentFilm };
}
