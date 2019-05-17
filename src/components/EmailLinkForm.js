import React, { useState } from 'react';

import { sendLoginWithEmailLink } from '../actions/auth';

const EmailLinkForm = ({ showInput }) => {
  const [email, setEmail] = useState('');
  const [submitEmail, setSubmitEmail] = useState(false);

  const handleSubmitEmailLink = e => {
    e.preventDefault();
    sendLoginWithEmailLink(email);
    setSubmitEmail(true);
  };

  return submitEmail ? (
    <p style={{ fontSize: 12 }}>
      An login email has been sent the address provided
    </p>
  ) : (
    <form
      style={{ visibility: showInput ? 'visible' : 'hidden' }}
      onSubmit={e => handleSubmitEmailLink(e)}
    >
      <input
        type='email'
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder='Enter a valid email address'
        autoFocus
      />
    </form>
  );
};

export { EmailLinkForm as default };
