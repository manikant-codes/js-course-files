// var arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// var arr = [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12],
//   [13, 14, 15, 16],
// ];

// const rows = 1000;
// const cols = 1000;
// const arr = new Array(rows);

// for (let i = 0; i < rows; i++) {
//   arr[i] = new Array(cols);
//   for (let j = 0; j < cols; j++) {
//     arr[i][j] = Math.floor(Math.random() * 1000);
//   }
// }

// var arr = [
//   [1, 2, 3, 4, 5],
//   [5, 6, 7, 8, 9],
//   [9, 10, 11, 12, 13],
//   [13, 14, 15, 16, 17],
//   [13, 14, 15, 16, 18],
// ];

// let sumLR = 0;
// let sumRL = 0;

// for (let row = 0; row < arr.length; row++) {
//   for (let col = 0; col < arr.length; col++) {
//     if (row === col) {
//       sumLR += arr[row][col];
//     }
//     if (col === arr.length - row - 1) {
//       sumRL += arr[row][col];
//     }
//   }
// }

// console.log("sumLR", sumLR);
// console.log("sumRL", sumRL);
