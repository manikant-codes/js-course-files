// * * * *
// * * *
// * *
// *

let pattern = "";

for (let row = 4; row >= 1; row--) {
  for (let col = 1; col <= row; col++) {
    pattern += "*";
  }
  pattern += "\n";
}

console.log(pattern);
