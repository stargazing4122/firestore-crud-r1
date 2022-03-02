import React from 'react';

const NoteNavbar = () => {
  return (
    <div className="note-navbar">
      <span className="note-navbar__date">21 Julio 2021, Jueves</span>
      <div>
        <button className="btn btn-outline-danger me-3">
          Borrar <i className="fa-solid fa-trash-can"></i>
        </button>
        <button className="notes-add_button-save">
          <i className="fa-solid fa-floppy-disk"></i>
        </button>
      </div>
    </div>
  );
};

export default NoteNavbar;
