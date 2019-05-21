import React, { useState, useContext, useEffect, useReducer } from 'react';
import { database } from '../firebase/firebase';

import notesReducer from '../reducers/notes';
import NotesContext from '../context/notes-context';
import CredentialsContext from '../context/credentials-context';
import NotesPage from './NotesPage/NotesPage';

const App = () => {
  const [notes, dispatch] = useReducer(notesReducer, []);
  const { uid } = useContext(CredentialsContext);
  const [focus, setFocus] = useState(false);

  useEffect(() => {
    database
      .ref(`users/${uid}/notes`)
      .once('value')
      .then(snapshot => {
        const notes = [];

        snapshot.forEach(childSnapshot => {
          notes.push({
            id: childSnapshot.key,
            ...childSnapshot.val(),
          });
        });
        dispatch({ type: 'POPULATE_NOTES', notes });
      });
  }, [uid]);

  const toggleFocus = () => {
    setFocus(!focus);
  };

  return (
    <NotesContext.Provider
      value={{
        notes,
        dispatch,
        focus,
        toggleFocus,
      }}
    >
      <NotesPage />
    </NotesContext.Provider>
  );
};

export { App as default };
