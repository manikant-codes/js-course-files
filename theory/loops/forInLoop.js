// const list = document.getElementById("list");

// const student = {
//   name: "John Doe",
//   age: 21,
//   gender: "male",
//   major: "Computer Science",
//   studentId: "A123456",
//   courses: ["Math", "Physics", "Programming"],
//   hobbies: ["Reading", "Gaming", "Cooking"],
//   isInternational: false,
//   hasScholarship: true,
//   languages: ["English", "Spanish"],
//   birthdate: "1999-05-15",
//   enrollmentDate: "2022-09-01",
//   graduationDate: "2026-05-30",
//   clubs: ["Chess Club", "Coding Club"],
//   favoriteColor: "Blue",
// };

// const key = "name";

// console.log(student.name);
// console.log(student[key]);
// console.log(student["name"]);

// let html = "";

// for (let key in student) {
//   console.log(key, student[key]);
//   html += "<li>" + student[key] + "</li>";
// }

// list.innerHTML = html;

let n = 4;

let pattern = "";

for (let row = 1; row <= n; row++) {
  for (let col = 1; col <= n * 2 - 1; col++) {
    if (col === n - (row - 1) || col === n + (row - 1)) {
      pattern += "x";
    } else {
      pattern += "-";
    }
  }
  pattern += "\n";
}

console.log(pattern);
