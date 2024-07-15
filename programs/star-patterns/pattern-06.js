// * * * * * * *
//   * * * * *
//     * * *
//       *

const totalRows = 20;
const totalColumns = totalRows * 2 - 1;

let str = "";

for (let row = 1; row <= totalRows; row++) {
  for (let col = 1; col <= totalColumns; col++) {
    if (col >= row && col <= totalColumns + 1 - row) {
      str += "*";
    } else {
      str += " ";
    }
  }
  str += "\n";
}

console.log(str);
