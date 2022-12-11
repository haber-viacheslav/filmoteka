import axios from 'axios';

class FetchFilmsApi {
  #API_KEY;
  constructor(config = { baseURL: 'https://api.themoviedb.org/3/' }) {
    this.query = '';
    this.config = config;
    this.#API_KEY = '76cbb606f190fc237086ec33f1fd98a3';
    this.page = 1;
  }
  async fetchWithAllFilmsData({ mediaType, timeWindow }) {
    const resp = await axios.get(
      `trending/${mediaType}/${timeWindow}?api_key=${this.#API_KEY} `,
      this.config
    );

    return resp;
  }
  async getAllFilmsData({ mediaType = 'movie', timeWindow = 'week' }) {
    try {
      const resp = await this.fetchWithAllFilmsData({
        mediaType,
        timeWindow,
      });
      console.log(resp.data, 'WTF????!!');
      //
      //
      return resp;
    } catch (err) {
      console.log(err);
    }
  }
  async fetchWithSearchFilmData({
    typeFetch = 'search',
    mediaType = 'movie',
    lang = 'en-US',
    page = 1,
    include_adult = false,
  }) {
    const resp = await axios.get(
      `${typeFetch}/${mediaType}?api_key=${this.#API_KEY}&language=${lang}&${
        this.query
      }&page=${page}&include_adult=${include_adult}`,
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
