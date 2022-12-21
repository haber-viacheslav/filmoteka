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
import {
  notifyFailureMessage,
  notifyInfoMessage,
} from '../helpers/notifyMessages';
const libFetchApi = new FetchFilmsApi();
const libRender = new RenderApi();
const db = getDatabase(app);
const auth = getAuth(app);
// default
onBtnQueueClick();
refs.btnQueue.addEventListener('click', onBtnQueueClick);
refs.btnWatched.addEventListener('click', onBtnWatchedClick);

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

            const keys = Object.keys(data);
            const resp = [];
            for (const key of keys) {
              resp.push(key);
            }
            return resp;
          }
        })
        .then(resp => {
          if (!resp) {
            notifyInfoMessage('You do not have any movies in Queue!');
            document.querySelector('.films__list--user').innerHTML = '';
            return;
          }
          const promiseArr = [];

          for (const filmId of resp) {
            const films = libFetchApi.getCurrentFilm({ id: filmId });
            promiseArr.push(films);
          }
          Promise.all(promiseArr).then(value => {
            libRender.renderMarkup({
              selector: '.films__list--user',
              innerHtml: true,
              createMarkypFunc: libRender.createFilmUserCardsMarkup(
                value,
                genres
              ),
            });
          });
        })
        .catch(err => console.error(err));
      // ...
    } else {
      notifyFailureMessage('Please Log In!');
    }
  });
}
function onBtnWatchedClick(e) {
  onAuthStateChanged(auth, user => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User

      const uid = user.uid;
      get(child(ref(db), `users/${uid}/userWatched`))
        .then(snapshot => {
          if (snapshot.exists()) {
            const data = snapshot.val();
            const keys = Object.keys(data);
            const resp = [];
            for (const key of keys) {
              resp.push(key);
            }
            return resp;
          }
        })
        .then(resp => {
          if (!resp) {
            notifyInfoMessage('You do not have any movies in Watched!');
            document.querySelector('.films__list--user').innerHTML = '';
            return;
          }
          const promiseArr = [];

          for (const filmId of resp) {
            const films = libFetchApi.getCurrentFilm({ id: filmId });
            promiseArr.push(films);
          }
          Promise.all(promiseArr).then(value => {
            libRender.renderMarkup({
              selector: '.films__list--user',
              innerHtml: true,
              createMarkypFunc: libRender.createFilmUserCardsMarkup(
                value,
                genres
              ),
            });
          });
        })
        .catch(err => console.error(err));
      // ...
    } else {
      notifyFailureMessage('Please Log In!');
    }
  });
}
