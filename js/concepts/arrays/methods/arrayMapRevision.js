// map bhi ek built in method hai.
// Ye bhi ek fn leta hai as an argument.
//

const table1 = [1, 2, 3, 4, 5];

// const table2 = table1.map((value, index, array) => {
//   return value * 2;
// });

Array.prototype.myMap = function (callbackFn) {
  const temp = [];
  for (let i = 0; i < this.length; i++) {
    const changedValue = callbackFn(this[i], i, this);
    temp.push(changedValue);
  }

  return temp;
};

// function myMap(callbackFn, array) {
//   const temp = [];
//   for (let i = 0; i < array.length; i++) {
//     const changedValue = callbackFn(array[i], i, array);
//     temp.push(changedValue);
//   }

//   return temp;
// }

// const table2 = myMap((value, index, array) => {
//   return 2 * value;
// }, table1);

const table2 = table1.myMap((value, index, array) => {
  return 2 * value;
});

// const table2 = table1.map((value, index, array) => {
//   return value * 2;
// });

console.log(table1, table2);
