const points = [5, 100, 10, 1, 25, 40];

// const index1 = Math.floor(Math.random() * points.length);
// const index2 = Math.floor(Math.random() * points.length);

// const temp = points[index1];
// points[index1] = points[index2];
// points[index1] = temp;

for (let i = points.length - 1; i > 0; i--) {
  let randomIndex = Math.floor(Math.random() * (i + 1));
  let temp = points[i];
  points[i] = points[randomIndex];
  points[randomIndex] = temp;
}
