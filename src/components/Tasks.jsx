import Task from "./Task";

function Tasks({ allTasks, deleteTask, markComplete }) {
  return (
    <div className="task-container">
      {allTasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          markComplete={markComplete}
        />
      ))}
    </div>
  );
}

export default Tasks;
