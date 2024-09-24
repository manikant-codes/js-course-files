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

debugger;

// if (true) {
//   console.log(a);
//   var a = 10;
//   console.log(a);
// }

// if (true) {
//   let a = 10;
//   console.log(a);
// }

(function () {
  let a = 10;
  console.log(a);
})();
