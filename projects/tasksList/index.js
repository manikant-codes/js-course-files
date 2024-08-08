const taskInput = document.getElementById("task-input");
const list = document.getElementById("list");

let tasks = [];

function showList() {
  const html = tasks
    .map(function (value, index) {
      return `
      <li class="list-item">
        <span>${index + 1}. ${value}</span>
        <button class="btn-danger" onclick="deleteTask(${index})">Delete</button>
      </li>
    `;
    })
    .join("");

  list.innerHTML = html;
}

function deleteTask(deleteIndex) {
  tasks = tasks.filter(function (value, index, array) {
    if (index === deleteIndex) {
      return false;
    }
    return true;
  });

  showList();
}

function addTask() {
  tasks.push(taskInput.value);

  showList();
}
