let pattern = "";

const totalRow = 18;
let totalCol;

const isRowEven = totalRow % 2 === 0;

if (isRowEven) {
  totalCol = totalRow + 1;
} else {
  totalCol = totalRow + 2;
}

let centerRow;

if (isRowEven) {
  centerRow = totalRow / 2 - 1;
} else {
  centerRow = Math.floor(totalRow / 2) - 1;
}

const centerCol = Math.ceil(totalCol / 2);

let rowCenter;
if (isRowEven) {
  rowCenter = totalRow / 2;
} else {
  rowCenter = Math.floor(totalRow / 2) + 1;
}

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
