import { getDatabase, ref, set } from 'firebase/database';
import { getDatabase, ref, onValue } from 'firebase/database';
import { refs } from '../helpers/refsApiServ';
import { app } from './init';
app;
const db = getDatabase();
function postUserIntoDatebase({ uid: userId, email, displayName }) {
  set(ref(db, `users/${userId}/userData`), {
    username: displayName,
    email: email,
  });
  console.log('add');
}

function getUserDataById(id, refLink) {
  const resp = ref(db, `users/${id}/${refLink}`);
  onValue(resp, data => {
    const userData = data.val();
    console.log(userData);
  });
}
refs.btnWatch.addEventListener('click', addFilmsToWatched);
// console.log(refs.btnWatch);
function addFilmsToWatched(e) {
  e.preventDefault();
  getUserDataById();
}
export { postUserIntoDatebase, getUserDataById };
