import React, { useState } from 'react';

const NoteEditor = ({ onSave }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() && !content.trim()) return;
    onSave({ title, content });
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        placeholder="Title"
        className="w-full p-2 border mb-2"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Write your note..."
        className="w-full p-2 border mb-2"
        value={content}
        onChange={e => setContent(e.target.value)}
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Add Note</button>
    </form>
  );
};

export default NoteEditor;
