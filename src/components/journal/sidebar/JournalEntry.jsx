import React from 'react';

const JournalEntry = () => {
  return (
    <div className="journal-entry">
      <div
        className="card text-white bg-dark mb-3"
        style={{ maxWidth: '18rem', height: '200px' }}
      >
        <div className="card-header text-secondary">3 Noviembre</div>
        <div className="card-body">
          <h5 className="card-title text-info">
            Aprendiendo React and Next js
          </h5>
          <p className="card-text">
            Aprendiendo de los mejores, por ejemplo fernando herrera, juan de la
            torre, jon mircha, midudev.
          </p>
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
