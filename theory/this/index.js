// "use strict";

// window object
// console.log("this 1", this);

// debugger;

// function printThis() {
//   // window object
//   console.log("this 2", this);
// }

// printThis();

// const obj = {
//   a: {
//     b: 10,
//     fn: function () {
//       console.log("this 3", this);
//     },
//   },
//   printThis: function () {
//     // obj
//     console.log("this 4", this);
//   },
// };

// obj.printThis();
// obj.a.fn();

// this ek keyword hai let, const, if, for, etc ke tarah hi.
// this ke paas object ka reference/address hota hai.
// Kon se object ka address/reference?
// To ye kaha this use kiya hai uspe depend karta hai.
// Jo object this wale code ko chalata hai uska reference/address this me hota hai.

// const printThis = () => {
//   console.log("arrow this 1", this);
// };

const obj = {
  // printThisNormal: function () {
  //   console.log("arrow this 1", this);
  //   const nestedPrintThisArrow1 = () => {
  //     console.log("arrow this 2", this);
  //   };
  //   nestedPrintThisArrow1();
  // },
  obj1: {
    abc: () => {
      console.log("this abc", this);
    },
  },
  printThisArrow: () => {
    console.log("arrow this 3", this);
    const nestedPrintThisArrow2 = () => {
      console.log("arrow this 4", this);
    };
    nestedPrintThisArrow2();
  },
};

// printThis();
obj.printThisNormal();
// obj.printThisArrow();
obj.obj1.abc();
