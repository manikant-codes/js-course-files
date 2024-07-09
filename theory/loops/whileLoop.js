// The Problem

// console.log("4");
// console.log("4");
// console.log("4");
// console.log("4");
// console.log("4");

// console.log("3 x 1 = 3");
// console.log("3 x 2 = 6");
// console.log("3 x 3 = 9");
// console.log("3 x 4 = 12");
// console.log("3 x 5 = 15");

// The Solution

let counter = 1;

// debugger;

// while (counter <= 5) {
//   console.log(counter);
//   counter++;
// }

const tableDiv = document.getElementById("table");

let html = "";

while (counter <= 10) {
  html =
    html +
    "<p class='table-row'>" +
    5 +
    " x " +
    counter +
    " = " +
    5 * counter +
    "</p>";
  counter++;
}

tableDiv.innerHTML = html;
