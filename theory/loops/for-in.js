const student = {
  id: 1,
  firstName: "Rahul",
  lastName: "Sharma",
  age: 20,
  gender: "Male",
  email: "rahul.sharma@example.com",
  phone: "+91-9876543210",
  address: {
    street: "123 Main St",
    city: "Surat",
    state: "Gujarat",
    postalCode: "395007",
    country: "India",
  },
  courses: ["Mathematics", "Physics", "Computer Science"],
  gpa: 3.8,
  isFullTime: true,
  graduationYear: 2025,
  hobbies: ["Reading", "Cricket", "Coding"],
  isActive: true,
};

// Dot notation
// console.log("firstName", student.firstName);
// console.log("lastName", student.lastName);

// Sqare-bracket notation
// console.log("firstName", student["firstName"]);
// console.log("lastName", student["lastName"]);

// let key = "firstName";
// console.log("firstName", student["firstName"]);
// console.log("firstName", student[key]);

// for (const key in student) {
// Student me se key leke aanae ko keh rahe hain.
//   console.log("key", key, student.key);
// Student me se key me jo hai wo leke aanae ko keh rahe hain.
//   console.log("key", key, student[key]);
// }
