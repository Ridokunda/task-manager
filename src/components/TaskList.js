import React from "react";
import "../App.css";

const TaskList = ({ tasks, setTasks }) => {
  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this task?");
    if (!confirmDelete) return;

    document.getElementById(`task-${id}`).classList.add("fade-out");
    setTimeout(() => {
      setTasks(tasks.filter((task) => task.id !== id));
    }, 300);
  };

  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.length === 0 ? (
          <p>No tasks available.</p>
        ) : (
          tasks.map((task) => (
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
