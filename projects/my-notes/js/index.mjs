import { getTasks } from "./localStorageHelper.mjs";
import { renderTasksCards } from "./tasksHelper.mjs";

export let tasks = getTasks();
export let filteredTasks = null;

export function updatedTask(newTasks) {
  tasks = newTasks;
}

export function updateFilteredTasks(newTasks) {
  filteredTasks = newTasks;
}

export function getDisplayTasks() {
  if (!filteredTasks) return tasks;
  return filteredTasks;
}

renderTasksCards();
