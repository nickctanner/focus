import React, { useState, useContext } from "react";

import NotesContext from "../context/notes-context";
import SingleNoteContext from "../context/single-note-context";

const EditNoteForm = ({ toggleTitleEdit }) => {
  const { dispatch } = useContext(NotesContext);
  const { note } = useContext(SingleNoteContext);
  const [title, setTitle] = useState("");

  // Dispatch actions to put into separate folder

  const editTitle = (e, id) => {
    e.preventDefault();
    if (title) {
      dispatch({
        type: "EDIT_NOTE",
        title,
        id
      });
    }
    toggleTitleEdit();
  };

  return (
    <>
      <form id="edit-form" onSubmit={e => editTitle(e, note.id)}>
        <button className="button edit-btn">
          <i className="fas fa-chevron-left" />
        </button>
        <div className="edit-note">
          <input
            id="input-title"
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder="Edit note"
            autoFocus
          />
        </div>
      </form>
    </>
  );
};

export { EditNoteForm as default };
