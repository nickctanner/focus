import React, { useState, useContext } from 'react';
import { database } from '../../firebase/firebase';

import NotesContext from '../../context/notes-context';
import SingleNoteContext from '../../context/single-note-context';
import CredentialsContext from '../../context/credentials-context';
import EditNoteForm from '../forms/EditNoteForm/EditNoteForm';
import NoteTitle from '../NoteTitle/NoteTitle';
import NoteHandlerButtons from '../buttons/NoteHandlerButtons/NoteHandlerButtons';
import { toggleComplete } from '../../actions/notes';
import { togglePriority } from '../../actions/notes';

import styles from './NoteBody.module.css';

const NoteBody = ({ toggleNoteTextView, hovered }) => {
  const { dispatch } = useContext(NotesContext);
  const { note } = useContext(SingleNoteContext);
  const { uid } = useContext(CredentialsContext);
  const [editNote, setEditNote] = useState(false);
  const [isComplete, setIsComplete] = useState(note.isComplete);
  const [priority, setPriority] = useState(note.priority);

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
          dispatch({ type: 'NOTE_REORDER' });
        }, 500);
      });
  };

  const handleTogglePriority = id => {
    setPriority(!priority);
    const updates = {
      priority: !priority,
    };

    database
      .ref(`users/${uid}/notes/${id}`)
      .update(updates)
      .then(() => {
        dispatch(togglePriority(priority, id));
        setTimeout(() => {
          dispatch({ type: 'NOTE_REORDER' });
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
        title={isComplete ? 'Mark Not Completed' : 'Mark Completed'}
      >
        <i
          className={
            note.isComplete ? 'fas fa-check-circle' : 'far fa-dot-circle'
          }
        />
      </button>

      <button
        className={priority ? styles.priority : styles.noPriority}
        onClick={() => handleTogglePriority(note.id)}
        title={priority ? 'Remove Priority' : 'Give Priority'}
      >
        {priority ? (
          <i className='fas fa-hand-point-up' style={{ color: 'red' }}></i>
        ) : (
          <i className='far fa-hand-point-up'></i>
        )}
      </button>
      <div className={styles.noteWrapper}>
        {editNote ? (
          <EditNoteForm toggleTitleEdit={toggleTitleEdit} />
        ) : (
          <NoteTitle toggleTitleEdit={toggleTitleEdit} />
        )}
      </div>
      <NoteHandlerButtons
        toggleNoteTextView={toggleNoteTextView}
        note={note}
        hovered={hovered}
      />
    </div>
  );
};

export { NoteBody as default };
