// ------------------------------
// Getters & Setters
// ------------------------------
// Getter aur setter methods ko call nahi karna padta hai.
// Aap unhe properties ke tarah use kar sakte hoo.

// const sidharth = {
//   fname: "Sidharth",
//   lname: "Malhotra",
//   getFullName: function () {
//     return this.fname + " " + this.lname;
//   },
// };

// const ranbir = {
//   fname: "Ranbir",
//   lname: "Kapoor",
//   // getter method
//   get fullName() {
//     return `${this.fname} ${this.lname}`;
//   },
//   set fullName(fullName) {
//     console.log("setter", fullName);
//     // Yaha ham setter method ke andar wapas setter method ko call kar rahe hain. Ye nahi karna hai.
//     // this.fullName = fullName;
//     const arrName = fullName.split(" ");
//     this.fname = arrName[0];
//     this.lname = arrName[1];
//   },
// };

// const fullNameSidharth = sidharth.getFullName();
// const fullNameRanbir = ranbir.fullName;

// console.log("sidharth", sidharth);
// console.log("fullNameSidharth", fullNameSidharth);
// console.log("ranbir", ranbir);
// console.log("fullNameRanbir", fullNameRanbir);

// ------------------------------
// Object.defineProperty
// ------------------------------
const obj = {};

Object.defineProperty(obj, "fname", {
  value: "Asd",
  writable: true,
});
Object.defineProperty(obj, "lname", { value: "Asd", writable: true });

Object.defineProperty(obj, "fullName", {
  get: function () {
    return this.fname + " " + this.lname;
  },
});

Object.defineProperty(obj, "setFullName", {
  set: function (fullName) {
    const arrName = fullName.split(" ");
    this.fname = arrName[0];
    this.lname = arrName[1];
  },
});
