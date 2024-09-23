let totalRows = 7;
if (totalRows % 2 === 0) {
  totalRows++;
}
const totalColumns = totalRows;
const center = Math.ceil(totalRows / 2);

let pattern = "";

for (let row = 1, tempA = 1, tempB = totalColumns; row <= totalRows; row++) {
  for (let col = 1; col <= totalColumns; col++) {
    if (row === 1 || row === totalRows) {
      pattern += `* `;
    } else {
      if (col === tempA || col === tempB) {
        pattern += `* `;
      } else {
        pattern += "  ";
      }
    }
  }
  if (row < center) {
    tempA++;
    tempB--;
  } else {
    tempA--;
    tempB++;
  }
  pattern += "\n";
}

console.log(pattern);
