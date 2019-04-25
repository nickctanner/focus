import { firebase, googleAuthProvider } from "../firebase/firebase";

export const startLogin = (fn) => {
  return firebase
    .auth()
    .signInWithPopup(googleAuthProvider).then((result) => {
      const user = {
        email: result.user.email,
        avatar: result.user.photoURL
      }
      fn(user);
    }).catch((error) => {
      console.log(error.code, error.message);
    })
};

export const startLogout = () => {
  return firebase.auth().signOut();
};
