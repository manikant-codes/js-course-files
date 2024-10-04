// map ek array method hai.
// Yane aap kisi bhi array pe .map() likh ke use call kar sakte hoo.
// map argument me ek function leta hai.
// map turn by turn array ke har element ko lega aur uspe aap ka diya hua function chalaega.
// Is funtion ko forEach 3 argument dega: value, index aur array.
// value me jis element ki baari ho wo milega.
// index me jis element ki baari ho uska index milega.
// array me jis array pe aapne map chalaya hoo wo array milega.
// Agar aap ke paas ek array hoo, aur us array ke har element ko access kar ke, uspe kuch kaam karke naya array chahiye hoo to aap map ka use kar sakte hoo.
// map array transformation ke kaam me aata hai.

// const ones = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const twos = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
// const threes = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30];

// const twos = [];
// const threes = [];
// const lis = [];

// for (let i = 0; i < ones.length; i++) {
//   //   twos.push(ones[i] * 2);
//   //   threes.push(ones[i] * 3);
//   //   lis.push("<li>" + ones[i] + "</li>");
//   //   lis.push(ones[i].toString());
//   //   lis.push(!!ones[i]);
// }
// // }

// console.log(lis);

const ones = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const twos = ones.map(function (value, index, array) {
  return value * 2;
});

const threes = ones.map(function (value, index, array) {
  return value * 3;
});

const lis = ones.map(function (value, index, array) {
  return "<li>" + value + "</li>";
});

console.log(twos);
console.log(threes);
console.log(lis);
