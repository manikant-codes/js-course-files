const points = [5, 25, 10, 40, 1, 100];

for (let i = points.length - 1; i > 0; i--) {
  let j = Math.floor(Math.random() * (i + 1));
  let temp = points[i];
  points[i] = points[j];
  points[j] = temp;
}
