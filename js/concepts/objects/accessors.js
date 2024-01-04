// Getters aur setters ka use kar ke aap object accessors (computed properties) define kar sakte hoo.
// Ye computed properties compile time pe generate hoti hain.
// Aur inhe aap normal properties ke tarh access karsakte hoo.
// Agr setter method banarahe hoo to usme parameter define karna padega.
// Setter method sirf ek argument lesakta hai.

// const person = {
//   fname: "Sukhi",
//   lname: "Kaushal",
//   age: 35,
//   address: { city: "Mumbai", pincode: 456235 },
// getFullName: function () {
//   console.log(this.fname + " " + this.lname);
//   return this.fname + " " + this.lname;
// },
// setFullName: function (fname, lname) {
//   this.fname = fname;
//   this.lname = lname;
// },
// get fullName() {
//   console.log(this.fname + " " + this.lname);
//   return this.fname + " " + this.lname;
// },
// set fullName(name) {
//   this.fname = name.fname;
//   this.lname = name.lname;
// const arr = name.split(" ");
// this.fname = arr[0];
// this.lname = arr[1];
//   },
// };

// console.log(person);

// function add(a, b) {
//   console.log(a + b);
//   add(4, 5);
// }

// add(4, 5);

// person.getFullName();
// person.fullName;

// person.setFullName("Manikant", "Jha");
// person.getFullName();

// person.fullName;
// person.fullName = { fname: "Manikant", lname: "Jha" };
// person.fullName;

// counter

// const counter = {
//   count: 0,
//   get reset() {
//     this.count = 0;
//   },
//   get increment() {
//     this.count++;
//   },
//   get decrement() {
//     this.count--;
//   },
//   set incrementBy(value) {
//     this.count += value;
//   },
//   set decrementBy(value) {
//     this.count -= value;
//   },
// };
