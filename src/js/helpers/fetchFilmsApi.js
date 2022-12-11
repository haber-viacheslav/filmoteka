import axios from 'axios';

class FetchFilmsApi {
  constructor(config) {
    this.query = '';
    this.config = config;
    this.API_KEY = 'api_key=76cbb606f190fc237086ec33f1fd98a3';
    this.page = 1;
  }
  async fetchWithAllFilmsData({
    typeFetch = 'trending',
    mediaType = 'movie',
    timeWindow = 'week',
  }) {
    const resp = await axios.get(
      `${typeFetch}/${mediaType}/${timeWindow}?${this.API_KEY}`,
      this.config
    );
    return resp;
  }
  // https://api.themoviedb.org/3/search/movie?api_key=76cbb606f190fc237086ec33f1fd98a3&language=en-US&query=lord%20of%20the%20rings&page=1&include_adult=false
  async fetchWithSearchFilmData({
    typeFetch = 'search',
    mediaType = 'movie',
    lang = 'en-US',
    page = 1,
    include_adult = false,
  }) {
    console.log(
      `${this.config.baseURL}${typeFetch}/${mediaType}?${this.API_KEY}&language=${lang}&${this.query}&page=${page}&include_adult=${include_adult}`
    );
    const resp = await axios.get(
      `${typeFetch}/${mediaType}?${this.API_KEY}&language=${lang}&query=${this.query}&page=${page}&include_adult=${include_adult}`,
      this.config
    );

    return resp;
  }
  incrementPage({ step = 1 }) {
    this.page += step;
  }
  get actualPage() {
    return this.page;
  }
  set actualPage(newPage) {
    this.page = newPage;
  }
  get actualQuery() {
    return this.query;
  }
  set actualQuery(newQuery) {
    return (this.query = newQuery.trim());
  }
}
// const api = new FetchFilmsApi();

// // console.log((api.actualQuery = 'asfas       s     '));
// console.log(api.config);
export default FetchFilmsApi;
