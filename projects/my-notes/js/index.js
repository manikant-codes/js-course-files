const taskInput = document.getElementById("task-input");
const taskPrioritySelect = document.getElementById("task-priority-select");
const tasksList = document.getElementById("task-list");

const addTaskBtn = document.getElementById("add-task-btn");
addTaskBtn.onclick = function () {
  createAndAddTaskCard();
};

function handleEdit(title, descPara, editBtn) {
  const titleInput = document.createElement("input");
  taskInput.type = "text";
  titleInput.value = title.innerText;

  const descTextArea = document.createElement("textarea");
  descTextArea.rows = "4";
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

function createAndAddTaskCard() {
  const mainContainer = document.createElement("div");
  mainContainer.classList.add(
    "task-card",
    `priority-${taskPrioritySelect.value}`
  );

  const title = document.createElement("h3");
  title.innerText = "Edit Title...";

  const prioritySelect = document.createElement("select");
  prioritySelect.onchange = function (event) {
    const oldClass = Array.from(mainContainer.classList.values())[1];
    mainContainer.classList.replace(oldClass, `priority-${event.target.value}`);
  };
  // const optionA = document.createElement("option");
  // optionA.value = "a";
  // optionA.innerText = "A";
  // const optionB = document.createElement("option");
  // optionB.value = "b";
  // optionB.innerText = "B";
  // const optionC = document.createElement("option");
  // optionC.value = "c";
  // optionC.innerText = "C";
  // const optionD = document.createElement("option");
  // optionD.value = "d";
  // optionD.innerText = "D";
  // prioritySelect.append(optionA, optionB, optionC, optionD);
  // OR
  // prioritySelect.appendChild(optionA);
  // prioritySelect.appendChild(optionB);
  // prioritySelect.appendChild(optionC);
  // prioritySelect.appendChild(optionD);

  prioritySelect.innerHTML = `
    <option value="a">A</option>
    <option value="b">B</option>
    <option value="c">C</option>
    <option value="d">D</option>
  `;

  const descPara = document.createElement("p");
  descPara.classList.add("task-desc");
  descPara.innerText = taskInput.value;

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
    mainContainer.remove();
  };

  btnContainer.appendChild(prioritySelect);
  btnContainer.appendChild(btnEdit);
  btnContainer.appendChild(btnDelete);

  mainContainer.appendChild(title);
  mainContainer.appendChild(descPara);
  mainContainer.appendChild(btnContainer);

  tasksList.appendChild(mainContainer);
}
