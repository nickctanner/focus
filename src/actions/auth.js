import { firebase, googleAuthProvider } from "../firebase/firebase";

export const startLogin = () =>

  // await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);
  firebase
    .auth()
    .signInWithPopup(googleAuthProvider)


    .catch(error => {
      console.log(error.code, error.message);
    });


export const startLogout = () => {
  setTimeout(() => {
    return firebase.auth().signOut();
  }, 1000);
};
