import React from 'react';
import { useSelector } from 'react-redux';

const NoteNavbar = () => {
  //hooks
  const { activeNote } = useSelector((state) => state.notes);
  return (
    <div>
      <div>
        <button
          className="btn btn-outline-danger me-3 button-delete"
          disabled={!activeNote?.id}
        >
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
