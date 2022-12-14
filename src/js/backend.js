// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDCS785MOsoRKmsKbFXdEPMEMT59FGR_kY',
  authDomain: 'test-l-8ab59.firebaseapp.com',
  projectId: 'test-l-8ab59',
  storageBucket: 'test-l-8ab59.appspot.com',
  messagingSenderId: '971014908371',
  appId: '1:971014908371:web:b6f5b02d29505fd1b6e726',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

import { getDatabase, ref, onValue } from 'firebase/database';

const db = getDatabase();
const starCountRef = ref(db, '/users');
onValue(starCountRef, dt => {
  const data = dt.val();
  console.log(data);
});
// let db = firebase.database();
// db.ref('user').once(
//   'value',
//   function (snap) {
//     // SUCCESS!
//     console.log('Arbeiten', snap);
//   },
//   function (err) {
//     console.log(err);
//     // error callback is not called
//   }
// );
// console.log(db);
