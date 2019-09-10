import { ADD_NOTE, TOGGLE_COMPLETE, TOGGLE_PRIORITY } from './types';

export const addNote = note => ({
  type: ADD_NOTE,
  note,
});

export const toggleComplete = (isComplete, id) => ({
  type: TOGGLE_COMPLETE,
  isComplete,
  id,
});

export const togglePriority = (priority, id) => ({
  type: TOGGLE_PRIORITY,
  priority,
  id,
});
