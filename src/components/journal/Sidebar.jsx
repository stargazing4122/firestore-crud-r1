import React from 'react';
import JournalEntries from './sidebar/JournalEntries';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-navbar mt-3">
        <div className="d-grid gap-2">
          <button type="button" className="btn btn-outline-light ">
            <i className="fa-solid fa-plus"></i> Nueva entrada
          </button>
        </div>
      </div>

      <JournalEntries />
    </aside>
  );
};

export default Sidebar;
