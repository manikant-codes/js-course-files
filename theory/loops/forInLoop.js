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

let n = 10;

let pattern = "";

// for (let row = 1; row <= n; row++) {
//   for (let col = 1; col <= n * 2 - 1; col++) {
//     if (row < n) {
//       if (col === n - (row - 1) || col === n + (row - 1)) {
//         pattern += "x";
//       } else {
//         pattern += " ";
//       }
//     } else {
//       if (col % 2 === 0) {
//         pattern += " ";
//       } else {
//         pattern += "x";
//       }
//     }
//   }
//   pattern += "\n";
// }

let center = Math.ceil(n / 2);

for (let row = 1; row <= n; row++) {
  if (n % 2 === 0 && row === n / 2) {
    continue;
  }
  for (let col = 1; col <= n; col++) {
    if (row <= center) {
      if (col === center - (row - 1) || col === center + (row - 1)) {
        pattern += "x";
      } else {
        pattern += "_";
      }
    } else {
      if (col === center - (n - row) || col === center + (n - row)) {
        pattern += "x";
      } else {
        pattern += "_";
      }
    }
  }
  pattern += "\n";
}

console.log(pattern);
