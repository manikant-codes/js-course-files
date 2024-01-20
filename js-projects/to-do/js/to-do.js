let tasks = [];

window.onload = function () {
  try {
    // Get tasks from localstorage;
    tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  } catch (err) {
    tasks = [];
  }

  // Generate tasks list;
  loadTasksList();
};

function loadTasksList() {
  tasks.forEach((task) => {
    createTask(task);
  });
}

function updateTasksInLocalStorage(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function toggleError(isHidden) {
  const errorPara = document.getElementById("error-message");
  if (isHidden) {
    errorPara.style.display = "none";
    errorPara.innerHTML = "";
  } else {
    errorPara.style.display = "block";
    errorPara.innerHTML = "* Task cannot be empty!";
  }
}

// Create Task

function handleDelete(id, tasksList, taskItem) {
  tasks = tasks.filter((t) => {
    // Jo id mila hai us id wale task ko list se nikal rahe hain;
    return t.id !== id;
  });
  tasksList.removeChild(taskItem);
  // Local storage me naye tasks ki list wapas set kar rahe hain;
  updateTasksInLocalStorage(tasks);
}

function handleChange(id, para) {
  tasks = tasks.map((t) => {
    if (t.id === id) {
      // Jo id mila hai us task ka isCompleted change kar rahe hain;
      return { ...t, isCompleted: !t.isCompleted };
    } else {
      return t;
    }
  });
  para.classList.toggle("checked");
  // Local storage me naye tasks ki list wapas set kar rahe hain;
  updateTasksInLocalStorage(tasks);
}

function createElement(tag, children) {
  const element = document.createElement(tag);

  if (children instanceof Array) {
    children.forEach((child) => {
      element.appendChild(child);
    });
  } else if (typeof children === "string") {
    const elementTextNode = document.createTextNode(children);
    element.appendChild(elementTextNode);
  }

  return element;
}

function createTask(task) {
  // Para
  const para = createElement("p", task.task);
  if (task.isCompleted) {
    para.classList.add("checked");
  } else {
    para.classList.remove("checked");
  }

  // Button
  const button = createElement("button");
  button.innerHTML = `<i class="fa-solid fa-trash"></i>`;
  button.onclick = function () {
    handleDelete(task.id, tasksList, div);
  };

  // Checkbox
  const input = createElement("input");
  input.setAttribute("type", "checkbox");
  input.checked = task.isCompleted;
  input.onchange = function () {
    handleChange(task.id, para);
  };

  // Div
  const div = createElement("div", [input, para, button]);

  const tasksList = document.getElementById("tasks-list");
  tasksList.appendChild(div);
}

// End Create Task

function addTask() {
  const searchInput = document.getElementById("search-input");
  const task = searchInput.value;

  if (task.trim() !== "") {
    toggleError(true);
    const objTask = { id: new Date(), task: task, isCompleted: false };
    tasks.push(objTask);
    createTask(objTask);
    updateTasksInLocalStorage(tasks);
  } else {
    toggleError(false);
  }
}
