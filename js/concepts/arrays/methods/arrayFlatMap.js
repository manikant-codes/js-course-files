// map method ek array pe transformations/changes/modifications kar ke naya array return karta hai.
// flatMap method map jaisa hi kaam karta hai lekin wo map karne ke baad naye array pe flat method call kardeta hai.
// Ye map aur flat method ala alag call kara ne se zada efficient hai.
// Lekin ye sirf 1 level deep hi flat karta hai.
// Ye method original array me koi changes nahi karta.

// 1D array
// const table1 = [1, 2, 3, 4, 5];

// Array of arrays (2D array)
// const table1 = [[1, 2], [3, 4], [5]];

// const temp = [];

// for (const arr of myArr) {
//   for (const a of arr) {
//     temp.push(a * 2);
//   }
// }

// console.log(temp);

// const table2 = table1.map(function (value, index, array) {
//   const temp = [];
//   // [3, 4]
//   for (const v of value) {
//     temp.push(v * 2);
//   }
//   return temp;
// });

// console.log("table2", table2.flat());

// const table2 = table1.flatMap((value) => {
//   let temp = [];
//   for (let v of value) {
//     temp.push(v * 2);
//   }
//   return temp;
// });

// console.log("table2", table2);

// const newArr = myArr.flatMap((x) => {
//   let temp = [];
//   for (let i = 0; i < x.length; i++) {
//     temp.push(x[i] * 2);
//   }
//   return [temp];
// });

// console.log("newArr", newArr);

const fruits = ["Mango", "Cherry", "Banana", "Apple"];

let list = "";

// list.concat("<ul>")
list += "<ul>";

fruits.map(function (value) {
  list += `<li>${value}</li>`;
});

list += "</ul>";

document.getElementById("list").innerHTML = list;
