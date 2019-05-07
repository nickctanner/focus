import React, { useState } from "react";

// import NotesContext from '../context/notes-context';
import SingleNoteContext from "../context/single-note-context";
// import CredentialsContext from '../context/credentials-context';
// import EditNoteForm from './EditNoteForm';
// import NoteTitle from './NoteTitle';
import NoteBody from "./NoteBody";
import NoteText from "./NoteText";
// import NoteHandlerButtons from './NoteHandlerButtons';
// import { toggleComplete } from '../actions/notes';
// import { database } from '../firebase/firebase';

const Note = ({ note }) => {
  // const { dispatch, focus } = useContext(NotesContext);
  // const { uid } = useContext(CredentialsContext);
  // const [editNote, setEditNote] = useState(false);
  const [noteTextView, setNoteTextView] = useState(false);

  // const toggleTitleEdit = () => {
  //   setEditNote(!editNote);
  // };

  const toggleNoteTextView = () => {
    setNoteTextView(!noteTextView);
  };

  // const handleMarkCompleted = (isComplete, id) => {
  //   const updates = {
  //     ...note,
  //     isComplete: !isComplete,
  //   };
  //
  //   database
  //     .ref(`users/${uid}/notes/${id}/`)
  //     .update(updates)
  //     .then(() => {
  //       dispatch(toggleComplete(isComplete, id));
  //       setTimeout(() => {
  //         dispatch({ type: 'MOVE_COMPLETED' });
  //       }, 500);
  //     });
  // };

  return (
    <SingleNoteContext.Provider value={{ note }}>
      <div className={focus ? "note-container-focus" : "note-container"}>
        {!noteTextView ? (
          // <div className={note.isComplete ? 'front-complete' : 'front'}>
          //   <button
          //     type='checkbox'
          //     name={note.title}
          //     id='check-complete'
          //     onClick={() => handleMarkCompleted(note.isComplete, note.id)}
          //   >
          //     <i
          //       className={
          //         note.isComplete ? 'fas fa-check-square' : 'far fa-square'
          //       }
          //     />
          //   </button>
          //   <div className='note-wrapper'>
          //     {editNote ? (
          //       <EditNoteForm toggleTitleEdit={toggleTitleEdit} />
          //     ) : (
          //       <NoteTitle toggleTitleEdit={toggleTitleEdit} />
          //     )}
          //   </div>
          //   <NoteHandlerButtons
          //     toggleNoteTextView={toggleNoteTextView}
          //     note={note}
          //   />
          // </div>
          <NoteBody toggleNoteTextView={toggleNoteTextView} />
        ) : (
          <NoteText toggleNoteTextView={toggleNoteTextView} />
        )}
      </div>
    </SingleNoteContext.Provider>
  );
};

export default Note;
