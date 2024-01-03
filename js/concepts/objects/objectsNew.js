// Object ek datastrcture (data ko store karne ka tarika) hai.
// Object me data key-value pair me store karte hain.
// Key aur value ko : (colon) se seperate karte hain.
// Do key-value pairs ko , (comma) se seperate karte hain.
// Objects ka use ham programming me real world entities (chizo) ko represent karne ke liye karte hai.
// Kyu ke real world me jo entities hoti hai unhe ek value se sahi tarike se represent nahi kiya jaa sakta.

// object literal

const student = { fname: "Manikant", lname: "Jha" };

// const key = "fname";

// console.log(student.fname);
// console.log(student["fname"]);
// console.log(student[key]);

// new keyword

// const person = new Object();

// person.fname = "Vicky";
// person.lname = "Kaushal";

// const temp = person;

// temp.fname = "Sukhi";

// console.log(person);

// looping through an object

// const person = {
//   fname: "Sukhi",
//   lname: "Kaushal",
//   age: 35,
//   address: { city: "Mumbai", pincode: 456235 },
//   getFullName: function () {
//     return this.fname + " " + this.lname;
//   },
// };

// person.spouse = "Katrina Kaif";
// person.igHandle = "@vickykaushal09";

// for (const p in person) {
//   console.log(p, person[p]);
// }

// delete person.igHandle;

// console.log(person.address.city);
// console.log(person["address"]["pincode"]);

// console.log(person.getFullName());

// person.getBirthYear = function (year) {
//   return year - this.age;
// };

// console.log(person.getBirthYear(2024));

// How to Display JavaScript Objects

// let result = ``;

// for (const p in person) {
//   result = result + `<p>${person[p]}</p>`;
// }

// console.log(Object.keys(person));
// console.log(Object.values(person));
// console.log(Object.entries(person));
