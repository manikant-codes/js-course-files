let n = 4;

let pattern = "";

// for (let row = 1; row <= n; row++) {
//   for (let col = 1; col <= n; col++) {
//     if (col <= n - row) {
//       pattern += " ";
//     } else {
//       pattern += "x";
//     }
//   }
//   pattern += "\n";
// }

// let temp = n;

// for (let row = 1; row <= n; row++) {
//   for (let col = 1; col <= n; col++) {
//     if (col <= n - temp) {
//       pattern += " ";
//     } else {
//       pattern += "x";
//     }
//   }
//   temp--;
//   pattern += "\n";
// }

// for (let row = 1; row <= n; row++) {
//   for (let col = 1; col <= n * 2 - 1; col++) {
//     if (col <= n - row || col >= n + row) {
//       pattern += " ";
//     } else {
//       pattern += "x";
//     }
//   }
//   pattern += "\n";
// }

// for (let row = 1; row <= n; row++) {
//   for (let col = 1; col <= n * 2 - 1; col++) {
//     let temp = n + 1 - row;
//     if (col <= n - temp || col >= n + temp) {
//       pattern += " ";
//     } else {
//       pattern += "x";
//     }
//   }
//   pattern += "\n";
// }

console.log(pattern);
