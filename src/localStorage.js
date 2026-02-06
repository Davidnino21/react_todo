export function getTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || []
    return tasks
}

export function saveTasks(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks))
}