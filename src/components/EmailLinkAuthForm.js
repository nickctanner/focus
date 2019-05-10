import React, { useState } from "react";
import { signInWithEmailLink } from '../actions/auth';

const EmailLinkAuthForm = ({ email }) => {
  const [email, setEmail] = useState("");

  return (
    <form onSubmit={() => signInWithEmailLink(email)}>
      <input
        type="email"
        value={email}
        onChange={() => setEmail(e.target.value)}
        placeholder="Enter email address"
        autoFocus
      />
    </form>
  );
};

export { EmailLinkAuthForm as default };
