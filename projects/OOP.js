// const student1 = {
//   fname: "A",
//   lname: "B",
//   getFullName: function () {
//     return this.fname + " " + this.lname;
//   },
//   roll: 1,
// };

// const student2 = {
//   fname: "C",
//   lname: "D",
//   getFullName: function () {
//     return this.fname + " " + this.lname;
//   },
//   roll: 2,
// };

// const student3 = {
//   fname: "E",
//   lname: "F",
//   getFullName: function () {
//     return this.fname + " " + this.lname;
//   },
//   roll: 3,
// };

// class Student {
//   constructor(fname, lname, getFullName) {
//     this.fname = fname;
//     this.lname = lname;
//     this.getFullName = getFullName;
//   }

//   getFullName() {
//     return this.fname + " " + this.lname;
//   }
// }

// const student4 = new Student("X", "Y");

// const student5 = new Student("Y", "Z");

// class Animal {
//   constructor(age) {
//     this.age = age;
//   }
//   move() {
//     console.log("Moving!");
//   }
//   eat() {
//     console.log("Eating!");
//   }
//   sleep() {
//     console.log("Sleeping!");
//   }
// }

// class Dog extends Animal {
//   constructor(name, age) {
//     super(age);
//     this.name = name;
//   }
//   sound() {
//     console.log("Woof woof!");
//   }
// }

// class Cat extends Animal {
//   constructor(name, age) {
//     super(age);
//     this.name = name;
//   }
//   sound() {
//     console.log("Meow meow!");
//   }
// }

// const dog1 = new Dog("Sheru", 15);
// const cat1 = new Cat("Whiskers", 3);

class Student {
  constructor(fname, lname) {
    this.fname = fname;
    this.lname = lname;
    this.state = { count: 0, name: "ASD" };
  }

  getFullName = () => {
    return this.fname + " " + this.lname;
  };

  changeCount() {
    this.state = { count: this.state.count + 1 };
  }
}

const student1 = new Student("A", "B");
