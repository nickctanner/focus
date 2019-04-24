import React from "react";

import { startLogin } from "../actions/auth";

const LoginPage = () => {
  return (
    <div className="login-box">
      <div className="login-box-inner">
        <h1>Focus</h1>
        <p>Simple. Clean. Done.</p>
        <button className="button log" onClick={startLogin}>
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export { LoginPage as default };
