// getter ek method/function hai jo object ke bante waqt apne naam ki ek nayi property object me add kardeta hai, iski value jo aap us getter function se return kar rahe hoo wo hoo gi.

// getter function aap ko apne object me calculated property add karne deta hai.

// Is getter ki banayi property ko directly nahi change kar sakte hai.

const student = {
  fname: "Ritu",
  lname: "Kumar",
  // getFullName: function () {
  //   return this.fname + " " + this.lname;
  // },
  get fullName() {
    return this.fname + " " + this.lname;
  },
  set fullName(arg) {
    this.fname = arg.fname;
    this.lname = arg.lname;
  }
};

// console.log(student.fname + " " + student.lname);
// console.log(student.getFullName());
console.log(student);

// student.fullName = "Akshay Kumar";
student.fullName = { fname: "Akshay", lname: "Kumar" };

console.log(student.fullName);
