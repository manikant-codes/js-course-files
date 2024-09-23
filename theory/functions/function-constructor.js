debugger;

// console.log(aa(2, 2));

// function aa(a, b) {
//   return a * b;
// }

// const aa = function (a, b) {
//   return a * b;
// };

// console.log(aa(2, 2));

// const multiply = function () {
//   //   console.log(arguments);
//   //   return a * b;
//   //   return arguments[0] * arguments[1];
//   let temp = 1;
//   for (const value of arguments) {
//     temp *= value;
//   }
//   return temp;
// };

// const result = multiply(4, 2, 2, 2, 5, 8);

// console.log(result);

// (function (a, b) {
//   console.log(a * b);
// })(2, 2);

const add = new Function("a", "b", "return a + b");
const bool = new Boolean(true);
const str = new String("Ram");
const num = new Number(10);
const obj = new Object({ num: 10 });
const arr = new Array({ num: 10 });

function Student(name, roll) {
  this.name = name;
  this.roll = roll;
}

const student = new Student("Ram", 10);

console.log(student);
