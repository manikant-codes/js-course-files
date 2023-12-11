// find method ek function leta hai as an argument.
// ye function same 3 arguments leta hai, jo ise find method se milte hai aur har array element pe run hota hai.
// ye function jis bhi pehle element ke liye true return kare wo array element ko find method return karta hai.

const numbers = [4, 9, 16, 25, 29];

function myFunction(value, index, array) {
  return value > 18;
}

let first = numbers.find(myFunction);

console.log(first);
