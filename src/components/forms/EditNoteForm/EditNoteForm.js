import React, { useState, useContext } from 'react';
import { database } from '../../../firebase/firebase';

import NotesContext from '../../../context/notes-context';
import SingleNoteContext from '../../../context/single-note-context';
import CredentialsContext from '../../../context/credentials-context';
import { EDIT_NOTE } from '../../../actions/types';

import styles from './EditNoteForm.module.css';

const EditNoteForm = ({ toggleTitleEdit }) => {
  const { dispatch } = useContext(NotesContext);
  const { note } = useContext(SingleNoteContext);
  const { uid } = useContext(CredentialsContext);
  const [title, setTitle] = useState('');

  const editTitle = (e, id) => {
    e.preventDefault();

    if (title) {
      dispatch({
        type: EDIT_NOTE,
        title,
        id,
      });

      const updates = {
        title,
      };

      database.ref(`users/${uid}/notes/${id}`).update(updates);
    }
    toggleTitleEdit();
  };

  return (
    <>
      <form id={styles.editForm} onSubmit={e => editTitle(e, note.id)}>
        <button id={styles.editComplete} className='button'>
          <i className='fas fa-chevron-left' />
        </button>
        <div className={styles.editNote}>
          <input
            id={styles.editTitle}
            type='text'
            defaultValue={note.title}
            onChange={e => setTitle(e.target.value)}
            autoFocus
          />
        </div>
      </form>
    </>
  );
};

export { EditNoteForm as default };
