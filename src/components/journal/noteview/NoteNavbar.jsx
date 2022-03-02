import React from 'react';

const NoteNavbar = () => {
  return (
    <div>
      <div>
        <button className="btn btn-outline-danger me-3 button-delete">
          <i className="fa-solid fa-trash-can"></i>
        </button>
        <button className="button-save">
          <i className="fa-solid fa-floppy-disk"></i>
        </button>
      </div>
    </div>
  );
};

export default NoteNavbar;
