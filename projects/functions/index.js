// debugger;

// add(2, 5);

// Function declaration
// function add(n1, n2) {
//   console.log(n1 + n2);
// }

// Function assignment
// const add = function (n1, n2) {
//   console.log(n1 + n2);
// };

// var add = function (n1, n2) {
//   console.log(n1 + n2);
// };

function execute() {
  const textarea = document.getElementById("fncode");
  const code = textarea.value;

  const fn = new Function(code);

  fn();
}

// self-invoking function or immediately invoked function expression (iife)

// function add() {
//   alert(2 + 2);
// }
// add();

// (function () {
//   alert(2 + 2);
// })();

// function add() {
//   if (arguments.length) {
//     let sum = 0;
//     for (const arg of arguments) {
//       sum += arg;
//     }
//     return sum;
//   }
//   return 0;
// }

// const result = add(1, 1, 1, 1, 1, 1);

// console.log("result", result);

function add(n1 = 0, n2 = 0) {
  if (typeof n1 !== "number" || typeof n2 !== "number") {
    return 0;
  }
  return n1 + n2;
}

const result = add(1);

console.log("result", result);
