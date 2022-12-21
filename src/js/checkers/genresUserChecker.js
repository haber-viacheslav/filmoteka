//

// [{id: 28, name: 'Action'}
// 1
// :
// {id: 12, name: 'Adventure'}
// 2
// :
// {id: 14, name: 'Fantasy'}
// 3
// :
// { id: 878, name: 'Science Fiction' }]
//
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
  console.log('genres:', date);

  return { date, genresOfCurrentFilm };
}
