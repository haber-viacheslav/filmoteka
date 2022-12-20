import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from 'firebase/auth';
import { app } from '../firebase/initFirebase';
import { currentFilmId } from '../modals/filmDetailsModal';
import { postFilmToDatabase } from './postUserIntoDb';

function addFilmToQueque(e) {
  e.preventDefault();
  const userId = getCurrentUser().uid;
  console.log(userId);
  postFilmToDatabase({ id: userId, currentFilmId, reference: 'userQueue' });
}
function addFilmToWatched(e) {
  const userId = getCurrentUser().uid;

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
  return;
}

export { addFilmToQueque, addFilmToWatched };
