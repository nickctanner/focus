import React, { useContext } from "react";

import Note from "./Note";
import NotesContext from "../context/notes-context";

const NoteList = () => {
  const { notes, focus } = useContext(NotesContext);
  return (
    <div className="note-list" id="note-list">
      {!focus ? (
        notes.map(note => {

          return <Note key={note.id} note={note} />
        })
      ) : notes.filter(note => note.isComplete).length === notes.length ? (
        <div className="all-done-message">
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
