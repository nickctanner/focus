import React, { useState, useContext } from 'react';
import { database } from '../../firebase/firebase';

import NotesContext from '../context/notes-context';
import CredentialsContext from '../context/credentials-context';
import { addNote } from '../actions/notes';

const AddNoteForm = () => {
  const { dispatch, focus } = useContext(NotesContext);
  const { uid } = useContext(CredentialsContext);
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

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

  return (
    <form
      onSubmit={startAddNote}
      style={{ visibility: focus ? 'hidden' : 'visible' }}
    >
      <div className='add-note'>
        <input
          id='title'
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
