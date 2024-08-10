const student = {
  firstName: "Manikant",
  lastName: "Jha",
  math: 45,
  physics: 48,
  chemistry: 56,
  getFullName: function () {
    console.log(this.firstName + " " + this.lastName);
  },
  getPercentage: function () {
    const total = student.math + student.physics + student.chemistry;
    const percentage = (total * 100) / 300;
    console.log(percentage);
  },
};

console.log(student.getFullName());
console.log(student.getPercentage());
