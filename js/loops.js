// let count = 0;

// debugger;

// while (count < 3) {
//   console.log(count);
//   count++;
// }

// do {
//   console.log(count);
//   count++;
// } while (count < 3);

// for (;;) {
//   if (count === 3) {
//     break;
//   }
//   console.log(count);
//   count++;
// }

for (let count = 1; count <= 10; count++) {
  if (count === 5) {
    continue;
  }
  console.log(`2 x ${count} = ${2 * count}`);
}
