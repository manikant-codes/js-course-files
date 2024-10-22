debugger;

// Scope ek jagah hai jaha pe us execution context ke variables aur functions rakhe jaate hai  jaha code chal raha hoo. Is jagah (scope) pe se decide hota hai ke yaha rakhe variables ya functions kaha milenge kaha nahi.

// Scope-chaining ek process hai jisme child scope se parent scope ke variables ya functions access kiye jate hai.

// Hoisting ek process hai jime code chale us se pehle variables/functions ko memory me jagah mil jaati hai.

const a = 10;
const b = 20;

if (true) {
  const msg = "Correct";
}

function add() {
  const sum = a + b;
  console.log(sum);
}

add();
console.log("sum", sum);
