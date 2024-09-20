// Function Declaration
function add(a, b) {
  return a + b;
}

// Function Assignment
const subtract = function (a, b) {
  return a - b;
};

// Arrow Function
// const multiply = (a, b) => {
//   return a * b;
// };
const multiply = (a, b) => a * b;

console.log("add: ", add(2, 2));
console.log("subtract: ", subtract(4, 2));
console.log("multiply: ", multiply(4, 2));
