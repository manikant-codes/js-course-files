// const person1 = {
//   fname: "John",
//   lname: "Doe",
//   address: {
//     city: "Surat",
//     state: "Gujarat",
//     pinCode: 398651,
//   },
//  getFullName: function () {
//     return this.fname + " " + this.lname;
//  }
// };

// const person2 = {
//   fname: "Jenny",
//   lname: "Doe",
//   address: {
//     city: "Surat",
//     state: "Gujarat",
//     pinCode: 398564,
//   },
//  getFullName: function () {
//     return this.fname + " " + this.lname;
//  }
// };

// const person3 = {
//   fname: "Marry",
//   lname: "Jane",
//   address: {
//     city: "Surat",
//     state: "Gujarat",
//     pinCode: 398564,
//   },
//  getFullName: function () {
//     return this.fname + " " + this.lname;
//  }
// };

// function Person(fname, lname, pinCode) {
//   //   console.log(this);
//   this.fname = fname;
//   this.lname = lname;
//   this.address = {
//     city: "Udaipole",
//     state: "Rajasthan",
//     pinCode: pinCode,
//   };
//   //   this.getFullName = function () {
//   //     return this.fname + " " + this.lname;
//   //   };
// }

// Person.prototype.getFullName = function () {
//   return this.fname + " " + this.lname;
// };

class Person {
  constructor(fname, lname, pinCode) {
    this.fname = fname;
    this.lname = lname;
    this.address = {
      city: "Udaipole",
      state: "Rajasthan",
      pinCode: pinCode,
    };
  }

  getFullName() {
    msg = "Hello!";
    console.log(msg);
    return this.fname + " " + this.lname;
  }
}

const person1 = new Person("John", "Doe", 456123);
const person2 = new Person("Jenny", "Doe", 456789);

console.log("person1", person1);
console.log("person2", person2);
console.log("person1", person1.getFullName());
console.log("person2", person2.getFullName());
