const taskInput = document.getElementById("task-input");
const tasksList = document.getElementById("tasks-list");

function addTask() {
  const taskItem = document.createElement("li");
  taskItem.className = "list-item";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.onchange = function () {
    taskParagraph.classList.toggle("checked");
  };

  const taskParagraph = document.createElement("p");
  taskParagraph.innerText = taskInput.value;

  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Del.";
  deleteBtn.onclick = function () {
    taskItem.remove();
  };

  taskItem.append(checkbox, taskParagraph, deleteBtn);

  tasksList.appendChild(taskItem);
}
