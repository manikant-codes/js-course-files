// *
// * *
// * * *
// * * * *
// * * * * *

let pattern = "";

let n = 5;

for (let row = 0; row < n; row++) {
  for (let col = 0; col <= row; col++) {
    pattern += "*";
  }
  pattern += "\n";
}

console.log(pattern);
