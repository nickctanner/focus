import React, { useContext } from 'react';
import { database } from '../../../firebase/firebase';

import NotesContext from '../../../context/notes-context';
import CredentialsContext from '../../../context/credentials-context';

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
    dispatch({ type: 'NOTE_REORDER' });
    return !focus
      ? (document.body.style.background = '#1a283f')
      : (document.body.style.background = 'lightblue');
  };

  const nextItem = () => {
    dispatch({
      type: 'FOCUS_NOTES',
    });
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
        onClick={focus ? () => nextItem() : () => deleteAll()}
        /* style={{ display: focus ? 'none' : '' }} */
      >
        {focus ? 'Next Item' : 'Delete All'}
        {focus && <i className='fa fa-arrow-right' aria-hidden='true'></i>}
      </button>
    </div>
  );
};

export { FilterButtons as default };
