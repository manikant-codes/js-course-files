const fruitInput = document.getElementById("fruit");
const fruitsList = document.getElementById("fruits-list");

const fruits = [];
const fruitsSet = new Set();

function remove(value) {
  let html = "";
  fruitsSet.delete(value);
  fruitsSet.forEach((value, index, array) => {
    html += `<li onclick="remove('${value}')">${value}</li>`;
  });
  fruitsList.innerHTML = html;
}

function add() {
  // fruits.push(fruitInput.value);
  // let html = "";
  // html += fruits
  //   .map((value) => {
  //     return `<li>${value}</li>`;
  //   })
  //   .join("");
  // fruitsList.innerHTML = html;

  fruitsSet.add(fruitInput.value);
  let html = "";
  // for (const value of fruitsSet) {
  //   html += `<li>${value}</li>`;
  // }
  fruitsSet.forEach((value, index, array) => {
    html += `<li onclick="remove('${value}')">${value}</li>`;
  });
  fruitsList.innerHTML = html;
}

const student = { name: "lakshman" };
const arr = ["apple"];

const mySet2 = new Set([
  10,
  10,
  { name: "ram" },
  { name: "ram" },
  student,
  student,
]);

console.log("mySet2", mySet2);
