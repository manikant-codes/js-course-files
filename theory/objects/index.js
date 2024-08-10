// let student = {
//   name: "Manikant",
//   roll: 10,
//   standard: 10,
//   division: "A",
// };

// let roll = 10;

// console.log("roll", roll);
// console.log("student", student.standard, student.roll, student.division);

const myObject = {
  name: "Manikant",
  roll: 20,
  div: "A",
  standard: 10,
  address: {
    city: "Surat",
    pin: 456123,
  },
};

// Addning new property
myObject.phone = 7894561230;
myObject["phoneNew"] = 7894561230;

// Deleting a property
delete myObject["my-city"];

// Dot-notation
// console.log(myObject.name);
// console.log(myObject.roll);

// Square-bracket
// const x = "name";
// console.log(myObject["name"] + " lives in surat.");
// console.log(myObject[x]);

// console.log(myObject.address.city);
// console.log(myObject["address"]["city"]);
