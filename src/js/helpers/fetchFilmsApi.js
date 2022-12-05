import axios from 'axios';

class FetchFilmsApi {
  constructor(config = { base_url: this.BASE_URL }) {
    this.query = '';
    this.config = config;
    this.BASE_URL = 'https://api.themoviedb.org/3/';
    this.API_KEY = 'api_key=76cbb606f190fc237086ec33f1fd98a3';
  }
  fetchAllFilmsData({ typeFetch, timeWindow }) {
    axios.get(`&${API_KEY} `, this.config);
  }
  fetchSearchFilmsData() {}
}
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
