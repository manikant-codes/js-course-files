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
  renderTasksCards();

  // createAndAddTaskCard(task);
};

// Local Storage Helpers

function updateTasksInLocalStrorage(newTasks) {
  localStorage.setItem("tasks", JSON.stringify(newTasks));
}

function getTasks() {
  const tasksJSONString = localStorage.getItem("tasks");
  const tasks = JSON.parse(tasksJSONString);
  return tasks || [];
}

function addTask(task) {
  const tasks = getTasks();
  tasks.push(task);
  updateTasksInLocalStrorage(tasks);
}

function updateTask() {}

function deleteTask(id) {
  const tasks = getTasks();
  const newTasks = tasks.filter((value, index, array) => {
    if (value.id === id) {
      return false;
    }
    return true;
  });

  updateTasksInLocalStrorage(newTasks);
  renderTasksCards();
}

function handleEdit(title, descPara, editBtn) {
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
  };

  editBtn.replaceWith(saveBtn);

  title.replaceWith(titleInput);
  descPara.replaceWith(descTextArea);
}

// End Local Storage Helpers

// Render Tasks Cards

function renderTasksCards() {
  tasksList.innerHTML = "";
  const tasks = getTasks();
  for (const task of tasks) {
    createAndAddTaskCard(task);
  }
}

// End Render Tasks Cards

// Create and Add Task Card

function createAndAddTaskCard(task) {
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
    handleEdit(title, descPara, btnEdit);
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

// End Create and Add Task Card

renderTasksCards();
