const points = [40, 100, 89, 5, 25, 10];
const points2 = [40, 1, 9, 50, 2, 510];
const points3 = [4, 1, 19, 15, 20, 5];

function getMinMax(array) {
  let min = array[0];
  let max = array[0];

  for (let i = 1; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    }
    if (array[i] > max) {
      max = array[i];
    }
  }

  return { min: min, max: max };
}

console.log("min-max", getMinMax(points));
console.log("min-max", getMinMax(points2));
console.log("min-max", getMinMax(points3));
