import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../../actions/authActions';
import dayjs from 'dayjs';
import 'dayjs/locale/es';

dayjs.locale('es');

const Navbar = () => {
  const dispatch = useDispatch();
  const { userName } = useSelector((state) => state.auth);

  //functions
  const handleLogout = () => {
    dispatch(startLogout());
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar navbar-dark bg-primary">
        <div className="container-fluid">
          <div>
            <a className="navbar-brand note-navbar__name" href="#">
              JournalApp
            </a>
            <span className="note-navbar__date">
              {dayjs().format('D MMMM YYYY[,] dddd')}
            </span>
          </div>
          <div>
            <span className="me-3">{userName}</span>
            <button
              className="btn btn-outline-info"
              type="button"
              onClick={handleLogout}
            >
              Salir <i className="fa-solid fa-right-from-bracket"></i>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
