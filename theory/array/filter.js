const ones = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const evens = [];

// for (let i = 0; i < ones.length; i++) {
//   if (ones[i] % 2 === 0) {
//     evens.push(ones[i]);
//   }
// }

// console.log(evens);

const evens = ones.filter(function (value, index, array) {
  if (value % 2 === 0) {
    return true;
  }
  return false;
});

const odds = ones.filter(function (value, index, array) {
  if (value % 2 !== 0) {
    return true;
  }
  return false;
});

const gtFive = ones.filter(function (value, index, array) {
  if (value > 5) {
    return true;
  }
  return false;
});

console.log(evens);
console.log(odds);
console.log(gtFive);
