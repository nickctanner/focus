import React, { useState, useContext, useEffect, useRef } from '../NoteTextForm/node_modules/react';
import { database } from 'firebase';

import NotesContext from '../../../context/notes-context';
import CredentialsContext from '../../../context/credentials-context';
import { addNote } from '../../../actions/notes';

import styles from './AddNoteForm.module.css';

const AddNoteForm = () => {
  const { dispatch, focus } = useContext(NotesContext);
  const { uid } = useContext(CredentialsContext);
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const input = useRef(null);

  const startAddNote = e => {
    e.preventDefault();
    setIsComplete(false);

    const note = {
      title,
      text,
      isComplete,
    };

    if (title) {
      database()
        .ref(`users/${uid}/notes`)
        .push(note)
        .then(ref => {
          dispatch(
            addNote({
              id: ref.key,
              ...note,
            })
          );
        });
      setTitle('');
      setText('');
    }
  };

  useEffect(() => {
    input.current.focus();
  }, []);

  return (
    <form
      onSubmit={startAddNote}
      style={{ visibility: focus ? 'hidden' : 'visible' }}
    >
      <div className={styles.addNote}>
        <input
          id={styles.addTitle}
          type='text'
          ref={input}
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder='Add something to focus on...'
          required
        />
        <button id='add-btn' onClick={() => setTitle(title)}>
          <i className='fas fa-bullseye' />
        </button>
      </div>
    </form>
  );
};

export { AddNoteForm as default };
