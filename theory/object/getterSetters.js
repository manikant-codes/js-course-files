// getter ek method/function hai jo object ke bante waqt apne naam ki ek nayi property object me add kardeta hai, iski value jo aap us getter function se return kar rahe hoo wo hoo gi.

// Is getter ki banayi property ko directly nahi change kar sakte hai.

const student = {
  fname: "Ritu",
  lname: "Kumar",
  //   getFullName: function () {
  //     return this.fname + " " + this.lname;
  //   }
  get fullName() {
    return this.fname + " " + this.lname;
  }
};

student.fullName = "Kuch Aur";

console.log("student", student);

// console.log(student.getFullName());
console.log(student.fullName);
