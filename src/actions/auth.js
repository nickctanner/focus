import { firebase, googleAuthProvider } from "../firebase/firebase";

export const startLogin = () =>
// Removed session limitation
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
