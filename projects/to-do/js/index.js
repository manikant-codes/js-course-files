let tasks = [];
let backupTasks = [];

function loadTasksList() {
  const tasksList = document.getElementById("tasks-list");
  tasksList.innerHTML = "";

  if (tasks.length === 0) {
    const messagePara = createElement("p", "No tasks to show!");
    tasksList.appendChild(messagePara);
    return;
  }

  tasks.sort((a, b) => {
    if (a.priority > b.priority) return 1;
    if (a.priority === b.priority) return 0;
    return -1;
  });

  tasks.forEach((task) => {
    createTask(task);
  });
}

window.onload = function () {
  try {
    tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  } catch (error) {
    tasks = [];
    console.log("Error: ", error);
  }

  loadTasksList();
};

function Task(task, isCompleted, priority) {
  this.id = new Date();
  this.task = task;
  this.isCompleted = isCompleted;
  this.priority = priority;
}

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

function resetAddTaskInputs(searchInput, selectInput) {
  searchInput.value = "";
  selectInput.value = "A";
}

// Handlers
function handleDelete(id) {
  tasks = tasks.filter((t) => {
    return t.id !== id;
  });
  updateTasksInLocalStorage(tasks);
}

function handleCheck(id, para) {
  tasks = tasks.map((t) => {
    if (t.id === id) {
      return { ...t, isCompleted: !t.isCompleted };
    } else {
      return t;
    }
  });
  para.classList.toggle("checked");
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

function handleAdd(newTask) {
  tasks.push(newTask);
  createTask(newTask);
  updateTasksInLocalStorage(tasks);
}

function handleEdit(id, taskDiv) {
  const input = createElement("input");
  const para = taskDiv.children[0];
  input.value = para.innerText;
  input.onchange = function (e) {
    const newTaskText = e.target.value.trim();
    if (newTaskText) {
      tasks = tasks.map((task) => {
        if (task.id === id) {
          return { ...task, task: newTaskText };
        } else {
          return task;
        }
      });
    }
    updateTasksInLocalStorage(tasks);
  };
  input.onblur = function () {
    input.replaceWith(para);
  };
  para.replaceWith(input);
  input.focus();
}

function handleAddSubtask(id, taskDiv) {
  const subTask = createElement("input");
  const subTasksList = createElement("ul", [subTask]);
  subTasksList.appendChild(subTask);
  taskDiv.appendChild(subTasksList);
  // tasks = tasks.map((task) => {
  //   if (task.id === id) {
  //     return { ...task, subTasks: [...task.subTasks, subTask] };
  //   } else {
  //     return task;
  //   }
  // });
  // updateTasksInLocalStorage(tasks);
}
// End Handlers

// Create Task
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

function createAndGetTaskDiv(task) {
  const div = createElement("div");
  const para = createElement("p", task.task);

  if (task.isCompleted) {
    para.classList.add("checked");
  } else {
    para.classList.remove("checked");
  }

  div.appendChild(para);

  return div;
}

function createAndGetDeleteButton(task) {
  const button = createElement("button");
  button.innerHTML = `<i class="fa-solid fa-trash"></i>`;
  button.onclick = function () {
    handleDelete(task.id);
  };

  return button;
}

function createAndGetEditButton(task, taskDiv) {
  const button = createElement("button");
  button.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>`;
  button.onclick = function () {
    createElement("div");
    handleEdit(task.id, taskDiv);
  };

  return button;
}

function createAndGetAddSubtaskButton(task, taskDiv) {
  const button = createElement("button");
  button.innerHTML = `<i class="fa-solid fa-plus"></i>`;
  button.onclick = function () {
    handleAddSubtask(task.id, taskDiv);
  };

  return button;
}

function createAndGetCheckbox(task, para) {
  const input = createElement("input");
  input.setAttribute("type", "checkbox");
  input.checked = task.isCompleted;
  input.onchange = function () {
    handleCheck(task.id, para);
  };

  return input;
}

function createAndGetOptions(task) {
  const priorities = ["A", "B", "C", "D"];
  const options = [];

  for (const p of priorities) {
    const option = createElement("option", p);
    option.value = p;
    option.style.backgroundColor = getBackgroundColor(p);
    options.push(option);
  }

  setPriority.apply(null, [task.priority, ...options]);

  return options;
}

function createAndGetSelect(task, options) {
  const select = createElement("select", options);
  select.classList.add("priority");
  select.name = "priority";
  select.style.backgroundColor = getBackgroundColor(task.priority);
  select.onchange = function (e) {
    setPriority.apply(null, [e.target.value, ...options]);
    handleSelect(task.id, e.target.value);
  };

  return select;
}

function createAndGetSelectDiv(select) {
  const selectDiv = createElement("div", [select]);
  selectDiv.classList.add("custom-select");

  return selectDiv;
}

function createAndGetTaskListItemDiv(elements) {
  const div = createElement("div", elements);
  return div;
}

function createTask(task) {
  const taskDiv = createAndGetTaskDiv(task);
  const deleteBtn = createAndGetDeleteButton(task);
  const editBtn = createAndGetEditButton(task, taskDiv);
  const addSubtaskBtn = createAndGetAddSubtaskButton(task, taskDiv);
  const checkbox = createAndGetCheckbox(task, taskDiv);
  const options = createAndGetOptions(task);
  const select = createAndGetSelect(task, options);
  const selectDiv = createAndGetSelectDiv(select);
  const taskListItemDiv = createAndGetTaskListItemDiv([
    checkbox,
    taskDiv,
    selectDiv,
    addSubtaskBtn,
    editBtn,
    deleteBtn,
  ]);
  const tasksListDiv = document.getElementById("tasks-list");
  tasksListDiv.appendChild(taskListItemDiv);
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
    handleAdd(newTask);
    resetAddTaskInputs(searchInput, selectInput);
  } else {
    showError(true);
  }
}

function toggleFilterContainer() {
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
