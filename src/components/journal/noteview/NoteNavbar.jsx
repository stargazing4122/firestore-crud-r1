import React from 'react';

const NoteNavbar = () => {
  return (
    <div className="note-navbar">
      <span>21 Julio 2021, Jueves</span>
      <div>
        <button className="btn btn-outline-danger me-3">
          Borrar <i className="fa-solid fa-trash-can"></i>
        </button>
        <button className="btn btn-outline-success">
          Subir foto <i className="fa-solid fa-arrow-up-from-bracket"></i>
        </button>
      </div>
    </div>
  );
};

export default NoteNavbar;
