// forEach ek built in array method hai.
// Wo ek function leta hai as an argument.
// JS me functions 1st class citizens hai. Ke jaha kahi bhi variables/expressions ka use karsakte ho waha function ka use karsakte hoo.
// forEach us function ko 3 arguments deta hai.
// 1. value: Wo array element store hota hai jiska abhi loop me number hai / turn hai / (vaaro che)
// 2. index: Jis element ka turn hai, uska array me position/index.
// 3. array: Jis array pe forEach chalaya hai wo.
// forEach jo fn hamen use pass kiya hai use bari bari / turn by turn har array (jis array pe call liya ho) element pe call karta hai.
// forEach method undefined return karta hai.

const table1 = [1, 2, 3, 4, 5];

// const temp = [];

// function transform(value, index, array) {
//   temp.push(value * 2);
// }

// const result = table1.forEach(transform);

// console.log(result);

// table1.forEach(function (value, index, array) {});
// table1.forEach(() => {});

// function add(callbackFn) {
//   callbackFn(4, 5);
// }

// function calculate(a, b) {
//   console.log(a + b);
// }

// add(calculate);

// add(function (a, b) {
//   console.log(a + b);
// });

// const a = function () {
//   console.log("Hello");
// };

// a();

// const temp = [];
// const temp1 = [];
// const temp2 = [];

// function myForEach(callbackFn, array) {
//   for (let i = 0; i < array.length; i++) {
//     callbackFn(array[i], i, array);
//   }
// }

// myForEach((value, index, array) => {
//   temp.push(2 * value);
// }, table1);

// myForEach((value, index, array) => {
//   temp1.push(3 * value);
// }, table1);

// myForEach((value, index, array) => {
//   temp2.push(2 * Math.PI * value );
// }, table1);

// console.log(temp, temp1, temp2);
