import { useState } from "react";
import { FaRegTrashCan } from "react-icons/fa6";

function Task({ task, deleteTask, markComplete }) {
  // function removeTask() {
  //   deleteTask(task.id)
  // }

  return (
    <div className="task">
      <input
        type="checkbox"
        checked={task.done}
        onChange={() => markComplete(task.id)}
      />
      <p className={task.done ? "strike" : ""}>{task.text}</p>
      <FaRegTrashCan
        className="trash-icon"
        onClick={() => deleteTask(task.id)}
      />
    </div>
  );
}

export default Task;

