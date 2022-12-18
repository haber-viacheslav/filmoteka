import { initializeApp } from 'firebase/app';
const firebaseConfig = {
  apiKey: 'AIzaSyD7a39CtgzeuIx1kkpFRZ7MvO1bdmoGCT4',
  authDomain: 'filmoteka-c3a99.firebaseapp.com',
  databaseURL:
    'https://filmoteka-c3a99-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'filmoteka-c3a99',
  storageBucket: 'filmoteka-c3a99.appspot.com',
  messagingSenderId: '412361816258',
  appId: '1:412361816258:web:1c806438765e9ded7b235b',
  measurementId: 'G-SJPWP9Q9CH',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from 'firebase/auth';

// // SIGN IN

const signInLinck = document.querySelector('.menu__signin');
// console.log(signIn.href);
signInLinck.addEventListener('click', onSignIn);

async function onSignIn() {
  console.log('working');

  const provider = new GoogleAuthProvider();

  const auth = getAuth();
  await signInWithPopup(auth, provider)
    .then(result => {
      // This gives you a Google Access Token. You can use it to access the Google API.

      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      console.log(token);

      const user = result.user;
      console.log(user);
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
            <a  href="" target="_self" class="menu__link menu__logout">LOG OUT</a>
          </li>`;

        navMenu.innerHTML = createHtml;
        alert('You are in!');
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

// // LOG OUT
async function logOut() {
  const logOut = document.querySelector('.menu__logout');
  console.log(logOut);
  logOut.addEventListener('click', onlogOut);
  function onlogOut() {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        alert('You loged out!');
      })
      .catch(error => {
        // An error happened.
        console.error(error);
      });
  }
}
