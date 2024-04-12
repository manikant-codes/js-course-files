// const person = {
//   name: "John Doe",
//   age: 36,
//   "city-name": "Surat",
// };

// const person = new Object({ name: "John Doe", age: 36, city: "Surat" });

// const person = Object.create({ name: "Manikant", city: "Surat" });

// console.log(person["city"]);

// const person1 = { name: "Manikant" };
// const person2 = person1;
// person2.name = "John";

// const person1 = "Manikant";
// let person2 = person1;
// person2 = "John";

// console.log("person1", person1);
// console.log("person2", person2);

// const person1 = { fname: "Manikant" };

// person1.lname = "Jha";
// person1.city = "Surat";
// person1.getFullName = function () {
//   return this.fname + " " + this.lname;
// };

// const prop = "city";
// delete person1[prop];
// Same As
// delete person1["city"];

// const person1 = {
//   fname: "Manikant",
//   lname: "Jha",
//   address: {
//     city: "Surat",
//     state: "Gujarat",
//     pinCode: 394107,
//   },
// };

// person1.getFullName = function () {
//   return this.fname + " " + this.lname;
// }.toString();
// const var1 = "address";
// const var2 = "city";

// console.log(person1.address.city);
// console.log(person1["address"]["city"]);
// console.log(person1[var1][var2]);

// for (const property in person1) {
//   console.log("property", property, person1[property]);
// }

// console.log(Object.keys(person1));

// console.log(Object.values(person1));
// console.log(Object.entries(person1));

// console.log(JSON.stringify(person1));

// --------------------------------------------------
// Getters & Setters
// --------------------------------------------------

// const person = {
//   fname: "Manikant",
//   lname: "Jha",
//   address: {
//     city: "Surat",
//     state: "Gujarat",
//     pinCode: 394107,
//   },
// get fullName() {
//   return this.fname + " " + this.lname;
// },
// set fullName(obj) {
//   this.fname = obj.fname;
//   this.lname = obj.lname;
// },
// get fullAddress() {
//   return `${this.address.city}, ${this.address.state}, ${this.address.pinCode}`;
// },
// };

// Object.defineProperty(person, "fullName", {
//   get: function () {
//     return this.fname + " " + this.lname;
//   },
// });

// Object.defineProperty(person, "setFullName", {
//   set: function (obj) {
//     this.fname = obj.fname;
//     this.lname = obj.lname;
//   },
// });

// console.log(person.fullName);
// console.log((person.setFullName = { fname: "John", lname: "Doe" }));
// console.log(person.fullName);
// console.log(person);
// console.log((person.fullAddress = "asd"));
// console.log(person);

// --------------------------------------------------
// Constructors
// --------------------------------------------------

// const person1 = {
//   fname: "Manikant",
//   lname: "Jha",
//   address: {
//     city: "Surat",
//     state: "Gujarat",
//     pinCode: 394107,
//   },
// };

// const person2 = {
//   fname: "John",
//   lname: "Doe",
//   address: {
//     city: "Surat",
//     state: "Gujarat",
//     pinCode: 394107,
//   },
// };

// const person3 = {
//   fname: "Jenny",
//   lname: "Doe",
//   address: {
//     city: "Surat",
//     state: "Gujarat",
//     pinCode: 394107,
//   },
// };

function Person(fname, lname, pinCode, salary) {
  this.fname = fname;
  this.lname = lname;
  this.address = {
    city: "Surat",
    state: "Gujarat",
    pinCode,
  };
  // this.getFullName = function () {
  //   return this.fname + " " + this.lname;
  // };
  this.salary = salary;
  // this.numberOfLeaves = 3;
}

Person.prototype.numberOfLeaves = 3;
Person.prototype.getFullName = function () {
  return this.fname + " " + this.lname;
};

const person1 = new Person("Manikant", "Jha", 394107, 10000);
person1.newProperty = "value";
person1.newMethod = () => {
  console.log("Hello");
};

const person2 = new Person("John", "Doe", 394107, 10000);

console.log("person1", person1);
console.log("person2", person2);

// console.log("person2", person2);
// console.log("person2", person2.getFullName());
