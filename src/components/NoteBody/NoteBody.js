import React, { useState, useContext } from 'react';
import { database } from '../../firebase/firebase';

import NotesContext from '../../context/notes-context';
import SingleNoteContext from '../../context/single-note-context';
import CredentialsContext from '../../context/credentials-context';
import EditNoteForm from '../EditNoteForm/EditNoteForm';
import NoteTitle from '../NoteTitle/NoteTitle';
import NoteHandlerButtons from '../buttons/NoteHandlerButtons/NoteHandlerButtons';
import { toggleComplete } from '../../actions/notes';

import styles from './NoteBody.module.css';

const NoteBody = ({ toggleNoteTextView }) => {
  const { dispatch } = useContext(NotesContext);
  const { note } = useContext(SingleNoteContext);
  const { uid } = useContext(CredentialsContext);
  const [editNote, setEditNote] = useState(false);
  const [isComplete, setIsComplete] = useState(note.isComplete);

  const toggleTitleEdit = () => {
    setEditNote(!editNote);
  };

  const handleToggleCompleted = id => {
    setIsComplete(!note.isComplete);
    const updates = {
      isComplete: !isComplete,
    };

    database
      .ref(`users/${uid}/notes/${id}`)
      .update(updates)
      .then(() => {
        dispatch(toggleComplete(isComplete, id));
        setTimeout(() => {
          dispatch({ type: 'MOVE_COMPLETED' });
        }, 500);
      });
  };

  return (
    <div className={note.isComplete ? styles.frontComplete : styles.front}>
      <button
        type='checkbox'
        name={note.title}
        className={styles.checkComplete}
        onClick={() => handleToggleCompleted(note.id)}
      >
        <i
          className={note.isComplete ? 'fas fa-check-square' : 'far fa-square'}
        />
      </button>
      <div className={styles.noteWrapper}>
        {editNote ? (
          <EditNoteForm toggleTitleEdit={toggleTitleEdit} />
        ) : (
          <NoteTitle toggleTitleEdit={toggleTitleEdit} />
        )}
      </div>
      <NoteHandlerButtons toggleNoteTextView={toggleNoteTextView} note={note} />
    </div>
  );
};

export { NoteBody as default };
