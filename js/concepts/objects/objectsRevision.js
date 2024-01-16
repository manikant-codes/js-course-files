// Object ek data structure hai, yane data ko store karne ka tarika hai.
// Object me data key: value, pair me strore karte hai.
// Is key: value pair ko object ki property bhi kehte hain.
// Object ke andar functions bhi store kar sakte hain, un functions ko methods kaha jaata hai.

// ----------
// Method 1
// ----------
// const obj = {
//   fname: "Asd", // property
//   lname: "Asd",
//   getFullName: function () {
//     this.fname + " " + this.lname;
//   }, // method
// };

// Dot Notation
// obj.fname;
// obj.lname;
// Ye method call karega.
// obj.getFullName();
// Ye nahi.
// obj.getFullName;

// Square Barackets Notation
// obj["fname"];
// obj["lname"];
// obj["getFullName"]();

// Ye tab kaam me aata hai jab jo key se access kar rahe hoo wo ek variable hoo.
// const key = "fname";
// obj.key // This won't work.
// obj[key];
// Same as:
// obj["fname"];

// ----------
// Method 2
// ----------
// Agar object banate waqt hi use initialize karna hoo to ye:
// const person = new Object({
//   fname: "Asd",
//   lname: "Asd",
//   getFullName: function () {
//     this.fname + " " + this.lname;
//   },
// });

// const person1 = new Object();

// person1.fname = "Asd";
// person1.lname = "Asd";
// person1.getFullName = function () {
//   this.fname + " " + this.lname;
// };

// console.log("person", person1);

// Ye object literal ke saath bhi hoo sakta hai.
// const person2 = {}; // Is object ka reference person2 me store hoo raha hai.

// person2.fname = "Asd";
// person2.lname = "Asd";
// person2.getFullName = function () {
//   this.fname + " " + this.lname;
// };

// console.log("person2", person2);

// console.log("person1.fname", (person1.fname = "Manikant"), person1.fname);
// console.log("person1['fname']", (person1["fname"] = "Asd"), person1["fname"]);

// Object are stored as reference!

// const shop = {
//   itemQty: 10,
// };

// const me = shop;
// const friend = shop;

// me.itemQty--;
// friend.itemQty--;

// console.log("me", me);
// console.log("friend", friend);
// console.log("shop", shop);

// Deleting an object's property.

// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 50,
//   eyeColor: "blue",
// };

// delete person.age;

// console.log("person", person);

// Nested Objects

// myObj = {
//   name: "John",
//   age: 30,
//   cars: {
//     car1: "Ford",
//     car2: "BMW",
//     car3: "Fiat",
//   },
// };

// console.log(myObj.cars.car2);
// console.log(myObj["cars"]["car2"]);

// Example 2

// const myObj = {
//   name: "John",
//   age: 30,
//   cars: [
//     { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
//     { name: "BMW", models: ["320", "X3", "X5"] },
//     { name: "Fiat", models: ["500", "Panda"] },
//   ],
// };

// console.log(myObj.cars[0].name);
// console.log(myObj.cars[1].name);
// console.log(myObj.cars[2].name);
