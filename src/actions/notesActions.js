import { types } from '../types/types';
import { getImageUrl } from '../utils/getImageUrl';
import { db } from '../firebase/config';
import { getNotesFromFirestore } from '../utils/getNotesFromFirestore';

// * actions sincronos
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

export const doUpdateNote = (note) => ({
  type: types.notesUpdateNote,
  payload: { ...note },
});

// ? muy extraño, payload no acepta [...notes]
export const doLoadNotes = (notes) => ({
  type: types.notesLoadNotes,
  payload: notes,
});

// * actions asincronos
export const startLoadNotes = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    const notes = await getNotesFromFirestore(uid);
    dispatch(doLoadNotes(notes));
  };
};

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

export const startUpdateNote = (note) => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    const noteToSend = { ...note };
    delete noteToSend.id;
    try {
      await db.doc(`/${uid}/journal/notes/${note.id}`).update(noteToSend);
      dispatch(doUpdateNote(note));
    } catch (err) {
      console.log(err);
    }
  };
};
