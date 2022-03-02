import { types } from '../types/types';
import { getImageUrl } from '../utils/getImageUrl';

// actions sincronos
export const doActiveNote = (note) => ({
  type: types.notesActiveNote,
  payload: { ...note },
});

export const doUpdateActiveNote = (note) => ({
  type: types.notesUpdateActiveNote,
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
