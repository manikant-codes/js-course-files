// const student1 = {
//   name: "Ram",
//   roll: 10,
//   std: 10,
//   div: "A",
//   mathMarks: 50,
//   engMarks: 56,
//   gujMarks: 58,
//   getAvg: function () {
//     return (this.mathMarks + this.engMarks + this.gujMarks) / 3;
//   },
// };

// const student2 = {
//   name: "Aarav",
//   roll: 11,
//   std: 10,
//   div: "A",
//   mathMarks: 42,
//   engMarks: 60,
//   gujMarks: 99,
// };

// class Student {
//   constructor(name, roll, mathMarks, engMarks, gujMarks) {
//     this.name = name;
//     this.roll = roll;
//     // this.std = 11;
//     // this.div = "A";
//     this.mathMarks = mathMarks;
//     this.engMarks = engMarks;
//     this.gujMarks = gujMarks;
//     // this.getAvg = function () {
//     //   return ((this.mathMarks + this.engMarks + this.gujMarks) / 3).toFixed(2);
//     // };
//   }
//   //   div = "A";
//   //   std = 10;
//   getAvg() {
//     return ((this.mathMarks + this.engMarks + this.gujMarks) / 3).toFixed(2);
//   }
// }

// Student.prototype.std = 10;
// Student.prototype.div = "A";

// const stud1 = new Student("Ram", 10, 46, 58, 78);
// const stud2 = new Student("Aditi", 11, 56, 58, 45);

// console.log(stud1);
// console.log(stud2);

// class Student {
//   constructor(name, roll) {
//     this.name = name;
//     this.roll = roll;
//   }
// }
// const stud = new Student("Ram", 10);
// console.log(stud);

// class Tiger extends Animal {
//   constructor(length, tailLength) {
//     this.length = length;
//     this.tailLength = tailLength;
//   }

//   climb() {
//     console.log("Climb");
//   }
//   swim() {
//     console.log("Swimming");
//   }
// }

class Animal {
  constructor(name, weight) {
    // this.name = name;
    this.number = number;
    this.weight = weight;
  }

  eat() {
    console.log("Eating");
  }
  sleep() {
    console.log("Sleeping");
  }
  move() {
    console.log("Move");
  }
}

class Monkey extends Animal {
  constructor(name, weight, height, tailLength) {
    super(name, weight);
    this.height = height;
    this.tailLength = tailLength;
  }

  climb() {
    console.log("Climb");
  }
}

const monkeyA = new Monkey("Chimpanzee", 50, 10, 5);

console.log("monkeyA", monkeyA);
