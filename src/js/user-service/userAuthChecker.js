import { onAuthStateChanged } from 'firebase/auth';
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

      console.log('not authorizate');
      //   location.reload();
    }
  });
}
