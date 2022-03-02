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
    default:
      return state;
  }
};
