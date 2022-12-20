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
import { fetchApi, renderApi } from '../main';

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
            const keys = Object.values(data);
            const resp = [];
            for (const key of keys) {
              resp.push(key);
            }
            //   const baseValues = Object
            const base = resp.map(el => el['currentFilmId']);
            console.log(base);
            return base;
          }
        })
        .then(resp => {
          fetchApi.getCurrentFilm();

          const markup = renderApi.createFilmCardsMarkup(
            films.data.results,
            genres
          );

          renderApi.renderMarkup({
            selector: '.films__list',
            innerHtml: true,
            createMarkypFunc: markup,
          });
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
