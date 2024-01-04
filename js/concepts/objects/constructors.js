// problem
// const s1 = {
//   rollNo: 1,
//   fname: "Akshay",
//   lname: "Kumar",
//   js: 42,
//   react: 41,
//   node: 39,
//   getAvg: function () {
//     return (this.js + this.react + this.node) / 3;
//   },
// };
// const s2 = {
//   rollNo: 2,
//   fname: "Anil",
//   lname: "Kapoor",
//   js: 35,
//   react: 19,
//   node: 12,
//   getAvg: function () {
//     return (this.js + this.react + this.node) / 3;
//   },
// };
// const s3 = {
//   rollNo: 3,
//   fname: "Amitabh",
//   lname: "Bachchan",
//   js: 35,
//   react: 40,
//   node: 49,
//   getAvg: function () {
//     return (this.js + this.react + this.node) / 3;
//   },
// };

// solution

function Student(rollNo, fname, lname, js, react) {
  this.rollNo = rollNo;
  this.fname = fname;
  this.lname = lname;
  this.js = js;
  this.react = react;
  //   this.getAvg = function () {
  //     return (this.js + this.react) / 2;
  //   };
}

// Student.newProperty = "Something";
// Student.newMethod = () => {};

Student.prototype.getAvg = function () {
  return (this.js + this.react) / 2;
};

// new Object()

const s1 = new Student(1, "Akshay", "Kumar", 42, 43);
const s2 = new Student(2, "Anil", "Kapoor", 44, 39);
const s3 = new Student(3, "Hansaben", "Parmar", 48, 47);
