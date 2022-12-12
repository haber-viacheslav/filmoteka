export function checkFilmDetailes({
  poster_path,
  title,
  vote_average,
  vote_count,
  popularity,
  genres,
  overview,
}) {
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

  return {
    poster_path,
    title,
    fixedGenres,
    vote_count,
    fixedVote,
    fixedPopularity,
    overview,
  };
}
