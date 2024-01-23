let tasks = [];
let backupTasks = [];

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
  const sortedList = tasks.sort((a, b) => {
    if (a.priority > b.priority) return 1;
    if (a.priority === b.priority) return 0;
    return -1;
  });
  const tasksList = document.getElementById("tasks-list");
  tasksList.innerHTML = "";
  sortedList.forEach((task) => {
    createTask(task);
  });
}

function updateTasksInLocalStorage(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
  loadTasksList();
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

function Task(task, isCompleted, priority) {
  this.id = new Date();
  this.task = task;
  this.isCompleted = isCompleted;
  this.priority = priority;
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

function handleSelect(id, option) {
  tasks = tasks.map((task) => {
    if (task.id === id) {
      return { ...task, priority: option };
    } else {
      return task;
    }
  });
  updateTasksInLocalStorage(tasks);
}

function getBackgroundColor(priority) {
  if (priority === "A") {
    return "#ff3838";
  } else if (priority === "B") {
    return "#fce83a";
  } else if (priority === "C") {
    return "#56f000";
  } else {
    return "#2dccff";
  }
}

function setPriority(priority, optionA, optionB, optionC, optionD) {
  if (priority === "A") {
    optionA.selected = true;
  } else if (priority === "B") {
    optionB.selected = true;
  } else if (priority === "C") {
    optionC.selected = true;
  } else {
    optionD.selected = true;
  }
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

  // Select
  const optionA = createElement("option", "A");
  optionA.value = "A";
  optionA.style.backgroundColor = "#ff3838";
  const optionB = createElement("option", "B");
  optionB.value = "B";
  optionB.style.backgroundColor = "#fce83a";
  const optionC = createElement("option", "C");
  optionC.value = "C";
  optionC.style.backgroundColor = "#56f000";
  const optionD = createElement("option", "D");
  optionD.value = "D";
  optionD.style.backgroundColor = "#2dccff";

  setPriority(task.priority, optionA, optionB, optionC, optionD);

  const select = createElement("select", [optionA, optionB, optionC, optionD]);
  select.classList.add("priority");
  select.name = "priority";
  select.style.backgroundColor = getBackgroundColor(task.priority);
  select.onchange = function (e) {
    setPriority(e.target.value, optionA, optionB, optionC, optionD);
    handleSelect(task.id, e.target.value);
  };
  const selectDiv = createElement("div", [select]);
  selectDiv.classList.add("custom-select");

  // Div
  const div = createElement("div", [input, para, selectDiv, button]);

  const tasksList = document.getElementById("tasks-list");
  tasksList.appendChild(div);
}

// End Create Task

function addTask() {
  const searchInput = document.getElementById("search-input");
  const selectInput = document.getElementById("priority");
  const priority = selectInput.value;

  const task = searchInput.value;

  if (task.trim() !== "") {
    toggleError(true);
    const objTask = new Task(task, false, priority);
    tasks.push(objTask);
    createTask(objTask);
    updateTasksInLocalStorage(tasks);
    searchInput.value = "";
    selectInput.value = "A";
  } else {
    toggleError(false);
  }
}

function toggleSearchBar() {
  const div = document.getElementById("filter-container");
  div.classList.toggle("show");
}

function search() {
  const filterInput = document.getElementById("filter-input");
  const filterSelect = document.getElementById("filter-select");
  const filterText = filterInput.value.trim();
  const filterPriority = filterSelect.value;
  if (filterText) {
    const filteredTasks = tasks.filter((task) => {
      console.log(task);
      return task.task.includes(filterText);
    });
    if (tasks.length && !backupTasks.length) {
      backupTasks = tasks;
    }
    tasks = filteredTasks;
  } else if (filterPriority) {
    if (backupTasks.length) {
      tasks = backupTasks;
    }
    const filteredTasks = tasks.filter((task) => {
      return task.priority === filterPriority;
    });
    if (tasks.length && !backupTasks.length) {
      backupTasks = tasks;
    }
    tasks = filteredTasks;
  } else {
    if (backupTasks.length) {
      tasks = backupTasks;
    }
  }
  loadTasksList();
}
