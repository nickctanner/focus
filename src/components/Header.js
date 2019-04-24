import React, { useContext } from "react";
import NotesContext from "../context/notes-context";

import { startLogout } from "../actions/auth";


const Header = () => {
  const { focus } = useContext(NotesContext);
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
        <p>user name</p>
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
