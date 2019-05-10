import React, { useState } from "react";

import { loginWithGoogle, startLoginWithEmailLink } from "../actions/auth";

const LoginPage = () => {
  const [showEmailLinkForm, setShowEmailLinkForm] = useState(false);

  return (
    <div className="login-box">
      <div className="login-box-inner">
        <h1>Focus</h1>
        <p>Simple. Clean. Done.</p>
        <button className="button log" onClick={loginWithGoogle}>
          Sign in with Google
        </button>
        <button
          className="button log"
          onClick={() => setShowEmailLinkForm(!showEmailLinkForm)}
        >
          Sign in with email link
        </button>
        {showEmailLinkForm && <EmailLinkAuthForm />}
      </div>
    </div>
  );
};

export { LoginPage as default };
