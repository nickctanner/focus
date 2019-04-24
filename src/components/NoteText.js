import React from "react";

import NoteTextForm from "./NoteTextForm";

const NoteText = ({ toggleNoteTextView }) => {
  return (
    <div className="back">
      <button className="button text" onClick={() => toggleNoteTextView()}>
        <i className="fas fa-chevron-left" />
      </button>
      <NoteTextForm />
    </div>
  );
};

export { NoteText as default };
