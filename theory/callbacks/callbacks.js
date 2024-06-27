const one = [1, 2, 3, 4, 5];

// const two = [2, 4, 6, 8, 10];
// const three = [3, 6, 9, 12, 15];
// const elements = ["<p>3</p>", "<p>6</p>", "<p>9</p>", "<p>12</p>", "<p>15</p>"];

// const two = [];
// const three = [];
// const elements = [];

// for (let i = 0; i < one.length; i++) {
//   two.push(one[i] * 2);
// }

// for (let i = 0; i < one.length; i++) {
//   three.push(one[i] * 3);
// }

// for (let i = 0; i < one.length; i++) {
//   elements.push("<p>" + one[i] * 3 + "</p>");
// }

// console.log(two);
// console.log(three);
// console.log(elements);

// function myMap(array, fn) {
//   const newArray = [];

//   for (let i = 0; i < array.length; i++) {
//     const value = fn(array[i], i, array);
//     newArray.push(value);
//   }

//   return newArray;
// }

// const two = myMap(one, function (element, index, array) {
//   return element * 2;
// });

// const three = myMap(one, function (element, index, array) {
//   return element * 3;
// });

// const elements = myMap(one, function (element, index, array) {
//   return "<p>" + element * 3 + "</p>";
// });

Array.prototype.myMap = function (fn) {
  const newArray = [];

  for (let i = 0; i < this.length; i++) {
    const value = fn(this[i], i, this);
    newArray.push(value);
  }

  return newArray;
};

const two = one.myMap(function (element, index, array) {
  return element * 2;
});

const three = one.myMap(function (element, index, array) {
  return element * 3;
});

const elements = one.myMap(function (element, index, array) {
  return "<p>" + element * 3 + "</p>";
});

console.log(two);
console.log(three);
console.log(elements);
