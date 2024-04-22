const arr = [1, 1, 2, 2, 3, 3];

// arr.forEach((value, index, arr) => {
//   console.log("val arr", value);
//   console.log("index arr", index);
// });

// const set = new Set([1, 1, 2, 2, 3, 3]);

// set.add(4);
// set.add(5);
// set.delete(4);
// console.log("has 5", set.has(4));
// set.clear();

// set.forEach((value, key, set) => {
//   console.log("value", value);
//   console.log("key", key);
// });

// console.log("arr", arr);

// console.log("set", set);

// console.log("set", Array.from(set.values()));
// console.log("set", Array.from(set.keys()));
// console.log("set", Array.from(set.entries()));
// console.log("size", set.size);

// MAP

// const set = new Set([1, 2, 2, 3]);
// console.log("set", set, "size", set.size);

function sayHi() {
  console.log("Hi!");
}

const person = {
  fname: "John",
  lname: "Doe",
};

const date = new Date();
const regex = /[a-zA-z]*]/g;

const map = new Map([
  ["key 1", true],
  [2, regex],
  [sayHi, date],
  [person, [1, 2, 3]],
  // [
  //   {
  //     fname: "John",
  //     lname: "Doe",
  //   },
  //   [1, 2, 3],
  // ],
  [true, "value 5"],
  [regex, "value 6"],
  [date, "value 7"],
]);

const obj = new Object({
  "key 1": sayHi,
  "key 2": true,
  3: "value 3",
  key4: regex,
  key5: date,
});

// map.set("kuchbhi", undefined);
// console.log("map", map, "size", map.size);
// console.log("obj", obj);
// console.log("map", map.clear());

// map.forEach((value, key, map) => {
//   console.log(map);
// });

console.log(Array.from(map.keys()));
console.log(Array.from(map.values()));
console.log(Array.from(map.entries()));
