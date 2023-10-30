// let count = 0;

// while (somecondition !== false) {
//   console.log("Hello World!");
//   count++;
// }

// do {
//   console.log("Hello World!");
//   count++;
// } while (count < 10);

// if (condition) {
//   if (condition) {
//     if (condition) {
//     } else if(condition) {
//       if(condition) {

//       }
//     }
//   }
// }

// *
// * *
// * * *
// * * * *
// * * * * *

let pattern = "";

for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    pattern = pattern + "* ";
  }
  pattern = pattern + "\n";
}

console.log(pattern);
