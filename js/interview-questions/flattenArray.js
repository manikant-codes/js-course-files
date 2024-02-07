const arr = [
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
];

const temp = [];
let count = 0;

for (let i = 0; i < arr.length; i++) {
  // for (let j = 0; j < arr[i].length; j++) {
  temp[count++] = arr[i][0];
  temp[count++] = arr[i][1];
  temp[count++] = arr[i][2];
  // temp[count] = arr[i][j];
  // }
}

console.log(temp);
