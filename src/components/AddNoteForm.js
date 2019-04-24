import React, { useState, useContext } from "react";
import uuid from "uuid";

import NotesContext from "../context/notes-context";

const AddNoteForm = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [id, setId] = useState(uuid());
  const [isComplete, setIsComplete] = useState(false);
  const { dispatch, focus } = useContext(NotesContext);

  const addNote = e => {
    e.preventDefault();
    if (title) {
      dispatch({
        type: "ADD_NOTE",
        title,
        text,
        id,
        isComplete
      });
      setTitle("");
      setId(uuid());
      setIsComplete(false);
      setText("");
    }
  };

  return (
    <form
      onSubmit={addNote}
      style={{ visibility: focus ? "hidden" : "visible" }}
    >
      <div className="add-note">
        <input
          id="title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Add something to focus on..."
          required
        />
        <button id="add-btn" onClick={() => setTitle(title)}>
          <i className="fas fa-bullseye" />
        </button>
      </div>
    </form>
  );
};

export { AddNoteForm as default };
