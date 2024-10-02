// const student = { fname: "Ram", roll: 10, division: "A", standard: 10 };

// Destructuring object/array me se value nikal ke use uske khud ke variable me rakhne ka chota tarika hai.

// const fname = student.fname;
// const roll = student.roll;
// const division = student.division;
// const standard = student.standard;

// const { roll, fname: firstName, standard, division: div } = student;

// console.log(student.fname);
// console.log(student.roll);
// console.log(student.division);
// console.log(student.standard);

// console.log(firstName);
// console.log(roll);
// console.log(div);
// console.log(standard);

const arrStudent = ["Ram", 10, "A", 10];

// const name = arrStudent[0];
// const roll = arrStudent[1];
// const div = arrStudent[2];
// const std = arrStudent[3];

const { [0]: name, [3]: std } = arrStudent;

// console.log(arrStudent[0]);
// console.log(arrStudent[1]);
// console.log(arrStudent[2]);
// console.log(arrStudent[3]);

console.log(name);
console.log(roll);
console.log(div);
console.log(std);
