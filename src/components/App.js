import React, { useState, useContext, useEffect, useReducer } from "react";
import { database } from "../firebase/firebase";

import notesReducer from "../reducers/notes";
import NotesContext from "../context/notes-context";
import CredentialsContext from '../context/credentials-context';
import NotesPage from "./NotesPage";

const App = () => {
  const [notes, dispatch] = useReducer(notesReducer, []);
  const { uid } = useContext(CredentialsContext);
  const [focus, setFocus] = useState(false);

  useEffect(() => {
    // const notes = JSON.parse(localStorage.getItem("notes"));
    database.ref('users/${uid}/notes').once('value').then(snapshot => {
      const notes = snapshot.val();
      console.log(notes);

      if (notes) {
        dispatch({ type: "POPULATE_NOTES", notes });
      }
    })

    setFocus(false);
  }, []);

  // useEffect(() => {
  //   if (notes !== []) {
  //     database.ref('notes').set(notes);
  //   }

  //   // localStorage.setItem("notes", JSON.stringify(notes));
  // }, [notes]);

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
