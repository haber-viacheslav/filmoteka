import {
  getDatabase,
  ref,
  onValue,
  push,
  set,
  remove,
  child,
  get,
} from 'firebase/database';
import { app } from '../firebase/initFirebase';
import { checkDbCollectionForMatches } from './checkerDbCollectionFilms';
const db = getDatabase(app);
function postUserIntoDatebase({ uid: userId, email, displayName }) {
  set(ref(db, `users/${userId}/userData`), {
    username: displayName,
    email,
  });
  console.log('add');
}
function postFilmToDatabase({ id, currentFilmId, reference }) {
  // set(ref(db, `users/${id}/${reference}`), {
  //   [currentFilmId]: 'film',
  // });

  const postListRef = ref(db, `users/${id}/${reference}`);

  const newPostRef = push(postListRef);

  console.log('queue key:' + newPostRef.key);
  set(newPostRef, {
    [currentFilmId]: currentFilmId,
  });
  // getFilmDataById(id, 'userQueue');
  // console.log(objData);
  checkDbCollectionForMatches(id, 'userQueue');
}
function deleteDataWithDb({ id, currentFilmId, reference }) {
  remove(`users/${id}/${reference}`);
}
function getUserDataById(id, refLink) {
  const resp = ref(db, `users/${id}/${refLink}`);
  let userData = {};

  onValue(resp, data => {
    userData = data.val();
  });
  console.log('getUserFunc', userData);
  return userData;
}

function getFilmDataById(userId, reference) {
  get(child(ref(db), `users/${userId}/${reference}`))
    .then(snapshot => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        // console.log(Object.values(data));
        const dataObj = Object.values(data);
        return dataObj;
      } else {
        console.log('No data available');
      }
    })
    .then(value => {
      console.log(value);
      // const data = value.flatMap(elem => Object.values(elem));

      // const res = data.filter((el, idx, arr) => !arr.includes(el));
      // console.log(res);
      // for (const el of value) {
      //   const key = Object.keys(el);
      //   console.log((objData = [...key]));
      // }
      // console.log('this', objData);
    })
    .catch(error => {
      console.error(error);
    });
}
export {
  postUserIntoDatebase,
  getUserDataById,
  postFilmToDatabase,
  getFilmDataById,
};
