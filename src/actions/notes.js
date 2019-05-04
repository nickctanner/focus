export const addNote = note => ({
  type: 'ADD_NOTE',
  note
});

export const toggleComplete = (isComplete, id) => ({
  type: 'TOGGLE_COMPLETE',
  isComplete,
  id
});
