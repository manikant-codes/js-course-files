// while (condition) {
//   // some code
// }

// do {
//   // some code
// } while (condition);

// for() {}

// let i = 1;

// while (i <= 5) {
//   console.log(i);
//   i++;
// }

// debugger;

// for (let i = 1; i >= -5; i--) {
//   console.log(i);
// }

// let i = 1;

// for (;;) {
//   console.log(i);
//   if (i >= 5) {
//     break;
//   }
//   i++;
// }

let pattern = ``;

// for (let row = 1; row <= 4; row++) {
//   for (let col = 1; col <= row; col++) {
//     pattern += "x";
//   }
//   pattern += "\n";
// }

for (let row = 1; row <= 4; row++) {
  for (let col = 1; col <= 5 - row; col++) {
    pattern += "x";
  }
  pattern += "\n";
}

console.log(pattern);

// console.log("xx");
// console.log("xxx");
// console.log("xxxx");
