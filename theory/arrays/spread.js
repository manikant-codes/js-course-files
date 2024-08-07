const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "Dec"];

const q = [q1, q2, q3, q4];

// let wayOne = [];
// for (let i = 0; i < q.length; i++) {
//   for (let j = 0; j < q[i].length; j++) {
//     wayOne.push(q[i][j]);
//   }
// }
// console.log(wayOne);

// const wayTwo = q.flat();
// console.log(wayTwo);

// const wayThree = q1.concat(q2, q3, q4);
// console.log(wayThree);

const wayFour = [...q1, ...q2, ...q3, ...q4];
console.log(wayFour);
