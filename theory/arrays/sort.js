const points = [40, 100, 1, 5, 25, 10];

// for (let a = 0; a < points.length; a++) {
//   for (let b = a + 1; b < points.length; b++) {
//     if (points[b] - points[a] > 0) {
//       const safety = points[a];
//       points[a] = points[b];
//       points[b] = safety;
//     }
//   }
// }

points.sort(function (a, b) {
  return b - a;
});

// console.log(points);
