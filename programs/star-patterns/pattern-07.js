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

let str = "";

let counter = 1;

for (let row = 1; row <= totalRows; row++) {
  for (let col = 1; col <= totalColumns; col++) {
    if (col <= centerPoint - counter || col >= centerPoint + counter) {
      str += " ";
    } else {
      str += "*";
    }
  }
  if (row < centerPoint) {
    counter++;
  } else {
    counter--;
  }
  str += "\n";
}

console.log(str);
