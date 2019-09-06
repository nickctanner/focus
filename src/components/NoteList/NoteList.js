import React, { useContext } from 'react';

import Note from '../Note/Note';
import NotesContext from '../../context/notes-context';

import styles from './NoteList.module.css';

const NoteList = () => {
  const { notes, focus } = useContext(NotesContext);

  return (
    <div className={styles.noteList}>
      {!focus ? (
        notes.map(note => {
          console.log(notes);
          return <Note key={note.id} note={note} />;
        })
      ) : notes.filter(note => note.isComplete).length === notes.length ? (
        <div className={styles.allDoneMessage}>
          <h1>All done!</h1>
          <p>Good work. Now return to normal mode to add more.</p>
        </div>
      ) : (
        notes.map((note, idx) => {
          if (idx === 0 && !note.isComplete) {
            return <Note key={note.id} note={note} />;
          }
          return false;
        })
      )}
    </div>
  );
};

export { NoteList as default };
