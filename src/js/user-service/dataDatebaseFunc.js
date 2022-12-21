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
const db = getDatabase(app);
function postUserIntoDatebase({ uid: userId, email, displayName }) {
  set(ref(db, `users/${userId}/userData`), {
    username: displayName,
    email,
  });
  console.log('add');
}

//

//

function postFilmToDatabase({ id, currentFilmId, reference }) {
  // A post entry.
  const postData = {
    film: currentFilmId,
  };
  const updates = {};
  updates[`users/${id}/${reference}/${currentFilmId}`] = postData;
  update(ref(db), updates);
  return;
}

//

function deleteDataWithDb({ id, currentFilmId, reference }) {
  remove(`users/${id}/${reference}`);
}

//
function getUserDataById(id, refLink) {
  const resp = ref(db, `users/${id}/${refLink}`);

  onValue(resp, data => {
    return data.val();
  });
}

function getFilmDataById(userId, reference, filmId) {
  get(child(ref(db), `users/${userId}/${reference}/${filmId}`))
    .then(snapshot => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        // console.log(Object.values(data));
        //   const dataObj = Object.values(data);
        //   let resp = '';
        //   for (const el of dataObj) {
        //     resp = el;
        //   }
        //   return resp;
        // } else {
        //   console.log('No data available');
      }
    })
    // .then(value => {
    //   console.log(value);

    // const data = value.flatMap(elem => Object.values(elem));

    // const res = data.filter((el, idx, arr) => !arr.includes(el));
    // console.log(res);
    // for (const el of value) {
    //   const key = Object.keys(el);
    //   console.log((objData = [...key]));
    // }
    // console.log('this', objData);
    // })
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
