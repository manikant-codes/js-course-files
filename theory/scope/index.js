const a = 10;
const b = 20;

function add() {
  return a + b;
}

function multiply() {
  const x = 5;
  const y = 2;
  return x * y;
}

console.log("x", x);
console.log("y", y);

const sum = add();
const product = multiply();

console.log("sum", sum);
console.log("product", multiply());
