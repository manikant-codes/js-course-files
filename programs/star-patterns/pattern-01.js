// *
// * *
// * * *
// * * * *
// * * * * *

let pattern = "";

for (let row = 1; row <= 4; row++) {
  for (let col = 1; col <= row; col++) {
    pattern += "*";
  }
  pattern += "\n";
}

console.log(pattern);
