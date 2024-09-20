const totalColumns = 7;
const totalRows = totalColumns * 2 - 1;

let pattern = ``;

for (let row = 1, temp = totalColumns; row <= totalRows; row++) {
  for (let col = 1; col <= temp; col++) {
    pattern += "* ";
  }
  if (row < totalColumns) {
    temp--;
  } else {
    temp++;
  }
  pattern += "\n";
}

console.log(pattern);
