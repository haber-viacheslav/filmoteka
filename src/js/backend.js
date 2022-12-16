// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue } from 'firebase/database';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
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
const db = getDatabase();

import { getDatabase, ref, set } from 'firebase/database';
import { getDatabase, ref, onValue } from 'firebase/database';

const starCountRef = ref(db, 'users/');
onValue(starCountRef, snapshot => {
  const data = snapshot.val();
  console.log(data);
});
// function writeUserData(name, email, imageUrl) {
//   set(ref(db, 'users/'), {
//     username: name,
//     email: email,
//     profile_picture: imageUrl,
//   });
// }

// console.log(writeUserData('Vlalav', 'exple@gmail.com', 'ink...'));
// const starCountRef = ref(db, '/users');
// onValue(starCountRef, dt => {
//   const data = dt.val();
//   console.log(data);
// });

// import { getDatabase, ref, push, set } from 'firebase/database';

// // Create a new post reference with an auto-generated id
// const postListRef = ref(db, 'users');
// const newPostRef = push(postListRef);
// set(newPostRef, {
//   name: 'Daria',
//   email: 'exple@gmail.com',
//   imgLink: 'ink...',
//   // ...
// });
