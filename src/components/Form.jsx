import { useState } from "react";
function Form({ addNewTask }) {
  const [userTask, setUserTask] = useState("");

  function handleNewTask(e) {
    setUserTask(e.target.value);
  }

  function handleAddTask(e) {
    e.preventDefault();
    addNewTask(userTask)
  }

  return (
    <div className="form">
      <form onSubmit={handleAddTask}>
        <input onChange={handleNewTask} type="text" />
        <button>Add task</button>
      </form>
    </div>
  );
}

export default Form;
