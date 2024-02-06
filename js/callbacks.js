const nums = [1, 2, 3, 4, 5];

// const tbl2 = [];
// const tbl3 = [];

// for (let i = 0; i < tbl1.length; i++) {
//   if (tbl1[i] % 2 === 0) {
//     tbl2.push(tbl1[i] * 2);
//   }
// }

// for (let i = 0; i < tbl1.length; i++) {
//   if (tbl1[i] % 2 !== 0) {
//     tbl3.push(tbl1[i] * 3);
//   }
// }

// function calculate(arr, callback) {
//   const temp = [];
//   for (let i = 0; i < arr.length; i++) {
//     const result = callback(arr[i], i, arr);
//     temp.push(result);
//   }
//   return temp;
// }

// const tbl2 = calculate(nums, function (value, index, array) {
//   if (value % 2 === 0) {
//     return value * 2;
//   }
// });

// const tbl3 = calculate(nums, function (value, index, array) {
//   if (value % 2 !== 0) {
//     return value * 3;
//   }
// });

// const tbl2 = nums.map(function (value, index, array) {
//   if (value % 2 === 0) {
//     return value * 2;
//   }
// });

// const tbl3 = nums.map(function (value, index, array) {
//   if (value % 2 !== 0) {
//     return value * 3;
//   }
// });
