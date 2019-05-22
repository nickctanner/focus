import React, { useContext } from 'react';
import { database } from '../../firebase/firebase';

import NotesContext from '../../context/notes-context';
import CredentialsContext from '../../context/credentials-context';

import styles from './FilterButtons.module.css';

const FilterButtons = () => {
  const { dispatch, focus, toggleFocus } = useContext(NotesContext);
  const { uid } = useContext(CredentialsContext);

  const deleteAll = () => {
    const confirm = window.confirm(
      'Are you sure you want to delete all your notes?'
    );

    if (confirm) {
      const notes = [];

      database
        .ref(`users/${uid}/notes/`)
        .set(notes)
        .then(() => {
          dispatch({ type: 'DELETE_ALL' });
        });
    }
  };

  const focusMode = () => {
    toggleFocus();
    return !focus
      ? (document.body.style.background = '#1a283f')
      : (document.body.style.background = 'lightblue');
  };

  return (
    <div className={styles.filterContainer}>
      <button
        id={styles.focus}
        className='button'
        onClick={() => focusMode()}
        title='Enter focus mode'
      >
        {focus ? 'Normal' : 'Focus'}
      </button>
      <button
        id={styles.deleteAll}
        className='button'
        onClick={() => deleteAll()}
        style={{ display: focus ? 'none' : '' }}
      >
        Delete All
      </button>
    </div>
  );
};

export { FilterButtons as default };
