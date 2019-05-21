import React from 'react';

import NoteTextForm from './NoteTextForm/NoteTextForm';

import styles from './NoteText.module.css';

const NoteText = ({ toggleNoteTextView }) => {
  return (
    <div className={styles.back}>
      <button className='button text' onClick={toggleNoteTextView}>
        <i className='fas fa-chevron-left' />
      </button>
      <NoteTextForm />
    </div>
  );
};

export { NoteText as default };
