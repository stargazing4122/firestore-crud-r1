import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  startAddNote,
  startDeleteNote,
  startUpdateNote,
} from '../../../actions/notesActions';

const NoteNavbar = () => {
  //hooks
  const { activeNote } = useSelector((state) => state.notes);
  const dispatch = useDispatch();

  //functions
  const handleSaveNote = () => {
    if (activeNote?.id) {
      dispatch(startUpdateNote(activeNote));
    } else {
      dispatch(startAddNote(activeNote));
    }
  };

  const handleDeleteNote = () => {
    dispatch(startDeleteNote(activeNote.id));
  };

  return (
    <div>
      <div>
        {activeNote?.id && (
          <button
            className="btn btn-outline-danger me-3 button-delete"
            onClick={handleDeleteNote}
          >
            <i className="fa-solid fa-trash-can"></i>
          </button>
        )}
        <button onClick={handleSaveNote} className="button-save">
          <i className="fa-solid fa-floppy-disk"></i>
        </button>
      </div>
    </div>
  );
};

export default NoteNavbar;
