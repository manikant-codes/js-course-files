const student = {
  fname: "Ritu",
  lname: "Kumar"
};

// student.city = "Surat";
// student.city = "Pune";

// Object.defineProperty(student, "state", { value: "Gujarat", writable: true });
// Object.defineProperty(student, "state", { value: "Maharastra" });
// student.state = "Maharastra";

// Object.defineProperty(student, "city", { value: "Surat", writable: true });
// Object.defineProperty(student, "state", { value: "Gujarat", writable: true });

Object.defineProperties(student, {
  city: { value: "Mumbai", configurable: true },
  state: { value: "Maharastra", writable: true, enumerable: true }
});

// for (const key in student) {
//   console.log(key, student[key]);
// }

console.log("student", Object.getOwnPropertyDescriptors(student));
