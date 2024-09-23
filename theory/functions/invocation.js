// debugger;

// function add(...args) {
//   console.log(this);
//   let sum = 0;
//   for (const value of args) {
//     sum += value;
//   }
//   return sum;
// }

// console.log(add(2, 2));
// console.log(window.add(2, 2));

const add = new Function("a", "b", "return a + b");

console.log(add(2, 2));
