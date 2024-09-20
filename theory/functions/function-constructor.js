// debugger;

// console.log(aa(2, 2));

// function aa(a, b) {
//   return a * b;
// }

// const aa = function (a, b) {
//   return a * b;
// };

// console.log(aa(2, 2));

const multiply = function () {
  //   console.log(arguments);
  //   return a * b;
  //   return arguments[0] * arguments[1];
  let temp = 1;
  for (const value of arguments) {
    temp *= value;
  }
  return temp;
};

const result = multiply(4, 2, 2, 2, 5, 8);

console.log(result);

// (function (a, b) {
//   console.log(a * b);
// })(2, 2);
