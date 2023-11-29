// Object is a datastructure.
// Datastructure = Data ko store karne ka tarika.
// Const se object banake uski properties change karsakte ho, kyu ke objects store by refrence hote hain.

// let name = "Manikant Jha";
// let rollNo = 4;
// let address = "Surat";
// let phone = "7896541230";

const astudent = {
  name: "Manikant Jha",
  math: 50,
  sci: 60,
  avg: function () {
    const math = 50;
    const sci = 60;
    console.log(math + sci / 2);
  },
};

astudent.avg();
// student.rollNo = 5;

// const rollNo = 4;
// rollNo = 5;

// console.log("student", student);
