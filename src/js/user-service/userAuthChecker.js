import { onAuthStateChanged } from 'firebase/auth';
import { notifyInfoMessage } from '../helpers/notifyMessages';
export function checkUserAuth(auth, renderApiCopy, render) {
  onAuthStateChanged(auth, user => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      render({
        selector: '.menu__list',
        innerHtml: true,
        createMarkypFunc: renderApiCopy.createAuthorizatedUserHeaderMarkup(),
      });
      const uid = user.uid;
      // ...
    } else {
      // User is signed out
      // ...

      notifyInfoMessage('You are not Sign In');
      console.log('not authorizate');
      //   location.reload();
    }
  });
}
