import { tasks, updateFilteredTasks } from "./index.mjs";
import { renderTasksCards } from "./tasksHelper.mjs";

const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");
searchBtn.onclick = filterTasks;
const clearBtn = document.getElementById("clear-filter");
clearBtn.onclick = clearFilter;

export function filterTasks() {
  const newTasks = tasks.filter((value) => {
    if (value.title.toLowerCase().includes(searchInput.value)) {
      return true;
    }
    return false;
  });
  updateFilteredTasks(newTasks);
  renderTasksCards();
}

export function clearFilter() {
  searchInput.value = "";
  updateFilteredTasks(null);
  renderTasksCards();
}
