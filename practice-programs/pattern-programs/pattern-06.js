const totalRows = 7;
const totalColumns = totalRows * 2 - 1;

let pattern = ``;

// for (let row = 1; row <= totalRows; row++) {
//   for (let col = 1; col <= totalColumns; col++) {
//     if (col < totalRows - (row - 1) || col > totalRows + (row - 1)) {
//       pattern += "  ";
//     } else {
//       pattern += "* ";
//     }
//   }
//   pattern += "\n";
// }

for (let row = 1; row <= totalRows; row++) {
  for (let col = 1; col <= totalColumns; col++) {
    if (col >= totalRows + 1 - row && col <= totalRows - 1 + row) {
      pattern += "* ";
    } else {
      pattern += "  ";
    }
  }
  pattern += "\n";
}

console.log(pattern);
