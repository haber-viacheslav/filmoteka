import {
  postUserIntoDatebase,
  getUserDataById,
} from '../user-service/postUserIntoDb';
import { app } from './initFirebase';
import {
  notifySuccessMessage,
  notifyInfoMessage,
} from '../helpers/notifyMessages';

// Initialize Firebase
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { async } from '@firebase/util';
import { checkUserAuth } from '../user-service/userAuthChecker';
import RenderApi from '../helpers/renderFuncApi';
// // SIGN IN
const auth = getAuth();
const signInLinck = document.querySelector('.menu__link-js');

const renderUserHeader = new RenderApi();
// console.log(signIn.href);
// if ((window.location.href = 'user-page')) {
//   signInLinck.removeEventListener('click', onSignIn);
// }

// check auth
checkUserAuth(auth, renderUserHeader, renderUserHeader.renderMarkup);

signInLinck.addEventListener('click', onSignIn);
console.log(auth);

async function onSignIn() {
  console.log('working');

  const provider = new GoogleAuthProvider();

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
      // getUserDataById(user.uid, 'userData');

      if (user) {
        renderUserHeader.renderMarkup({
          selector: '.menu__list',
          innerHtml: true,
          createMarkypFunc: renderUserHeader.createAuthorizatedUserMarkup(),
        });
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
