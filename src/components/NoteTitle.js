import React, { useContext } from 'react';

import SingleNoteContext from '../context/single-note-context';

const NoteTitle = ({ toggleTitleEdit }) => {
  const { note } = useContext(SingleNoteContext);
  return (
    <div className={note.isComplete ? 'complete' : 'not-complete'}>
      <h3 id='note-title' title='Edit note' onClick={toggleTitleEdit}>
        {note.title}
      </h3>
    </div>
  );
};

export { NoteTitle as default };
