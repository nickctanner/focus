import React, { useState, useContext } from "react";

import NotesContext from "../context/notes-context";
import SingleNoteContext from "../context/single-note-context";

const NoteTextForm = () => {
  const { note } = useContext(SingleNoteContext);
  const [text, setText] = useState("");
  const { dispatch } = useContext(NotesContext);

  const editNoteText = (e, id) => {
    e.preventDefault();
    if (text) {
      dispatch({
        type: "ADD_TEXT",
        text,
        id
      });
    }
  };

  return (
    <div className="edit-note-text">
      <div className="edit-wrapper">
        <form>
          <textarea
            rows="6"
            className="note-text"
            defaultValue={note.text}
            onChange={e => setText(e.target.value)}
            onBlur={e => editNoteText(e, note.id)}
          />
          <div className="display-text" />
        </form>
      </div>
    </div>
  );
};

export { NoteTextForm as default };
