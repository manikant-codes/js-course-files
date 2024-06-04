// let student = {
//   fname: "Ritu",
//   lname: "Jha",
//   roll: 12,
//   hobbies: ["Reading", "Singing", "Drawing"],
//   address: {
//     city: "Surat",
//     pin: 394107
//   },
//   createdAt: new Date(),
//   math: 66,
//   physics: 77,
//   chemistry: 88,
//   getPercentage: function () {
//     const percentage =
//       ((this.chemistry + this.physics + this.math) * 100) / 300;
//     return percentage;
//   }
// };

// let value = "";

// value += "Fname: " + student.fname + "<br/>";
// value += "Lname: " + student.lname + "<br/>";
// value += "Roll: " + student.roll + "<br/>";
// value += "Hobbies: " + student.hobbies + "<br/>";
// value += "City: " + student.address.city + "<br/>";
// value += "Pin: " + student.address.pin + "<br/>";
// value += "CreatedAt: " + student.createdAt + "<br/>";
// value += "Math: " + student.math + "<br/>";
// value += "Physics: " + student.physics + "<br/>";
// value += "Chemistry: " + student.chemistry + "<br/>";

// console.log("Object.values()", Object.values(student));
// console.log("Object.keys()", Object.keys(student));
// console.log("Object.entries()", Object.entries(student));

// console.log("JSON.stringify(student)", JSON.stringify(student));

// document.getElementById("student").innerHTML = JSON.stringify(student);

const fan = {
  color: "White",
  company: "Cropton",
  price: 1500,
  maxSpeed: 5,
  minSpeed: 0,
  isOn: false,
  currentSpeed: 0,
  increseSpeed: function () {
    this.currentSpeed = this.currentSpeed + 1;
    console.log("Current speed: ", this.currentSpeed);
  },
  decreseSpeed: function () {
    this.currentSpeed = this.currentSpeed - 1;
    console.log("Current speed: ", this.currentSpeed);
  },
  switchOn: function () {
    this.isOn = true;
    console.log("Fan is on!");
  },
  switchOff: function () {
    this.isOn = false;
    console.log("Fan is off!");
  },
};

fan.switchOn();
fan.increseSpeed();
fan.increseSpeed();
fan.increseSpeed();
fan.increseSpeed();
fan.increseSpeed();
fan.decreseSpeed();
fan.switchOff();
