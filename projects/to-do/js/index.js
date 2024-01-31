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
    createAndAddTaskToList(task);
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

function Subtask(task, isCompleted) {
  this.id = new Date();
  this.task = task;
  this.isCompleted = isCompleted;
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
  tasks = tasks.filter((task) => {
    return task.id !== id;
  });
  updateTasksInLocalStorage(tasks);
}

function handleCheck(id) {
  tasks = tasks.map((task) => {
    if (task.id === id) {
      return {
        ...task,
        isCompleted: !task.isCompleted,
        subtasks: task.subtasks.map((s) => {
          return { ...s, isCompleted: !task.isCompleted };
        }),
      };
    } else {
      return task;
    }
  });
  updateTasksInLocalStorage(tasks);
}

function handleSelect(id, priority) {
  tasks = tasks.map((task) => {
    if (task.id === id) {
      return { ...task, priority: priority };
    } else {
      return task;
    }
  });
  updateTasksInLocalStorage(tasks);
}

function handleAdd(newTask) {
  tasks.push(newTask);
  updateTasksInLocalStorage(tasks);
}

// Handle Edit
function handleEditSubtaskInputChange(id, taskText) {
  if (taskText) {
    tasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, task: taskText };
      } else {
        return task;
      }
    });
  }
  updateTasksInLocalStorage(tasks);
}

function handleEditSubtaskInputBlur(input) {
  input.replaceWith(taskPara);
}

function handleEdit(id, taskPara) {
  const input = createElement("input");
  input.value = taskPara.innerText;
  input.onchange = function (e) {
    handleEditSubtaskInputChange(id, e.target.value.trim());
  };
  input.onblur = function () {
    handleEditSubtaskInputBlur(input);
  };
  taskPara.replaceWith(input);
  input.focus();
}
// End Handle Edit

// Add Subtask
function handleSubtaskInputChange(id, subtaskText) {
  if (subtaskText) {
    const subtaskListItem = createElement("li");
    subtaskListItem.innerText = subtaskText;

    tasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          subtasks: [...(task.subtasks || []), new Subtask(subtaskText, false)],
        };
      } else {
        return task;
      }
    });

    updateTasksInLocalStorage(tasks);
  }
}

function handleAddSubtask(id, subtasksDiv) {
  const subtaskInput = createElement("input");
  subtasksDiv.classList.remove("hide");
  subtasksDiv.appendChild(subtaskInput);

  subtaskInput.onchange = function (e) {
    handleSubtaskInputChange(id, e.target.value.trim());
  };

  subtaskInput.focus();
}
// End Add Subtask

function handleCheckSubTask(taskId, subtaskId) {
  tasks = tasks.map((task) => {
    if (task.id === taskId) {
      return {
        ...task,
        subtasks: task.subtasks.map((t) => {
          if (t.id === subtaskId) {
            return { ...t, isCompleted: !t.isCompleted };
          } else {
            return t;
          }
        }),
      };
    } else {
      return task;
    }
  });
  updateTasksInLocalStorage(tasks);
}

function handleDeleteSubTask(taskId, subtaskId) {
  tasks = tasks.map((task) => {
    if (task.id === taskId) {
      return {
        ...task,
        subtasks: task.subtasks.filter((t) => {
          return t.id !== subtaskId;
        }),
      };
    } else {
      return task;
    }
  });
  updateTasksInLocalStorage(tasks);
}
// End Handlers

// Create Task
function getBackgroundColor(priority) {
  if (priority === "A") {
    return "#ff1744";
  } else if (priority === "B") {
    return "#ffea00";
  } else if (priority === "C") {
    return "#00e676";
  } else {
    return "#00b0ff";
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

function createAndGetTaskPara(task) {
  const para = createElement("p", task.task);

  if (task.isCompleted) {
    para.classList.add("checked");
  } else {
    para.classList.remove("checked");
  }

  return para;
}

function createAndGetSubtasksDiv(task) {
  const subtasksListItems = [];

  if (Array.isArray(task.subtasks) && task.subtasks.length) {
    for (const s of task.subtasks) {
      const input = createElement("input");
      input.type = "checkbox";
      input.checked = s.isCompleted;
      input.onchange = function () {
        handleCheckSubTask(task.id, s.id);
      };

      const para = createElement("p", s.task);
      if (s.isCompleted) {
        para.classList.add("checked");
      } else {
        para.classList.remove("checked");
      }

      const button = createElement("button");
      button.innerHTML = `<i class="fa-solid fa-minus"></i>`;
      button.classList.add("icon-btn");
      button.onclick = function () {
        handleDeleteSubTask(task.id, s.id);
      };

      const div = createElement("div", [input, para, button]);

      const subtaskListItem = createElement("li", [div]);
      subtasksListItems.push(subtaskListItem);
    }
  }

  const subtasksList = createElement("ul", subtasksListItems);
  if (subtasksListItems.length === 0) {
    subtasksList.classList.add("hide");
  } else {
    subtasksList.classList.remove("hide");
  }
  subtasksList.classList.add("sub-tasks-list");
  subtasksList.classList.add("glass-white");

  return subtasksList;
}

function createAndGetDeleteButton(task) {
  const button = createElement("button");
  button.innerHTML = `<i class="fa-solid fa-trash"></i>`;
  button.classList.add("icon-btn");
  button.onclick = function () {
    handleDelete(task.id);
  };

  return button;
}

function createAndGetEditButton(task, taskPara) {
  const button = createElement("button");
  button.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>`;
  button.classList.add("icon-btn");
  button.onclick = function () {
    handleEdit(task.id, taskPara);
  };

  return button;
}

function createAndGetExpandCollapseButton(task, subtasksDiv) {
  const button = createElement("button");
  button.innerHTML = `<i class="fa-solid fa-caret-down"></i>`;
  button.classList.add("icon-btn");
  button.onclick = function () {
    if (task.subtasks.length !== 0) {
      subtasksDiv.classList.toggle("hide");
    }
  };

  return button;
}

function createAndGetAddSubtaskButton(task, taskDiv) {
  const button = createElement("button");
  button.innerHTML = `<i class="fa-solid fa-plus"></i>`;
  button.classList.add("icon-btn");
  button.onclick = function () {
    handleAddSubtask(task.id, taskDiv);
  };

  return button;
}

function createAndGetCheckbox(task) {
  const input = createElement("input");
  input.setAttribute("type", "checkbox");
  input.checked = task.isCompleted;
  input.onchange = function () {
    handleCheck(task.id);
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
  select.classList.add("priority-select");
  select.classList.add("glass-white");
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

function createAndGetTaskDiv(elements) {
  const div = createElement("div", elements);
  return div;
}

function createAndAddTaskToList(task) {
  const taskPara = createAndGetTaskPara(task);
  const deleteBtn = createAndGetDeleteButton(task);
  const editBtn = createAndGetEditButton(task, taskPara);
  const checkbox = createAndGetCheckbox(task);
  const options = createAndGetOptions(task);
  const select = createAndGetSelect(task, options);
  const selectDiv = createAndGetSelectDiv(select);
  const subtasksDiv = createAndGetSubtasksDiv(task);
  const expandCollapseBtn = createAndGetExpandCollapseButton(task, subtasksDiv);
  const addSubtaskBtn = createAndGetAddSubtaskButton(task, subtasksDiv);
  const taskDiv = createAndGetTaskDiv([
    checkbox,
    taskPara,
    selectDiv,
    addSubtaskBtn,
    editBtn,
    expandCollapseBtn,
    deleteBtn,
  ]);
  taskDiv.classList.add(["task-div"]);
  const listItemDiv = createElement("div", [taskDiv, subtasksDiv]);
  listItemDiv.classList.add(["list-item-div"]);
  listItemDiv.classList.add(["glass-white"]);
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
