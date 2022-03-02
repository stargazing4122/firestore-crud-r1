import { types } from '../types/types';

// actions sincronos
export const doAuthLogin = (uid, userName) => ({
  type: types.authLogin,
  payload: {
    uid,
    userName,
  },
});

export const doAuthLogout = () => ({
  type: types.authLogout,
});
