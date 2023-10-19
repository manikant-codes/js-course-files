// const myScootyName = "Activa";
// const myScootyModel = "6G";
// const myScootyColor = "Gray";
// const myScootyAverage = "55km/l";
// const myScootyMaxSpeed = "85km/h";

// function myScootyStart() {
//   console.log("Scooty has started");
// }

// function myScootyBreak() {
//   console.log("Applying breaks");
// }

// function myScootyAccelerate() {
//   console.log("Accelerating");
// }

// function myScootyStop() {
//   console.log("Scooty has stopped");
// }

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
