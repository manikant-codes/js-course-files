// reduce method har array element pe hamne jo function use paas kiya hai wo run karta hai, aur pure array ko ek single value me reduce kar ke hame deta hai.

// reduce method left ro right kaam karta hai, agar right to left kaam karana hoo to uske liye reduceRight method hai.

// reduce method original array me koi changes nahi karta.

// reduce method do arguments leta hai ek to callback function, aur dusra callback function me jo accumulator hai uski initial value.

// reduce method hamare function ko 4 arguments pass karta hai:

// 1. accumulator: Isme pichle iteration (turn/round) ki value store hoti hai.
// 2. value: Is turn me jis element ka number aaya ho wo element ki value isme store hoti hai.
// 3. index: value me jo element store hua hai uska index.
// 4. array: Jis array pe hamne reduce method call kiya hoo wo array.

const numbers = [45, 4, 9, 16, 25];

function myFunction(accumulator, value, index, array) {
  return accumulator + value;
}

let sum = numbers.reduce(myFunction, 0);

console.log(sum);
