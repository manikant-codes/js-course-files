// const stud1 = {
//   name: "Ram",
//   roll: 1,
//   std: 10,
//   city: "Surat",
//   div: "A",
//   engMarks: 45,
//   gujMarks: 47,
//   avg: function () {
//     (this.engMarks + this.gujMarks) / 2;
//   },
// };

// const stud2 = {
//   name: "Lakshman",
//   roll: 2,
//   std: 10,
//   city: "Surat",
//   div: "A",
//   engMarks: 43,
//   gujMarks: 49,
//   avg: function () {
//     (this.engMarks + this.gujMarks) / 2;
//   },
// };

// const stud3 = {
//   name: "Maruti",
//   roll: 3,
//   std: 10,
//   city: "Surat",
//   div: "A",
//   engMarks: 49,
//   gujMarks: 41,
//   avg: function () {
//     (this.engMarks + this.gujMarks) / 2;
//   },
// };

// class Student {
//   constructor(name, roll, engMarks, gujMarks, mathMarks) {
//     this.name = name;
//     this.roll = roll;
//     this.mathMarks = mathMarks;
//     this.std = 10;
//     this.div = "A";
//     this.engMarks = engMarks;
//     this.gujMarks = gujMarks;
//   }

//   getAvg() {
//     return ((this.gujMarks + this.engMarks + this.mathMarks) / 3).toFixed(2);
//   }
// }

// Student.prototype.city = "Surat";

// const stud4 = new Student("Sia", 15, 56, 66, 45);
// const stud5 = new Student("Radha", 16, 57, 62, 66);

// console.log(stud4);
// console.log(stud5);

class Animal {
  constructor(height, weight, limbs) {
    this.height = height;
    this.weight = weight;
    this.limbs = limbs;
  }

  walk() {
    console.log("Walking");
  }
  eat() {
    console.log("Eating");
  }
  sleep() {
    console.log("Sleeping");
  }
}

class Cat extends Animal {
  static getGenus() {
    return "Felis";
  }
  constructor(furColor, sound, tailLength, weight, height, limbs) {
    super(height, weight, limbs);
    this.furColor = furColor;
    this.sound = sound;
    this.tailLength = tailLength;
  }

  hunt() {
    console.log("Hunting for rats!");
  }
}

class Human extends Animal {
  constructor(religion, caste, bankBalance) {
    this.religion = religion;
    this.caste = caste;
    this.bankBalance = bankBalance;
  }

  work() {
    console.log("Working");
  }
}

const cat = new Cat("Orange", "Meow", "0.5m", "8kg", "1m", 4);

console.log(Cat.getGenus());
