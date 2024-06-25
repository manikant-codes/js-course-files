// const elements = ["<p>2</p>", "<p>4</p>", "<p>6</p>", "<p>8</p>", "<p>10</p>"];

// let elements = [];

// for (const element of one) {
//   elements.push("<p>" + element * 2 + "</p>");
// }

// console.log("elements", elements);

// const two = [2, 4, 6];
// const three = [3, 6, 9];

// let two = [];
// let three = [];
// let four = [];
// let five = [];

// for (let i = 0; i < 3; i++) {
//   two.push(one[i] * 2);
// }

// for (let i = 0; i < 3; i++) {
//   three.push(one[i] * 3);
// }

// for (let i = 0; i < 3; i++) {
//   four.push(one[i] * 4);
// }

// for (let i = 0; i < 3; i++) {
//   five.push(one[i] * 5);
// }

const one = [1, 2, 3, 4, 5];
const two = [2, 4, 6, 8, 10];

// function myMap(arr, fn) {
//   let newArray = [];

//   for (let element of arr) {
//     fn(element, newArray);
//   }

//   return newArray;
// }

// const elementsOne = myMap(one, (element, newArray) => {
//   newArray.push("<p>" + element + "</p>");
// });
// const elementsTwo = myMap(two, (element, newArray) => {
//   newArray.push("<p>" + element + "</p>");
// });

Array.prototype.myMap = function (fn) {
  let newArray = [];

  for (let i = 0; i < this.length; i++) {
    const transformedValue = fn(element, this.index, this);
    newArray.push(transformedValue);
  }

  return newArray;
};

console.log(
  "elementsOne",
  one.myMap((element, index, array) => {
    return "<p>" + element + "</p>";
  })
);
console.log(
  "elementsOne",
  two.myMap((element, index, array) => {
    return "<p>" + element + "</p>";
  })
);

one.map((element, index, array) => {});
// console.log("elementsTwo", elementsTwo);
