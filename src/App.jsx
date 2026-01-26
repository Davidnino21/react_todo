import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import Tasks from "./components/Tasks";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);

  function addTask(text) {
    const newTask = { text, done: false, id: Date.now() };
    setTasks([...tasks, newTask])
  }


  return (
    <div className="app-container">
      <div className="todo-container">
        <Header />
        <Form addNewTask={addTask} />
        <Tasks allTasks={tasks}/>
      </div>
    </div>
  );
}

export default App;
