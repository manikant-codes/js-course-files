// debugger;
// const stundent = {
//   fname: "Akshay",
//   lname: "Rathore",
//   roll: 1,
//   standard: 10,
//   getFullName: function () {
//     return this.fname + " " + this.lname;
//   }
// };

// function Student(fname, lname, roll) {
//   this.fname = fname;
//   this.lname = lname;
//   this.roll = roll;
//   this.standard = 10;
//   this.getFullName = function () {
//     return this.fname + " " + this.lname;
//   };
// }

// Student.prototype.standard = 10;
// Student.prototype.getFullName = function () {
//   return this.fname + " " + this.lname;
// };

// class Student {
//   constructor(fname, lname, roll) {
//     this.fname = fname;
//     this.lname = lname;
//     this.roll = roll;
//     // this.standard = 10;
//     // this.getFullName = function () {
//     //   return this.fname + " " + this.lname;
//     // };
//   }

//   getFullName() {
//     return this.fname + " " + this.lname;
//   }
// }

// Student.prototype.standard = 10;

// const student1 = new Student("Akshay", "Rathore", 1);
// const student2 = new Student("Vivek", "Rajput", 2);

// console.log(student1);
// console.log(student2);

class Person {
  static school = "ABC Modern School";
  static address = "ASD";
  constructor(fname, lname, id) {
    this.fname = fname;
    this.lname = lname;
    this.id = id;
  }

  get fullName() {
    return this.fname + " " + this.lname;
  }
}

class Student extends Person {
  constructor(fname, lname, id, marks) {
    super(fname, lname, id);
    this.marks = marks;
  }

  study() {
    console.log("Studying!");
  }
}

class Teacher extends Person {
  constructor(fname, lname, id, salary, subjects) {
    super(fname, lname, id);
    this.salary = salary;
    this.subjects = subjects;
  }

  teach() {
    console.log("Teaching!");
  }
}

// const teacher1 = new Teacher("Akshay", "Rathore", 1, 15000, [
//   "Math",
//   "Science"
// ]);

// const student1 = new Student("Vivek", "Rajput", 2, { math: 10, science: 20 });

console.log("teacher1", teacher1);
console.log("student1", student1);
