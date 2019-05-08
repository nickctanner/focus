import React, { useState, useContext } from 'react';

import NotesContext from '../context/notes-context';
import SingleNoteContext from '../context/single-note-context';
import NoteBody from './NoteBody';
import NoteText from './NoteText';

const Note = ({ note }) => {
  const { focus } = useContext(NotesContext);
  const [noteTextView, setNoteTextView] = useState(false);

  const toggleNoteTextView = () => {
    setNoteTextView(!noteTextView);
  };

  return (
    <SingleNoteContext.Provider value={{ note }}>
      <div className={focus ? 'note-container-focus' : 'note-container'}>
        {!noteTextView ? (
          <NoteBody toggleNoteTextView={toggleNoteTextView} />
        ) : (
          <NoteText toggleNoteTextView={toggleNoteTextView} />
        )}
      </div>
    </SingleNoteContext.Provider>
  );
};

export { Note as default };
