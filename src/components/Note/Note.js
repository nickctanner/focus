import React, { useState, useContext } from 'react';

import NotesContext from '../../context/notes-context';
import SingleNoteContext from '../../context/single-note-context';
import NoteBody from '../NoteBody/NoteBody';
import NoteText from '../NoteText/NoteText';

import { useHover } from '../../hooks/useHover';

import styles from './Note.module.css';

const Note = ({ note }) => {
  const { focus } = useContext(NotesContext);
  const [noteTextView, setNoteTextView] = useState(false);
  const [ref, hovered] = useHover();

  const toggleNoteTextView = () => {
    setNoteTextView(!noteTextView);
  };

  return (
    <SingleNoteContext.Provider value={{ note }}>
      <div
        className={focus ? styles.noteContainerFocus : styles.noteContainer}
        ref={ref}
      >
        {!noteTextView ? (
          <NoteBody toggleNoteTextView={toggleNoteTextView} hovered={hovered} />
        ) : (
          <NoteText toggleNoteTextView={toggleNoteTextView} />
        )}
      </div>
    </SingleNoteContext.Provider>
  );
};

export { Note as default };
