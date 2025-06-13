import React from 'react';

const NoteList = ({ notes, onDelete }) => {
  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {notes.map(note => (
        <div key={note.id} className="border p-4 rounded shadow-sm bg-white">
          <h2 className="text-lg font-semibold">{note.title}</h2>
          <p className="text-sm text-gray-700 whitespace-pre-wrap">{note.content}</p>
          <button
            onClick={() => onDelete(note.id)}
            className="text-red-500 mt-2 text-sm"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default NoteList;
