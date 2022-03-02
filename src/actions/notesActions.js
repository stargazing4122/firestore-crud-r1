import { types } from '../types/types';
import { getImageUrl } from '../utils/getImageUrl';
import { db } from '../firebase/config';

// actions sincronos
export const doActiveNote = (note) => ({
  type: types.notesActiveNote,
  payload: { ...note },
});

export const doUpdateActiveNote = (note) => ({
  type: types.notesUpdateActiveNote,
  payload: { ...note },
});

export const doAddNote = (note) => ({
  type: types.notesAddNote,
  payload: { ...note },
});

//actions asincronos
export const startUpdateUrlActiveNote = (file) => {
  return async (dispatch, getState) => {
    const url = await getImageUrl(file);
    const { activeNote } = getState().notes;
    dispatch(
      doUpdateActiveNote({
        ...activeNote,
        url,
      }),
    );
  };
};

export const startAddNote = (note) => {
  return (dispatch, getState) => {
    const { uid } = getState().auth;
    const noteWithoutId = { ...note };
    delete noteWithoutId.id;
    db.collection(`/${uid}/journal/notes/`)
      .add(noteWithoutId)
      .then((noteAdded) => {
        const newNote = { ...noteWithoutId, id: noteAdded.id };
        dispatch(doAddNote(newNote));
        dispatch(doUpdateActiveNote(newNote));
      })
      .catch(console.log);
  };
};
