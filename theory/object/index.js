// const fname = "Ritu";
// const lname = "Kumar";
// const standard = 10;
// const division = "A";

// const student1 = {
//   fname: "Ritu",
//   lname: "Kumar",
//   standard: 10,
//   division: "A",
//   getFullName: function () {
//     this.fname + " " + this.lname;
//   }
// };

// console.log(student1.fname);

// student1.standard = 11;
// student1.city = "Surat";

// const student2 = new Object({
//   fname: "Manikant",
//   lname: "Jha",
//   standard: 11,
//   division: "B",
//   getFullName: function () {
//     this.fname + " " + this.lname;
//   }
// });

// console.log(student2.fname);

// student2.standard = 9;
// student2.city = "Pune";

// const student3 = {
//   fname: "Ritu",
//   lname: "Kumar",
//   standard: 10,
//   division: "A",
//   getFullName: function () {
//     this.fname + " " + this.lname;
//   }
// };

function Student(fname, lname, standard, division, city) {
  this.fname = fname;
  this.lname = lname;
  this.std = standard;
  this.div = division;
  this.city = "Surat";
  this.getFullName = function () {
    return this.fname + " " + this.lname;
  };
}

const student4 = new Student("Rajkumar", "Rao", 10, "A");
const student5 = new Student("Boman", "Irani", 11, "A");
const student6 = new Student("Juhi", "Chawala", 12, "A");

console.log(student4);
console.log(student5);
console.log(student6);
