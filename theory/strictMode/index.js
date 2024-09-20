"use strict";

// let a = 10;
// a = 45;

// const obj = {
//   name: "Ram",
//   roll: 10
// };

// delete obj.roll;

// delete a;
// console.log(a);

// function add(a, a) {
//   console.log(a + a);
// }

// add(4, 3);

const obj = {};
Object.defineProperty(obj, "name", { value: "Ram", writable: false });

obj.name = "Lakshman";

console.log(obj);
