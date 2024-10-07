// reduce bhi ek array funtion hai. Yane isi bhi kisi bhi array pe .reduce() likh ke call kar sakte hoo.
// reduce 2 arguments leta hai: 1. function, 2. function ko mile wale accumulator ki shuruaati value.
// App jo function doge use 4 arguments milenge: 1. accumulator, 2. value, 3. index, 4. array
// accumulator me pehli baar jo hamne initial value di hai wo hoogi aur uske baad ham hamare diye gaye function me se jo return karwarahe hai wo value hoogi.
// value me jis element pe function chal raha hoo wo element hota hai.
// index me jis element pe function chal raha hoo uska index hoota hai.
// array me jis array pe hamne reduce chalaya hoo wo pura array hoota hai.
// reduce bari bari jis array pe hamne reduce chalaya hai us array me se ek ek element access karega aur us element pe hamara diya gaya function chalaega.
// Is function ko value me wo element milega, index me us element ka index milega, array me pura array milega aur accumulator me pehli baar initial value milegi aur uske baad pichle baar is function ke chalne pe jo return karaya hoo wo milega.

// sabhi elements ki baari aajane pe last aapne jo bhi return kiya hai aapke diye gaye function me se wo appko reduce return karta hai.

const numbers = [5, 3, 9, 16, 4];

// let sum = 0;

// for (let i = 0; i < numbers.length; i++) {
//   sum = sum + numbers[i];
// }

// console.log("sum", sum);

// const numbers = [5, 3, 9, 16, 4];

const sum = numbers.reduce(function (sum, value, index, array) {
  return sum + value;
}, 0);

// const sumRight = numbers.reduceRight(function (sum, value, index, array) {
//   if (index > 2) {
//     return sum + value;
//   }
//   return sum;
// }, 0);

// const product = numbers.reduce(function (product, value, index, array) {
//   return product * value;
// }, 1);

// const frequency = numbers.reduce(function (frequency, value, index, array) {
//   if (frequency[value]) {
//     frequency[value]++;
//   } else {
//     frequency[value] = 1;
//   }
//   return frequency;
// }, {});

// console.log("sum", sum);
// console.log("sumRight", sumRight);
// console.log("product", product);
// console.log("frequency", frequency);

const fruits = ["Apple", "Mango", "Banana", "Papaya"];

console.log(Array.from(fruits.keys()));
console.log(Array.from(fruits.entries()));
