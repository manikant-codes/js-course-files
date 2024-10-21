debugger;

// console.log(add(2, 2));

// Function Declaration
// Isme code chalne se pehle function memory rakhdiya jata hai.
// Iska matlab hai ke declaration ki lines chale us se pehle aap function ko call karsakte hoo.

// function add(a, b) {
//   return a + b;
// }

// Function Assignment
// Isme code chalne se pehle function memory nahi rakha jata hai.
// Ye line jab chalegi tabhi function add variable me store hooga.
// Iska matlab hai ke declaration ki lines chale us se pehle aap function ko call nahi karsakte hoo.

const add = function (a, b) {
  console.log(a);
  console.log(b);
  return a + b;
};

// const multiply = (a, b) => {
//   return a * b;
// };

// const multiply = (a, b) => a * b;

// const multiply = (a) => a * b;

// console.log(add(2, 2));
// console.log(multiply(2, 2));

console.log(add(2, 6));
