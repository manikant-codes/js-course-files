const list = document.getElementById("info");

const student = {
  id: 1,
  firstName: "John",
  lastName: "Doe",
  age: 20,
  gender: "Male",
  grade: "A",
  email: "john.doe@example.com",
  phone: "123-456-7890",
  address: "123 Main St",
  city: "Anytown",
  state: "CA",
  zip: "12345",
  country: "USA",
  enrolled: true,
  gpa: 3.8,
};

let lis = "";

// console.log(student.id);
// console.log(student["id"]);
// const key = "id";
// console.log(student[key]);

for (const key in student) {
  //   console.log(key, student[key]);
  lis += `<li>${key}: ${student[key]}</li>`;
}

// html += `<li>id: ${student.id}</li>`;
// html += `<li>firstName: ${student.firstName}</li>`;
// html += `<li>lastName: ${student.lastName}</li>`;

list.innerHTML = lis;
