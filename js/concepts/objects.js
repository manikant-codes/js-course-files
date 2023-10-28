// "use strict";

// const student1 = {
//   fName: "Meet",
//   lName: "Jasoliya",
//   rollNumber: 1,
//   result: "pass",
//   isFeesPaid: true,
//   hobbies: ["Eating", "Sleeping"],
//   address: {
//     addLine1: "Somewhere",
//     addLine2: "Somewhere",
//     city: "Surat",
//     state: "Gujarat",
//   },
//   getFullName: function (a) {
//     console.log("fn called " + a);
//   },
// };

// let x = student1.getFullName;
// x("from x");

// console.log(student1.getFullName("from no where"));

// const greetings = function (name) {
//   console.log("Hello ", name);
// };

// greetings("Manikant");

// student1.mobileNumber = "+91 45654 45986";
// student1.mobileNumber2 = "+91 45896 45986";

// console.log(student1);

// The name:values pairs in JavaScript objects are called properties.

// const myScooty = {
//   name: "Activa",
//   model: "6G",
//   color: "Gray",
//   average: "55km/l",
//   maxSpeed: "85km/h",
//   // Here, this refers to the myScooty object.
//   scootyName: function () {
//     this.name + " " + this.model + " " + this.color;
//   },
//   start: function () {
//     console.log("Scooty has started");
//   },
//   break: function () {
//     console.log("Applying breaks");
//   },
//   accelerate: function () {
//     console.log("Accelerating");
//   },
//   stop: function () {
//     console.log("Scooty has stopped");
//   },
// };

// How you access properties.
// console.log(myScooty.average);
// console.log(myScooty["average"]);

// How you access methods.
// myScooty.scootyName();
// myScooty.start();
// myScooty.accelerate();
// myScooty.break();
// myScooty.stop();

// this Keyword
// this is not a variable. It is a keyword. You cannot change the value of this.

// Alone, this refers to the global object.
// console.log(this);

// In a function, this refers to the global object.
// In a function, in strict mode, this is undefined.
// function whosdis() {
//   console.log(this);
// }

// ---------- "this" Keyword ----------

// "this" is a keyword that refers to a value.
// The value "this" refers to depends on where and how "this" is used.
// That value is usually an object which represents the current execution context.
// It is this object that executes the current bit of JS code.
// Outside of any function this refers to the global window object as we are in the global execution context. Meaning it is the global execution context that is executing you code there.
// Inside any function this refers to the object (object representing the execution context) that called the function.
// In JS every function during execution has a reference to it's current execution context.
//

// ---------- End "this" Keyword ----------

// ---------- "this" Examples ----------

// console.log("this Outside Any Function: ", this);

// function aGuessThis() {
//   console.log("this Inside A Function", this);
// }

// aGuessThis();

// const obj = {
//   guessThis: () => {
//     console.log("this Inside An Object", this);
//   },
// };

// obj.guessThis();

// ---------- End "this" Examples ----------

// const student = {
//   firstName: "Manikant",
//   lastName: "Jha",
//   hobbies: ["reading", "singing", "sleeping"],
//   address: {},
//   fullName: function () {
//     // console.log(this.firstName + " " + this.lastName);
//     console.log(this);
//   },
// };

// function aWhosThis() {
//   console.log(this);
// }
// console.log(this);

// // student.fullName();

// aWhosThis();

// student.fullName();

// const studentNew = new Object();

// const studentArray = new Array();
// const studentNumber = new Number();
// const studentBoolean = new Boolean();
// console.log("student", student);
// console.log("studentNew", studentNew);

// const stud1Name = "John Doe";
// const stud1Roll = 12;
// const stud1Add = "Surat";
// const stud1Phone = "9865236545";
// const stud1Math = 43;
// const stud1Sci = 49;
// const stud1Comp = 48;

// function calcAvg(m1, m2, m3) {
//   return (m1 + m2 + m3) / 3;
// }

// const stud1 = {
//   name: "John",
//   rollNo: 12,
//   addres: {
//     firstline: "asd",
//     city: "Surat",
//   },
//   phone: "9865236545",
//   math: 43,
//   sci: 49,
//   comp: 48,
//   "full name": "John Doe",
//   average: function () {
//     console.log(this);
//   },
// };

// stud1.name;
// stud1.average;
// stud1.average();

// stud1["name"];

// console.log(this);

// function aWhosThis() {
//   console.log(this);
// }

// aWhosThis();

// stud1.average();

const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function () {
    return this.firstName;
  },
};

console.log(person.fullName());
// console.log(this);

function asd() {
  console.log(this);
}

// window.asd();
