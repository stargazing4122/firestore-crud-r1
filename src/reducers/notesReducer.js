// const initialState = {
//   notes: [],
//   activeNote: null,  or
//   activeNotee: {
//     id: '',
//     title: '',
//     body: '',
//     date: 1234,
//     url: ''
//   }
// }

import { types } from '../types/types';

const initialState = {
  notes: [],
  activeNote: null,
};

export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.notesActiveNote:
      return {
        ...state,
        activeNote: {
          ...action.payload,
        },
      };

    case types.notesUpdateActiveNote:
      return {
        ...state,
        activeNote: {
          ...action.payload,
        },
      };

    case types.notesAddNote:
      return {
        ...state,
        notes: [{ ...action.payload }, ...state.notes],
      };

    case types.notesLoadNotes:
      return {
        ...state,
        notes: action.payload,
      };

    case types.notesUpdateNote:
      return {
        ...state,
        notes: state.notes.map((note) =>
          note.id === action.payload.id ? { ...action.payload } : note,
        ),
      };

    default:
      return state;
  }
};
