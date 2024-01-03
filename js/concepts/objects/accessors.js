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
//   get fullName() {
//     return this.fname + " " + this.lname;
//   },
//   set fullName(name) {
//     const arr = name.split(" ");
//     this.fname = arr[0];
//     this.lname = arr[1];
//   },
// };

// console.log(person);

function add(a, b) {
  console.log(a + b);
  add(4, 5);
}

add(4, 5);
