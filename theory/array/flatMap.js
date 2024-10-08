const ones = [[1], [2], [3], [4], [5]];

const twos = ones.flatMap(function (value, index, array) {
  return value * 2;
});

console.log(twos);
