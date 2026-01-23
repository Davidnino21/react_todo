import { FaRegTrashCan } from "react-icons/fa6";

function Task() {
  return (
    <div className="task">
      <input type="checkbox" />
      <p>john swift</p>
      <FaRegTrashCan className="trash-icon" />
    </div>
  );
}

export default Task;
