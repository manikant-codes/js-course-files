// object key:value pairs ka collection (group) hai.
// array values ka collection (group) hai.

// object ki keys string hoti hai, in keys ki value aap jo chahe wo (string value) rakh sakte hoo.
// array ki keys numric hooti hai, ye keys JS automatically generate kardeta hai. Ye keys 0 se start hooti hain.

const obj = {
  //  0: "Ram",
  name: "Ram",
  roll: 10,
  city: "Surat",
  address: { city: "Surat" },
  hobbile: ["singing", "painting", "dancing"],
  avg: function () {},
};

// console.log(obj.name);
// console.log(obj["name"]);
// console.log(obj[0]);

const arr = [
  "Ram",
  10,
  "Surat",
  true,
  false,
  10n,
  { name: "Ram" },
  ["singing", "painting", "dancing"],
  function () {
    console.log("Hi");
  },
];

// const temp = [];
// temp[0] = "Ram";
// temp[1] = 10;
// temp[2] = "Surat";

// arr["grade"] = 7.2;
// console.log(arr.grade)
arr[1] = 5;
console.log(arr.toString());
