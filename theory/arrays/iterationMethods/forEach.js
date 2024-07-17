const ones = [1, 2, 3, 4, 5];

// let sum = 0;

// for (let i = 0; i < ones.length; i++) {
//   sum = sum + ones[i];
// }

// console.log(sum);

let sum = 0;

ones.forEach(function (value, index, array) {
  sum = sum + value;
});

console.log(sum);
