import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import Tasks from "./components/Tasks";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);

  function addTask(text) {
    const newTask = { text, done: false, id: Date.now() };
    setTasks([...tasks, newTask]);
  }

  function deleteTask(id) {
    const filterTasks = tasks.filter((task) => task.id !== id);
    setTasks([...filterTasks]);
  }

  function markComplete(id) {
    const currentTasks = tasks;
    const foundTask = currentTasks.find((task) => task.id === id);
    foundTask.done = !foundTask.done;
    setTasks([...currentTasks]);
  }

  const completedCount = tasks.reduce((total, task) => {
    if (task.done) {
      return total + 1;
    } else {
      return total;
    }
  }, 0);

  const incompleteCount = tasks.reduce((total, task) => {
    if (!task.done) {
      return total + 1;
    } else {
      return total;
    }
  }, 0);

  return (
    <div className="app-container">
      <div className="todo-container">
        <Header
          completedCount={completedCount}
          incompleteCount={incompleteCount}
        />
        <Form addNewTask={addTask} />
        <Tasks
          allTasks={tasks}
          deleteTask={deleteTask}
          markComplete={markComplete}
        />
      </div>
    </div>
  );
}

export default App;
