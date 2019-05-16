import React, { useState } from 'react';

// import EmailLinkForm from '../components/EmailLinkForm';
import { loginWithGoogle } from '../actions/auth';

const LoginPage = () => {
  const [showInput, setShowInput] = useState(false);

  return (
    <div>
      <div className='login-box'>
        <div className='login-box-inner'>
          <h1>Focus</h1>
          <p>Simple. Clean. Done.</p>
          <div className='login-buttons'>
            <button className='button log' onClick={loginWithGoogle}>
              Sign in with Google
            </button>
            <button
              className='button log'
              onClick={() => setShowInput(!showInput)}
            >
              Sign in with email link
            </button>
            {showInput && (
              <div style={{ fontSize: 12 }}>This feature coming soon!</div>
              // <EmailLinkForm />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export { LoginPage as default };
