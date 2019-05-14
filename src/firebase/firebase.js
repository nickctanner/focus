import * as firebase from 'firebase';
// import firebaseui from 'firebaseui';

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
};

// const uiConfig = {
//   signInSuccessUrl: '/notes',
//   signInOptions: [
//      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//      {
      // provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
      // requireDisplayName: false
        // }
//   ],
//   tosUrl: '',
//   privacyPolicyUrl: ''
// };

firebase.initializeApp(config);

// const ui = new firebaseui.auth.AuthUI(firebase.auth());

// const startFirebaseUI = element => {
//   ui.start(element, uiConfig);
// }

const database = firebase.database();

// Authenticate with Google
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase,
         googleAuthProvider,
         database,
         // startFirebaseUI
        };
