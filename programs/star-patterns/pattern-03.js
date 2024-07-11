//       *
//     * *
//   * * *
// * * * *

let pattern = "";

for (let row = 1; row <= 4; row++) {
  for (let col = 1; col <= 4; col++) {
    if (col <= 4 - row) {
      pattern += " ";
    } else {
      pattern += "*";
    }
  }
  pattern += "\n";
}

console.log(pattern);
