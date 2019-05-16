import React, { useState } from 'react';

import { sendLoginWithEmailLink } from '../actions/auth';

const EmailLinkForm = () => {
  const [email, setEmail] = useState('');
  const [submitEmail, setSubmitEmail] = useState(false);

  const handleSubmitEmailLink = e => {
    e.preventDefault();
    sendLoginWithEmailLink(email);
    setSubmitEmail(true);
  };

  return submitEmail ?
  (
    // setInterval()
    <div>
      <p>An login email has been sent the address provided</p>
    </div>
  ) :
  (
    <form onSubmit={e => handleSubmitEmailLink()} >
      <input
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="Enter a valid email address"
      />
    </form>
  );
};

export { EmailLinkForm as default };
