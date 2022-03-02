import React, { useState } from 'react';

import Navbar from './Navbar';
import Sidebar from './Sidebar';
import NoteView from './NoteView';
import NothingSelected from './NothingSelected';

const JournalScreen = () => {
  //hooks
  const [noteActive, setNoteActive] = useState(true);

  return (
    <div>
      <Navbar />
      <div className="row">
        <div className="col-4 sidebar-content">
          <Sidebar />
        </div>
        <main className="col-8">
          {noteActive ? <NoteView /> : <NothingSelected />}
        </main>
      </div>
    </div>
  );
};

export default JournalScreen;
