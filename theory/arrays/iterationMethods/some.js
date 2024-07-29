const numbers = [45, 4, 9, 16, 25];

const pass = numbers.some(function (value, index, array) {
  if (value > 44) {
    return true;
  }
  return false;
});

console.log("pass", pass);
