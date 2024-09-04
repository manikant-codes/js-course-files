// const student = {
//   name: "John Doe",
//   age: 20,
//   gender: "Male",
//   studentID: "S123456",
//   major: "Computer Science",
//   year: "Sophomore",
//   GPA: 3.8,
//   email: "johndoe@example.com",
//   phone: "123-456-7890",
//   address: "123 Main St, Anytown, USA",
// };

// for (const key in student) {
//   console.log(key, student[key]);
// }

// console.log(student.name);
// console.log(student["name"]);

// const key = "gender";
// console.log(student[key]);

let fruits = [
  "Apple",
  "Banana",
  "Cherry",
  "Date",
  "Elderberry",
  "Fig",
  "Grape",
  "Honeydew",
  "Indian Fig",
  "Jackfruit",
];

// console.log(fruits[3]);

// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

for (const value of fruits) {
  console.log(value);
}
