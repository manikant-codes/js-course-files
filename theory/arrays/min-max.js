const points = [40, 100, 1, 5, 25, 10];

// points.sort(function (a, b) {
//   return a - b;
// });

// console.log(points[0]);
// console.log(points[points.length - 1]);

function getMinMax(points) {
  let min = points[0];
  let max = points[0];

  for (let i = 0; i < points.length; i++) {
    if (points[i] < min) {
      min = points[i];
    }
    if (points[i] > max) {
      max = points[i];
    }
  }

  console.log(min, max);
}

getMinMax(points);
