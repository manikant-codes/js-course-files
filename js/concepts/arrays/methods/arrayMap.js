// map
// map bhi ek built-in array method hai.
// map bhi ek function leta hai as an argument.
// Us function ko wo 3 arguments deta hai: (value, index, array).
// value: map me bhi andar ek loop hi chalta hai (loop kispe chalta hai? Hamne jis array pe map call kiya hoo uspe.). To us loop me jis element ki bari (વારો/turn/number) hoo wo element value me store hota hai.
// index: Us value (element) ki array me index (position) .
// array: Jis array pe hamne mapmethod call kiya hoo wo.

// map method ko jo aapne function paas kiya hai as an argument use ek-ek kar ke har array element pe call karta hai.
// Agar us function me se kuch return karate hoo to map method use ek naye array me store karega warna undefined store karega.
// Lekin har array element keliye kuch na kuch naye array me store to karega.
// Aur jab sab elements pe loop chaljaye tab, map method wo naya array return kar dega.

// To map method kya karta hai?
// map method ek array ko transform (ek array pe kuch changes/process/calculation) karke ek naya array deta hai.
// map method original array ko nahi cahange karta hai.
// map method hame ek naya array deta hai.

// const table2 = [2, 4, 6, 8, 10];
// const table1 = [1, 2, 3, 4, 5];

// Bina map method ke ye sab karna padega. Ek naya empty array banana padega, original array pe loop chalani padegi, us loop me har element ko 2 se multiply kar ke naye array  me push karwana paedga.
// let temp = [];

// for (const t of table1) {
//   temp.push(t * 2);
// }

// console.log(table1);
// console.log(temp);

// const table2 = table1.map(function (value, index, array) {
//   return value * 2;
// });

// console.log(table2);

// function myMap(callbackFunction, array) {
//   const temp = [];

//   for (let i = 0; i < array.length; i++) {
//     const transformedElement = callbackFunction(array[i], i, array);
//     temp.push(transformedElement);
//   }

//   return temp;
// }

// Array.prototype.myMap = function (callbackFunction) {
//   const temp = [];

//   for (let i = 0; i < this.length; i++) {
//     const transformedElement = callbackFunction(this[i], i, this);
//     temp.push(transformedElement);
//   }

//   return temp;
// };

// function transform(value, index, array) {
//   // [1, 2]
//   for (let v of value) {
//     return v * 2;
//   }
// }

// const table2 = myMap(transform, table1);
// const table2 = table1.myMap(transform);

// const table2 = table1.map(transform);

// console.log(table1);
// console.log(table2);

// function myMap(callbackFn) {
//   const temp = [];
//   for (let i = 0; i < numbers.length; i++) {
//     const newElement = callbackFn(numbers[i], i, numbers);
//     temp.push(newElement);
//   }
//   return temp;
// }

// const res = myMap(function (value, index, array) {
//   return (value * 2).toString(2);
// });

// const res = numbers.map(function (value, index, array) {
//   (value * 2).toString(2);
// });

// console.log(res, numbers);

// const numbers = ["liche", "mango", "black-current", "orange", "masala"];
// const oddEven = [];
// function myFunction() {}

// // numbers.forEach(myFunction);
// numbers.forEach(function (value, index, array) {
//   let result = value % 2 === 0 ? "even" : "odd";
//   oddEven.push(result);
// });

// console.log(oddEven, numbers);

// const result = numbers.map(function (value, index, array) {
//   let result = value % 2 === 0 ? "even" : "odd";
//   return result;
// });

// console.log(result, numbers);

// ["licehe soda", "mango soda", "blck-current soda"];

// DRY
// Don't Repeat Yourself

// Higher Order Functions
// function sodaMachine(order, flavoursContainer) {
//   for (let i = 0; i < flavours.length; i++) {
//     if (flavoursContainer[i] === "mango" || flavoursContainer[i] === "orange") {
//       continue;
//     }
//     order(flavoursContainer[i]);
//   }
// }

// sodaMachine(function (flavour) {
//   console.log(flavour + " soda");
// }, flavours);

// sodaMachine(function (flavour) {
//   console.log(flavour + " sing soda");
// }, flavours);

// sodaMachine(function (flavour) {
//   console.log(flavour + " masala soda");
// }, flavours);

// for (let i = 0; i < 3; i++) {
//   console.log(f + " soda");
// }
// for (let i = 0; i < 3; i++) {
//   console.log(f + " drink");
// }
// for (let i = 0; i < 3; i++) {
//   console.log(f + " sing soda");
// }
// for (let i = 0; i < 3; i++) {
//   console.log(f + " masala sing soda");
// }

// const tray = [];

// const x = flavours.forEach(function (flavour, index, array) {
//   tray.push(flavour + " soda");
//   //   console.log(element + " soda");
// });

// const x = flavours.map(function (flavour, index, array) {
//   return flavour + " soda";
// });

// orange, mango, sprite

const flavours = [
  "liche",
  "mango",
  "black-current",
  "orange",
  "masala",
  "coca-cola",
  "pine-apple",
  "sprite",
  "limca",
];

const x = flavours.filter(function (flavour, index, array) {
  if (flavour === "mango" || flavour === "orange" || flavour === "sprite") {
    return flavour;
  }
  //   return undefined;
});

console.log("x: ", x);
// console.log("tray: ", tray);
