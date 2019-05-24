import React from 'react';

import NoteTextForm from '../NoteTextForm/NoteTextForm';

import styles from './NoteText.module.css';

const NoteText = ({ toggleNoteTextView }) => {
  return (
    <div className={styles.back}>
      <button
        id={styles.textComplete}
        className='button'
        title='Back to note'
        onClick={toggleNoteTextView}
      >
        <i className='fas fa-chevron-left' />
      </button>
      <NoteTextForm />
    </div>
  );
};

export { NoteText as default };
