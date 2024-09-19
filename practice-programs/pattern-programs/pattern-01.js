// *
// * *
// * * *
// * * * *

// console.log("*");
// console.log("* *");
// console.log("* * *");
// console.log("* * * *");

const totalRows = 4;

let pattern = ``;

for (let row = 1; row <= totalRows; row++) {
  for (let col = 1; col <= row; col++) {
    pattern += "* ";
  }
  pattern += "\n";
}

console.log(pattern);
