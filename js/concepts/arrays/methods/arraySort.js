// sort() ek built in array method hai.
// sort() method array ko alphabetically (dictionary order, a-z A-Z 0 - 9)
// sort() method me alphabetically sort karne ka decision character codes ke upar se liya jaata hai.
// sort() method origianl array ko change karta hai.
// JS me functions firstclass citizens hai. Yane jaha value ya expression ka use karsakte hoo waha function ka bhi use kar sakte hoo.
// Jo function dusre function ko as an argument recieve kare use higher order function kehte hai.
// Aur jo function ko aap as an argument pass karo use callback function kehte hain.
// Jis function ka naam na hoo use anonymous function.

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

const points = [40, 100, 1, 5, 25, 10];

console.log(points);

function compare(a, b) {
  return a - b;
}

// points.sort(compare);

function mySort(callbackFn, array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i; j < array.length; j++) {
      const result = callbackFn(array[i], array[j]);
      if (result > 0) {
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }
}

mySort(compare, points);

console.log(points);

// points.sort();

// console.log("points: ", points);

// points.sort(function (a, b) {
//   return b - a;
// });

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
