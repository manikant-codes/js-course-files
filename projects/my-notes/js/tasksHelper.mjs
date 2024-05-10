import { myCreateElement } from "./elementsHelper.mjs";
import { getDisplayTasks, tasks } from "./index.mjs";
import {
  addTask,
  deleteTask,
  getTasks,
  updateTask,
} from "./localStorageHelper.mjs";

const taskInput = document.getElementById("task-input");
const taskPrioritySelect = document.getElementById("task-priority-select");
const tasksList = document.getElementById("task-list");

const addTaskBtn = document.getElementById("add-task-btn");
addTaskBtn.onclick = function () {
  const task = {
    id: Date.now(),
    title: "Edit Task...",
    desc: taskInput.value,
    priority: taskPrioritySelect.value,
  };
  addTask(task);
};

export function handleEdit(title, descPara, editBtn, id, priority) {
  const titleInput = document.createElement("input");
  titleInput.classList.add("transparent-input");
  titleInput.type = "text";
  titleInput.value = title.innerText;

  const descTextArea = document.createElement("textarea");
  descTextArea.classList.add("transparent-input");
  descTextArea.rows = "1";
  descTextArea.value = descPara.innerText;

  const saveBtn = document.createElement("button");
  saveBtn.classList.add("action-btn", "save-action");
  saveBtn.innerHTML = `<i class="fa-regular fa-floppy-disk"></i>`;
  saveBtn.onclick = function () {
    title.innerText = titleInput.value;
    titleInput.replaceWith(title);

    descPara.innerText = descTextArea.value;
    descTextArea.replaceWith(descPara);

    saveBtn.replaceWith(editBtn);

    const updatedTask = {
      id,
      title: titleInput.value,
      desc: descTextArea.value,
      priority,
    };

    updateTask(updatedTask);
  };

  editBtn.replaceWith(saveBtn);

  title.replaceWith(titleInput);
  descPara.replaceWith(descTextArea);
}

export function createAndAddTaskCard(task) {
  const mainContainer = document.createElement("div");
  mainContainer.classList.add(
    "task-card",
    `priority-${task.priority.toLowerCase()}`
  );

  const title = document.createElement("h3");
  title.innerText = task.title;

  const prioritySelect = document.createElement("select");
  prioritySelect.onchange = function (event) {
    const oldClass = mainContainer.classList[1];
    console.log("oldClass", oldClass);
    mainContainer.classList.replace(oldClass, `priority-${event.target.value}`);
    updateTask({
      id: task.id,
      title: task.title,
      desc: task.desc,
      priority: event.target.value,
    });
  };

  prioritySelect.innerHTML = `
      <option value="a" ${task.priority === "a" ? "selected" : ""}>A</option>
      <option value="b" ${task.priority === "b" ? "selected" : ""}>B</option>
      <option value="c" ${task.priority === "c" ? "selected" : ""}>C</option>
      <option value="d" ${task.priority === "d" ? "selected" : ""}>D</option>
    `;

  const descPara = document.createElement("p");
  descPara.classList.add("task-desc");

  descPara.innerText = task.desc;

  const btnContainer = document.createElement("div");
  btnContainer.classList.add("task-card-actions");

  const btnEdit = document.createElement("button");
  btnEdit.innerHTML = `<i class="fa-regular fa-pen-to-square"></i>`;
  btnEdit.classList.add("action-btn", "edit-action");
  btnEdit.onclick = function () {
    handleEdit(title, descPara, btnEdit, task.id, task.priority);
  };

  const btnDelete = document.createElement("button");
  btnDelete.innerHTML = `<i class="fa-solid fa-trash"></i>`;
  btnDelete.classList.add("action-btn", "delete-action");
  btnDelete.onclick = function () {
    deleteTask(task.id);
  };

  btnContainer.appendChild(prioritySelect);
  btnContainer.appendChild(btnEdit);
  btnContainer.appendChild(btnDelete);

  mainContainer.appendChild(title);
  mainContainer.appendChild(descPara);
  mainContainer.appendChild(btnContainer);

  tasksList.appendChild(mainContainer);
}

function handleOnChange(event) {
  const oldClass = mainContainer.classList[1];
  console.log("oldClass", oldClass);
  mainContainer.classList.replace(oldClass, `priority-${event.target.value}`);
  updateTask({
    id: task.id,
    title: task.title,
    desc: task.desc,
    priority: event.target.value,
  });
}

export function renderTasksCards() {
  tasksList.innerHTML = "";
  const tasks = getDisplayTasks();
  for (const task of tasks) {
    createAndAddTaskCard(task);
  }
}
