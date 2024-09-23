const totalRows = 8;
const totalColumns = totalRows * 2 - 1;

let pattern = "";

for (let row = 1, temp = totalColumns; row <= totalRows; row++) {
  for (let col = 1; col <= totalColumns; col++) {
    if (row === 1) {
      pattern += `* `;
    } else {
      if (col === row || col === temp) {
        pattern += `* `;
      } else {
        pattern += "  ";
      }
    }
  }
  temp--;
  pattern += "\n";
}

console.log(pattern);
