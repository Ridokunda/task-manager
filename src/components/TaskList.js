import React, { useState } from "react";
import "../App.css";

const TaskList = ({ tasks, setTasks }) => {
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editedText, setEditedText] = useState("");

  const handleToggleComplete = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this task?");
    if (!confirmDelete) return;

    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleEdit = (id, text) => {
    setEditingTaskId(id);
    setEditedText(text);
  };

  const handleSaveEdit = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, text: editedText } : task
    );
    setTasks(updatedTasks);
    setEditingTaskId(null);
  };

  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.length === 0 ? (
          <p>No tasks available.</p>
        ) : (
          tasks.map((task) => (
            <li key={task.id} className={task.completed ? "completed" : ""}>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleToggleComplete(task.id)}
              />
              {editingTaskId === task.id ? (
                <>
                  <input
                    type="text"
                    value={editedText}
                    onChange={(e) => setEditedText(e.target.value)}
                  />
                  <button onClick={() => handleSaveEdit(task.id)}>Save</button>
                </>
              ) : (
                <>
                  {task.text}
                  <button onClick={() => handleEdit(task.id, task.text)}>✏️</button>
                  <button onClick={() => handleDelete(task.id)}>❌</button>
                </>
              )}
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default TaskList;
