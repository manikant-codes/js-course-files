//       *
//     * * *
//   * * * * *
// * * * * * * *
//   * * * * *
//     * * *
//       *

const totalRows = 13;
const totalColumns = totalRows;
const centerPoint = Math.ceil(totalRows / 2);

let pattern = "";

let counter = 1;

for (let row = 1; row <= totalRows; row++) {
  for (let col = 1; col <= totalColumns; col++) {
    if (col <= centerPoint - counter || col >= centerPoint + counter) {
      pattern += " ";
    } else {
      pattern += "*";
    }
  }
  if (row < centerPoint) {
    counter++;
  } else {
    counter--;
  }
  pattern += "\n";
}

console.log(pattern);
