// String sorting
// const fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];

// These will change the original array.
// fruits.sort(); // Ascending order [A - Z]
// fruits.sort().reverse(); // Descending order [Z - A]

// These won't change the original array.
// const ascending = fruits.toSorted(); // Ascending order [A - Z]
// const descending = fruits.toSorted().toReversed(); // Descending order [Z - A]

// Numeric sorting
// const points = [40, 100, 89, 5, 25, 10];

// points.sort(function (a, b) {
//   return a - b; // Will sort in ascending order.
// });

// points.sort(function (a, b) {
//   return b - a; // Will sort in descending order.
// });

// Object sorting
// const students = [
//   {
//     id: 1,
//     name: "John Doe",
//     age: 20,
//     grade: "Sophomore",
//   },
//   {
//     id: 2,
//     name: "Jane Smith",
//     age: 21,
//     grade: "Junior",
//   },
//   {
//     id: 3,
//     name: "Bob Johnson",
//     age: 19,
//     grade: "Freshman",
//   },
//   {
//     id: 4,
//     name: "Alice Brown",
//     age: 22,
//     grade: "Senior",
//   },
//   {
//     id: 5,
//     name: "Mike Davis",
//     age: 20,
//     grade: "Sophomore",
//   },
//   {
//     id: 6,
//     name: "Emily Taylor",
//     age: 21,
//     grade: "Junior",
//   },
//   {
//     id: 7,
//     name: "Sarah Lee",
//     age: 19,
//     grade: "Freshman",
//   },
//   {
//     id: 8,
//     name: "Kevin White",
//     age: 22,
//     grade: "Senior",
//   },
//   {
//     id: 9,
//     name: "Lisa Nguyen",
//     age: 20,
//     grade: "Sophomore",
//   },
//   {
//     id: 10,
//     name: "David Kim",
//     age: 21,
//     grade: "Junior",
//   },
// ];

// students.sort(function (a, b) {
//   return a.age - b.age; // Sort by age in ascending order. [E.g. 1 - 10]
// });

// students.sort(function (a, b) {
//   // Sort by name in ascending order. [A - Z]
//   if (a.name.toLowerCase() > b.name.toLowerCase()) {
//     return 1;
//   } else if (a.name.toLowerCase() < b.name.toLowerCase()) {
//     return -1;
//   } else {
//     return 0;
//   }
// });
