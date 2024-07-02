const fruits = ["Apple", "Banana", "Cherry"];

const fruitInput = document.getElementById("fruit-input");
const fruitsList = document.getElementById("fruits-list");

function renderList() {
  let html = "";

  for (let i = 0; i < fruits.length; i++) {
    html += `<li class="fruit">${fruits[i]}</li>`;
  }

  fruitsList.innerHTML = html;
}

function addFruit() {
  const fruit = fruitInput.value;
  fruits.push(fruit);
  renderList();
  fruitInput.value = "";
}

renderList();
