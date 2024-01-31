function* generator() {
  //   console.log("A");
  //   yield 1;
  //   console.log("B");
  //   console.log("C");
  //   yield 2;
  //   console.log("D");
  //   console.log("E");
  //   yield 3;
  //   console.log("F");
  let id = 0;
  while (true) {
    id++;
    yield id;
  }
}

const myGenerator = generator();
const myGenerator2 = generator();

console.log(myGenerator.next());
console.log(myGenerator.throw(new Error("Error")));
console.log(myGenerator.next());

// while (true) {
//   const obj = myGenerator.next();
//   if (obj.done === true) {
//     break;
//   }
//   console.log(obj.value);
// }

// for (m of myGenerator) {
//   console.log(m);
// }

// console.log(myGenerator.next());
// console.log(myGenerator.next());
// console.log(myGenerator.next());
// console.log(myGenerator.next());
// console.log(myGenerator.next());
