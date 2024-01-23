let tasks = [];
let backupTasks = [];

function Task(task, isCompleted, priority) {
  this.id = new Date();
  this.task = task;
  this.isCompleted = isCompleted;
  this.priority = priority;
}

function loadTasksList() {
  const tasksList = document.getElementById("tasks-list");
  tasksList.innerHTML = "";

  tasks.sort((a, b) => {
    if (a.priority > b.priority) return 1;
    if (a.priority === b.priority) return 0;
    return -1;
  });

  tasks.forEach((task) => {
    createAndAddTaskToList(task);
  });
}

window.onload = function () {
  try {
    // Get tasks from localstorage;
    tasks = JSON.parse(localStorage.getItem("tasks"));
  } catch (err) {
    tasks = [];
  }

  // Generate tasks list;
  loadTasksList();
};

function updateTasksInLocalStorage(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
  loadTasksList();
}

function showError(isVisible) {
  const errorPara = document.getElementById("error-message");
  if (isVisible) {
    errorPara.style.display = "block";
    errorPara.innerHTML = "* Task cannot be empty!";
  } else {
    errorPara.style.display = "none";
    errorPara.innerHTML = "";
  }
}

// Create Task

function handleDelete(id, tasksList, taskItem) {
  tasks = tasks.filter((task) => {
    // Jo id mila hai us id wale task ko list se nikal rahe hain;
    return task.id !== id;
  });
  // tasksList.removeChild(taskItem);
  // Local storage me naye tasks ki list wapas set kar rahe hain;
  updateTasksInLocalStorage(tasks);
}

function handleChange(id, para) {
  tasks = tasks.map((task) => {
    if (task.id === id) {
      // Jo id mila hai us task ka isCompleted change kar rahe hain;
      return { ...task, isCompleted: !task.isCompleted };
    } else {
      return task;
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

// Create Elements

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

function createAndGetPara(task) {
  const para = createElement("p", task.task);
  if (task.isCompleted) {
    para.classList.add("checked");
  } else {
    para.classList.remove("checked");
  }
  return para;
}

function createAndGetButton(task) {
  const button = createElement("button");
  button.innerHTML = `<i class="fa-solid fa-trash"></i>`;
  button.onclick = function () {
    handleDelete(task.id);
  };

  return button;
}

function createAndGetCheckbox(task, para) {
  const input = createElement("input");
  input.setAttribute("type", "checkbox");
  input.checked = task.isCompleted;
  input.onchange = function () {
    handleChange(task.id, para);
  };

  return input;
}

function createAndGetSelectDiv(task) {
  const arr = ["A", "B", "C", "D"];
  const options = [];

  for (let i = 0; i < arr.length; i++) {
    const option = createElement("option", arr[i]);
    option.value = arr[i];
    option.style.backgroundColor = getBackgroundColor(arr[i]);
    options.push(option);
  }

  setPriority.apply(null, [task.priority, ...options]);

  const select = createElement("select", options);
  select.classList.add("priority");
  select.name = "priority";
  select.style.backgroundColor = getBackgroundColor(task.priority);

  select.onchange = function (e) {
    setPriority.apply(null, [e.target.value, ...options]);
    handleSelect(task.id, e.target.value);
  };

  const selectDiv = createElement("div", [select]);
  selectDiv.classList.add("custom-select");

  return selectDiv;
}

// End Create Elements

function createAndAddTaskToList(task) {
  const para = createAndGetPara(task);
  const checkbox = createAndGetCheckbox(task, para);
  const selectDiv = createAndGetSelectDiv(task);
  const button = createAndGetButton(task);
  const listItemDiv = createElement("div", [checkbox, para, selectDiv, button]);
  const tasksListDiv = document.getElementById("tasks-list");
  tasksListDiv.appendChild(listItemDiv);
}

// End Create Task

function addTask() {
  const searchInput = document.getElementById("search-input");
  const task = searchInput.value;

  const selectInput = document.getElementById("priority");
  const priority = selectInput.value;

  if (task.trim() !== "") {
    showError(false);
    const newTask = new Task(task, false, priority);
    tasks.push(newTask);
    createAndAddTaskToList(newTask);
    updateTasksInLocalStorage(tasks);
    searchInput.value = "";
    selectInput.value = "A";
  } else {
    showError(true);
  }
}

// Search

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

// End Search
