const totalRows = 4;
const totalCols = totalRows * 2 - 1;

let pattern = "";

for (let row = 1, temp = totalRows; row <= totalRows; row++) {
  for (let col = 1; col <= totalCols; col++) {
    if (col >= row && col <= temp) {
      pattern += "* ";
    } else {
      pattern += "  ";
    }
  }
  temp++;
  pattern += "\n";
}

console.log(pattern);
