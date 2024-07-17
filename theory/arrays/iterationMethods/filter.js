const ones = [1, 2, 3, 4, 5];

// const filtered = [];

// for (let i = 0; i < ones.length; i++) {
//   if (ones[i] !== 3 && ones[i] !== 5) {
//     filtered.push(ones[i]);
//   }
// }

// console.log(temp);

const filtered = ones.filter(function (value, index, array) {
  //   if (value === 3 || value === 5) {
  //     return false;
  //   }
  //   return true;
  if (value !== 3 && value !== 5) {
    return true;
  }
  return false;
});

console.log(filtered);
