import React, { useContext } from 'react';
import { database } from '../../firebase/firebase';

import NotesContext from '../../context/notes-context';
import CredentialsContext from '../../context/credentials-context';

import styles from './NoteHandlerButtons.module.css';

const NoteHandlerButtons = ({ toggleNoteTextView, note }) => {
  const { dispatch, focus } = useContext(NotesContext);
  const { uid } = useContext(CredentialsContext);

  const handleRemoveNote = id => {
    const confirmed = window.confirm(
      'Are you sure you want to permanently delete?'
    );

    if (confirmed) {
      return database
        .ref(`users/${uid}/notes/${id}`)
        .remove()
        .then(() => {
          dispatch({ type: 'REMOVE_NOTE', id });
        });
    }
    return false;
  };

  return (
    <div className={styles.handleNoteButtons}>
      <button
        id={styles.remove}
        className='button'
        onClick={() => handleRemoveNote(note.id)}
        style={{ display: focus ? 'none' : 'block' }}
      >
        <i className='far fa-trash-alt' />
      </button>
      <button
        id={styles.text}
        className='button'
        title='Additional information'
        onClick={() => toggleNoteTextView()}
      >
        <i
          className={
            /\S+/g.test(note.text)
              ? 'fas fa-clipboard-list has-text'
              : 'far fa-clipboard'
          }
        />
      </button>
    </div>
  );
};

export { NoteHandlerButtons as default };
