// const s1 = {
//   fname: "Asd",
//   lname: "Asd",
//   getFullName: function () {
//     return this.fname + " " + this.lname;
//   },
// };

// const s2 = {
//   fname: "Asd",
//   lname: "Asd",
//   getFullName: function () {
//     return this.fname + " " + this.lname;
//   },
// };

// const s3 = {
//   fname: "Asd",
//   lname: "Asd",
//   getFullName: function () {
//     return this.fname + " " + this.lname;
//   },
// };

// ...

// const s50 = {
//   fname: "Asd",
//   lname: "Asd",
//   getFullName: function () {
//     return this.fname + " " + this.lname;
//   },
// };

// function Student(fname, lname) {
//   this.fname = fname;
//   this.lname = lname;
//   // this.getFullName = function () {
//   //   return this.fname + " " + this.lname;
//   // };
// }

// Student.prototype.getFullName = function () {
//   return this.fname + " " + this.lname;
// };

// const s1 = new Student("Asd", "Asd");
// const s2 = new Student("123", "123");
// const s3 = new Student("Qwe", "Qwe");

// console.log("s1", s1);
// console.log("s2", s2);
// console.log("s3", s3);

// class Student {
//   constructor(fname, lname) {
//     this.fname = fname;
//     this.lname = lname;
//   }

//   getFullName() {
//     return this.fname + " " + this.lname;
//   }
// }

// Student.prototype.school = "Lope";

// const s1 = new Student("Asd", "Asd");
// const s2 = new Student("Asd 2", "Asd 2");
// const s3 = new Student("Asd 3", "Asd 3");

// console.log("s1", s1);
// console.log("s2", s2);
// console.log("s3", s3);

class Vehicle {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  accelerate() {
    console.log("Accelerating...");
  }

  break() {
    console.log("Applying breaks...");
  }

  horn() {
    console.log("Peep peep...");
  }
}

class Car extends Vehicle {
  constructor(brand, model, year, capacity, mileage, airbags) {
    super(brand, model, year);
    this.capacity = capacity;
    this.mileage = mileage;
    this.airbags = airbags;
  }
}

// class Bike extends Vehicle {}

const c = new Car("Maruti", "800", 1980, 5, 20, 2);

console.log(c);
