const taskInput = document.getElementById("task-input");
const taskPrioritySelect = document.getElementById("task-priority-select");
const tasksList = document.getElementById("task-list");

const addTaskBtn = document.getElementById("add-task-btn");
addTaskBtn.onclick = function () {
  createAndAddTaskCard();
};

function createAndAddTaskCard() {
  const mainContainer = document.createElement("div");
  mainContainer.classList.add("task-card");

  const title = document.createElement("h3");
  title.innerText = "Edit Title...";

  const descPara = document.createElement("p");
  descPara.classList.add("task-desc");
  descPara.innerText = taskInput.value;

  const btnContainer = document.createElement("div");
  btnContainer.classList.add("task-card-actions");

  const btnEdit = document.createElement("button");
  btnEdit.innerHTML = `<i class="fa-regular fa-pen-to-square"></i>`;
  btnEdit.classList.add("action-btn", "edit-action");
  btnEdit.onclick = function () {
    console.log("Edit Task");
  };

  const btnDelete = document.createElement("button");
  btnDelete.innerHTML = `<i class="fa-solid fa-trash"></i>`;
  btnDelete.classList.add("action-btn", "delete-action");
  btnDelete.onclick = function () {
    console.log("Edit Task");
  };

  btnContainer.appendChild(btnEdit);
  btnContainer.appendChild(btnDelete);

  mainContainer.appendChild(title);
  mainContainer.appendChild(descPara);
  mainContainer.appendChild(btnContainer);

  tasksList.appendChild(mainContainer);
}
