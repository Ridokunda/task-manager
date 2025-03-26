import React, { useState } from "react";

const TaskForm = ({ addTask }) => {
  const [taskText, setTaskText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskText.trim() === "") return; // Prevent empty tasks

    addTask(taskText);
    setTaskText(""); // Clear input field
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Enter a new task..."
        style={{
          padding: "8px",
          width: "70%",
          borderRadius: "5px",
          border: "1px solid #ccc",
          marginRight: "10px",
        }}
      />
      <button type="submit" style={{ padding: "8px 15px", cursor: "pointer", borderRadius: "5px", background: "#28a745", color: "white", border: "none" }}>
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
