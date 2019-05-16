import { firebase, googleAuthProvider } from '../firebase/firebase';

export const loginWithGoogle = () =>
  firebase
    .auth()
    .signInWithPopup(googleAuthProvider)
    .catch(error => {
      console.log(error.code, error.message);
    });

export const loginWithEmailLink = email => {
  const actionCodeSettings = {
    url: 'localhost:3000/notes',
    handleCodeInApp: true,
  };
  firebase
    .auth()
    .signInWithEmailLink(email, actionCodeSettings)
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
