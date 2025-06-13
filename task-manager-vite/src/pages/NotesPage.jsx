import React, { useState } from 'react';
import NoteEditor from '../components/NoteEditor';
import NoteList from '../components/NoteList';

const NotesPage = () => {
  const [notes, setNotes] = useState([]);

  const addNote = (note) => {
    setNotes(prev => [...prev, { ...note, id: Date.now() }]);
  };

  const deleteNote = (id) => {
    setNotes(prev => prev.filter(note => note.id !== id));
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Notes</h1>
      <NoteEditor onSave={addNote} />
      <NoteList notes={notes} onDelete={deleteNote} />
    </div>
  );
};

export default NotesPage;
