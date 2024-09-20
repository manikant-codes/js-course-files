const student1 = {
  name: "Ram",
  roll: 10,
  std: 10,
  div: "A",
  mathMarks: 50,
  engMarks: 56,
  gujMarks: 58,
  getAvg: function () {
    return (this.mathMarks + this.engMarks + this.gujMarks) / 3;
  },
};

const student2 = {
  name: "Aarav",
  roll: 11,
  std: 10,
  div: "A",
  mathMarks: 42,
  engMarks: 60,
  gujMarks: 99,
};

class Student {
  constructor(name, roll, mathMarks, engMarks, gujMarks) {
    this.name = name;
    this.roll = roll;
    // this.std = 11;
    // this.div = "A";
    this.mathMarks = mathMarks;
    this.engMarks = engMarks;
    this.gujMarks = gujMarks;
    // this.getAvg = function () {
    //   return ((this.mathMarks + this.engMarks + this.gujMarks) / 3).toFixed(2);
    // };
  }
  //   div = "A";
  //   std = 10;
  getAvg() {
    return ((this.mathMarks + this.engMarks + this.gujMarks) / 3).toFixed(2);
  }
}

Student.prototype.std = 10;
Student.prototype.div = "A";

const stud1 = new Student("Ram", 10, 46, 58, 78);
const stud2 = new Student("Aditi", 11, 56, 58, 45);

console.log(stud1);
console.log(stud2);
