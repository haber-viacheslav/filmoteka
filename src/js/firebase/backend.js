import { app } from './initFirebase';
import '../user-service/userServ';
// Import the functions you need from the SDKs you need
import { getDatabase, ref, onValue } from 'firebase/database';
import { getDatabase, ref, set } from 'firebase/database';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
app;
const db = getDatabase(app);
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
