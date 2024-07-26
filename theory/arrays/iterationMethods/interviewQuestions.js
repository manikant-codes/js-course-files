const users = [
  { firstName: "john", lastName: "Biden", age: 26 },
  { firstName: "jimmy", lastName: "cob", age: 75 },
  { firstName: "sam", lastName: "lewis", age: 50 },
  { firstName: "Ronald", lastName: "Mathew", age: 26 },
];

// const fullNames = users.map(function (value, index, array) {
//   return value.firstName + " " + value.lastName;
// });

// console.log(fullNames);

// {
//     26: 2,
//     75: 1,
//     50: 1
// }

const frequencies = users.reduce(function (total, value, index, array) {
  if (total[value.age]) {
    total[value.age]++;
  } else {
    total[value.age] = 1;
  }
  return total;
}, {});

console.log(frequencies);
