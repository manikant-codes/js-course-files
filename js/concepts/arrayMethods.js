// JS me functions first class citizens hain.
// Yane jaha bhi aap variables aur exrpessions ka use kar sakete hoo waha function use kar sakte hoo.
// Callback function wo function hai jo aap kisi aur function me as an argument pass karte hoo.
// Jo function callback function ko as an argument recieve kare use Higher Order Function kahenge.

// for...in => object
// for...(o)f => array

// for (let n of numbers) {
//   console.log(n);
// }

// forEach

// numbers.forEach(function (value, index, array) {
//   console.log(value);
// });

// function add(a, b) {
//   console.log(a + b);
// }

// add(1, 2);

// function myForEach(fun) {
//   for (let i = 0; i < this.length; i++) {
//     fun(this[i]);
//   }
// }

// Array.prototype.myForEach = function (fun) {
//   for (let i = 0; i < this.length; i++) {
//     fun(this[i]);
//   }
// };

// numbers.myForEach(function (n) {
//   console.log(n);
// });

// numbers.forEach(function (value, index, array) {
//   console.log(value);
// });

// numbers.forEach(function (value, index, array) {
//   (value * 2).toString(2);
// });

// const numbers = [45, 4, 9, 16, 25];

// function myMap(callback) {
//   const temp = [];
//   for (let i = 0; i < numbers.length; i++) {
//     const newElement = callback(numbers[i], i, numbers);
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
