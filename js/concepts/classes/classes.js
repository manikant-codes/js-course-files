// function Student(name, rollNo, address, phone, math, sci, eng) {
//   this.name = name;
//   this.rollNo = rollNo;
//   this.address = address;
//   this.phone = phone;
//   this.math = math;
//   this.sci = sci;
//   this.eng = eng;
// }

// Student.prototype.getAvg = function () {
//   return (this.math + this.sci + this.eng)/3
// }

// Student.prototype.getPercentage = function() {
//   return (100 * (this.math + this.sci + this.eng)) / 150
// }

// const student1 = new Student("Manikant", 10, "Surat", "9876541230", 32, 21, 25);
// const student2 = new Student("Chintan", 10, "Surat", "9876541230", 34, 34, 34);

// console.log("student1", student1, student1.getAvg(), student1.getPercentage())
// console.log("student2", student2, student2.getAvg(), student1.getPercentage())

// class Student {
//   constructor(fname, lname, rollNo) {
//     this.fname = fname;
//     this.lname = lname;
//     this.rollNo = rollNo;
//   }

//   getFullName() {
//     return this.fname + " " + this.lname;
//   }
// }

// class Monitor extends Student {
//   constructor(fname, lname, rollNo, isHead) {
//     super(fname, lname, rollNo)
//     this.isHead = isHead;
//   }
//   eraseBoard() {
//     return "Board erased!";
//   }
//   collectHomework() {
//     return "Homework collected!";
//   }
// }

// const s1 = new Student("Manikant", "Jha", 10);
// const s2 = new Monitor("Chintan", "Vaghani", 11, true);

// console.log(s1, s2)




















