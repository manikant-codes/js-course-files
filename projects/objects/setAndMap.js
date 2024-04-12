const arr = [1, 1, 2, 2, 3, 3];

// arr.forEach((value, index, arr) => {
//   console.log("val arr", value);
//   console.log("index arr", index);
// });

const set = new Set([1, 1, 2, 2, 3, 3]);

set.add(4);
set.add(5);
set.delete(4);
console.log("has 5", set.has(5));
// set.clear();

// set.forEach((value, index, set) => {
//   console.log("value", value);
//   console.log("index", index);
// });

console.log("arr", arr);

console.log("set", set);

console.log("set", Array.from(set.values()));
console.log("set", Array.from(set.keys()));
console.log("set", Array.from(set.entries()));
console.log("size", set.size);
