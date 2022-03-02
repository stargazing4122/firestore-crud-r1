import React from 'react';

import Navbar from './Navbar';
import Sidebar from './Sidebar';
import NoteView from './NoteView';
import NothingSelected from './NothingSelected';
import { useSelector } from 'react-redux';

const JournalScreen = () => {
  //hooks
  const { activeNote } = useSelector((state) => state.notes);

  return (
    <div>
      <Navbar />
      <div className="row">
        <div className="col-4 sidebar-content">
          <Sidebar />
        </div>
        <main className="col-8">
          {activeNote ? <NoteView /> : <NothingSelected />}
        </main>
      </div>
    </div>
  );
};

export default JournalScreen;
