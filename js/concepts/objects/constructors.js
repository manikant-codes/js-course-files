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

// Student.newProperty = "Something";
// Student.newMethod = () => {};
// new Object()

// Student.prototype.getAvg = function () {
//   return (this.js + this.react) / 2;
// };

// function Student(rollNo, fname, lname, js, react) {
//   console.log("this", this);
//   this.rollNo = rollNo;
//   this.fname = fname;
//   this.lname = lname;
//   this.js = js;
//   this.react = react;
//   this.newPoperty = newProperty;
//   this.getAvg = function () {
//     return (this.js + this.react) / 2;
//   };
// }

// Student.newPoperty = "something";

// Student.prototype.newProperty = "something";

// const s1 = new Student(1, "Akshay", "Kumar", 42, 43);
// const s2 = new Student(2, "Anil", "Kapoor", 44, 39);
// const s3 = new Student(3, "Hansaben", "Parmar", 48, 47);

// console.log(s1);
// console.log(s2);
// console.log(s3);

// classes

// class Student {
//   constructor(rollNo, fname, lname, newMethod = () => {}) {
//     this.rollNo = rollNo;
//     this.fname = fname;
//     this.lname = lname;
//     this.newMethod = newMethod;
//   }

//   getFullName() {
//     console.log(this.fname + " " + this.lname);
//   }
// }

// Student.prototype.age = 10;

// const s1 = new Student(1, "Akshay", "Kumar");
// const s2 = new Student(2, "Anil", "Kapoor");
// const s3 = new Student(3, "Amitabh", "Bachchan");

// console.log(Student.prototype.getFullName.call(s1));

// console.log(s1);
// console.log(s2);
// console.log(s3);

// classes inheritance

// debugger;

// class Animal {
//   constructor(species) {
//     this.species = species;
//   }

//   eat() {
//     console.log("Eating!");
//   }

//   move() {
//     console.log("Moving!");
//   }
// }

// class Dog extends Animal {
//   constructor(species, name, color) {
//     super(species);
//     this.name = name;
//     this.color = color;
//   }

//   get petName() {
//     // this._petName = this.name + " the " + this.species;
//     return this._petName;
//   }

//   set petName(petName) {
//     this._petName = petName;
//   }

//   bark() {
//     console.log("Barking!");
//   }

//   bite() {
//     console.log("Biting!");
//   }

//   play() {
//     console.log("Playing!");
//   }
// }

// const d1 = new Dog("pug", "sheru", "beige");
// const d2 = new Dog("german shephard", "bruno", "black");

// console.log(d1);
// console.log(d2);

// static keyword

class TaskManager {
  constructor(todos) {
    this.todos = todos;
  }

  static getDate() {
    return new Date();
  }
}

const t1 = new TaskManager(["a", "b"]);
