// const obj = {
//   name: "ram",
//   roll: 10,
// };

// const map = new Map([
//   ["name", "ram"],
//   ["roll", 10],
// ]);

const obj = {};
obj.name = "ram";
obj.roll = 10;

const myObj = {};

const map = new Map();
map.set(myObj, "ram");
map.set("roll", 10);

console.log("obj", obj);
console.log("map", map);

console.log("type", map instanceof Array);
