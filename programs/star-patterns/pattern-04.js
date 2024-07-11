// * * * *
//   * * *
//     * *
//       *

let pattern = "";

for (let row = 1; row <= 4; row++) {
  for (let col = 1; col <= 4; col++) {
    if (col <= row - 1) {
      pattern += " ";
    } else {
      pattern += "*";
    }
  }
  pattern += "\n";
}

console.log(pattern);
