import { types } from '../types/types';
import { auth, googleAuthProvider } from '../firebase/config';
import Swal from 'sweetalert2';
import { doCleanNotesState } from './notesActions';
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

// actions asincronos

export const startLogin = () => {
  return (dispatch) => {
    auth.signInWithPopup(googleAuthProvider).then(({ user }) => {
      dispatch(doAuthLogin(user.uid, user.displayName));
      Swal.fire('Sesión iniciada', 'Credenciales correctas', 'success');
    });
  };
};

export const startLogout = () => {
  return async (dispatch) => {
    await auth.signOut();
    dispatch(doAuthLogout());
    dispatch(doCleanNotesState());
    Swal.fire('Sesión cerrada', '¡Vuelva pronto!', 'error');
  };
};
