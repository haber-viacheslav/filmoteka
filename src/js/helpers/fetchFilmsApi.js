import axios from 'axios';

class FetchFilmsApi {

  #API_KEY;
  #totalPages;
  constructor(config = { baseURL: 'https://api.themoviedb.org/3/' }) {
    this.query = '';
    this.config = config;
    this.#API_KEY = '76cbb606f190fc237086ec33f1fd98a3';

    this.page = 1;
    this.#totalPages = null;
  }
  async fetchWithAllFilmsData({ mediaType, timeWindow }) {
    const resp = await axios.get(
      `trending/${mediaType}/${timeWindow}?api_key=${this.#API_KEY}&page=${
        this.page
      }`,
      this.config
    );

    return resp;
  }
  async getAllFilmsData({ mediaType = 'movie', timeWindow = 'day' }) {
    try {
      const resp = await this.fetchWithAllFilmsData({
        
        mediaType,
        timeWindow,
      });
    // console.log('day', resp);
      this.#totalPages = resp.data.total_pages;
      //
      //
      return resp;
    } catch (err) {
      console.log(err);
    }
  }
  async fetchWithCurrentFilm({ mediaType, id }) {
    const resp = await axios.get(
      `${mediaType}/${id}?api_key=${this.#API_KEY} `,
      this.config
    );

    return resp;
  }
  async getCurrentFilm({ mediaType = 'movie', id }) {
    try {
      const resp = await this.fetchWithCurrentFilm({
        mediaType,
        id,
      });
      //
      //
      return resp;
    } catch (err) {
      console.log(err);
    }
  }
  async fetchFilmTrailerById({ mediaType, id }) {
    const resp = await axios.get(
      `${mediaType}/${id}/videos?api_key=${this.#API_KEY} `,
      this.config
    );

    return resp;
  }
  async getFilmTrailerById({ mediaType = 'movie', id }) {
    try {
      const resp = await this.fetchFilmTrailerById({
        mediaType,
        id,
      });
      //
      //
      return resp;
    } catch (err) {
      console.log(err);
    }
  }
  async fetchWithSearchFilmData({ mediaType, lang, page, include_adult }) {
    const resp = await axios.get(
      `search/${mediaType}?api_key=${this.#API_KEY}&language=${lang}&query=${
        this.query
      }&page=${page}&include_adult=${include_adult}`,
      this.config
    );

    return resp;
  }

  //
  //
  async fetchGenresList({ mediaType, genreType, page }) {
    const resp = await axios.get(
      `genre/${mediaType}/${genreType}?api_key=${this.#API_KEY}&page=${page}`,
      this.config
    );
    // console.log('fetchGenreslist', resp)
    return resp;
  }
  // // //
  async getGenresList({ mediaType = 'movie', genreType = 'list', page = '1' }) {
    try {
      const resp = await this.fetchGenresList({ mediaType, genreType, page });
      // console.log('genreType', resp);
      return resp;
      
    } catch (error) {
      console.log(error);
    }
  }
  
  // //

  async getSearchFilmsData({
    mediaType = 'movie',
    lang = 'en-US',
    page = 1,
    include_adult = false,
  }) {
    try {
      const resp = await this.fetchWithSearchFilmData({
        mediaType,
        lang,
        page,
        include_adult,
      });
      return resp;
    } catch (error) {
      console.log(error);
    }
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
  get totalPages() {
    return this.#totalPages;
  }
  set totalPages(newValue) {
    this.#totalPages = newValue;
  }
}
// const api = new FetchFilmsApi();

// // console.log((api.actualQuery = 'asfas       s     '));
// console.log(api.config);
export default FetchFilmsApi;
