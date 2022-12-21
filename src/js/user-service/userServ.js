import { async } from '@firebase/util';
import { getAuth } from 'firebase/auth';
import { app } from '../firebase/initFirebase';
import { notifyFailureMessage } from '../helpers/notifyMessages';
import { currentFilmId } from '../modals/filmDetailsModal';
import {
  currentFilmKey,
  getUserDataById,
  postFilmToDatabase,
  getFilmDataById,
  deleteDataWithDb,
} from './dataDatebaseFunc';
// const userId = getCurrentUser().uid;
// if (!userId) {
//   return notifyFailureMessage(
//     'Something went wrong! Maybe you are not Sign In'
//   );
// } else {

// }
const auth = getAuth(app);
// const userId = getCurrentUser().uid;
function addFilmToQueque(e) {
  e.preventDefault();
  const addToQueue = document.querySelector('.film-modal__btn--queue');
  const userId = getCurrentUser().uid;

  if (!userId) {
    return notifyFailureMessage(
      'Something went wrong! Maybe you are not Sign In'
    );
  } else {
    const default_label = 'add to queue';
    if (addToQueue.textContent === default_label) {
      const filmKey = postFilmToDatabase({
        id: userId,
        currentFilmId,
        reference: 'userQueue',
      });

      getFilmDataById(userId, 'userQueue', filmKey);
      //
      //

      //
      //
      addToQueue.disabled = true;
      setTimeout(() => (addToQueue.disabled = false), 2000);
      addToQueue.textContent = 'Remove from Queue';
      addToQueue.classList.add('film-modal__btn-queue-active');
    } else {
      deleteFilmFromQueue();
      addToQueue.textContent = default_label;
      addToQueue.classList.remove('film-modal__btn-queue-active');
      addToQueue.disabled = true;
      setTimeout(() => (addToQueue.disabled = false), 2000);
      location.reload();
    }
  }
}
function addFilmToWatched(e) {
  e.preventDefault();
  const userId = getCurrentUser().uid;
  // if (!userId) {
  //   return notifyFailureMessage(
  //     'Something went wrong! Maybe you are not Sign In'
  //   );
  if (!userId) {
    return notifyFailureMessage(
      'Something went wrong! Maybe you are not Sign In'
    );
  } else {
    const addToWatch = document.querySelector('.film-modal__btn--watched');
    const default_label = 'add to Watched';
    if (addToWatch.textContent === default_label) {
      const filmKey = postFilmToDatabase({
        id: userId,
        currentFilmId,
        reference: 'userWatched',
      });

      getFilmDataById(userId, 'userWatched', filmKey);
      addToWatch.disabled = true;
      setTimeout(() => (addToWatch.disabled = false), 2000);
      addToWatch.textContent = 'Remove from Watched';
      addToWatch.classList.add('film-modal__btn-watched-active');
    } else {
      deleteFilmFromWatched();
      addToWatch.textContent = default_label;
      addToWatch.classList.remove('film-modal__btn-watched-active');
      addToWatch.disabled = true;
      setTimeout(() => (addToWatch.disabled = false), 2000);
    }
  }
}
/**
 *
 * @param {*}
 * DELETE FROM WATCHED
 */
function deleteFilmFromWatched() {
  const userId = getCurrentUser().uid;
  if (!userId) {
    return notifyFailureMessage(
      'Something went wrong! Maybe you are not Sign In'
    );
  } else {
    deleteDataWithDb({ id: userId, currentFilmId, reference: 'userWatched' });
  }
}
/**
 *
 * @param {*}
 * DELETE FROM QUEUE
 */
function deleteFilmFromQueue() {
  const userId = getCurrentUser().uid;
  if (!userId) {
    return notifyFailureMessage(
      'Something went wrong! Maybe you are not Sign In'
    );
  } else {
    deleteDataWithDb({ id: userId, currentFilmId, reference: 'userQueue' });
  }
}
function getCurrentUser() {
  const user = auth.currentUser;
  if (user !== null) {
    return user;
  }
  return false;
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
