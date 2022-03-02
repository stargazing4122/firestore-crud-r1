import React from 'react';
import { useDispatch } from 'react-redux';
import { startLogout } from '../../actions/authActions';

const JournalScreen = () => {
  //hooks
  const dispatch = useDispatch();

  //functions
  const handleLogout = () => {
    dispatch(startLogout());
  };
  return (
    <div className="container">
      <h1>Home of Journal Screen</h1>

      <button
        type="button"
        className="btn btn-secondary"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default JournalScreen;
