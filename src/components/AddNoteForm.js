import React, { useState, useContext } from "react";
import uuid from "uuid";

import NotesContext from "../context/notes-context";
import CredentialsContext from "../context/credentials-context";
import { database } from "firebase";

const AddNoteForm = () => {
  const { dispatch, focus } = useContext(NotesContext);
  const { uid } = useContext(CredentialsContext);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [id, setId] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  const addNote = note => ({
    type: "ADD_NOTE",
    note
  })

  // mark as action
  const startAddNote = e => {
    e.preventDefault();

    const note = {
      title,
      text,
      isComplete
    };

    if (title) {
      database()
        .ref(`users/${uid}/notes`)
        .push(note)
        .then(ref => {
          dispatch(addNote({
            id: ref.key,
            ...note
          }));
        });

      setTitle("");
      setText("");
    }
  };

  return (
    <form
      onSubmit={startAddNote}
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