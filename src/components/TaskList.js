import React, { useState } from "react";
import "../App.css"; // Ensure styles are applied

const TaskList = ({ tasks }) => {
  const [taskList, setTaskList] = useState(tasks);

  const handleDelete = (id) => {
    // Show confirmation popup
    const confirmDelete = window.confirm("Are you sure you want to delete this task?");
    if (!confirmDelete) return;

    // Add fade-out class before deleting
    document.getElementById(`task-${id}`).classList.add("fade-out");
    setTimeout(() => {
      setTaskList(taskList.filter((task) => task.id !== id));
    }, 300); // Match animation duration
  };

  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {taskList.length === 0 ? (
          <p>No tasks available.</p>
        ) : (
          taskList.map((task) => (
            <li key={task.id} id={`task-${task.id}`} className={task.completed ? "completed" : ""}>
              <input type="checkbox" checked={task.completed} className="task-checkbox" readOnly />
              {task.text}
              <button onClick={() => handleDelete(task.id)} style={{ marginLeft: "10px", cursor: "pointer" }}>
                ❌
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default TaskList;
