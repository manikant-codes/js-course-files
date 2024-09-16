// console.log("2 x 1 = " + 2 * 1);
// console.log("2 x 2 = " + 2 * 2);
// console.log("2 x 3 = " + 2 * 3);
// console.log("2 x 4 = " + 2 * 4);
// console.log("2 x 5 = " + 2 * 5);
// console.log("2 x 6 = " + 2 * 6);
// console.log("2 x 7 = " + 2 * 7);
// console.log("2 x 8 = " + 2 * 8);
// console.log("2 x 9 = " + 2 * 9);
// console.log("2 x 10 = " + 2 * 10);

// function printTableRow(number, multiplyBy) {
//   console.log(`${number} x ${multiplyBy} = ${number * multiplyBy}`);
// }

// printTableRow(5, 1);
// printTableRow(5, 2);
// printTableRow(5, 3);
// printTableRow(5, 4);
// printTableRow(5, 5);
// printTableRow(5, 6);
// printTableRow(5, 7);
// printTableRow(5, 8);
// printTableRow(5, 9);
// printTableRow(5, 10);

// debugger;

// let count = 1;

// while (count <= 10) {
//   console.log(`1 x ${count} = ${1 * count}`);
//   count++;
// }

// count = 1;

// while (count <= 10) {
//   console.log(`2 x ${count} = ${2 * count}`);
//   count++;
// }

// count = 1;

// while (count <= 10) {
//   console.log(`3 x ${count} = ${3 * count}`);
//   count++;
// }

let number = 1;

while (number <= 10) {
  let count = 1;

  while (count <= 10) {
    console.log(`${number} x ${count} = ${number * count}`);
    count++;
  }

  number++;
}

const data = {
  id: "1",
};

fetch("url", {
  method: "POST",
  body: JSON.stringify(data),
  headers: {
    "Content-Type": "application/json",
  },
});
