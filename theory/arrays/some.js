const points = [40, 100, 1, 5, 25, 10];

const result = points.some(function (value, index, array) {
  if (value > 110) {
    return true;
  }
  return false;
});

console.log("result", result);
