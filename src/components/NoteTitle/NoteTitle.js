import React, { useContext } from 'react';

import SingleNoteContext from '../../context/single-note-context';

import styles from './NoteTitle.module.css';

const NoteTitle = ({ toggleTitleEdit }) => {
  const { note } = useContext(SingleNoteContext);
  return (
    <div className={note.isComplete ? styles.complete : styles.notComplete}>
      <h3 title='Edit note' onClick={toggleTitleEdit}>
        {note.title}
      </h3>
    </div>
  );
};

export { NoteTitle as default };
