import { getAuth, signOut } from 'firebase/auth';
import { app } from '../firebase/initFirebase';
import { notifyInfoMessage } from '../helpers/notifyMessages';
app;
const logOut = document.querySelector('.menu__logout');
logOut.addEventListener('click', onlogOut);

function onlogOut(e) {
  e.preventDefault();
  const auth = getAuth();
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      notifyInfoMessage('You loged out!');
      location = 'http://localhost:1234/index.html';
      //   window.open();
    })
    .catch(error => {
      // An error happened.
      console.error(error);
    });
}
