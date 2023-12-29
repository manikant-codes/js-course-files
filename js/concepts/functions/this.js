// this ek keyword hai. Function ke andar this us object ko refer karta hai jisne us function ko call kiya hoo.
// Function ke bahar this (global object) window ko refer karta hai.
// Arrow function me this ki nomal function jaise binding nahi hooti. Yane arrow function me this us object ko nahi refer karega jisne us function ko call kiya hoo.
// Arrow function me this, uske parent scope me this jis object ko refer kar raha hai us object ko refer karega

var age = 10;
// var greeting = "Radhe Radhe!";

// function ageDisplay() {
//   console.log(this);
//   console.log(this.age);
// }

// const obj = {
//   age: 20,
//   ageDisplay: ageDisplay,
// };

// const objNew = {
//   greeting: "Ram Ram!",
//   sayGreeting: function () {
//     console.log(this);
//     console.log(this.greeting);

//     function sayGreetingAgain() {
//       console.log(this);
//       console.log(this.greeting);
//     }

//     sayGreetingAgain();
//   },
// };

// const objNew = {
//   greeting: "Ram Ram!",
//   sayGreeting: function () {
//     console.log(this);
//     console.log(this.greeting);

//     const sayGreetingAgain = () => {
//       console.log(this);
//       console.log(this.greeting);
//     };

//     sayGreetingAgain();
//   },
// };

// objNew.sayGreeting();

// var age = 10;

// const ageDisplay = () => {
//   console.log(this);
//   console.log(this.age);
// };

// ageDisplay();

// window.ageDisplay();
// obj.ageDisplay();
