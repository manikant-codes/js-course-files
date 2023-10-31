//     *
//    ***
//   *****
//  *******
// *********

let pattern = "";

let n = 5;

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n * 2 - 1; j++) {
    if (j <= n - i || j >= n + i) {
      pattern += " ";
    } else {
      pattern += "*";
    }
  }
  pattern += "\n";
}

console.log(pattern);
