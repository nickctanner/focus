import { firebase, googleAuthProvider } from '../firebase/firebase';

export const startLogin = () =>
  firebase
    .auth()
    .setPersistence(firebase.auth.Auth.Persistence.SESSION)
    .then(() => {
      firebase.auth().signInWithPopup(googleAuthProvider);
    })
    .catch(error => {
      console.log(error.code, error.message);
    });

export const startLogout = () =>
  setTimeout(() => {
    firebase.auth().signOut();
  }, 500);
