import React from 'react';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { startLogin } from '../../actions/authActions';

const LoginScreen = () => {
  //hooks
  const dispatch = useDispatch();

  //functions

  const handleLogin = () => {
    dispatch(startLogin());
  };

  return (
    <div className="login-container">
      <p className="login__icon">
        <i className="fa-solid fa-user"></i>Login
      </p>

      <div className="login__button" onClick={handleLogin}>
        <div className="google-btn">
          <div className="google-icon-wrapper">
            <img
              className="google-icon"
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              alt="google button"
            />
          </div>
          <p className="btn-text">
            <b>Sign in with google</b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
