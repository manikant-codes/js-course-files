// const arr = [2, "hello", false, { msg: "hello" }, [1, 3, 5]];
// const obj = { name: 2, 1: 4, 2: 6, 3: 8 };
// const arr = [2];
// const arr2 = new Array(2);

// const arr = ["asd"];
// const arr2 = new Array("asd");

// console.log(arr, arr2);

// const arr2 = new Array(4);
// arr[3] = 4;
// arr[4] = 8;
// arr[0] = 100;

// console.log("arr", arr);
// console.log("obj", obj);

// console.log("arr", arr[0]);
// console.log("obj", obj[0]);

// for (let index = 0; index < arr.length; index++) {
//   console.log(arr[index]);
// }

// for (const value of arr) {
//   console.log(value);
// }

// console.log(arr[arr.length - 1]);

// let fruits = ["Banana", "Orange", "Apple", "Mango"];

// let arr = ["Banana", "Orange", "Apple", "Mango"];

function add(n1, n2) {
  return n1 + n2;
}

// const n3 = 10;

// const r1 = add(n3, 5);
// const r2 = add(8, 9);

// console.log("r1", r1);
// console.log("r2", r2);

// let arr = [1, 2, 11, 3, 23, 5];

// console.log("before sorting", arr);

// arr.sort(function (a, b) {
//   return b - a;
// });

// console.log("after sorting", arr);

// const points = [40, 100, 1, 5, 25, 10];

// console.log("before sorting points", points);

// for (let i = points.length - 1; i > 0; i--) {
//   let j = Math.floor(Math.random() * (i + 1));
//   let k = points[i];
//   points[i] = points[j];
//   points[j] = k;
// }

// console.log("after sorting points", points);

// const cars = [
//   { type: "Volvo", year: 2016 },
//   { type: "Saab", year: 2001 },
//   { type: "BMW", year: 2010 },
// ];

// console.log("cars before sorting", cars);

// const carsSorted = cars.toSorted(function (a, b) {
//   if (a.type.toLowerCase() > b.type.toLowerCase()) {
//     return 1;
//   } else if (a.type.toLowerCase() === b.type.toLowerCase()) {
//     return 0;
//   }
//   return -1;
// });

// console.log("cars after sorting", carsSorted);

// const points = [40, 100, 1, 5, 25, 10];

// let min = points[0];
// let max = points[0];

// for (let i = 0; i < points.length; i++) {
//   if (points[i] < min) {
//     min = points[i];
//   }
//   if (points[i] > max) {
//     max = points[i];
//   }
// }

// console.log(min, max);

const points = [1, 5, 40, 100, 25, 10];

console.log("before", points);

for (let i = 0; i < points.length; i++) {
  for (let j = i + 1; j < points.length; j++) {
    if (points[j] < points[i]) {
      let temp = points[i]; // 100
      points[i] = points[j];
      points[j] = temp;
    }
  }
}

console.log("after", points);
