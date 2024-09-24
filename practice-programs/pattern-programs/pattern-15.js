const totalCols = 4;
const totalRows = totalCols * 2 - 1;

let pattern = "";

for (let row = 1, temp = 3; row <= totalRows; row++) {
  for (let col = 1; col <= totalCols; col++) {
    if (col <= temp) {
      pattern += "  ";
    } else {
      pattern += "* ";
    }
  }
  if (row < totalCols) {
    temp--;
  } else {
    temp++;
  }
  pattern += "\n";
}

console.log(pattern);
