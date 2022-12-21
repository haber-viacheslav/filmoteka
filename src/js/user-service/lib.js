import { async } from '@firebase/util';
import { onAuthStateChanged, getAuth } from 'firebase/auth';
import {
  getDatabase,
  ref,
  onValue,
  push,
  set,
  remove,
  child,
  get,
  update,
} from 'firebase/database';
import { app } from '../firebase/initFirebase';
import { refs } from '../helpers/refsApiServ';
import { genres } from '../helpers/genres';

import RenderApi from '../helpers/renderFuncApi';
import FetchFilmsApi from '../helpers/fetchFilmsApi';
const libFetchApi = new FetchFilmsApi();
const libRender = new RenderApi();

refs.btnQueue.addEventListener('click', onBtnQueueClick);
refs.btnWatched.addEventListener('click', onBtnWatchedClick);
const db = getDatabase(app);
const auth = getAuth(app);
function onBtnQueueClick(e) {
  onAuthStateChanged(auth, user => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User

      const uid = user.uid;
      get(child(ref(db), `users/${uid}/userQueue`))
        .then(snapshot => {
          if (snapshot.exists()) {
            const data = snapshot.val();
            console.log(data);
            const keys = Object.keys(data);
            const resp = [];
            for (const key of keys) {
              resp.push(key);
            }
            //   const baseValues = Object
            console.log(resp);
            return resp;
          }
        })
        .then(resp => {
          console.log(resp);
          const promiseArr = [];

          for (const filmId of resp) {
            const films = libFetchApi.getCurrentFilm({ id: filmId });
            promiseArr.push(films);
          }
          Promise.all(promiseArr).then(value => {
            // for (const filmObj of value) {
            //   // console.log();

            // }
            libRender.renderMarkup({
              selector: '.films__list--user',
              innerHtml: true,
              createMarkypFunc: libRender.createFilmCardsMarkup(value, genres),
            });
          });

          // async function processFetchData(resp) {
          //   // const data = resp.map(filmId => {

          //   //   console.log(films);
          //   // });
          //
          //   console.log(data);
          // }
          // processFetchData(resp);

          // const markup = renderApi.createFilmCardsMarkup(
          //   films.data.results,
          //   genres
          // );
          // renderApi.renderMarkup({
          //   selector: '.films__list',
          //   innerHtml: true,
          //   createMarkypFunc: markup,
          // });
        })
        .catch(err => console.error(err));
      // ...
    } else {
      // User is signed out
      // ...

      console.log('not authorizate');
      //   location.reload();
    }
  });
}
function onBtnWatchedClick(e) {}
