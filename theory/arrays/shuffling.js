const numbers = [10, 45, 56, 23, 28, 49, 1, 22, 36, 7];

numbers.sort(function (a, b) {
  return 0.5 - Math.random();
});

console.log("numbers", numbers);
