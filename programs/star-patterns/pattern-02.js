// * * * *
// * * *
// * *
// *

let n = 4;

let pattern = "";

for (let row = n; row >= 1; row--) {
  for (let col = 1; col <= row; col++) {
    pattern += "*";
  }
  pattern += "\n";
}

console.log(pattern);
