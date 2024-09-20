const fruitsInput = document.getElementById("fruits-input");
const fruitsList = document.getElementById("fruits-list");

// const fruits = [];
const fruitsSet = new Set();

function del(index) {
  fruitsSet.delete(index);
  renderList();
}

function add() {
  //   fruits.push(fruitsInput.value);
  //   const html = fruits
  //     .map((value, index, array) => {
  //       return `<li>${value}</li>`;
  //     })
  //     .join("");
  fruitsSet.add(fruitsInput.value);
  renderList();
}

function renderList() {
  let html = "";

  fruitsSet.forEach((value, index, array) => {
    html += `<li onclick="del('${index}')">${value}</li>`;
  });

  fruitsList.innerHTML = html;
}
