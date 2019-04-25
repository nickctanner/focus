import React, { useState, useEffect, useReducer } from "react";
// import { database } from "firebase";

import notesReducer from "../reducers/notes";
import NotesContext from "../context/notes-context";
import NotesPage from "./NotesPage";

const App = () => {
  const [notes, dispatch] = useReducer(notesReducer, []);
  const [focus, setFocus] = useState(false);

  useEffect(() => {
    const notes = JSON.parse(localStorage.getItem("notes"));

    if (notes) {
      dispatch({ type: "POPULATE_NOTES", notes });
    }
    setFocus(false);
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
    // database.ref("focus").set(notes);
  }, [notes]);

  const toggleFocus = () => {
    setFocus(!focus);
  };

  return (
    <NotesContext.Provider
      value={{
        notes,
        dispatch,
        focus,
        toggleFocus
      }}
    >
      <NotesPage />
    </NotesContext.Provider>
  );
};

export { App as default };
