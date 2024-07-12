//       *
//     * * *
//   * * * * *
// * * * * * * *

let totalRows = 50;
let totalCols = totalRows * 2 - 1;

let pattern = "";

for (let row = 1; row <= totalRows; row++) {
  for (let col = 1; col <= totalCols; col++) {
    if (col >= totalRows - (row - 1) && col <= totalRows + (row - 1)) {
      pattern += "*";
    } else {
      pattern += " ";
    }
  }
  pattern += "\n";
}

console.log(pattern);
