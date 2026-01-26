import Task from "./Task";

function Tasks({allTasks}) {
console.log(allTasks[0])
  return (
    <div className="task-container">
      {allTasks.map(task => (
        <Task key={task.id} task={task}/>
        
      ))}
    </div>
  );
}

export default Tasks;
