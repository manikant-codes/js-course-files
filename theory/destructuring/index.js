// const student = {
//   fname: "Ram",
//   lname: "Das",
//   roll: 10,
//   standard: 11,
//   city: "Surat"
// };

// const firstName = student.fname;
// const lname = student.lname;
// const roll = student.roll;
// const standard = student.standard;

// OR

// const { fname: firstName, lname, roll, standard, city } = student;

// Order doesn't matter.
// const { city, lname, standard, roll, fname } = student;

// No necessicity to destructure all propeties.
// const { city } = student;

// console.log(fname);
// console.log(lname);
// console.log(roll);
// console.log(standard);

// const student = ["Ram", "Das", 10, 11, "Surat"];

// console.log(student[0]);
// console.log(student[1]);
// console.log(student[2]);
// console.log(student[3]);
// console.log(student[4]);

// const fname = student[0];
// const lname = student[1];
// const roll = student[2];
// const standard = student[3];
// const city = student[4];

// OR

// const [fname, lname, roll, standard, city] = student;
// const {[0]:fname, [4]: city} = student;
// Skipping the previous elements
// const [, , , , city] = student;

// console.log(fname);
// console.log(lastName);
// console.log(roll);
// console.log(standard);
// console.log(city);
