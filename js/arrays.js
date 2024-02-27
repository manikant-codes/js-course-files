// const arr = [2, "hello", false, { msg: "hello" }, [1, 3, 5]];
// const obj = { name: 2, 1: 4, 2: 6, 3: 8 };
// const arr = [2];
// const arr2 = new Array(2);

// const arr = ["asd"];
// const arr2 = new Array("asd");

// console.log(arr, arr2);

// const arr2 = new Array(4);
// arr[3] = 4;
// arr[4] = 8;
// arr[0] = 100;

// console.log("arr", arr);
// console.log("obj", obj);

// console.log("arr", arr[0]);
// console.log("obj", obj[0]);

// for (let index = 0; index < arr.length; index++) {
//   console.log(arr[index]);
// }

// for (const value of arr) {
//   console.log(value);
// }

// console.log(arr[arr.length - 1]);

// let fruits = ["Banana", "Orange", "Apple", "Mango"];

// let arr = ["Banana", "Orange", "Apple", "Mango"];

function add(n1, n2) {
  return n1 + n2;
}

// const n3 = 10;

// const r1 = add(n3, 5);
// const r2 = add(8, 9);

// console.log("r1", r1);
// console.log("r2", r2);

let arr = [1, 2, 11, 3, 23, 5];

console.log("before sorting", arr);

arr.sort(function (a, b) {
  return b - a;
});

console.log("after sorting", arr);
