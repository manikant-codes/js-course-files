// Closure ek function aur us function ke parent ke un variables ka combination hai jinka wo function use kar raha hoo.

// Closures variable ko private karne ke kaam me aate hai. Private yane aap un variable ko function ke bahar nahi access kar sakte.

// function increase() {
//   let count = 0;
//   count++;
//   return count;
// }

function setupCounter() {
  let count = 0;
  function increase() {
    count++;
    return count;
  }
  return increase;
}

const increase = setupCounter();

const a = increase();
const b = increase();
const c = increase();

console.log(a);
console.log(b);
console.log(c);

// console.log("a", a);
// console.log("b", b);
// console.log("c", c);
