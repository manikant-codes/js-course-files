// const student = {
//   name: "Ram",
//   roll: 10
// };

// student.city = "Surat";

// let key = [];

// const studentMap = new Map([
//   [key, "Ram"],
//   ["roll", 10]
// ]);

// studentMap.set("city", "Surat");

// console.log("objStudent", student.name);
// console.log("mapStudent", studentMap.get(key));

// console.log(studentMap.size);
// studentMap.delete("roll");
// studentMap.clear();
// console.log(studentMap.has("name"));

// studentMap.forEach(function (value, key, map) {
//   console.log("key", key);
//   console.log("value", value);
//   console.log(map);
// });

// console.log(Array.from(studentMap.keys()));
// console.log(Array.from(studentMap.values()));
// console.log(Array.from(studentMap.entries()));

const fruitsMap = new Map([
  ["apple", 200],
  ["mango", 300],
  ["kiwi", 350],
  ["banana", 50],
  ["papaya", 80],
  ["orange", 150]
]);

const result = Map.groupBy(fruitsMap, function (entry) {
  if (entry[1] > 300) {
    return "Very Expensive";
  }
  if (entry[1] > 150) {
    return "Expensive";
  }
  return "Budget";
});

console.log(result);
