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

// function add(n1 = 0, n2 = 0) {
//   if (typeof n1 !== "number" || typeof n2 !== "number") {
//     return 0;
//   }
//   return n1 + n2;
// }

// const result = add(1);

// console.log("result", result);

// function add(...params) {
//   let sum = 0;
//   console.log("arguments", arguments);
//   for (const value of params) {
//     sum += value;
//   }

//   console.log(sum);
// }

// add(5, 5);

// let num = 10;

// function change(value) {
//   value = 15;
//   console.log("value", value); // 15
// }
// change(num);
// console.log("num", num); // 10

// debugger;

// const obj = {
//   num: 10,
// };

// function change(obj2) {
//   obj2.num = 15;
//   console.log("obj2.num", obj2.num); // 15
// }

// change(obj);
// console.log("obj.num", obj.num); // 15

// call, apply and bind

const person = {
  fname: "John",
  lname: "Doe",
  getFullName: function () {
    console.log(this.fname + " " + this.lname);
  },
};

const person2 = {
  fname: "James",
  lname: "Doe",
};

const person3 = {
  fname: "Marry",
  lname: "Doe",
};

person.getFullName();

person.getFullName.call(person2);
person.getFullName.call(person3);
