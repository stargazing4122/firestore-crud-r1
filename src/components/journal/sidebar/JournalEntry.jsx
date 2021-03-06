import React from 'react';
import dayjs from 'dayjs';
import { useDispatch } from 'react-redux';
import { doActiveNote } from '../../../actions/notesActions';

const JournalEntry = (props) => {
  //hooks
  const { title, body, date } = props;
  const dispatch = useDispatch();
  //functions
  const handleActiveNote = () => {
    dispatch(doActiveNote({ ...props }));
  };
  return (
    <div onClick={handleActiveNote} className="journal-entry">
      <div
        className="card text-white bg-dark mb-3"
        style={{ maxWidth: '18rem', height: '200px' }}
      >
        <div className="card-header text-secondary">
          {dayjs(date).format('D MMMM hh:mma')}
        </div>
        <div className="card-body">
          <h5 className="card-title text-info">{title}</h5>
          <p className="card-text">{body}</p>
        </div>
      </div>
      {/* <div className="row journal-entry__title">
        <div className="col-4">
          <span className="journal-title__date">3 Noviembre</span>
        </div>
        <div className="col-8">
          <span className="journal-title__title">
            Aprendiendo React and Next js
          </span>
        </div>
      </div>
      <div className="row">
        <p className="journal-entry__body">
          Aprendiendo de los mejores, por ejemplo fernando herrera, juan de la
          torre, jon mircha, midudev.
        </p>
      </div> */}
    </div>
  );
};

export default JournalEntry;
