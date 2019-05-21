import React, { useState, useContext } from 'react';
import { database } from '../../firebase/firebase';

import NotesContext from '../../context/notes-context';
import SingleNoteContext from '../../context/single-note-context';
import CredentialsContext from '../../context/credentials-context';

import styles from './NoteTextForm.module.css';

const NoteTextForm = () => {
  const { note } = useContext(SingleNoteContext);
  const { dispatch } = useContext(NotesContext);
  const { uid } = useContext(CredentialsContext);
  const [text, setText] = useState('');

  const editNoteText = (e, id) => {
    e.preventDefault();

    if (text) {
      const updates = {
        text,
      };

      database
        .ref(`users/${uid}/notes/${id}`)
        .update(updates)
        .then(() => {
          dispatch({
            type: 'ADD_TEXT',
            text,
            id,
          });
        });
    }
  };

  return (
    <div className={styles.editNoteText}>
      <div className={styles.editWrapper}>
        <form>
          <textarea
            rows='6'
            defaultValue={note.text}
            onChange={e => setText(e.target.value)}
            onBlur={e => editNoteText(e, note.id)}
          />
          // What is this below??
          <div className='display-text' />
        </form>
      </div>
    </div>
  );
};

export { NoteTextForm as default };
