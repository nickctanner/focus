import React, { useState, useEffect, useRef } from 'react';

import { sendLoginWithEmailLink } from '../../../actions/auth';

import styles from './EmailLinkForm.module.css';

const EmailLinkForm = ({ showInput }) => {
  const [email, setEmail] = useState('');
  const [submitEmail, setSubmitEmail] = useState(false);
  const input = useRef(null);

  const handleSubmitEmailLink = e => {
    e.preventDefault();
    sendLoginWithEmailLink(email);
    setSubmitEmail(true);

    setTimeout(() => {
      setEmail('');
    }, 3000);
  };

  useEffect(() => {
    input.current.focus();
  }, [showInput]);

  return (
    <>
      <form
        style={{ visibility: showInput ? 'visible' : 'hidden' }}
        onSubmit={e => handleSubmitEmailLink(e)}
      >
        <input
          className={styles.emailInput}
          type='email'
          ref={input}
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder='Enter a valid email address'
          autoFocus
        />
      </form>
      <p
        style={{
          visibility: submitEmail ? 'visible' : 'hidden',
          fontSize: '12px',
        }}
      >
        An email containing a link was sent to the address provided
      </p>
    </>
  );
};

export { EmailLinkForm as default };
