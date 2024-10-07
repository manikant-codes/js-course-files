// debugger;

// function add(a, b) {
//   console.log(a + b);
// }

// const add = function (a, b) {
//   console.log(a + b);
// };

// const add = new Function("a", "b", "console.log(a + b)");

// add(4, 2);
// add(4, 4);
// add(5, 10);

// function hello(name) {
//   console.log("Hello, " + name);
// }
// console.log(hello("Ram"));

// (function hello(name) {
//   console.log("Hello, " + name);
// })("Ram");

function add(...args) {
  console.log("args", args);

  let sum = 0;

  for (const value of args) {
    sum = sum + value;
  }

  return sum;
  // if (typeof a === "number" && typeof b === "number") {
  //   return a + b;
  // } else {
  //   alert("Please provide numbers!");
  // }
}

console.log(add(4, 5, 3, 4, 5, 12));
