import { app } from './initFirebase';
import {
  notifySuccessMessage,
  notifyInfoMessage,
} from '../helpers/notifyMessages';

import { postUserIntoDatebase, getUserDataById } from './postUserIntoDb';
// Initialize Firebase
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from 'firebase/auth';
app;
// // SIGN IN

const signInLinck = document.querySelector('.menu__link-js');
// console.log(signIn.href);
// if ((window.location.href = 'user-page')) {
//   signInLinck.removeEventListener('click', onSignIn);
// }
signInLinck.addEventListener('click', onSignIn);

async function onSignIn() {
  console.log('working');

  const provider = new GoogleAuthProvider();

  const auth = getAuth();
  signInWithPopup(auth, provider)
    .then(result => {
      // This gives you a Google Access Token. You can use it to access the Google API.

      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      console.log(token);

      const user = result.user;
      console.log(user);
      postUserIntoDatebase(user);
      getUserDataById(user.uid, 'userData');

      if (user) {
        const navMenu = document.querySelector('.menu__list');
        console.log(navMenu);
        const createHtml = `<li class="menu__item">
            <a
              href="./index.html"
              target="_self"
              class="menu__link menu__link--current"
              >HOME</a
            >
          </li>
          <li class="menu__item">
            <a href="./user-page.html" target="_self" class="menu__link"
              >MY LIBRARY</a
            >
          </li>
          <li class="menu__item">
            <a target="_self" class="menu__link menu__logout">LOG OUT</a>
          </li>`;

        navMenu.innerHTML = createHtml;
        notifySuccessMessage('You are in!');
        logOut();
      }
      // ...
    })
    .catch(error => {
      // Handle Errors here.
      console.error(error);
      const errorCode = error.code;
      console.error(errorCode);
      const errorMessage = error.message;
      // The email of the user's account used.
      console.error(errorMessage);
      const email = error.customData.email;
      // The AuthCredential type that was used.
      console.error(email);
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
      console.error(credential);
    });
}

// LOG OUT
function logOut() {
  const logOut = document.querySelector('.menu__logout');
  console.log(logOut);
  logOut.addEventListener('click', onlogOut);
  function onlogOut() {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        notifyInfoMessage('You loged out!');
        location.reload();
      })
      .catch(error => {
        // An error happened.
        console.error(error);
      });
  }
}
