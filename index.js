// var arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// var arr = [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12],
//   [13, 14, 15, 16],
// ];

// const rows = 1000;
// const cols = 1000;
// const arr = new Array(rows);

// for (let i = 0; i < rows; i++) {
//   arr[i] = new Array(cols);
//   for (let j = 0; j < cols; j++) {
//     arr[i][j] = Math.floor(Math.random() * 1000);
//   }
// }

// var arr = [
//   [1, 2, 3, 4, 5],
//   [5, 6, 7, 8, 9],
//   [9, 10, 11, 12, 13],
//   [13, 14, 15, 16, 17],
//   [13, 14, 15, 16, 18],
// ];

// let sumLR = 0;
// let sumRL = 0;

// for (let row = 0; row < arr.length; row++) {
//   for (let col = 0; col < arr.length; col++) {
//     if (row === col) {
//       sumLR += arr[row][col];
//     }
//     if (col === arr.length - row - 1) {
//       sumRL += arr[row][col];
//     }
//   }
// }

// console.log("sumLR", sumLR);
// console.log("sumRL", sumRL);

// debugger;

// function add(num1, num2 = 0, ...container) {
//   // if (!num2) {
//   //   num2 = 0;
//   // }

//   console.log("container", container);

//   if (!Number.isNaN(Number(num1)) && !Number.isNaN(Number(num2))) {
//     console.log(num1 + num2);
//   } else {
//     console.log("Please provide numbers!");
//   }
// }

// function sum(...args) {
//   let sum = 0;
//   for (const a of args) {
//     sum += a;
//   }
//   console.log("sum", sum);
// }

// sum(1, 2, 3, 4, 5, 45, 56, 23);

// function makeTea(paani, dudh, chaypatti, chini, adarak) {
//   console.log("Heat " + paani + " ml " + " paani.");
//   console.log("Add " + chini + " spoons " + " of chini.");
//   console.log("Add " + chaypatti + " spoons " + " of chaypatti.");
//   console.log("Add " + dudh + " ml " + " of dudh.");
//   console.log("Add " + adarak + " inches " + " of adarak.");
//   return "☕".repeat(paani / 125);
// }

// // Yaha ham JS ko chay banane ko keh rahe hai.
// const tea = "Tea ☕";

// const tea1 = makeTea(125, 125, 2, 2, 0.5);
// const tea2 = makeTea(250, 250, 4, 4, 1);
// const tea3 = makeTea(375, 375, 6, 6, 1.5);

// console.log("tea1", tea1);
// console.log("tea2", tea2);
// console.log("tea3", tea3);

debugger;

function add(num1, num2) {
  let x = "something";
  return num1 + num2;
}

// console.log(x);
// console.log(num1);
// console.log(num2);

// function joinTwoStrings(str1, str2) {
//   return str1 + " " + str2;
// }

console.log(add(14, 5) + 5);
// console.log(joinTwoStrings("Manikant", "Jha"));
