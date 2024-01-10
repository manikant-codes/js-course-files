// functions are block of code (collection of instructions/statements/lines of code).
// Agar kuch instructions appko bar bar reapeat krni pad rahi hoo, to app unko group kar sakte hoo, aur fir jab jarurat pade to us group ko run/execute/chala sakte hoo.

// console.log(getFormattedFullName("SHINCHAN NOHARA", true));
// console.log(getFormattedFullName("manikant jha"));

// debugger;

// agetFormattedFullName("asd asd");
// bgetFormattedFullName("asd asd");

// function agetFormattedFullName(fullName, isAbbriviated) {
//   const arrName = fullName.split(" ");
//   let fname = arrName[0];
//   let lname = arrName[1];

//   fname = fname[0].toUpperCase() + fname.slice(1).toLowerCase();

//   if (isAbbriviated) {
//     lname = lname[0].toUpperCase() + ".";
//   } else {
//     lname = lname[0].toUpperCase() + lname.slice(1).toLowerCase();
//   }

//   return `${fname} ${lname}`;
// }

// const bgetFormattedFullName = function (fullName, isAbbriviated) {
//   const arrName = fullName.split(" ");
//   let fname = arrName[0];
//   let lname = arrName[1];

//   fname = fname[0].toUpperCase() + fname.slice(1).toLowerCase();

//   if (isAbbriviated) {
//     lname = lname[0].toUpperCase() + ".";
//   } else {
//     lname = lname[0].toUpperCase() + lname.slice(1).toLowerCase();
//   }

//   return `${fname} ${lname}`;
// };

// const cgetFormattedFullName = new Function(
//   "fullName",
//   "isAbbriviated",
//   `const arrName = fullName.split(" ");
// let fname = arrName[0];
// let lname = arrName[1];

// fname = fname[0].toUpperCase() + fname.slice(1).toLowerCase();

// if (isAbbriviated) {
//   lname = lname[0].toUpperCase() + ".";
// } else {
//   lname = lname[0].toUpperCase() + lname.slice(1).toLowerCase();
// }

// return fname + lname;`
// );

// cgetFormattedFullName("asd asd");

// let myFunction = null;

// function handleSubmit() {
//   console.log("handleSubmit");
//   const input = document.getElementById("myInput");
//   const arrFnCode = input.value.split(",");

//   myFunction = new Function(arrFnCode[0], arrFnCode[1], arrFnCode[2]);
// }
// function handleExecute() {
//   console.log("handleExecute");
//   myFunction(2, 4);
// }

// iife / self-invoking functions

// (function () {
//   console.log("inside iife");
//   console.log(2 + 2);
// })();
