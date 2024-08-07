const taskInput = document.getElementById("task-input");
const list = document.getElementById("list");

const tasks = [];

function addTask() {
  tasks.push(taskInput.value);
  const html = tasks
    .map(function (value) {
      return (
        "<li class='list-item'>" +
        "<span>" +
        value +
        "</span>" +
        "<button>delete</button>" +
        "</li>"
      );
    })
    .join("");
  list.innerHTML = html;
}
