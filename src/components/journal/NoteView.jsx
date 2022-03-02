import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  doUpdateActiveNote,
  startUpdateUrlActiveNote,
} from '../../actions/notesActions';
import useForm from '../../hooks/useForm';
import NoteNavbar from './noteview/NoteNavbar';

const NoteView = () => {
  //hooks
  const { activeNote } = useSelector((state) => state.notes);
  const dispatch = useDispatch();

  const initialForm = { ...activeNote };
  const { formValues, handleInput, reset } = useForm(initialForm);
  const { title, body, url } = formValues;

  const noteDateRef = useRef(activeNote.date);
  const noteUrlRef = useRef(activeNote.url);
  const noteIdRef = useRef(activeNote.id);
  const inputFileRef = useRef();

  useEffect(() => {
    if (activeNote.date !== noteDateRef.current) {
      reset(activeNote);
      noteDateRef.current = activeNote.date;
    }
    if (activeNote.url !== noteUrlRef.current) {
      reset(activeNote);
      noteUrlRef.current = activeNote.url;
    }
    if (activeNote.id !== noteIdRef.current) {
      reset(activeNote);
      noteIdRef.current = activeNote.id;
    }
  }, [activeNote]);

  useEffect(() => {
    dispatch(doUpdateActiveNote({ ...formValues }));
  }, [formValues]);

  //functions
  const handleUploadPhoto = () => {
    inputFileRef.current.click();
  };

  const handleChangePhoto = (e) => {
    const file = e.target.files[0];
    dispatch(startUpdateUrlActiveNote(file));
  };

  return (
    <div>
      <NoteNavbar />

      <div className="notes-content">
        <div className="notes-content__form">
          <input
            className="notes-add__title"
            type="text"
            placeholder="Título de tu nota"
            autoComplete="off"
            name="title"
            value={title}
            onChange={handleInput}
          />
          <textarea
            className="notes-add__body"
            placeholder="Descripción de tu nota ..."
            name="body"
            value={body}
            onChange={handleInput}
          ></textarea>
        </div>
        {url && <img className="notes-add__image" src={url} alt="universe" />}
        <input
          ref={inputFileRef}
          style={{ display: 'none' }}
          type="file"
          name="file-photo"
          id="file-photo"
          onChange={handleChangePhoto}
        />
        <button
          onClick={handleUploadPhoto}
          className="btn btn-outline-success notes-add_button-upload"
        >
          Subir foto <i className="fa-solid fa-arrow-up-from-bracket"></i>
        </button>
      </div>
    </div>
  );
};

export default NoteView;
