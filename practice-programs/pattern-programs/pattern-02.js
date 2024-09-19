// * * * *
// * * *
// * *
// *

// console.log("* * * *");
// console.log("* * *");
// console.log("* *");
// console.log("*");

const totalRows = 10;

let pattern = "";

for (let row = 1; row <= totalRows; row++) {
  for (let col = 1; col <= totalRows + 1 - row; col++) {
    pattern += "* ";
  }
  pattern += "\n";
}

console.log(pattern);
