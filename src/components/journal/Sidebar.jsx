import React from 'react';
import { useDispatch } from 'react-redux';
import { doActiveNote } from '../../actions/notesActions';
import JournalEntries from './sidebar/JournalEntries';

const Sidebar = () => {
  //hooks
  const dispatch = useDispatch();

  //functions
  const handleAddNote = () => {
    const initialNote = {
      id: '',
      title: 'nuevo titulo',
      body: 'this is the body',
      date: new Date().getTime(),
      url: '',
    };
    dispatch(doActiveNote(initialNote));
  };
  return (
    <aside className="sidebar">
      <div className="sidebar-navbar mt-3">
        <div className="d-grid gap-2">
          <button
            type="button"
            className="btn btn-outline-light "
            onClick={handleAddNote}
          >
            <i className="fa-solid fa-plus"></i> Nueva entrada
          </button>
        </div>
      </div>

      <JournalEntries />
    </aside>
  );
};

export default Sidebar;
