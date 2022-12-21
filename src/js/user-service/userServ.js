import { async } from '@firebase/util';
import { getAuth } from 'firebase/auth';
import { app } from '../firebase/initFirebase';
import { currentFilmId } from '../modals/filmDetailsModal';
import {
  currentFilmKey,
  getUserDataById,
  postFilmToDatabase,
  getFilmDataById,
  deleteDataWithDb,
} from './dataDatebaseFunc';

function addFilmToQueque(e) {
  e.preventDefault();
  const addToQueue = document.querySelector('.film-modal__btn--queue');
  const userId = getCurrentUser().uid;
  const default_label = 'add to queue';
  console.log(addToQueue.textContent);
  if (addToQueue.textContent === default_label) {
    const filmKey = postFilmToDatabase({
      id: userId,
      currentFilmId,
      reference: 'userQueue',
    });
    console.log('before getFilmDatat func');
    getFilmDataById(userId, 'userQueue', filmKey);
    addToQueue.disabled = true;
    setTimeout(() => (addToQueue.disabled = false), 2000);
    addToQueue.textContent = 'Remove from Queue';
  } else {
    deleteFilmFromQueue();
    addToQueue.textContent = default_label;
    addToQueue.disabled = true;
    setTimeout(() => (addToQueue.disabled = false), 2000);
  }
}
function addFilmToWatched(e) {
  e.preventDefault();
  const userId = getCurrentUser().uid;

  const addToWatch = document.querySelector('.film-modal__btn--watched');
  const default_label = 'add to queue';
  console.log(addToWatch.textContent);
  if (addToWatch.textContent === default_label) {
    const filmKey = postFilmToDatabase({
      id: userId,
      currentFilmId,
      reference: 'userQueue',
    });
    console.log('before getFilmDatat func');
    getFilmDataById(userId, 'userQueue', filmKey);
    addToWatch.disabled = true;
    setTimeout(() => (addToWatch.disabled = false), 2000);
    addToWatch.textContent = 'Remove from Queue';
  } else {
    console.log('before deleteFilm func');
    deleteFilmFromWatched()();
    addToWatch.textContent = default_label;
    addToWatch.disabled = true;
    setTimeout(() => (addToWatch.disabled = false), 2000);
  }
}
/**
 *
 * @param {*}
 * DELETE FROM WATCHED
 */
function deleteFilmFromWatched() {
  const userId = getCurrentUser().uid;
  deleteDataWithDb({ id: userId, currentFilmId, reference: 'userWatched' });
}
/**
 *
 * @param {*}
 * DELETE FROM QUEUE
 */
function deleteFilmFromQueue() {
  const userId = getCurrentUser().uid;
  deleteDataWithDb({ id: userId, currentFilmId, reference: 'userQueue' });
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

export {
  addFilmToQueque,
  addFilmToWatched,
  getUserFilmsData,
  deleteFilmFromWatched,
  deleteFilmFromQueue,
};
