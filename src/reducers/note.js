const noteReducer = (state = [], action) => {
  switch (action.type) {
    case 'POPULATE_NOTES':
      return action.notes
        .reverse()
        .map(note => note)
        .sort((a, b) => b.priority || null - a.priority || null)
        .sort((x, y) => x.isComplete - y.isComplete);
    case 'ADD_NOTE':
      return [action.note, ...state];
    case 'REMOVE_NOTE':
      return state.filter(note => note.id !== action.id);
    case 'TOGGLE_COMPLETE':
      return state.map(note =>
        note.id === action.id
          ? { ...note, isComplete: !action.isComplete }
          : note
      );
    case 'TOGGLE_PRIORITY':
      return state.map(note =>
        note.id === action.id ? { ...note, priority: !action.priority } : note
      );
    case 'NOTE_REORDER':
      const priority = state.filter(note => note.priority && !note.isComplete);
      const neither = state.filter(note => !note.priority && !note.isComplete);
      const done = state.filter(note => note.isComplete);
      return [...priority, ...neither, ...done];
    case 'ADD_TEXT':
      return state.map(note =>
        note.id === action.id
          ? {
              ...note,
              text: action.text,
            }
          : note
      );
    case 'EDIT_NOTE':
      return state.map(note =>
        note.id === action.id ? { ...note, title: action.title } : note
      );
    case 'FOCUS_NOTES':
      const shifted = state.shift();
      return [...state, shifted].sort((a, b) => a.isComplete - b.isComplete);
    case 'DELETE_ALL':
      state = [];
      return state;
    default:
      return state;
  }
};

export { noteReducer as default };
