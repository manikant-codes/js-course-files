debugger;

// var se bane variables ko Global scope me window object ke andar jagah milti hai.
// var se bane variables ki hoisting hooti hai. Hoisting yane code chalne se pehle variable ko memory me jagha milna.
// var se bane variables ki re-declaration aur re-assignment hoo sakti hai.

// console.log("a", a);
// var a; // Declartion
// a = 10; // Assignment
// console.log("a", a);

// var a; // Re-declaration
// a = 20; // Re-assignment

// var alert = 10;
// alert("Hi");

// let se bane variables ko Global scope me window ke andar jagah nahi milti hai. Inka apna script scope banta hai, jo Global scope ka hi part hai.
// let se bane variables ki bhi hoisting hooti hai. Lekin unme var ke tarah undefined nahi hoota hai. Is ka matlab hai ke assignment se pehle inki value access nahi karsakte hoo, kyu ke assignment se pehle koi value hi nahi hooti hai. Is value nahi hone ke state ko ham kahenge ke variable abhi temporal dead zone me hai.
// let se bane variables ki re-declaration nahi hoo sakti hai, re-assignment hoosakti hai.

// let a; // Declartion
// console.log("a", a);
// a = 10; // Assignment
// console.log("a", a);

// let a; // Re-declaration not possible.
// a = 20; // Re-assignment possible.

// const se bane variables ki declaration aur assignment saat me karni padti hai.
// const se bane variables ko bhi Global scope me window ke andar jagah nahi milti hai. Inka apna script scope banta hai, jo Global scope ka hi part hai.
// const se bane variables ki bhi hoisting hooti hai. Lekin unme var ke tarah undefined nahi hoota hai. Is ka matlab hai ke assignment se pehle inki value access nahi karsakte hoo, kyu ke assignment se pehle koi value hi nahi hooti hai. Is value nahi hone ke state ko ham kahenge ke variable abhi temporal dead zone me hai.
// const se bane variables re-declaration aur re-assignment dono hi nahi hoosakti hai.

const a = 10; // Declartion
console.log("a", a);

// const a; // Re-declaration not possible.
a = 20; // Re-assignment not possible.
