//            *
//          * *
//        * * *
//      * * * *
//    * * * * *

let pattern = "";

for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    if (j >= 5 - 1 - i) {
      pattern += "*";
    } else {
      pattern += " ";
    }
  }
  pattern += "\n";
}

console.log(pattern);
