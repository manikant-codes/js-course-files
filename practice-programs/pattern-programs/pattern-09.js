let totalColumns = 10;
if (totalColumns % 2 === 0) {
  totalColumns++;
}
const totalRows = totalColumns;
const center = Math.ceil(totalRows / 2);

let pattern = ``;

for (let row = 1, temp = totalRows; row <= totalRows; row++) {
  for (let col = 1; col <= totalColumns; col++) {
    if (row <= center) {
      if (col >= row && col <= temp) {
        pattern += "* ";
      } else {
        pattern += "  ";
      }
    } else {
      if (col >= temp && col <= row) {
        pattern += "* ";
      } else {
        pattern += "  ";
      }
    }
  }
  temp--;
  pattern += "\n";
}

console.log(pattern);
