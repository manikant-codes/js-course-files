// sort() ek built in array method hai.
// sort() method array ko alphabetically (dictionary order, a-z A-Z 0 - 9)
// sort() method me alphabetically sort karne ka decision character codes ke upar se liya jaata hai.
// sort() method origianl array ko change karta hai.
// JS me functions firstclass citizens hai. Yane jaha value ya expression ka use karsakte hoo waha function ka bhi use kar sakte hoo.
// Jo function dusre function ko as an argument recieve kare use higher order function kehte hai.
// Aur jo function ko aap as an argument pass karo use callback function kehte hain.
// Jis function ka naam na hoo use anonymous function.

// Arrow Function
// Arrow function function ko banane kaa naya tarika hai jo ES15 (JS Version 2015 ) ke saath aya hai.
// Arrow function me nahi function keyword likhte hai aur anhi naam likhte hai.
// Agar anonymous function nahi bana rahe, yane ke function ko kisi naam se call karwana hoo ho arrow function ko variable me assign karoge (store karoge). Aur fir us variable ke naam se us function ko call karsako ge.
// () => {}, () ke aur {} ke bich me => lagate hoo.
// Agar ek hi parameter hoo to bina round brackets () ke likh sakte hoo;
// Agar function ki body me ek hi statement (line of code) hai aur use return karan hai, to bina curly brackets {} aur return keyword ke function body likh sakte hoo.
// E.g. const print = name => name;

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.sort();
// console.log(fruits);
// fruits.reverse();
// console.log(fruits);

// function add(a, b) {
//   return a + b;
// }

// add(4, 5);

// const pointsSorted = [1, 5, 10, 25, 40, 100];

// points.sort(function (a, b) {
//   return b - a;
// });

// points.sort(compare);

// const points = [100, 1, 5, 40, 25, 10];

// points.sort((a, b) => {
//   return b - a;
// });

// function compare(a, b) {
//   return a - b;
// }

// const mySort = (callbackFn, array) => {
//   for (let i = 0; i < array.length; i++) {
//     for (let j = i + 1; j < array.length; j++) {
//       const result = callbackFn(array[i], array[j]);
//       if (result > 0) {
//         const temp = array[i];
//         array[i] = array[j];
//         array[j] = temp;
//       }
//     }
//   }
// };

// mySort(compare, points);

// console.log(points);

// points.sort();

// console.log("points: ", points);

// console.log("points sorted: ", points);

// for (const p of points) {
//   console.log(`${p}: `, p.toString().charCodeAt(0));
// }

// points.sort(function (a, b) {
//   return a - b;
// });

// points.sort(function (a, b) {
//   return b - a;
// });

// points.sort(function () {
//   return 0.5 - Math.random();
// });

// for (let i = points.length - 1; i > 0; i--) {
//   let j = Math.floor(Math.random() * (i + 1));
//   let k = points[i];
//   points[i] = points[j];
//   points[j] = k;
// }

// function myArrayMax(arr) {
//   return Math.max.apply(null, arr);
// }

// function myArrayMin(arr) {
//   return Math.min.apply(null, arr);
// }

// const points = [5, 1, 100, 40, 25, 10];

const deck = [
  "2 of Spades",
  "3 of Spades",
  "4 of Spades",
  "5 of Spades",
  "6 of Spades",
  "7 of Spades",
  "8 of Spades",
  "9 of Spades",
  "10 of Spades",
  "Jack of Spades",
  "Queen of Spades",
  "King of Spades",
  "Ace of Spades",
  "2 of Hearts",
  "3 of Hearts",
  "4 of Hearts",
  "5 of Hearts",
  "6 of Hearts",
  "7 of Hearts",
  "8 of Hearts",
  "9 of Hearts",
  "10 of Hearts",
  "Jack of Hearts",
  "Queen of Hearts",
  "King of Hearts",
  "Ace of Hearts",
  "2 of Diamonds",
  "3 of Diamonds",
  "4 of Diamonds",
  "5 of Diamonds",
  "6 of Diamonds",
  "7 of Diamonds",
  "8 of Diamonds",
  "9 of Diamonds",
  "10 of Diamonds",
  "Jack of Diamonds",
  "Queen of Diamonds",
  "King of Diamonds",
  "Ace of Diamonds",
  "2 of Clubs",
  "3 of Clubs",
  "4 of Clubs",
  "5 of Clubs",
  "6 of Clubs",
  "7 of Clubs",
  "8 of Clubs",
  "9 of Clubs",
  "10 of Clubs",
  "Jack of Clubs",
  "Queen of Clubs",
  "King of Clubs",
  "Ace of Clubs",
];

// console.log("unshuffled: ", deck);

// points.sort((a, b) => {
//     return a - b;
// });

// points.sort((a, b) => {
//   return b - a;
// });

// const points = [5, 1, 100, 40, 25, 10];

// const points = [1, 10, 25, 100, 40, 5];

// console.log(points);

// points.sort((a, b) => {
//   return 0.5 - Math.random();
// });

// console.log("shuffled: ", points);

// const points = [40, 100, 1, 5, 25, 10];

// console.log("unshuffled", points);

// for (let i = points.length - 1; i > 0; i--) {
//   let j = Math.floor(Math.random() * (i + 1));
//   let k = points[i];
//   points[i] = points[j];
//   points[j] = k;
// }

// console.log("shuffled", points);

// const points = [40, 100, 1, 5, 25, 10];
// const temp = points;
// temp.sort((a, b) => {
//   return a - b;
// });

// console.log(points);

// console.log("Min: ", points[0]);
// console.log("Max: ", points[points.length - 1]);

// const min = Math.min.apply(null, points);
// const max = Math.max.apply(null, points);

// console.log("min", min);
// console.log("max", max);

// const cars = [
//   { type: "BMW", year: 2010 },
//   { type: "Volvo", year: 2016 },
//   { type: "Saab", year: 2001 },
// ];

// cars.sort((a, b) => {
//   if (a.type > b.type) {
//     return 1;
//   }
//   if (a.type < b.type) {
//     return -1;
//   }
//   return 0;
// });

// console.log(cars);

// const points = [40, 100, 1, 5, 25, 10];

// let min = points[0];
// let max = points[0];

// for (let i = 0; i < points.length; i++) {
//   if (points[i] < min) {
//     min = points[i];
//   }
//   if (points[i] > max) {
//     max = points[i];
//   }
// }

// console.log(min, max);

// function getMinMax(array) {
//   let min = array[0];
//   let max = array[0];

//   for (let i = 0; i < array.length; i++) {
//     if (array[i] < min) {
//       min = array[i];
//     }
//     if (array[i] > max) {
//       max = array[i];
//     }
//   }

//   // return { max: max, min: min };
//   return { max, min };
// }

// console.log(getMinMax(points));

// const points = [40, 100, 1, 5, 25, 10];

// for (let i = points.length - 1; i > 0; i--) {
//   let j = Math.floor(Math.random() * (i + 1));
//   let k = points[i];
//   points[i] = points[j];
//   points[j] = k;
// }

// while
// do...while
// for
// for...in
// for...of
