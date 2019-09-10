import React, { useState, useContext } from 'react';
import { database } from '../../firebase/firebase';

import NotesContext from '../../context/notes-context';
import SingleNoteContext from '../../context/single-note-context';
import CredentialsContext from '../../context/credentials-context';
import EditNoteForm from '../forms/EditNoteForm/EditNoteForm';
import NoteTitle from '../NoteTitle/NoteTitle';
import NoteHandlerButtons from '../buttons/NoteHandlerButtons/NoteHandlerButtons';
import NoteFilterButtons from '../buttons/NoteFilterButtons/NoteFilterButtons';
import { toggleComplete, togglePriority } from '../../actions/notes';
import { NOTES_REORDER } from '../../actions/types';

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
          dispatch({ type: NOTES_REORDER });
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
          dispatch({ type: NOTES_REORDER });
        }, 500);
      });
  };

  return (
    <div className={note.isComplete ? styles.frontComplete : styles.front}>
      <NoteFilterButtons
        handleToggleCompleted={handleToggleCompleted}
        handleTogglePriority={handleTogglePriority}
        isComplete={isComplete}
        priority={priority}
      />
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
