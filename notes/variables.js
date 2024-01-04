debugger;

// hoisting differences

// console.log(a);

// a = 10;

// console.log(a);

// var a = 15;

// console.log(a);

// let a = 20;

// console.log(a);

// const a = 25;

// scope differences

// {
//   a = 10;
// }

// var a = 20;

// {
//   var a = 10;
//   console.log(a);
// }

// console.log(a);

// let a = 20;

// {
//   let a = 10;
//   console.log(a);
// }

// console.log(a);

// let a = 20;

// {
//   const a = 10;
//   console.log(a);
// }

// console.log(a);

// var vs let vs const

// var a = 10;
// var a = 20;
// a = 20;
// console.log(a);

// let a = 10;
// let a = 20; // Not possible.
// a = 20;
// console.log(a);

// const a = 10;
// const a = 10; // Not possible.
// a = 20; // Not possible.
// console.log(a);

// Notes:

// automatic declaration

// a = 10;

// Hoisting nahi hooti. (Yane program execute hoo us se pehle variable ko memory me jagah nahi milti.)
// Global scope me window object me jagah milti hai.
// Koi block scope nahi hoota.
// Re-declaration kar sakte hoo.
// Re-initialization kar sakte hoo.

// var declaration

// var a = 10;

// Hoisting hooti hai aur initial value undefined hoti hai. (Yane program execute hoo us se pehle variable ko memory me jagah milti hai.)
// Global scope me window object me jagah milti hai.
// Koi block scope nahi hoota.
// Re-declaration kar sakte hoo.
// Re-initialization kar sakte hoo.
// Pehle sirf variable declare kar sakte hai baad use initialize kar sakte hai.

// let declaration

// let a = 10;

// Hoisting hooti hai lekin koi initial value nahi hooti. (Yane program execute hoo us se pehle variable ko memory me jagah milti hai.)
// Global scope me jagah milti hai, lekin window object ke andar nahi.
// Block scope hoota hai.
// Re-declaration nahi kar sakte hoo.
// Re-initialization kar sakte hoo.
// Pehle sirf variable declare kar sakte hai baad use initialize kar sakte hai.

// const declaration

// const a = 10;

// Hoisting hooti hai lekin koi initial value nahi hooti. (Yane program execute hoo us se pehle variable ko memory me jagah milti hai.)
// Global scope me jagah milti hai, lekin window object ke andar nahi.
// Block scope hoota hai.
// Re-declaration nahi kar sakte hoo.
// Re-initialization nahi kar sakte hoo.
// Aur jab variable declare karo tabhi use initialize karna padta hai.
