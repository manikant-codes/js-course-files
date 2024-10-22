// "use strict";

// debugger;

// Scope ek jagah hai jaha pe us execution context ke variables aur functions rakhe jaate hai  jaha code chal raha hoo. Is jagah (scope) pe se decide hota hai ke yaha rakhe variables ya functions kaha milenge kaha nahi.

// Scope-chaining ek process hai jisme child scope se parent scope ke variables ya functions access kiye jate hai.

// Hoisting ek process hai jime code chale us se pehle variables/functions ko memory me jagah mil jaati hai.

// const a = 10;
// const b = 20;

// if (true) {
//   const msg = "Correct";
// }

// function add() {
//   const sum = a + b;
//   console.log(sum);
// }

// add();

// console.log("sum", sum);

// const obj = {
//   name: "Ram",
//   getThis: function () {
//     console.log("this", this);
//   }
// };

// obj.getThis();

// function getThis() {
//   console.log("this", this);
// }

// window.getThis();

// (function add(a, b) {
//   console.log(a + b);
// })(2, 4);

// console.log(add());

// function add(a, b) {
//   console.log(a + b);
// }

// add(2, 4);

// function add(a) {
//   return function (b) {
//     console.log(a + b);
//   };
// }

// add(2)(4);

// function add(num) {
//   if (num < 20) {
//     return add(num + 1);
//   }
//   return num;
// }

// const num = add(1);

// console.log(num);

// function add() {
//   return 2 + 2;
// }

// const add = function () {
//   return 2 + 2;
// };

// const add = () => {
//   return 2 + 2;
// };

const student = { name: "Ram", roll: 10 };

// const name = student.name;
// const roll = student.roll;
// OR
const { name, roll } = student;
