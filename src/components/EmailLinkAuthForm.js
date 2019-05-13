import React, { useState } from 'react';
import { startSignInWithEmailLink } from '../actions/auth';

const EmailLinkAuthForm = () => {
  const [email, setEmail] = useState('');
  const [emailSent, setEmailSent] = useState(false);

  const handleEmailSubmit = () => {
    startSignInWithEmailLink(email);
    setEmailSent(true);
  };

  return emailSent ? (
    <div>
      <p>An login email has been sent to the provided address.</p>
    </div>
  ) : (
    <form onSubmit={handleEmailSubmit}>
      <input
        type='email'
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder='Enter valid email address'
        autoFocus
        required
      />
    </form>
  );
};

export { EmailLinkAuthForm as default };
