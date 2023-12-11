// The sort() method sorts an array alphabetically.
// By default, the sort() function sorts values as strings.
// This works well for strings ("Apple" comes before "Banana").
// However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".
// Because of this, the sort() method will produce incorrect result when sorting numbers.
// You can fix this by providing a compare function.

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.sort();

// Note it changes the original array.
// console.log(fruits);

// To sort in descending order.
// This too changes the original array.
// fruits.reverse();
// console.log(fruits);

const points = [40, 100, 1, 5, 25, 10];

// points.sort(function (a, b) {
//   return a - b;
// });

for (let i = points.length - 1; i > 0; i--) {
  let j = Math.floor(Math.random() * (i + 1));
  let k = points[i];
  points[i] = points[j];
  points[j] = k;
}
