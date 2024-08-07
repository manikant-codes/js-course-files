const name = "John Doe";
const age = 5;
const standard = 2;
const division = "A";
const lastYearPercentage = 65;

// console.log("name", name);
// console.log("age", age);

// --------------------------------------------------
// Object literal
// --------------------------------------------------
const student2 = {
  name: "Jenny Doe",
  age: 6,
  standard: 3,
  division: "B",
  lastYearPercentage: 80,
  address: {
    city: "Surat",
    pin: 123456,
  },
};

// --------------------------------------------------
// Accessing properties
// --------------------------------------------------

// Dot-notation
// --------------------------------------------------
// console.log("name", student2.name);
// console.log("age", student2.age);
// console.log("age", student2.current city);

// Square-bracket notation
// --------------------------------------------------
// console.log("name", student2["name"]);
// console.log("age", student2["age"]);
// console.log("city", student2["current city"]);
// let x = "age";
// console.log(student2.age);
// console.log(student2["age"]);
// console.log(student2[x]);

// Accessing nested properties
// --------------------------------------------------
// console.log(student2.address.city);
// console.log(student2["address"]["city"]);

// Adding new properties
// --------------------------------------------------
// student2.city = "Surat";
// student2["pin"] = 123456;

// Changing existing properties
// --------------------------------------------------
// student2.age = 7;
// student2["standard"] = 4;

// Delete existing properties
// --------------------------------------------------
// delete student2.lastYearPercentage;

// --------------------------------------------------
// Using new keyword
// --------------------------------------------------
// const student3 = new Object({
//   name: "Jennifer Doe",
//   age: 6,
//   standard: 3,
//   division: "B",
//   lastYearPercentage: 80,
//   "current city": "Surat",
// });

// console.log("name", student3.name);
// console.log("name", student3["name"]);
