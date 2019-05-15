import React from 'react';
import FirebaseAuth from 'react-firebaseui/FirebaseAuth';
import { auth, uiConfig } from '../firebase/firebase';

const LoginPage = () => {
  return (
    <div>
      <div className='login-box'>
        <div className='login-box-inner'>
          <h1>Focus</h1>
          <p>Simple. Clean. Done.</p>
        </div>
        <FirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
      </div>
    </div>
  );
};

export { LoginPage as default };
