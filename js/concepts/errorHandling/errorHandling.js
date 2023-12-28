// "use strict";
try {
  const num = 1;
  obj.forEach(function (o) {
    console.log(o);
  });
  if (num === 0) throw new Error("Can't divide by zero!");
  console.log(10 / num);
} catch (error) {
  console.log(error.name);
  console.log(error.message);
  alert("Something went wrong!");
} finally {
  alert("Thank you!");
}

// Arrow Function

// const add = function (a, b) {
//   return a + b;
// };

// const ans = add(4, 5);

// console.log("ans", ans);

// const multiply = a => a * 2;

// const ans2 = multiply(2, 2);

// console.log("ans2", ans2);

// x = 3.14;
// console.log(x);

// myFunction();

// function myFunction() {
//   // "use strict";
//   let y = 3.14;   // This will also cause an error because y is not declared
// }

// var a = 3.14;
// delete a;

// console.log(a);

// function a(p1, p2) {};
// a();
// delete window.a;
// debugger;
// console.log(a);
