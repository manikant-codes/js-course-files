// debugger;

// a();

// function a() {
//   console.log("A");
// }

// const b = function () {
//   console.log("B");
// };

// b();

// function a() {
//   console.log("A2");
// }

// (function () {
//   console.log("A1");
// })();

// a();

// debugger;

// function add(num1, num2) {
//   console.log(num1 + num2);
// }

// add(4, 5);

// console.log(num1);

debugger;

// let a = 10;
// let b = a;
// b = 15;

// console.log("a", a);
// console.log("b", b);

// const objA = {
//   count: 0,
// };

// const objB = objA;

// objB.count = 1;

// console.log("objA.count", objA.count);
// console.log("objB.count", objB.count);

debugger;

const objCount = {
  count: 0,
};

function counter(obj) {
  console.log("++obj.count", ++obj.count);
}

counter(objCount);

console.log("objCount", objCount);
