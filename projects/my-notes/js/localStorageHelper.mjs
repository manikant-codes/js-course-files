import { tasks, updatedTask } from "./index.mjs";
import { renderTasksCards } from "./tasksHelper.mjs";

export function updateTasksInLocalStrorage(newTasks) {
  localStorage.setItem("tasks", JSON.stringify(newTasks));
  updatedTask(newTasks);
  renderTasksCards();
}

export function getTasks() {
  const tasksJSONString = localStorage.getItem("tasks");
  const tasks = JSON.parse(tasksJSONString);
  return tasks || [];
}

export function addTask(task) {
  tasks.push(task);
  updateTasksInLocalStrorage(tasks);
}

export function updateTask(task) {
  const updatedTasks = tasks.map((value, index, array) => {
    if (value.id === task.id) {
      return {
        id: task.id,
        title: task.title,
        desc: task.desc,
        priority: task.priority,
      };
    }
    return value;
  });

  updateTasksInLocalStrorage(updatedTasks);
}

export function deleteTask(id) {
  const newTasks = tasks.filter((value, index, array) => {
    if (value.id === id) {
      return false;
    }
    return true;
  });

  updateTasksInLocalStrorage(newTasks);
}
