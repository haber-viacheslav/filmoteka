import {
  getDatabase,
  ref,
  onValue,
  push,
  set,
  remove,
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
let count = 0;
function postFilmToDatabase({ id, currentFilmId, reference }) {
  // set(ref(db, `users/${id}/${reference}`), {
  //   [currentFilmId]: 'film',
  // });

  const postListRef = ref(db, `users/${id}/${reference}`);
  const newPostRef = push(postListRef);
  set(newPostRef, {
    currentFilmId,
  });
}
function deleteDataWithDb({ id, currentFilmId, reference }) {
  remove(`users/${id}/${reference}`);
}
function getUserDataById(id, refLink) {
  const resp = ref(db, `users/${id}/${refLink}`);
  onValue(resp, data => {
    const userData = data.val();
    console.log(userData);
  });
}

export { postUserIntoDatebase, getUserDataById, postFilmToDatabase };
