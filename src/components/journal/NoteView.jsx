import React from 'react';
import NoteNavbar from './noteview/NoteNavbar';

const NoteView = () => {
  return (
    <div>
      <NoteNavbar />

      <div className="notes-content">
        <div className="notes-content__form">
          <input
            className="notes-add__title"
            type="text"
            placeholder="title"
            autoComplete="off"
          />
          <textarea
            className="notes-add__body"
            placeholder="description of your note"
          ></textarea>
        </div>
        <img
          className="notes-add__image"
          src="https://p4.wallpaperbetter.com/wallpaper/914/50/522/beautiful-space-the-universe-stars-galaxies-nebula-2560%C3%971440-wallpaper-preview.jpg"
          alt="universe"
        />
        <button className="notes-add_button-save">
          <i className="fa-solid fa-floppy-disk"></i>
        </button>
      </div>
    </div>
  );
};

export default NoteView;
