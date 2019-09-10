import React, { useContext } from 'react';

import NoteList from '../../NoteList/NoteList';
import AddNoteForm from '../../forms/AddNoteForm/AddNoteForm';
import FilterButtons from '../../buttons/FilterButtons/FilterButtons';
import Header from '../../Header/Header';
import NotesContext from '../../../context/notes-context';

import styles from './NotesPage.module.css';

const NotesPage = () => {
  const { notes } = useContext(NotesContext);
  return (
    <>
      <Header />
      <main>
        <div className={styles.notesApp}>
          /* <AddNoteForm /> */
          {notes.length > 0 && <FilterButtons />}
          <NoteList />
        </div>
      </main>
    </>
  );
};

export { NotesPage as default };
