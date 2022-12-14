/* eslint-disable no-lone-blocks */
import React from "react";
import Note from "./Note";
import AddNote from "./AddNote";
import "./Notes.css";


{/* component is storing the notes in a format*/}

const NotesList = ({ notes, handleAddNote, handleDelete }) => {
  return (
    <div className="notes-list">
      {/* .map to make each note card from notes
        and also passing the functions and other states as props*/}
      {notes.map((note,index) => (
        <Note
          key={index}
          id={note.id}
          text={note.text}
          date={note.date}
          handleDelete={handleDelete}
        />
      ))}
      <AddNote handleAddNote={handleAddNote} />
    </div>
  );
};

export default NotesList;