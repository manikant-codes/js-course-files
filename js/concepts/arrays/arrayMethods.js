// JS me functions first class citizens hain.
// Yane jaha bhi aap variables aur exrpessions ka use kar sakete hoo waha function use kar sakte hoo.
// Callback function wo function hai jo aap kisi aur function ko as an argument pass karte hoo.
// Jo function callback function ko as an argument recieve karta hai use Higher Order Function kahenge.
// Jis function ka naam naa hoo use anonymous function kehte hain.

// forEach ek built-in array method hai, matlab ke ye hame JavaScript me array (array object) ke saath milta hai.
// forEach method ek function leta hai as an argument (argument wo value hai jo ham function call karte waqt use dete hai e.g. add(4, 5), yaha 4 aur 5 arguments).
// Is (jo function hamne forEach method ko as an argument diya hai) function ko forEach method 3 arguments deta hai (value, index, array).
// value, array pe iterate karte waqt (loop chalate waqt) jisbhi element ki bari (વારો/turn/number) hoo wo hoga.
// index, us element ka index (array me position) hooga.
// array, jis array pe hamne forEach method call kiya hai wo array hoga.
// forEach method array ke har array element ke upar ek-ek kar ke (one by one) hamne jo function forEach ko diya hai wo execute (run/call) karta hai.
// forEach method undefined return karta hai.
// forEach ko jo function as an argument diya hai, usme se agar kuch return karate hoo, to forEach ko us se koi lena dena (matlab) nahi hai.

// map
// map bhi ek built-in array method hai.
// map bhi ek function leta hai as an argument.
// Us function ko wo 3 arguments deta hai: (value, index, array).
// value: map me bhi andar ek loop hi chalta hai (loop kispe chalta hai? Hamne jis array pe map call kiya hoo uspe.). To us loop me jis element ki bari (વારો/turn/number) hoo wo element value me store hota hai.
// index: Us value (element) ki array me index (position) .
// array: Jis array pe hamne mapmethod call kiya hoo wo.

// map method ko jo aapne function paas kiya hai as an argument use ek-ek kar ke har array element pe call karta hai.
// Agar us function me se kuch return karate hoo to map method use ek naye array me store karega warna undefined store karega.
// Lekin har array element keliye kuch na kuch naye array me store to karega.
// Aur jab sab elements pe loop chaljaye tab, map method wo naya array return kar dega.

// To map method kya karta hai?
// map method ek array ko transform (ek array pe kuch changes/process/calculation) karke ek naya array deta hai.
// map method original array ko nahi cahange karta hai.
// map method hame ek naya array deta hai.

// for...in => object
// for...(o)f => array

// for (let n of numbers) {
//   console.log(n);
// }

// forEach

// numbers.forEach(function (value, index, array) {
//   console.log(value);
// });

// function add(a, b) {
//   console.log(a + b);
// }

// add(1, 2);

// function myForEach(fun) {
//   for (let i = 0; i < this.length; i++) {
//     fun(this[i]);
//   }
// }

// Array.prototype.myForEach = function (fun) {
//   for (let i = 0; i < this.length; i++) {
//     fun(this[i]);
//   }
// };

// numbers.myForEach(function (n) {
//   console.log(n);
// });

// numbers.forEach(function (value, index, array) {
//   console.log(value);
// });

// numbers.forEach(function (value, index, array) {
//   (value * 2).toString(2);
// });

// const numbers = [45, 4, 9, 16, 25];

// function myMap(callback) {
//   const temp = [];
//   for (let i = 0; i < numbers.length; i++) {
//     const newElement = callback(numbers[i], i, numbers);
//     temp.push(newElement);
//   }
//   return temp;
// }

// const res = myMap(function (value, index, array) {
//   return (value * 2).toString(2);
// });

// const res = numbers.map(function (value, index, array) {
//   (value * 2).toString(2);
// });

// console.log(res, numbers);

// const numbers = [45, 4, 9, 16, 25];
// const oddEven = [];
// function myFunction() {}

// // numbers.forEach(myFunction);
// numbers.forEach(function (value, index, array) {
//   let result = value % 2 === 0 ? "even" : "odd";
//   oddEven.push(result);
// });

// console.log(oddEven, numbers);

// const result = numbers.map(function (value, index, array) {
//   let result = value % 2 === 0 ? "even" : "odd";
//   return result;
// });

// console.log(result, numbers);
