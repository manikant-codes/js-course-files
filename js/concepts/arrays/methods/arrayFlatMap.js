// flatMap method map jaisa hi kaam karta hai lekin wo map karne ke baad naye array pe flat method call kardeta hai.
// Ye map aur flat method ala alag call kara ne se zada efficient hai.
// Lekin ye sirf 1 level deep hi flat karta hai.
// Ye method original array me koi changes nahi karta.

const myArr = [
  [1, 2],
  [3, 4],
  [5, 6],
];

// const newArr = myArr.flatMap((x) => {
//   let temp = [];
//   for (let i = 0; i < x.length; i++) {
//     temp.push(x[i] * 2);
//   }
//   return temp;
// });

const newArr = myArr.flatMap((x) => {
  let temp = [];
  for (let i = 0; i < x.length; i++) {
    temp.push(x[i] * 2);
  }
  return [temp];
});

console.log("newArr", newArr);
