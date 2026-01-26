import { FaRegTrashCan } from "react-icons/fa6";

function Task({task}) {
  return (
    <div className="task">
      <input type="checkbox" />
      <p>{task.text}</p>
      <FaRegTrashCan className="trash-icon" />
    </div>
  );
}

export default Task;
