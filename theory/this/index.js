// 1
// console.log("this", this);

// 2
// function consoleThis() {
//   console.log("this", this);
// }

// window.consoleThis();

// 3
// const obj = {
//   name: "Ram",
//   consoleThis: function () {
//     console.log("this", this);
//   },
// };

// obj.consoleThis();

// 4;
// const obj = {
//   name: "Ram",
//   consoleThis: () => {
//     console.log("this", this);
//   },
// };

// obj.consoleThis();

// 5
// const obj = {
//   name: "Ram",
//   consoleThis: function () {
//     const whatIsThis = () => {
//       console.log("this", this);
//     };
//     whatIsThis();
//   },
// };

// obj.consoleThis();

// this ek keyword hai. Thik var, let, function, for, etc. ke tarah.
// this me kisi object ka reference/address hota hai. (this me koi object hota hai.)
// Kis objct ka reference/address?
// Jis object ne this ka code chalaya hoo.
// Arrow function me this ki apni koi value nahi hoti hao, wo ek scope/level/curly-brackets upar jaa ke this ki value leta hai.
