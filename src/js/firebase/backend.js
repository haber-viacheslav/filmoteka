import { app } from './initFirebase';
import '../user-service/userServ';
// Import the functions you need from the SDKs you need
import { getDatabase, ref, set, onValue } from 'firebase/database';
// import { getDatabase, ref, } from 'firebase/database'; // закоментировал, перезаписан
import { getUserFilmsData } from '../user-service/userServ';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
