// `
// *
// * *
// * * *
// * * * *
// `;

// `
// *
// * *
// * * *
// * * * *
// `;

// for (let row = 1; row <= NUBER_OF_ROWS; row++) {
//   for (let col = 1; col <= NUBER_OF_ROWS; col++) {
//     pattern = pattern + "* ";
//   }
//   pattern = pattern + "\n";
// }

// `
//       *
//     * *
//   * * *
// * * * *
// `;

// for (let row = 1; row <= NUBER_OF_ROWS; row++) {
//   for (let col = 1; col <= NUBER_OF_ROWS; col++) {
//     if (col <= NUBER_OF_ROWS - row) {
//       pattern = pattern + " ";
//     } else {
//       pattern = pattern + "*";
//     }
//   }
//   pattern = pattern + "\n";
// }

// `
//     *
//    ***
//   *****
//  *******
// *********
// `

// let N = 5;
// let pattern = "";

// for (let row = 1; row <= N; row++) {
//   for (let col = 1; col <= N + (N - 1); col++) {
//     if (col <= N - row || col >= N + row) {
//       pattern = pattern + " ";
//     } else {
//       pattern = pattern + "*";
//     }
//   }
//   pattern = pattern + "\n";
// }

// console.log(pattern);

// for (let row = N; row >= 1; row--) {
//   for (let col = 1; col <= row; col++) {
//     pattern = pattern + "*";
//   }
//   pattern = pattern + "\n";
// }

// `
// xxxxxxxx
//  xxxxxx
//   xxxx
//    xx
//    xx
//   xxxx
//  xxxxxx
// xxxxxxxx
// `;

// const N = 8;
// let center = Math.ceil(N / 2);
// let pattern = "";

// let temp = N;

// for (let row = 1; row <= N; row++) {
//   for (let col = 1; col <= N; col++) {
//     if (row <= center) {
//       if (col >= row && col <= temp) {
//         pattern += "x";
//       } else {
//         pattern += " ";
//       }
//     } else {
//       if (col >= temp && col <= row) {
//         pattern += "x";
//       } else {
//         pattern += " ";
//       }
//     }
//   }
//   temp--;
//   pattern += "\n";
// }

// console.log(pattern);
