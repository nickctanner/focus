export const removeNote = title => {
  const confirmed = window.confirm(
    `CANNOT BE UNDONE - Are you sure you want to permanently delete?`
  );
  if (confirmed) {
    return { type: "REMOVE_NOTE", title };
  }
  return false;
};

export const toggleComplete = (isComplete, id) => ({
  type: "TOGGLE_COMPLETE",
  isComplete,
  id
});
