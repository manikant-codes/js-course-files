const totalRows = 4;
const totalColumns = totalRows * 2 - 1;

let pattern = "";

for (let row = 1; row <= totalRows; row++) {
  for (let col = 1; col <= totalColumns; col++) {
    if (row === totalRows) {
      pattern += `* `;
    } else {
      if (col === totalRows + 1 - row || col === totalRows - 1 + row) {
        pattern += `* `;
      } else {
        pattern += "  ";
      }
    }
  }
  pattern += "\n";
}

console.log(pattern);
