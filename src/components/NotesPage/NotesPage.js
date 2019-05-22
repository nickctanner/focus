import React, { useContext } from 'react';

import NoteList from '../NoteList/NoteList';
import AddNoteForm from '../AddNoteForm/AddNoteForm';
import FilterButtons from '../FilterButtons/FilterButtons';
import Header from '../Header/Header';
import NotesContext from '../../context/notes-context';

import styles from './NotesPage.module.css';

const NotesPage = () => {
  const { notes } = useContext(NotesContext);
  return (
    <>
      <Header />
      <div className={styles.notesApp}>
        <AddNoteForm />
        {notes.length > 0 && <FilterButtons />}
        <NoteList />
      </div>
    </>
  );
};

export { NotesPage as default };
