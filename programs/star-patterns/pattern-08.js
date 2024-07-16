let pattern = "";

const totalRow = 8;
const totalCol = totalRow + 1;

let rowCenter = totalRow / 2;
const centerRow = totalRow / 2 - 1;
const centerCol = Math.ceil(totalCol / 2);

console.log("totalRow", totalRow);
console.log("totalCol", totalCol);
console.log("centerRow", centerRow);
console.log("centerCol", centerCol);
console.log("rowCenter", rowCenter);

let counter1 = centerRow - 1;

for (let row = 1; row <= totalRow; row++) {
  for (let col = 1; col <= totalCol; col++) {
    if (row === 1) {
      if (
        (col > 1 && col <= centerCol - counter1) ||
        (col < totalCol && col >= centerCol + counter1)
      ) {
        pattern += "* ";
      } else {
        pattern += "  ";
      }
      continue;
    }
    if (row <= centerRow) {
      if (
        col === centerCol - counter1 ||
        col === centerCol + counter1 ||
        col === 1 ||
        col === totalCol
      ) {
        pattern += "* ";
      } else {
        pattern += "  ";
      }
    } else {
      if (col === centerCol - rowCenter || col === centerCol + rowCenter) {
        pattern += "* ";
      } else {
        pattern += "  ";
      }
    }
  }
  pattern += "\n";
  if (row > centerRow) {
    rowCenter--;
  } else {
    counter1--;
  }
}

console.log(pattern);
