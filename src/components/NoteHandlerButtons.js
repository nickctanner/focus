import React, { useContext } from "react";

import NotesContext from "../context/notes-context";
import { removeNote } from "../actions/notes";

const NoteHandlerButtons = ({ toggleNoteTextView, note }) => {
  const { dispatch, focus } = useContext(NotesContext);
  return (
    <div className="handle-note-btns">
      <button
        className="button remove"
        onClick={() => dispatch(removeNote(note.title))}
        style={{ display: focus ? "none" : "block" }}
      >
        <i className="far fa-trash-alt" />
      </button>
      <button
        className="button text"
        title="Additional information"
        onClick={() => toggleNoteTextView()}
      >
        <i
          className={
            /\S+/g.test(note.text)
              ? "fas fa-clipboard-list has-text"
              : "far fa-clipboard"
          }
        />
      </button>
    </div>
  );
};

export { NoteHandlerButtons as default };
