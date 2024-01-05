// "use strict";
// this ek keword hai.
// this ek object ko refer karta hai.
// Konse object ko? To ye depend karta hai ke this kaha use kiya hai.
// Function ke bahar this window object ko refer karta hai. Jo code hai wo GEC (Global Execution Context) me run hota hai, aur is GEC ko window object represent karta hai.
// Function ke andar this us object ko refer karega jisne wo function call kiya hoo.
// Arrow function ke andar this uske parent scope me this jis object ko refer karta hi use refer karega (parent scope me this ki jo value hai wo value arrow function ke this ki hoogi).
// Arrow function ke this ki apni koi binding nahi hooti.

// debugger;

// console.log("this outside", this);

// function a() {
//   console.log("this inside a", this);
// }

// a();
// window.a();

// const student = {
//   fname: "Abc",
//   lname: "Def",
//   getFullName: function () {
//     console.log("inside student object", this);
//     console.log(this.fname + " " + this.lname);
//   },
// };

// student.getFullName();

// arrow functions

// function c() {
//   console.log("this inside a", this);
// }

// const a = function () {
//   return "A";
// };

// const b = () => {
//   return "B";
// };

// a();
// b();

// this difference

// function a() {
//   console.log("A", this);
// }

// const b = () => {
//   console.log("B", this);
// };

// a();
// b();

// debugger;

// const student = {
//   fname: "Abc",
//   lname: "Def",
//   getFullName: function () {
//     console.log("inside student normal", this);
//     // console.log(this.fname + " " + this.lname);
//   },
//   getFullNameArrow: () => {
//     console.log("inside student arrow", this);
//     // console.log(this.fname + " " + this.lname);
//   },
//   getFullNameWrapped: function () {
//     const wrapped = () => {
//       console.log("inside student wrapped", this);
//     };
//     wrapped();
//   },
// };

// student.getFullName();
// student.getFullNameArrow();
// student.getFullNameWrapped();

// a();
