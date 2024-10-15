const student = {
  name: "Jenny Doe",
  age: 6,
  standard: 3,
  division: "B",
  lastYearPercentage: 80,
  address: {
    city: "Surat",
    pin: 123456
  }
};

console.log(student.address.city);
console.log(student["address"]["city"]);
console.log(Object.entries(student));
console.log(JSON.stringify(student));

// for (const key in student) {
//   console.log(typeof key, key, student[key]);
// }
