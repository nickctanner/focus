import { firebase, googleAuthProvider } from '../firebase/firebase';

export const startLogin = () =>
  firebase
    .auth()
    .setPersistence(firebase.auth.Auth.Persistence.SESSION)
    .then(() => {
      firebase
        .auth()
        .signInWithPopup(googleAuthProvider)
        .then(() => {
          console.log('signed in');
        });
    })
    .catch(error => {
      console.log(error.code, error.message);
    });

export const startLogout = () => {
  return setTimeout(() => {
    firebase.auth().signOut();
  }, 1000);
};
