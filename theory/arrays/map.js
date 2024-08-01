// const twos = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

const ones = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const output = document.getElementById("output");

// const twos = ones.map(function (value, index, array) {
//   return value * 2;
// });

// const threes = ones.map(function (value, index, array) {
//   return value * 3;
// });

const paras = ones.map(function (value, index, array) {
  return "<p>" + value * 4 + "</p>";
});

output.innerHTML = paras.join("");

console.log(paras);
