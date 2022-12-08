// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyD7a39CtgzeuIx1kkpFRZ7MvO1bdmoGCT4',
  authDomain: 'filmoteka-c3a99.firebaseapp.com',
  projectId: 'filmoteka-c3a99',
  storageBucket: 'filmoteka-c3a99.appspot.com',
  messagingSenderId: '412361816258',
  appId: '1:412361816258:web:1c806438765e9ded7b235b',
  measurementId: 'G-SJPWP9Q9CH',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
