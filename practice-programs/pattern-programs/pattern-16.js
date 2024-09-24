let totalRows = 9;
if (totalRows % 2 === 0) {
  totalRows++;
}
const totalCols = totalRows;
const center = Math.ceil(totalRows / 2);

let pattern = "";

for (let row = 1, temp1 = 1, temp2 = totalRows; row <= totalRows; row++) {
  for (let col = 1; col <= totalCols; col++) {
    if (col <= temp1 || col >= temp2) {
      pattern += "* ";
    } else {
      pattern += "  ";
    }
  }
  if (row < center) {
    temp1++;
    temp2--;
  } else {
    temp1--;
    temp2++;
  }
  pattern += "\n";
}

console.log(pattern);
