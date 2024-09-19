const totalRows = 4;

let pattern = ``;

for (let row = 1; row <= totalRows; row++) {
  for (let col = 1; col <= totalRows + 1 - row; col++) {
    pattern += "* ";
  }
  pattern += "\n";
}

for (let row = 2; row <= totalRows; row++) {
  for (let col = 1; col <= row; col++) {
    pattern += "* ";
  }
  pattern += "\n";
}

console.log(pattern);
