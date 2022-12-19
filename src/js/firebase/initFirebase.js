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
export const app = initializeApp(firebaseConfig);
