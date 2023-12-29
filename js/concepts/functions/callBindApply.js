// call
// Har function me this hota hai, aur wo kisi object ko refer (point) karta hai.
// call ek function method hai. JS me functions objects hain, unki bhi kuch properties aur methods hoti hain. Unhi me se ek method call hai.
// Agar aap ko koi function call karwana hoo, uske this ki binding (this kis object ko point kar raha hai) change kar ke, to app call method ka use karo ge.

// apply
// apply ek function method hai.
// Agar aap ko koi function call karwana hoo, uske this ki binding (this kis object ko point kar raha hai) change kar ke, aur arguments me array pass karna hoo, to app apply method ka use karo ge.

// bind
// bind ek function method hai.
// Agar aap ko koi function ki nayi copy chahiye ho, uske this ki binding (this kis object ko point kar raha hai) change kar ke, to app bind method ka use karo ge.
// Bind method us function ko call nahi kare ga, app ko us function ki body/code return karega.
// Baad me aap usko call kara sakte hoo.

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

// const studentA = {
//   fname: "Shinchan",
//   lname: "Nohara",
//   getFullName: function (age, likes, favColor) {
//     return (
//       this.fname +
//       " " +
//       this.lname +
//       " is " +
//       age +
//       " years old!" +
//       " Likes " +
//       likes +
//       ", favourite color " +
//       favColor
//     );
//   },
// };

// const studentB = {
//   fname: "Himawari",
//   lname: "Nohara",
// };

// console.log(studentA.getFullName());

// call
// console.log(studentA.getFullName.call(studentB, 2, "flowers", "yellow"));

// apply
// console.log(studentA.getFullName.apply(studentB, [2, "flowers", "yellow"]));

// bind
// const newFn = studentA.getFullName.bind(studentB);
// console.log(newFn(2, "flowers", "yellow"));
