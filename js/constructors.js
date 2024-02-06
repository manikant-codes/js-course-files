// const s1 = {
//   fname: "Hritik",
//   lname: "Roshan",
//   getFullName: function () {
//     console.log(this.fname + " " + this.lname);
//   },
// };

function Student(fname, lname) {
  this.fname = fname;
  this.lname = lname;
  //   this.getFullName = function () {
  //     return this.fname + " " + this.lname;
  //   };
}

Student.prototype.getFullName = function () {
  return this.fname + " " + this.lname;
};

const s1 = new Student("Deep", "Balar");
const s2 = new Student("Asd", "Asd");
const s3 = new Student("Sdf", "Sdf");
const s4 = new Student("Dfg", "Dfg");
