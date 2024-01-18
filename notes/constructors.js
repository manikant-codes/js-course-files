// const person1 = {
//   fname: "Hiren",
//   lname: "Koshiya",
//   getFullName: function () {
//     return this.fname + " " + this.lname;
//   },
//   marks: { js: 42, react: 45, node: 41 },
//   getPercentage: function () {
//     return Math.round(
//       ((this.marks.js + this.marks.react + this.marks.node) * 100) / 150
//     );
//   },
// };

// const person2 = {
//   fname: "Krish",
//   lname: "Poshiya",
//   getFullName: function () {
//     return this.fname + " " + this.lname;
//   },
//   marks: { js: 40, react: 46, node: 44 },
//   getPercentage: function () {
//     return Math.round(
//       ((this.marks.js + this.marks.react + this.marks.node) * 100) / 150
//     );
//   },
// };

// const person3 = {
//   fname: "Jaydeep",
//   lname: "Sudani",
//   getFullName: function () {
//     return this.fname + " " + this.lname;
//   },
//   marks: { js: 46, react: 48, node: 49 },
//   getPercentage: function () {
//     return Math.round(
//       ((this.marks.js + this.marks.react + this.marks.node) * 100) / 150
//     );
//   },
// };

// const person4 = {
//   fname: "Meet",
//   lname: "Jasoliya",
//   getFullName: function () {
//     return this.fname + " " + this.lname;
//   },
//   marks: { js: 50, react: 50, node: 50, mongoDB: 50 },
//   getPercentage: function () {
//     return Math.round(
//       ((this.marks.js + this.marks.react + this.marks.node + this.marks.mongoDB) * 100) / 200
//     );
//   },
// };

// Constructor Function
function Person(fname, lname, marks) {
  // Yaha pe this.fname naye bane object ki fname property ko refer (point) kar raha hai.
  // Yaha ye this is function ko refer nahi kar raha, function ke dwara banaye gaye naye object ko refer kar raha hai.
  this.fname = fname;
  this.lname = lname;
  this.marks = marks;
}

Person.prototype.getFullName = function () {
  return this.fname + " " + this.lname;
};
Person.prototype.getPercentage = function () {
  return Math.round(
    ((this.marks.js + this.marks.react + this.marks.node) * 100) / 150
  );
};

// new ek keyword hai.
// Iska kaam naya object banane aur Person ke andar this ki binding us naye bane object ke saath karane ka hai.
const person1 = new Person("Hiren", "Koshiya", { js: 42, react: 45, node: 41 });
const person2 = new Person("Krish", "Poshiya", { js: 40, react: 46, node: 44 });
