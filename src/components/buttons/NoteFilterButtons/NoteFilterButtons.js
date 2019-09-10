import React, { useContext } from 'react';

import SingleNoteContext from '../../../context/single-note-context';

import styles from './NoteFilterButtons.module.css';

const NoteFilterButtons = ({
  handleToggleCompleted,
  handleTogglePriority,
  isComplete,
  priority,
}) => {
  const { note } = useContext(SingleNoteContext);

  return (
    <div className={styles.noteFilterButtons}>
      <button
        type='checkbox'
        className={styles.checkComplete}
        onClick={() => handleToggleCompleted(note.id)}
        title={isComplete ? 'Mark Not Completed' : 'Mark Completed'}
      >
        <i
          className={
            note.isComplete ? 'fas fa-check-circle' : 'far fa-dot-circle'
          }
        />
      </button>

      <button
        className={priority ? styles.priority : styles.noPriority}
        onClick={() => handleTogglePriority(note.id)}
        title={priority ? 'Remove Priority' : 'Give Priority'}
      >
        {priority ? (
          <i className='fas fa-hand-point-up' style={{ color: 'red' }}></i>
        ) : (
          <i className='far fa-hand-point-up'></i>
        )}
      </button>
    </div>
  );
};

export { NoteFilterButtons as default };
