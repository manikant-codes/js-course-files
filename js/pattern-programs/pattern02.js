//            *
//          * *
//        * * *
//      * * * *
//    * * * * *

let pattern = "";

let n = 5;

for (let row = 1; row <= n; row++) {
  for (let col = 1; col <= n; col++) {
    if (col <= n - row) {
      pattern += " ";
    } else {
      pattern += "*";
    }
  }
  pattern += "\n";
}

console.log(pattern);
