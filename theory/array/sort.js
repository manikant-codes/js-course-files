// const fruits = ["Date", "Apple", "Cherry", "Banana"];
// const arr = ["A", "b", "Z"];
// const arr = [2, 1, 5, 3, 4, 6, 8, 7, 9, 10];

// const cars = [
//   { type: "Volvo", year: 2016 },
//   { type: "Saab", year: 2001 },
//   { type: "BMW", year: 2010 },
// ];

// fruits.sort();
// fruits.reverse();
// console.log("fruits", fruits);

// arr.sort();
// console.log(arr);

arr.sort(function (a, b) {
  return a - b;
});
// console.log(arr);

// cars.sort(function (a, b) {
//   //   return a.year - b.year;
//   return b.year - a.year;
// });

// console.log(cars);

const numbers = [2, 1, 5, 3, 4, 6, 8, 7, 9, 10];

function mySort(arr) {
  for (let a = 0; a < arr.length; a++) {
    for (let b = a + 1; b < arr.length; b++) {
      if (arr[a] > arr[b]) {
        let temp = arr[a];
        arr[a] = arr[b];
        arr[b] = temp;
      }
    }
  }
}

mySort(numbers);

console.log(numbers);
