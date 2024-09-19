const totalRows = 20;
const totalColumns = totalRows * 2 - 1;

let pattern = ``;

for (let row = 1; row <= totalRows; row++) {
  for (let col = 1; col <= totalColumns; col++) {
    if (
      col < totalRows - (totalRows - row) ||
      col > totalRows + (totalRows - row)
    ) {
      pattern += "  ";
    } else {
      pattern += "* ";
    }
  }
  pattern += "\n";
}

console.log(pattern);
