// The sort() method sorts an array alphabetically.
// By default, the sort() function sorts values as strings.
// This works well for strings ("Apple" comes before "Banana").
// However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".
// Because of this, the sort() method will produce incorrect result when sorting numbers.
// You can fix this by providing a compare function.



// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.sort();

// Note it changes the original array.
// console.log(fruits);

// To sort in descending order.
// This too changes the original array.
// fruits.reverse();
// console.log(fruits);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const points = [40, 100, 1, 5, 25, 10];

// points.sort(function (a, b) {
//   return a - b;
// });

// for (let i = points.length - 1; i > 0; i--) {
//   let j = Math.floor(Math.random() * (i + 1));
//   let k = points[i];
//   points[i] = points[j];
//   points[j] = k;
// }

// function add(a, b) {
//   return a + b;
// }

// var add = function (a, b) {
//   return a + b;
// };

// const add = (a, b) => a + b;

// const print = function (name) {
//   return name;
// };

// const print = (name) => name;

// console.log(add(4, 5));

const points = [40, 100, 1, 5, 25, 10];
console.log(points);
// points.sort((a, b) => {
//   return b - a;
// });

// Yaha pe mySort higher order function hai aur jo function use mil raha hai wo callback function hai.
// const mySort = (callbackFn, array) => {
//   for (let i = array.length - 1; i > 0; i--) {
//     for(let j = i; j < array.le) 
//     let j = Math.floor(Math.random() * (i + 1));
//     let k = array[i];
//     array[i] = array[j];
//     array[j] = k;
//   }
// };

console.log(points);
