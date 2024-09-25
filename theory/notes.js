// "use strict";

// Hoisting:
// JS ka code 2 parts me chalta hai, pehla part hota hai memory allocation ka aur dusra part hota hai code execution ka.
// Memeory allocation wale part me aap ne jo variables/functions banaye hai unhe memeory me jagah di jati hai (yane unka declaration kiya jata hai). Isi process ko hoisting kehte hai.
// Code-execution wale part me js line by line code chalata hai.

// Debugger Keyword:
// Iska use ham debugging ke liye karte hai. Debugging yane step by step code check karna aur usme se bug (problem) dhundh ke fix karna.

// == vs ===:
// == sirf values check karta hai.
// === values aur types dono check karta hai.
// Jaha tak ho sake === ka hi use karna hai kyu ke == type conversion karta hai.

// var vs let:
// var se bane variables ko global scope me window object me jagah milti hai agar function ke bahar bano to, function ke andar bano to unhe local/function scope me jagah milti hai.

// var se bane variables ki hositing hoti hai, aur hoisting ke waqt unki value undefined se initialize hoti hai.

// let se bane variable ko global scope me window object ke bahar jagah milti hai agar kisi function ya block ke bahar banao to. Block ke andar banate ho to unhe block scope me jagah milti hai, function ke andar banao to unhe local/function scope me jagh milti hai.

// let se bane variables ki bhi hoisting hoti hai lekin hoisiting ke samay unme koi value nahi hooti.
// Aur jab tak unme value nahi hai tabtak ham kahenge ke wo variable temporal dead zone me hai. Jab tak koi varaible temporal dead zone me hoo tabtak aap use access kar ke value nahi mang sakte.

// Temporal Dead Zone:
// Ye kisi let ya const se bane variable ka wo state hai jab usme koi value nahi hooti. To agar aap kisi variable ke temporal dead zone me hone pe use access karo ge to error milegi.

// Implicit Type Coersion:
// Yane automatic type conversion, (ye wo type conversions hote hai jo JS apne aap karta hai).
// E.g.: 2 + "2"
// E.g.: false ==

// NaN (Yane Not a Number):
// NaN ek special value hai jo JS aap ko tab deta hai jab aap kuch aisa karne ki koshish karo jiska output number naa aaye.
// E.g.: 2 * "apple"

// debugger;

// if (true) {
//   console.log(a);
//   var a = 10;
//   console.log(a);
// }

// if (true) {
//   let a = 10;
//   console.log(a);
// }

// (function () {
//   let a = 10;
//   console.log(a);
// })();

// pass-by-value vs pass-by-reference
// let num = 10;
// let obj = { num: 10 }; // 202

// function doSomething(arg) {
//   arg.num++;
//   console.log(arg);
// }

// doSomething(obj);
// console.log(obj);

// IIFE (Immediately Invoked Function Expression) / Self Invoking Function

// function add(a, b) {
//   return a + b;
// }

// console.log(add(2, 2));

// (function (a, b) {
//   console.log(a + b);
// })(2, 2);

// function add(a, a) {
//   console.log(a + a);
// }

// add(4, 2);

// let a = 10;
// delete a;
// console.log(a);

// Higher Order Function:
// Aise function jo dusre function argument me le ye ya fir andar se koi function return kare unhe Higher Order Function kehte hei.
// Higher Order Function logic common karne ke kaam me aate hai.
// array.map(), array.filter(), array.reduce(), etc ye sare Higher Order Functions ke example hai.

// Callback Function:
// Jo function Higher Order Function ko as an argument pass karte hai unhe callback function kehte hai.

// this:
// this ek keyword hai jisme us object ka reference hota hai jisne this wala code / this wala function chalaya hoo. Ais sirf normal function ke liye hota hai.

// Arrow function me apni this ki koi value nahi hoti hai, wo this ki value apne parent scope se lete hai.

// const student = {
//   name: "Ram",
//   getThis: function () {
//     const x = () => {
//       console.log(this);
//     };
//     x();
//   },
// };

// function add() {
//   console.log(this);
// }

// // window.add();
// student.getThis();

// Currying ek code likhne tarika hai hai jisme ek function andar se dusre functions ko return karte hoo.
// E.g.:

function add(a, b) {
  console.log(a + b);
}

add(2, 2);

function curriedAdd(a) {
  return function nestedFn(b) {
    console.log(a + b);
  };
}

curriedAdd(2)(4);
