// initialState
// {
//   uid,
//   userName,
// }

import { types } from '../types/types';

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case types.authLogin:
      return {
        uid: action.payload.uid,
        userName: action.payload.userName,
      };

    case types.authLogout:
      return {};

    default:
      return state;
  }
};
