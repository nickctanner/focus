import React, { useState } from 'react';

import EmailLinkForm from '../EmailLinkForm';
import { loginWithGoogle } from '../../actions/auth';

import styles from './LoginPage.module.css';

const LoginPage = () => {
  const [showInput, setShowInput] = useState(false);

  return (
    <div>
      <div className={styles.loginBox}>
        <div className={styles.loginBoxInner}>
          <h1>Focus</h1>
          <p>Simple. Clean. Done.</p>
          <div className={styles.loginButtons}>
            <button className={styles.log} onClick={loginWithGoogle}>
              Sign in with Google
            </button>
            <button
              className={styles.log}
              onClick={() => setShowInput(!showInput)}
            >
              Sign in with email link
            </button>
            <EmailLinkForm showInput={showInput} />
          </div>
        </div>
      </div>
    </div>
  );
};

export { LoginPage as default };
