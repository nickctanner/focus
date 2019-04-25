import React, { useContext } from "react";

import CredentialsContext from "../context/credentials-context";
import { startLogin } from "../actions/auth";

const LoginPage = () => {
  const { handleSetUser } = useContext(CredentialsContext);

  return (
    <div className="login-box">
      <div className="login-box-inner">
        <h1>Focus</h1>
        <p>Simple. Clean. Done.</p>
        <button
          className="button log"
          onClick={() => startLogin(handleSetUser)}
        >
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export { LoginPage as default };
