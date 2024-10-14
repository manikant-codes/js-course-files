const input = document.getElementById("input");
const fruitsList = document.getElementById("fruits");

const fruits = new Set();

function handleDelete(value) {
  fruits.delete(value);
  renderList();
}

function renderList() {
  let html = "";
  for (const value of fruits) {
    html += `<li onclick="handleDelete('${value}')">${value}</li>`;
  }

  fruitsList.innerHTML = html;
}

function add() {
  fruits.add(input.value);
  renderList();
}
