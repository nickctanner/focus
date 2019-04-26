import { firebase, googleAuthProvider } from "../firebase/firebase";

export const startLogin = async fn => {
  try {
    await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);
    await firebase
      .auth()
      .signInWithPopup(googleAuthProvider);
    fn();
  }
  catch (error) {
    console.log(error.code, error.message);
  }
};

export const startLogout = async fn => {
  await firebase.auth().signOut();
  setTimeout(() => {
    fn();
  }, 1000);
};
