//

export function checkGenreList(genre_ids, genres, release_date) {
  let genreIsMany = null;
  let maxGenreIds = genre_ids;

  console.log(maxGenreIds);
  if (genre_ids.length > 2) {
    genreIsMany = true;
    maxGenreIds = genre_ids.slice(0, 2);
  } else {
    genreIsMany = false;
  }

  const ArrayGenresOfCurrentFilm = maxGenreIds.map(genre_id => {
    return genres.find(oneGenre => oneGenre.id === genre_id);
  });
  let genresOfCurrentFilm = ArrayGenresOfCurrentFilm.map(
    oneGenre => oneGenre.name
  ).join(', ');

  if (genreIsMany) {
    genresOfCurrentFilm += ', Other';
  }

  const date = release_date.slice(0, 4);

  return { date, genresOfCurrentFilm };
}
