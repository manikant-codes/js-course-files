// const student10Name = "Manikant Jha";
// const student10RollNo = 10;
// const student10City = "Surat";
// const student10PhoneNumber = 7894561230;

// const student11Name = "Akshar Savani";
// const student11RollNo = 11;
// const student11City = "Surat";
// const student11PhoneNumber = 7894561231;

// const student10 = {
//   name: "Manikant",
//   rollNo: 10,
//   city: "Surat",
//   phoneNumber: 7894561230,
// };

// student10.pinCode = 398652;
// student10["favColor"] = "purple";

// console.log(student10); // Dot-notation
// console.log(student10["name"]); // Square brackets notation

// const studentNew = new Object();

// studentNew.name = "Akshar";
// studentNew.address = "Surat";
// console.log("studentNew", studentNew);

// const student = {};
// student.name = "Manikant";
// student.address = "Surat";

// console.log("student", student.name);
// console.log("student", student["name"]);

// console.log([24, 14].sort());

// let a = 10;

// let b = a;

// a = 20;

// console.log("a", a);
// console.log("b", b);

// const student = {
// fname: "Manikant",
// lname: "Jha",
// fullName: function () {
//   console.log(this.fname + " " + this.lname);
// },
// };

// student.fullName = function () {
//   console.log(this.fname + " " + this.lname);
// };

// function fullName(student) {
//   console.log(student.fname + " " + student.lname);
// }

// fullName(student);

// student.fullName();

// console.log(student.fname);
// console.log(student.lname);

// const student = {
//   name: "Manikant",
//   age: 27,
//   address: {
//     firstLine: "Abc def ghi",
//     secondLine: "456 123",
//     city: "Surat",
//     state: "Gujarat",
//     country: "India",
//   },
// };

// student.city = "Surat";

// delete student.age;

// const key = "name";

// console.log(student.name);
// console.log(student.first-name);
// console.log(student.first name);
// console.log(student[key]);

// console.log(student.address.city);

const fan = {
  name: "Bajaj Pygmy Mini Fan",
  color: "white",
  price: "1,099",
  company: "Bajaj",
  start: function () {
    console.log(this.name + " started!");
    return "started!";
  },
  stop: function () {
    console.log(this.name + " stopped!");
    return "stopped!";
  },
};

// for (const key in fan) {
//   console.log(fan[key]);
// }

// console.log(fan);

// const x = fan.start();
// const y = fan.stop();

// console.log("x", x);
// console.log("y", y);
