let totalRows = 16;
if (totalRows % 2 === 0) {
  totalRows++;
}
const totalColumns = totalRows;
const center = Math.ceil(totalRows / 2);

let pattern = "";

for (let row = 1, temp = 1; row <= totalRows; row++) {
  for (let col = 1; col <= totalColumns; col++) {
    if (col === center + 1 - temp || col === center - 1 + temp) {
      pattern += `* `;
    } else {
      pattern += "  ";
    }
  }
  if (row < center) {
    temp++;
  } else {
    temp--;
  }
  pattern += "\n";
}

console.log(pattern);
