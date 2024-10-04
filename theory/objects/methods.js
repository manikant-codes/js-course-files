const student1 = {
  id: 12345,
  fisrtName: "John",
  lastName: "Doe",
  age: 20,
  gender: "Male",
  email: "john.doe@example.com",
  phone: "123-456-7890",
  address: "123 Main St, Anytown, USA",
  major: "Computer Science",
  gpa: 3.8,
  std: 10,
  enrolled: true,
  scholarship: "Merit-based",
  graduationYear: 2025,
  clubMembership: "Coding Club",
  getFullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

// const student2 = { ...student1 };

// console.log(Object.keys(student1));
// console.log(Object.values(student1));
// console.log(Object.entries(student1));
// console.log(Object.create(student1));
// console.log(Object.assign(student2, student1));
// console.log(student2);

// const entries = Object.entries(student1);
// const student2 = Object.fromEntries(entries);
// console.log(student2);

// const fruits = [
//   { name: "apples", quantity: 300 },
//   { name: "bananas", quantity: 500 },
//   { name: "oranges", quantity: 200 },
//   { name: "kiwi", quantity: 150 },
// ];

// const quantityWiseObj = Object.groupBy(fruits, (value) => {
//   if (value.quantity > 200) {
//     return "ok";
//   } else if (value.quantity === 200) {
//     return "about-to-be-low";
//   } else {
//     return "low";
//   }
// });

// console.log(quantityWiseObj);

const fruits = {
  apples: 300,
  bananas: 500,
  oranges: 200,
  kiwi: 150,
};

// fruits.mangoes = 150;
// fruits.bananas = 150;

// Object.defineProperty(fruits, "mangoes", { value: 100, writable: false });
Object.defineProperty(fruits, "citrus", {
  value: { lemon: 10, greenApple: 20 },
});

// fruits.mangoes = 200;
// fruits.apples = 100;
// console.log(fruits);
// console.log(fruits);

// delete fruits.citrus;

// console.log(fruits);

console.log(Object.getOwnPropertyDescriptor(fruits, "citrus"));
