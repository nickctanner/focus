import React, { useContext } from 'react';
import { database } from '../../../firebase/firebase';

import NotesContext from '../../../context/notes-context';
import SingleNoteContext from '../../../context/single-note-context';
import CredentialsContext from '../../../context/credentials-context';

import styles from './NoteHandlerButtons.module.css';

const NoteHandlerButtons = ({ toggleNoteTextView, hovered }) => {
  const { dispatch, focus } = useContext(NotesContext);
  const { note } = useContext(SingleNoteContext);
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
        className={`button ${styles.remove} ${hovered && styles.hover}`}
        title='Delete note'
        onClick={() => handleRemoveNote(note.id)}
        style={{ display: focus ? 'none' : 'block' }}
      >
        <i className='far fa-trash-alt' />
      </button>
      <button
        className={`button ${styles.text} ${/\S+/g.test(note.text) &&
          styles.hasText} ${hovered && styles.hover}`}
        title='Additional information'
        onClick={() => toggleNoteTextView()}
      >
        <i
          className={
            /\S+/g.test(note.text)
              ? 'fas fa-clipboard-list'
              : 'far fa-clipboard'
          }
        />
      </button>
    </div>
  );
};

export { NoteHandlerButtons as default };
