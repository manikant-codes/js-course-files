// reduce method har array element pe hamne jo function use paas kiya hai wo run karta hai, aur pure array ko ek single value me reduce kar ke hame deta hai.

// reduce method left ro right kaam karta hai, agar right to left kaam karana hoo to uske liye reduceRight method hai.

// reduce method original array me koi changes nahi karta.

// reduce method do arguments leta hai ek to callback function, aur dusra callback function me jo accumulator hai uski initial value.

// reduce method hamare function ko 4 arguments pass karta hai:

// 1. accumulator: Isme pichle iteration (turn/round) ki value store hoti hai.
// 2. value: Is turn me jis element ka number aaya ho wo element ki value isme store hoti hai.
// 3. index: value me jo element store hua hai uska index.
// 4. array: Jis array pe hamne reduce method call kiya hoo wo array.

// const numbers = [45, 4, 9, 16, 25];

// const users = [
//   { firstName: "john", lastName: "Biden", age: 26 },
//   { firstName: "jimmy", lastName: "cob", age: 75 },
//   { firstName: "sam", lastName: "lewis", age: 50 },
//   { firstName: "Ronald", lastName: "Mathew", age: 26 },
// ];

// [
//   {
//     users: [
//       { firstName: "john", lastName: "Biden" },
//       { firstName: "Ronald", lastName: "Mathew" },
//     ],
//     age: 26,
//   },
// ];

// function myFunction(collector, value, index, array) {
//   return collector + value;
// }

// let sum = numbers.reduce(myFunction, 0);

// console.log(
//   users.map((value) => {
//     return value.firstName + " " + value.lastName;
//   })
// );

// const res = users
//   .map((v) => {
//     return { age: v.age, users: [{ firstName: v.firstName }] };
//   })
//   .reduce((acc, value) => {
//     const temp = {};
//     for (const a of acc) {
//       if (a.age === value.age) {
//         a.users = [...a.users, { firstName: value.firstName }];
//       }
//     }
//     return acc.push();
//   }, []);

// console.log("res", res);

// const numbers = [45, 4, 9, 16, 25];

// numbers.reduce(function (accumulator, value, index, array) {}, 0);

// const sum = numbers.reduce(function (sum, value, index, array) {
//   return sum * value;
// }, 0);
// const product = numbers.reduce(function (product, value, index, array) {
//   return product * value;
// }, 1);

// const result = numbers.reduce(
//   function (collector, value, index, array) {
//     return { sum: collector.sum + value, product: collector.product * value };
//   },
//   { sum: 0, product: 1 }
// );

// const result = numbers.reduce(
//   function (acc, value, index, array) {
//     return { sum: acc.sum + value, product: acc.product * value };
//   },
//   { sum: 0, product: 1 }
// );

// console.log(result);

const numbers = [45, 4, 9, 16, 25];

// let collector = { sum: 0, product: 1 };
// let product = 1;

// for (const n of numbers) {
//   collector = { sum: collector.sum + n, product: collector.product * n };
// }

// for (const n of numbers) {
//   product = product * n;
// }

// console.log(sum);
// console.log(product);
