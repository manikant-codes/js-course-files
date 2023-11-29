// // Object is a datastructure.
// // Datastructure = Data ko store karne ka tarika.
// // Const se object banake uski properties change karsakte ho, kyu ke objects store by refrence hote hain.

// // let name = "Manikant Jha";
// // let rollNo = 4;
// // let address = "Surat";
// // let phone = "7896541230";

var astudent = {
  name: {
    firstname: "Manikant",
    lastname: "Jha",
  },
  math: 50,
  sci: 60,
  avg: function () {
    console.log((this.math + this.sci) / 2);
  },
};

var bstudent = {
  name: {
    firstname: "Manikant",
    lastname: "Jha",
  },
  math: 50,
  sci: 50,
};

// // var a = 10;
// // var b = 20;
// // function hello() {
// //   console.log(a + b);
// // }
// // hello();
// astudent.avg();

// // student.math = 55;
// // student["math"] = 55;

// // console.log(student);

// const avg = bstudent.avg.bind(bstudent);
// avg();
