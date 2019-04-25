import React, { useContext } from "react";

import NotesContext from "../context/notes-context";
import CredentialsContext from "../context/credentials-context";
import { startLogout } from "../actions/auth";

const Header = () => {
  const { focus } = useContext(NotesContext);
  const { userEmail, userAvatar } = useContext(CredentialsContext);

  return (
    <div
      className="header"
      style={{ visibility: focus ? "hidden" : "visible" }}
    >
      <div className="header-title">
        <h1>Focus</h1>
        <p>Simple. Clean. Done.</p>
      </div>
      <div className="header-profile">
        <div className="credentials">
          <img src={userAvatar || '/images/user.png'} alt="User's Avatar" />
          <span>{userEmail || 'Hello User'}</span>
        </div>
        <button
          className="button log"
          style={{ display: focus ? "none" : "block" }}
          onClick={startLogout}
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export { Header as default };
