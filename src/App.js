import React, { useState } from "react";
import TaskList from "./components/TaskList"; // Import TaskList

function App() {
  // Sample task list
  const [tasks, setTasks] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build a Task List", completed: true },
    { id: 3, text: "Push to GitHub", completed: false },
  ]);

  return (
    <div className="App">
      <h1>Task Manager</h1>
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
