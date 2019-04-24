import React, { useContext } from "react";

import NoteList from "./NoteList";
import AddNoteForm from "./AddNoteForm";
import FilterButtons from "./FilterButtons";
import Header from "./Header";
import NotesContext from "../context/notes-context";

const NotesPage = () => {
  const { notes } = useContext(NotesContext);
  return (
    <>
      <Header />
      <div className="notes-app">
        <AddNoteForm />
        {notes.length > 0 && <FilterButtons />}
        <NoteList />
      </div>
    </>
  );
};

export { NotesPage as default };
