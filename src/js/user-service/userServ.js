import { async } from '@firebase/util';
import { getAuth } from 'firebase/auth';
import { app } from '../firebase/initFirebase';
import { currentFilmId } from '../modals/filmDetailsModal';
import {
  currentFilmKey,
  getUserDataById,
  postFilmToDatabase,
  getFilmDataById,
} from './dataDatebaseFunc';

function addFilmToQueque(e) {
  e.preventDefault();
  const removeToQueue = document.querySelector('.film-modal__btn--queue-js ');
  const addToQueue = document.querySelector('.film-modal__btn--queue');
  addToQueue.classList.add('is-hidden');
  removeToQueue.classList.remove('is-hidden');
  const userId = getCurrentUser().uid;
  const filmKey = postFilmToDatabase({
    id: userId,
    currentFilmId,
    reference: 'userQueue',
  });
  getFilmDataById(userId, 'userQueue', filmKey);
}
function addFilmToWatched(e) {
  const userId = getCurrentUser().uid;
  const removeToWatch = document.querySelector('.film-modal__btn--watched-js');
  const addToWatch = document.querySelector('.film-modal__btn--watched');
  addToWatch.classList.add('is-hidden');
  removeToWatch.classList.remove('is-hidden');
  e.preventDefault();
  postFilmToDatabase({ id: userId, currentFilmId, reference: 'userWatched' });
}
function getCurrentUser() {
  const auth = getAuth(app);
  const user = auth.currentUser;
  if (user !== null) {
    console.log('get user');
    console.log(user);
    return user;
  }
  console.log('no user');
}
// getCurrentUser();
// console.log(getCurrentUser());
function getUserFilmsData(reference) {
  const userId = getCurrentUser().uid;
  getUserDataById(userId, reference);
}
// getUserFilmsData();

export { addFilmToQueque, addFilmToWatched, getUserFilmsData };
