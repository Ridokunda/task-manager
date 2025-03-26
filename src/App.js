import React, { useState } from "react";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build a Task List", completed: true },
  ]);

  const addTask = (taskText) => {
    const newTask = { id: tasks.length + 1, text: taskText, completed: false };
    setTasks([...tasks, newTask]); // Ensure state updates
  };

  return (
    <div className="App">
      <h1>Task Manager</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
