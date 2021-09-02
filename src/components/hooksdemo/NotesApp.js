import React, { useState } from "react";

const NotesApp = () => {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");

  const addNote = (e) => {
    e.preventDefault();
    setNotes([...notes, { title, email }]);
    setTitle("");
    setEmail("");
  };

  const removeNote = (title) => {
    setNotes(notes.filter((note) => note.title !== title));
  };
  return (
    <div>
      <p>Notes Application</p>
      {notes.map((note) => (
        <div>
          <h2>{note.title}</h2>
          <h2>{note.email}</h2>
          <button onClick={() => removeNote(note.title)}>remove</button>
        </div>
      ))}
      <form onSubmit={addNote}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button>Add</button>
      </form>
    </div>
  );
};
export default NotesApp;
