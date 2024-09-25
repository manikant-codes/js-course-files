// Closure: function + uske parent scope ke wo variables jinka wo function use kar raha hoo, is combination ko closure kehte hai.
// Closures ham private variables banane ke liye use karte hai, jinhe ham kahi se bhi access/modify kar sakte.

debugger;

function initCount() {
  let count = 0;
  function increase() {
    count++;
    return count;
  }
  function decrease() {
    count--;
    return count;
  }

  return { increase, decrease };
}

const { increase, decrease } = initCount();

const c1 = increase();
const c2 = increase();
const c3 = increase();
const c4 = decrease();

console.log("c1", c1);
console.log("c2", c2);
console.log("c3", c3);
console.log("c4", c4);
console.log("count", count);
