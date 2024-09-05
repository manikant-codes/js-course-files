// Closure ek function hai jiske paas uske parents ke scope ke un variables ka access hota hai jinhe wo use kar raha hoo.

// Execution context wo jagah hai jaha aap ka JS ka code chalta hai. 2 main execution contexts hote hai Global Execution Context (Ye ek hi hoota hai.), Local Exection Context (Ye har function ka apna khud ka hota hai.).

// Scope aap ke execution context ke us jagah ko darsha te hai jaha pe us exection contex me banaye gaye variables ya function rakhe gaye hai.

debugger;

var a = 10;
var b = 20;

function add() {
  var result = a + b;
  console.log(result);
}

add();
