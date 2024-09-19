//       *
//     * *
//   * * *
// * * * *

const totalRows = 10;

let pattern = "";

for (let row = 1; row <= totalRows; row++) {
  for (let col = 1; col <= totalRows; col++) {
    if (col <= totalRows - row) {
      pattern += "  ";
    } else {
      pattern += "* ";
    }
  }
  pattern += "\n";
}

console.log(pattern);
