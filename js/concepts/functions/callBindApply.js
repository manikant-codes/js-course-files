// console.log("outside", this);

// function thisFunction() {
//   console.log("thisFunction", this);
// }

// thisFunction();

// class Student {
//   constructor(fname, lname) {
//     this.fname = fname;
//     this.lname = lname;
//   }
//   getFullName() {
//     console.log(this.fname + " " + this.lname);
//   }
// }

// const s1 = new Student("shinchan", "nohara");

// s1.getFullName();

// const shinchan = {
//   fname: "Shinchan",
//   lname: "Nohara",
//   getFullName: (years, likes) => {
//     console.log(
//       this.fname +
//         " " +
//         this.lname +
//         ` is ${years} old. ${this.fname} likes ${likes}.`
//     );
//   },
// };

// const himawari = {
//   fname: "Himawari",
//   lname: "Nohara",
// };

// shinchan.getFullName(5, "choco-chips");

// call
// shinchan.getFullName.call(himawari, 1, "flowers");

// apply
// const arr = [51, 10, 125, 2, 25];
// console.log(Math.min(51, 10, 125, 2, 25));
// console.log(Math.min.apply(null, arr));
// console.log(Math.max.apply(null, arr));
// shinchan.getFullName.apply(himawari, [1, "flowers"]);

// bind
// const getFullNameHimawari = shinchan.getFullName.bind(himawari);
// getFullNameHimawari(2, "flowers");

// (function () {
//   console.log("Hello!!"); // I will invoke myself
// })();

// debugger;

// const alert = function () {
//   let sum = 0;
//   for (let a of arguments) {
//     sum = sum + a;
//   }
//   return sum;
// };
// debugger;
// alert();

// const add = function (a, b, c) {
//   return a + b + c;
// };

// console.log(add(1, 2, 3, 4, 5, 6));
// console.log(add(1, 45, 23));

// this in arrow functions

// const obj = {
//   getThis: () => {
//     console.log("this3", this);
//   },
//   getThisWrapper: function () {
//     (() => {
//       console.log("this4", this);
//     })();
//   },
// };

// function wrapper() {
//   // window
//   const inner = () => {
//     console.log("this1", this);
//   };
//   inner();
// }

// const add = () => {
//   // window
//   console.log("this2", this);
// };

// wrapper();
// add();
// obj.getThis();
// obj.getThisWrapper();
