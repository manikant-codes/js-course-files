debugger;

// Scope yane ek aisi jagah jiske andar jis context/jagah ke andar aap ka code chal raha hai uske variables/functions store kiye jate hai.

// console.log(a);
let a = 30;
let b = 20;

if (true) {
  if (true) {
    let a = 10;
  }
  let a = 10;
  let b = 20;
}

// function add(x) {
//   var result = x + b;
//   console.log(result);
// }

// add(a);
// add(5);
