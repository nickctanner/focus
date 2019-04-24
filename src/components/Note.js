import React, { useState, useContext } from "react";

import EditNoteForm from "./EditNoteForm";
import NoteTitle from "./NoteTitle";
import NoteText from "./NoteText";
import NoteHandlerButtons from "./NoteHandlerButtons";
import NotesContext from "../context/notes-context";
import SingleNoteContext from "../context/single-note-context";
import { toggleComplete } from "../actions/notes";

const Note = ({ note }) => {
  const [editNote, setEditNote] = useState(false);
  const [noteTextView, setNoteTextView] = useState(false);
  const { dispatch, focus } = useContext(NotesContext);

  const toggleTitleEdit = () => {
    setEditNote(!editNote);
  };

  const toggleNoteTextView = () => {
    setNoteTextView(!noteTextView);
  };

  const handleMarkCompleted = () => {
    dispatch(toggleComplete(note.isComplete, note.id));
    setTimeout(() => {
      dispatch({ type: "MOVE_COMPLETED" });
    }, 500);
  };

  return (
    <SingleNoteContext.Provider value={{ note }}>
      <div className={focus ? "note-container-focus" : "note-container"}>
        {!noteTextView ? (
          <div className={note.isComplete ? "front-complete" : "front"}>
            <button
              type="checkbox"
              name={note.title}
              id="check-complete"
              onClick={() => handleMarkCompleted(note.isComplete, note.id)}
            >
              <i
                className={
                  note.isComplete ? "fas fa-check-square" : "far fa-square"
                }
              />
            </button>
            <div className="note-wrapper">
              {editNote ? (
                <EditNoteForm toggleTitleEdit={toggleTitleEdit} />
              ) : (
                <NoteTitle toggleTitleEdit={toggleTitleEdit} />
              )}
            </div>
            <NoteHandlerButtons
              toggleNoteTextView={toggleNoteTextView}
              note={note}
            />
          </div>
        ) : (
          <NoteText toggleNoteTextView={toggleNoteTextView} />
        )}
      </div>
    </SingleNoteContext.Provider>
  );
};

export { Note as default };
