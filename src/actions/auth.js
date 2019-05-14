import { firebase, googleAuthProvider } from '../firebase/firebase';

export const loginWithGoogle = () =>
  firebase
    .auth()
    .signInWithPopup(googleAuthProvider)
    .catch(error => {
      console.log(error.code, error.message);
    });

export const startLogout = () =>
  setTimeout(() => {
    firebase.auth().signOut();
  }, 500);
