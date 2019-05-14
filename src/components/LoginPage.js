import React from 'react';
import { loginWithGoogle } from '../actions/auth';
// import { startFirebaseUI } from '../firebase/firebase';

const LoginPage = () => {
  return (
    <div className='login-box'>
      <div className='login-box-inner'>
        <h1>Focus</h1>
        <p>Simple. Clean. Done.</p>
        // <div id="firebaseui"></div>
        <button className='button log' onClick={loginWithGoogle}>
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export { LoginPage as default };
