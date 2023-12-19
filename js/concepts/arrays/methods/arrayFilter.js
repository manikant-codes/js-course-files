// filter method ek naya array return karta hai un array elements ke saath jinho ne haamare diye hue test ko paas kiya ho (yane jinke liye hamne true return karaya hoo).

// Jis value ke liye true return karaoge wo naye array me store hoga.

// Jis value ke liye false return karaoge wo naye array me nahi store hoga.

// Agar kuch nahi return karao ge to empty array milega.

// Ye method original array me koi changes nahi karta.

// function myMap(callbackFn, array) {
//   const result = [];
//   for (const a of array) {
//     const res = callbackFn(a);
//     result.push(res);
//   }
//   return result;
// }

// for (const n of numbers) {
//   result.push(n / 2);
// }

// for (const n of numbers) {
//   result1.push(n - 2);
// }

// for (const n of numbers) {
//   result2.push(2 * Math.PI * n);
// }

// console.log(
//   myMap(function (value) {
//     return value / 2;
//   }, array)
// );
// console.log(
//   myMap(function (value) {
//     return Math.PI * value * value;
//   }, array)
// );
// console.log(
//   myMap(function (value) {
//     return Math.PI * value * 2;
//   }, array)
// );

// const result = numbers.map(function (value) {
//   if (value !== 4) {
//     return value / 2;
//   }
// });

// console.log(result);

// const numbers = [45, 4, 9, 16, 25];

// const over18 = numbers.filter(function (value) {
//   return 4;
// });

// console.log(over18);

// function myFunction(value, index, array) {
//   return value < 18;
// }

// function myFilter(callbackFn, array) {
//   const temp = [];
//   for (let i = 0; i < array.length; i++) {
//     const result = callbackFn(array[i], i, array);
//     if (result) {
//       temp.push(array[i]);
//     }
//   }

//   return temp;
// }

// const over18 = myFilter(myFunction, numbers);

// console.log(over18);
