import axios from 'axios';

class FetchFilmsApi {
  #API_KEY;
  constructor(config = { baseURL: 'https://api.themoviedb.org/3/' }) {
    this.query = '';
    this.config = config;
    this.#API_KEY = 'api_key=76cbb606f190fc237086ec33f1fd98a3';
    this.page = 1;
  }
  async fetchWithAllFilmsData({
    typeFetch = 'trending',
    mediaType = 'movie',
    timeWindow = 'week',
  }) {
    const resp = await axios.get(
      `${typeFetch}/${mediaType}/${timeWindow}&${this.#API_KEY} `,
      this.config
    );
    return resp;
  }
  async fetchWithSearchFilmData({
    typeFetch = 'search',
    mediaType = 'movie',
    lang = 'en-US',
    page = 1,
    include_adult = false,
  }) {
    const resp = await axios.get(
      `${typeFetch}/${mediaType}&${this.#API_KEY}&language=${lang}&${
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
const api = new FetchFilmsApi();

// console.log((api.actualQuery = 'asfas       s     '));
console.log(api.config);
export default FetchFilmsApi;

//**Hi JOKERcs,

// Your request for an API key has been approved. You can start using this key immediately.

// API Key: 76cbb606f190fc237086ec33f1fd98a3

// Here's an example API request:

// https://api.themoviedb.org/3/movie/550?api_key=76cbb606f190fc237086ec33f1fd98a3
// Useful Links

// Documentation: https://developers.themoviedb.org/3/getting-started/introduction
// Support forum: https://www.themoviedb.org/talk/category/5047958519c29526b50017d6
// Wrappers & libraries: https://www.themoviedb.org/documentation/api/wrappers-libraries
// Service status: https://status.themoviedb.org
// If you have any questions, feel free to create a new discussion in our support forum.

// --
// The Movie Database Team
// https://www.themoviedb.org */
