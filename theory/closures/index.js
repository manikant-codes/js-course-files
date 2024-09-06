// Closure ek function hai jiske paas uske parents ke scope ke un variables ka access hota hai jinhe wo use kar raha hoo.

// Execution context wo jagah hai jaha aap ka JS ka code chalta hai. 2 main execution contexts hote hai Global Execution Context (Ye ek hi hoota hai.), Local Exection Context (Ye har function ka apna khud ka hota hai.).

// Scope aap ke execution context ke us jagah ko darsha te hai jaha pe us exection contex me banaye gaye variables ya function rakhe gaye hai.

// Closure -> Ek function aur us function ke parent scope ke un variables ka combination hai jinka wo function use kar raha hoo. Isme parent scope ke wo variable jinka use child function kar raha hoo wo destroy nahi hoote hain. Note: Lekin closure wale variables ka reference alag hota hai, yane wo parent wale variables nahi hai.

// debugger;

// var a = 10;
// var b = 20;

// function add() {
//   var result = a + b;
//   console.log(result);
// }

// add();

// Closure Example

debugger;

function initCounter() {
  let counter = 0;
  function increment(num) {
    counter += num;
    return counter;
  }
  function decrement() {
    counter--;
    return counter;
  }
  return { increment, decrement };
}

const { increment, decrement } = initCounter();

const c1 = increment(2);
const c2 = increment(2);
const c3 = decrement();

console.log("counter", c1, c2, c3);
