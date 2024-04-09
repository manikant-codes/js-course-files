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

const person1 = {
  fname: "Manikant",
  lname: "Jha",
  address: {
    city: "Surat",
    state: "Gujarat",
    pinCode: 394107,
  },
};

person1.getFullName = function () {
  return this.fname + " " + this.lname;
}.toString();
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

console.log(JSON.stringify(person1));
