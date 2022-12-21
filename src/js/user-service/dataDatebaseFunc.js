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
import { notifySuccessMessage } from '../helpers/notifyMessages';
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
  return notifySuccessMessage('Film has been added');
}

//

function deleteDataWithDb({ id, currentFilmId, reference }) {
  set(ref(db, `users/${id}/${reference}/${currentFilmId}`), null);
  notifySuccessMessage('Film has been removed');
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
      }
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
  deleteDataWithDb,
};
