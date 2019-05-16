import { firebase, googleAuthProvider, actionCodeSettings } from '../firebase/firebase';

export const loginWithGoogle = () =>
  firebase
    .auth()
    .signInWithPopup(googleAuthProvider)
    .catch(error => {
      console.log(error.code, error.message);
    });

export const sendLoginWithEmailLink = email => {
  firebase
    .auth()
    .sendSignInWithEmailLink(email, actionCodeSettings)
    .then(() => {
      window.localStorage.setItem('emailForSignIn', email);
    })
    .catch(error => {
      console.log(error);
    });
};

export const startLogout = () =>
  setTimeout(() => {
    firebase.auth().signOut();
  }, 500);
