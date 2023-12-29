// Callback
// HOF

// map is a higher order function!
// Jo function dusre function ko an argument recieve kare use higher order function kehte hain.
// Aur jo function ham HOF ko pass kar rahe hai as an argument use callback function kehte hain.
// JS functions first class citizens hain.
// Yane jaha bhi variables, values, expressions ka use kar sakte hoo waha function (declaration/body) ka use kar sakte hoo.

// function add(a, b) {
//   return a + b;
// }

// add(4, 5);

// const flavours = [
//   "masala",
//   "orange",
//   "black-current",
//   "blue-berry",
//   "pine-apple",
// ];

// const tray1 = [];
// const tray2 = [];
// const tray3 = [];

// for (let i = 0; i < 2; i++) {
//   tray1.push(flavours[i] + " soda");
// }

// for (let i = 0; i < 2; i++) {
//   tray2.push(flavours[i] + " sing soda");
// }

// for (let i = 0; i < 2; i++) {
//   tray3.push(flavours[i] + " masla sing soda");
// }

// const flavours = [
//   "masala",
//   "orange",
//   "black-current",
//   "blue-berry",
//   "pine-apple",
// ];

//   tray3.push(flavours[i] + " masla sing soda");

// function sodaMachine(order) {
//   const tray = [];
//   for (let index = 0; index < flavours.length; index++) {
//     if (flavours[index] === "masala" || flavours[index] === "blue-berry") {
//       continue;
//     }
//     const soda = order(flavours[index], index, flavours);
//     tray.push(soda);
//   }
//   return tray;
// }

// const tray3 = sodaMachine(function (flavour) {
//   return flavour + " sing masala soda";
// });

// const tray1 = sodaMachine(function (flavour) {
//   return flavour + " soda";
// });

// const tray2 = sodaMachine(function (flavour) {
//   return flavour + " masala soda";
// });

// const flavours = [
//   "masala",
//   "orange",
//   "black-current",
//   "blue-berry",
//   "pine-apple",
// ];

// const tray1 = flavours.map(function (value, index, array) {
//   return value + " soda";
// });

// console.log(flavours);
// console.log(tray1);
// console.log(tray2);
// console.log(tray3);

// let result = numbers.every(function (value, index, array) {
//   return value > 18;
// });

// let result = numbers.some(function (value, index, array) {
//   return value > 18;
// });

// let result = numbers.indexOf(16, 4);

// let result = numbers.lastIndexOf(16, 3);

// const numbers = [4, 9, 16, 25, 45];

// let result = numbers.find(function (value, index, array) {
//   return value > 18;
// });

// let result = numbers.findIndex(function (value, index, array) {
//   return value > 18;
// });

// console.log("result", result);

// function myFunction(value, index, array) {
//   return value > 18;
// }

/*
// Adds and prints sum of two numbers.
console.log(2 + 2);
console.log(3 + 3);
*/

// Automatic Declaration
// console.log("a", a);
// a = 10;

// var Declaration
// console.log("a", a);
// var a = 10;
// console.log("a", a);

// let Declaration
// console.log("a", a);
// let a = 20;

// const Declaration
// console.log("a", a);
// const a = 20;

// const tableOf2 = [];
// const tableOf3 = [];
// const tableOf4 = [];

// for (let i = 0; i < 5; i++) {
//   tableOf2.push(tableOf1[i] * 2);
// }

// for (let i = 0; i < 5; i++) {
//   tableOf3.push(tableOf1[i] * 3);
// }

// for (let i = 0; i < 5; i++) {
//   tableOf4.push(tableOf1[i] * 4);
// }

// function getTable(logic) {
//   const table = [];
//   for (let i = 0; i < 10; i++) {
//     const result = logic(tableOf1[i]);
//     table.push(result);
//   }
//   return table;
// }

// const tableOf2 = getTable(function (value) {
//   return value * 2;
// });
// const tableOf3 = getTable(function (value) {
//   return value * 3;
// });
// const tableOf4 = getTable(function (value) {
//   return value * 4;
// });

// console.log(tableOf2);
// console.log(tableOf3);
// console.log(tableOf4);

// const tableOf1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const taableOf2 = tableOf1.map(function (value, index, array) {
//   return value * 2;
// });
// const taableOf3 = tableOf1.map(function (value, index, array) {
//   return value * 3;
// });
// const taableOf4 = tableOf1.map(function (value, index, array) {
//   return value * 4;
// });

// console.log(tableOf1);
// console.log(taableOf2);
// console.log(taableOf3);
// console.log(taableOf4);

// *
// * *
// * * *
// * * * *
// * * * * *

// let pattern = ``;
// let counter = 1;
// // let pattern = `
// // *\n
// // **\n
// // ***\n
// // `;

// for (let row = 1; row <= 4; row++) {
//   for (let col = 1; col <= row; col++) {
//     pattern = pattern + counter;
//     counter++;
//   }
//   pattern = pattern + "\n";
// }

// console.log(pattern);
