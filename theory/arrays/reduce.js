const points = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let total = 0;

// points.forEach(function (value, index, array) {
//   total = total + value;
// });

// console.log("total", total);

// const sum = points.reduce(function (total, value, index, array) {
//   if (value <= 5) {
//     return total + value;
//   } else {
//     return total;
//   }
// }, 0);

// const sum = points.reduceRight(function (total, value, index, array) {
//   if (value <= 5) {
//     return total;
//   } else {
//     return total + value;
//   }
// }, 0);

// const sum = points.reduce(function (total, value, index, array) {
//   return total + value;
// }, 0);

const sum = points.reduce(function (jama, value, index, array) {
  return { ...jama, [value - 1]: value };
}, {});

console.log("sum", sum);
