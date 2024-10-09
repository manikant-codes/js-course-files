// getters functions hai jo aap objects me bana sakte hoo.
// Ye jab object bante hai to unme jis naam ka getter function aapne banaya hai us naam property add kardete hai.
// Ye jo properties add karte hai wo calulated properties hooti hai, inki value jo aap ne getter function se value return ki hai wo hooti hai.
// getters se bani properties ko directly nahi change karsakte.
// Un properties ko change karne ke liye setter function banane padte hai.
// setter function ek argument leta hai, to ek se jada values deni hoo to yato object ya array pass karenge.
// setter me aap wo properties change karoge jina ka use kar ke aap getter se nayi value banarahe hoo. To getter ki value badlegi.

// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   language: "en",
//   eng: 45,
//   math: 41,
//   sci: 42
//   getFullName: function () {
//     return this.firstName + " " + this.lastName;
//   },
//   get fullName() {
//     return this.firstName + " " + this.lastName;
//   },
//   get avg() {
//     return (this.eng + this.math + this.sci) / 3;
//   }
//   set fullName(names) {
//     this.firstName = names.firstName;
//     this.lastName = names.lastName;
//   }
//   get lang() {
//     return this.language;
//   }
// };

// console.log(person.firstName + " " + person.lastName);

// console.log("person", person);

// console.log(person.getFullName());
// console.log(person.getFullName());

// person.firstName = "Ram";
// person.avg = 20;

// person.fullName = { firstName: "Shivam", lastName: "Sharma" };
// console.log("fullName", person.fullName);
// console.log(person.avg);

// Object.defineProperty(person, "fullName", {
//   get: function () {
//     return this.firstName + " " + this.lastName;
//   },
//   configurable: true,
//   enumerable: true
// });

// Object.defineProperty(person, "setFullName", {
//   set: function (names) {
//     this.firstName = names.firstName;
//     this.lastName = names.lastName;
//   }
// });

// console.log(person);

const person = {
  firstName: "John",
  lastName: "Doe",
  language: "en",
  eng: 45,
  math: 41,
  sci: 42
};

// Object.preventExtensions(person);
// console.log(Object.isExtensible(person));

// Object.seal(person);

// Object.defineProperty(person, "eng", { writable: false });
// person.eng = 50;

// person.guj = 44;
// delete person.math;

// console.log(person);

Object.freeze(person);

person.guj = 44;
delete person.math;

person.eng = 50;

console.log(person);
