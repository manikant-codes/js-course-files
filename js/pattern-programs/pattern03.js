//     *
//    ***
//   *****
//  *******
// *********

let pattern = "";

let n = 11;

for (let row = 1; row <= n; row++) {
  for (let col = 1; col <= n * 2 - 1; col++) {
    if (col <= n - row || col >= n + row) {
      pattern += " ";
    } else {
      pattern += "*";
    }
  }
  pattern += "\n";
}

document.getElementById("demo").innerHTML = pattern;

// console.log(pattern);
