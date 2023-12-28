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
console.log("a", a);
const a = 20;
