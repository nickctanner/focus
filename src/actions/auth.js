import { firebase, googleAuthProvider } from "../firebase/firebase";

export const startLogin = (fn) => {
  return firebase
    .auth()
    .signInWithPopup(googleAuthProvider).then((result) => {
      fn(result.user);
    }).catch((error) {
      console.log(error.code, error.message);
    })
};

export const startLogout = () => {
  return firebase.auth().signOut();
};
