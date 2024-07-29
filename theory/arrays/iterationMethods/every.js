const numbers = [45, 4, 9, 16, 25];

const pass = numbers.every(function (value, index, array) {
  if (value > 5) {
    return true;
  }
  return false;
});

console.log("pass", pass);
